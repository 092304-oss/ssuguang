(function () {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const Engine = window.SuguangCreatorEngine;
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get("id") || localStorage.getItem("suguangLastPublishedGameId") || "";
  const API_BASE = window.location.protocol === "file:" ? "http://127.0.0.1:4175" : "";
  const apiUrl = path => `${API_BASE}${path}`;
  let game = null;

  const els = {
    stage: $("#stage"),
    sceneBg: $("#sceneBg"),
    menuBtn: $("#menuBtn"),
    menuPopover: $("#menuPopover"),
    homeBtn: $("#homeBtn"),
    backBtn: $("#backBtn"),
    saveBtn: $("#saveBtn"),
    loadBtn: $("#loadBtn"),
    restartBtn: $("#restartBtn"),
    startBtn: $("#startBtn"),
    continueBtn: $("#continueBtn"),
    titleScreen: $("#titleScreen"),
    emptyState: $("#emptyState"),
    gameTitle: $("#gameTitle"),
    gameDesc: $("#gameDesc"),
    gameTags: $("#gameTags"),
    gameMeta: $("#gameMeta"),
    progressPill: $("#progressPill"),
    speakerName: $("#speakerName"),
    nodeCount: $("#nodeCount"),
    dialogueText: $("#dialogueText"),
    continueHint: $("#continueHint"),
    choiceDock: $("#choiceDock"),
    mediaTopline: $("#mediaTopline"),
    mediaBody: $("#mediaBody"),
    toast: $("#toast"),
  };

  const state = {
    started: false,
    currentIndex: 0,
    history: [],
    saveKey: game ? `suguangPlayerSave:${game.id}` : "",
    nodeMap: new Map(),
    sceneBgCache: new Map(),
    sceneBgToken: 0,
  };

  async function loadGame() {
    if (!Engine || !gameId) return null;
    const localGame = Engine.getPublishedGame(localStorage, gameId);
    if (localGame) return localGame;
    try {
      const response = await fetch(apiUrl(`/api/game?id=${encodeURIComponent(gameId)}`), { cache: "no-store" });
      if (!response.ok) return null;
      const payload = await response.json();
      if (!payload.ok || !payload.game) return null;
      Engine.savePublishedGame(localStorage, payload.game);
      return payload.game;
    } catch (error) {
      return null;
    }
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("is-visible");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => els.toast.classList.remove("is-visible"), 1800);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatDate(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("zh-CN", { year: "numeric", month: "short", day: "numeric" });
  }

  function updateMenuState() {
    els.menuPopover.classList.remove("is-open");
    els.menuBtn.setAttribute("aria-expanded", "false");
  }

  function openMenu(force) {
    const open = typeof force === "boolean" ? force : !els.menuPopover.classList.contains("is-open");
    els.menuPopover.classList.toggle("is-open", open);
    els.menuBtn.setAttribute("aria-expanded", String(open));
  }

  function getNodeById(id) {
    const index = state.nodeMap.get(String(id));
    return typeof index === "number" ? game.nodes[index] : null;
  }

  function getCurrentNode() {
    return game?.nodes?.[state.currentIndex] || null;
  }

  function loadSave() {
    if (!state.saveKey) return null;
    try {
      return JSON.parse(localStorage.getItem(state.saveKey) || "null");
    } catch (error) {
      return null;
    }
  }

  function saveProgress() {
    if (!state.saveKey || !game) return;
    const payload = {
      gameId: game.id,
      currentIndex: state.currentIndex,
      history: state.history,
      started: state.started,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(state.saveKey, JSON.stringify(payload));
  }

  function resolveSavedIndex(save) {
    if (!save) return 0;
    if (typeof save.currentIndex === "number" && game.nodes[save.currentIndex]) return save.currentIndex;
    if (save.nodeId) {
      const index = state.nodeMap.get(String(save.nodeId));
      if (typeof index === "number") return index;
    }
    return 0;
  }

  function setTitleVisible(visible) {
    els.titleScreen.classList.toggle("is-visible", visible);
    els.titleScreen.hidden = false;
  }

  function updateProgress(node) {
    const total = game.nodes.length;
    const current = state.currentIndex + 1;
    els.progressPill.textContent = `${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    els.nodeCount.textContent = `${String(current).padStart(2, "0")}`;
    els.mediaTopline.textContent = node?.bgName || "00:00";
  }

  function renderChoices(node) {
    if (!node?.branches?.length) {
      els.choiceDock.innerHTML = "";
      return;
    }
    els.choiceDock.innerHTML = node.branches.map(branch => `
      <button class="choice-btn" type="button" data-target="${escapeHtml(branch.to)}">
        <span class="choice-label">${escapeHtml(branch.label || "A")}</span>
        ${escapeHtml(branch.text || "继续")}
      </button>
    `).join("");
  }

  function extractBackgroundUrl(value) {
    const match = String(value || "").match(/url\((["']?)(.*?)\1\)/);
    return match ? match[2] : "";
  }

  function applySceneBackground(background) {
    const nextBackground = background || els.sceneBg.style.background;
    if (!nextBackground) return;

    const imageUrl = extractBackgroundUrl(nextBackground);
    const token = state.sceneBgToken + 1;
    state.sceneBgToken = token;

    if (!imageUrl || state.sceneBgCache.get(imageUrl) === true) {
      els.sceneBg.style.background = nextBackground;
      return;
    }

    const image = new Image();
    image.onload = () => {
      state.sceneBgCache.set(imageUrl, true);
      if (state.sceneBgToken === token) {
        els.sceneBg.style.background = nextBackground;
      }
    };
    image.onerror = () => {
      state.sceneBgCache.set(imageUrl, false);
      if (state.sceneBgToken === token && !els.sceneBg.style.background) {
        els.sceneBg.style.background = nextBackground;
      }
    };
    image.src = imageUrl;
  }

  function renderNode() {
    const node = getCurrentNode();
    if (!node) return;
    applySceneBackground(node.bg);
    els.castPortrait.classList.toggle("is-image", Boolean(node.castImage));
    if (node.castImage) {
      els.castPortrait.style.background = `url("${node.castImage}") center top/cover no-repeat, linear-gradient(180deg, rgba(157,198,255,0.34), rgba(6,11,28,0.95))`;
    } else {
      els.castPortrait.style.background = '';
    }
    els.speakerName.textContent = node.speaker || "旁白";
    els.dialogueText.textContent = node.text || "……";
    els.mediaBody.textContent = node.bgName ? `背景 · ${node.bgName}` : "背景未设置";
    els.castName.textContent = node.castAssetName || node.speaker || "旁白";
    els.castPrompt.textContent = node.castImage ? "发布时已绑定真实立绘" : "等待角色出场";
    updateProgress(node);
    renderChoices(node);
    const hasChoices = Boolean(node.branches && node.branches.length);
    const isLast = state.currentIndex >= game.nodes.length - 1;
    els.continueHint.textContent = hasChoices ? "请选择一个分支" : isLast ? "已到结尾" : "点击屏幕继续";
    if (state.started) saveProgress();
  }

  function gotoIndex(index, options = {}) {
    const nextIndex = Math.max(0, Math.min(index, game.nodes.length - 1));
    if (!options.skipHistory && state.currentIndex !== nextIndex) {
      state.history.push(state.currentIndex);
    }
    state.currentIndex = nextIndex;
    state.started = true;
    setTitleVisible(false);
    renderNode();
  }

  function startGame(fromSave = false) {
    state.started = true;
    if (fromSave) {
      const save = loadSave();
      if (save) {
        state.history = Array.isArray(save.history) ? save.history.slice() : [];
        gotoIndex(resolveSavedIndex(save), { skipHistory: true });
        showToast("已继续上次进度。");
        return;
      }
    }
    state.history = [];
    gotoIndex(state.nodeMap.get(game.startNodeId) ?? 0, { skipHistory: true });
  }

  function returnToTitle() {
    state.started = false;
    setTitleVisible(true);
    updateMenuState();
    saveProgress();
  }

  function stepBack() {
    if (!state.history.length) {
      showToast("已经回到开头了。");
      return;
    }
    const previous = state.history.pop();
    state.currentIndex = previous;
    state.started = true;
    setTitleVisible(false);
    renderNode();
  }

  function restartGame() {
    state.history = [];
    gotoIndex(0, { skipHistory: true });
    showToast("已重新开始。");
  }

  function advance() {
    const node = getCurrentNode();
    if (!node) return;
    if (node.branches && node.branches.length) {
      showToast("请先选择一个分支。");
      return;
    }
    if (state.currentIndex >= game.nodes.length - 1) {
      showToast("已经到结尾了。");
      return;
    }
    gotoIndex(state.currentIndex + 1);
  }

  function chooseBranch(targetId) {
    const target = getNodeById(targetId) || game.nodes[state.currentIndex + 1] || game.nodes[state.currentIndex];
    if (!target) return;
    state.history.push(state.currentIndex);
    state.currentIndex = state.nodeMap.get(target.id) ?? state.currentIndex;
    state.started = true;
    setTitleVisible(false);
    renderNode();
  }

  function bindEvents() {
    els.menuBtn.addEventListener("click", () => openMenu());
    document.addEventListener("click", event => {
      if (!event.target.closest(".player-menu")) updateMenuState();
    });

    els.homeBtn.addEventListener("click", returnToTitle);
    els.backBtn.addEventListener("click", stepBack);
    els.saveBtn.addEventListener("click", () => {
      saveProgress();
      showToast("进度已保存。");
    });
    els.loadBtn.addEventListener("click", () => {
      const save = loadSave();
      if (!save) {
        showToast("暂无可读取的进度。");
        return;
      }
      state.history = Array.isArray(save.history) ? save.history.slice() : [];
      state.started = true;
      gotoIndex(resolveSavedIndex(save), { skipHistory: true });
      showToast("已读取进度。");
    });
    els.restartBtn.addEventListener("click", restartGame);

    els.startBtn.addEventListener("click", () => startGame(false));
    els.continueBtn.addEventListener("click", () => {
      const save = loadSave();
      if (save) startGame(true);
      else startGame(false);
    });

    els.choiceDock.addEventListener("click", event => {
      const button = event.target.closest(".choice-btn");
      if (!button) return;
      chooseBranch(button.dataset.target);
    });

    els.stage.addEventListener("click", event => {
      if (event.target.closest("button, a")) return;
      if (!state.started) {
        startGame(Boolean(loadSave()));
        return;
      }
      advance();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        updateMenuState();
        return;
      }
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (!state.started) {
          startGame(Boolean(loadSave()));
          return;
        }
        advance();
      }
      if (event.key === "ArrowLeft") {
        stepBack();
      }
    });
  }

  function initEmptyState() {
    els.titleScreen.classList.remove("is-visible");
    els.emptyState.hidden = false;
    els.emptyState.classList.add("is-visible");
    $("#speakerName").textContent = "未找到";
    $("#dialogueText").textContent = "请先在创作页发布作品。";
    $("#continueHint").textContent = "返回广场或去创作页";
    els.choiceDock.innerHTML = "";
  }

  function initGame() {
    if (!game || !Array.isArray(game.nodes) || !game.nodes.length) {
      initEmptyState();
      return;
    }

    state.nodeMap = new Map(game.nodes.map((node, index) => [String(node.id), index]));
    els.gameTitle.textContent = game.title || "未命名作品";
    els.gameDesc.textContent = game.description || "这是一部由溯光本地发布的互动作品。";
    els.gameTags.innerHTML = (game.tags || []).map(tag => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join("");
    els.gameMeta.textContent = `共 ${game.nodes.length} 个节点 · ${game.characters?.length || 0} 位角色 · ${formatDate(game.createdAt) || "本地发布"}`;

    const firstNode = game.nodes[0];
    applySceneBackground(firstNode.bg);
    els.mediaTopline.textContent = firstNode.bgName || "00:00";
    els.mediaBody.textContent = `首节点 · ${firstNode.bgName || "场景"}`;
    els.progressPill.textContent = `01 / ${String(game.nodes.length).padStart(2, "0")}`;
    els.nodeCount.textContent = "01";
    els.continueBtn.disabled = !loadSave();

    const save = loadSave();
    if (save && save.gameId === game.id) {
      els.continueBtn.disabled = false;
    }

    bindEvents();
    renderNode();
  }

  async function bootstrap() {
    if (!Engine) {
      initEmptyState();
      showToast("播放器引擎未加载。");
      return;
    }
    game = await loadGame();
    state.saveKey = game ? `suguangPlayerSave:${game.id}` : "";
    if (!game || !Array.isArray(game.nodes) || !game.nodes.length) {
      initEmptyState();
      return;
    }
    initGame();
  }

  bootstrap();
})();
