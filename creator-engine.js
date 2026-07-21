(function (root, factory) {
  const engine = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = engine;
  }
  root.SuguangCreatorEngine = engine;
})(typeof globalThis !== "undefined" ? globalThis : window, function () {
  const STORAGE_KEY = "suguangPublishedGames";

  function pad(value, size = 2) {
    return String(value).padStart(size, "0");
  }

  function sanitizeText(value) {
    return String(value == null ? "" : value).replace(/\r\n?/g, "\n").trim();
  }

  function safeJsonParse(value, fallback) {
    if (!value) return fallback;
    try {
      return JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function getStorage(storage) {
    if (storage) return storage;
    if (typeof localStorage !== "undefined") return localStorage;
    return null;
  }

  function hashText(value) {
    let hash = 0;
    const text = sanitizeText(value);
    for (let index = 0; index < text.length; index += 1) {
      hash = (hash * 31 + text.charCodeAt(index)) | 0;
    }
    return Math.abs(hash);
  }

  function toneFromText(value) {
    const hue = hashText(value) % 360;
    return {
      hue,
      color: `hsl(${hue} 72% 68%)`,
      wash: `hsla(${hue}, 70%, 60%, 0.16)`,
      glow: `hsla(${hue}, 88%, 72%, 0.24)`,
    };
  }

  const DEFAULT_CREDIT_BALANCE = 120;
  const BACKGROUND_CREDIT_COST = 8;
  const CHARACTER_CREDIT_COST = 12;
  const CREDIT_PRICE_CNY = 0.1;

  function normalizeLookupKey(value) {
    return sanitizeText(value)
      .toLowerCase()
      .replace(/[【】\[\]（）()]/g, "")
      .replace(/[：:·,.，。！？!?\s_-]+/g, "")
      .replace(/^场景/, "")
      .replace(/^scene/, "")
      .replace(/^chapter/, "")
      .replace(/^章/, "")
      .replace(/^幕/, "");
  }

  function inferSceneTheme(title) {
    const text = sanitizeText(title);
    if (/天台|楼顶/.test(text)) {
      return {
        bgName: "楼顶",
        bg: "radial-gradient(circle at 42% 8%, rgba(157,198,255,0.18), transparent 34%), linear-gradient(135deg, #161c24, #0a1018 74%)",
      };
    }
    if (/教室|课堂|学校/.test(text)) {
      return {
        bgName: "教室",
        bg: "radial-gradient(circle at 24% 16%, rgba(244,215,154,0.16), transparent 30%), linear-gradient(135deg, #1a2030, #0a1018 78%)",
      };
    }
    if (/楼梯|走廊| corridor/i.test(text)) {
      return {
        bgName: "走廊",
        bg: "radial-gradient(circle at 18% 22%, rgba(157,198,255,0.14), transparent 28%), linear-gradient(135deg, #121a2d, #07101b 76%)",
      };
    }
    if (/运动会|操场|跑道|体育|track/i.test(text)) {
      return {
        bgName: "操场",
        bg: "radial-gradient(circle at 22% 16%, rgba(244,215,154,0.16), transparent 28%), linear-gradient(135deg, #112230, #07111b 78%)",
      };
    }
    if (/医院|诊室|诊所|clinic/i.test(text)) {
      return {
        bgName: "诊室",
        bg: "radial-gradient(circle at 24% 18%, rgba(188,224,255,0.18), transparent 30%), linear-gradient(135deg, #14223a, #071019 78%)",
      };
    }
    if (/雨|夜|公寓|房间|卧室|home/i.test(text)) {
      return {
        bgName: "雨夜公寓",
        bg: "radial-gradient(circle at 32% 12%, rgba(157,198,255,0.22), transparent 34%), linear-gradient(135deg, #101c40, #060b1c 72%)",
      };
    }
    return {
      bgName: text || "场景",
      bg: "radial-gradient(circle at 30% 15%, rgba(157,198,255,0.16), transparent 32%), linear-gradient(135deg, #121a2e, #070d1b 76%)",
    };
  }

  function describeSceneMood(scene) {
    const text = sanitizeText([scene?.sceneTitle, scene?.name, scene?.bgName, scene?.text].join(" "));
    if (/雨|夜|暗|秘密|电话|失踪|追问/.test(text)) return "悬疑感、克制、压迫";
    if (/操场|运动会|跑道|阳光|追逐|笑/.test(text)) return "明亮、心动、青春";
    if (/教室|课桌|作业|晚自习|走廊/.test(text)) return "校园、安静、细节感";
    if (/医院|诊所|药|病/.test(text)) return "克制、柔软、隐痛";
    return "电影感、现代、女性向";
  }

  function makeBackgroundPrompt(scene) {
    const title = sanitizeText(scene?.sceneTitle || scene?.name || scene?.bgName || "场景");
    const background = sanitizeText(scene?.bgName || "背景");
    return `现代中国女性向视觉小说背景，${title}，${background}，cinematic composition, subtle atmosphere, realistic lighting, no text, no watermark, 16:9.`;
  }

  function makeCharacterPrompt(name, scenes) {
    const sampleScene = scenes.find(scene => sanitizeText(scene.speaker) === sanitizeText(name)) || scenes[0];
    return `现代中国女性向视觉小说角色立绘，${name}，半身像，神态${describeSceneMood(sampleScene)}，干净背景，真实电影感，服装协调高中/都市日常风，无文字，无水印。`;
  }

  function isHeadingLine(line) {
    const value = sanitizeText(line);
    const patterns = [
      /^【\s*(?:场景|章节|第[一二三四五六七八九十0-9]+[章节幕])?\s*[:：]?\s*([^】]{1,60})\s*】$/,
      /^(?:第[一二三四五六七八九十0-9]+[章节幕]|场景\s*[一二三四五六七八九十0-9]*|Scene\s*\d+|Chapter\s*\d+)\s*[:：\-—]\s*(.+)$/i,
      /^(?:场景|章节|第[一二三四五六七八九十0-9]+[章节幕])\s+(.+)$/,
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match) {
        return sanitizeText(match[1] || match[0]);
      }
    }
    return null;
  }

  function isChoiceHeader(line) {
    return /^(?:选择|选项|分支)\s*[：:]?\s*$/.test(sanitizeText(line));
  }

  function parseChoiceLine(line) {
    const value = sanitizeText(line);
    const match = value.match(/^([A-Da-d1-4①②③④])[\.\、）\)]\s*(.+)$/);
    if (!match) return null;
    const raw = sanitizeText(match[2]);
    const arrowMatch = raw.match(/^(.*?)(?:\s*(?:->|=>|→|跳转到|跳到|转到)\s*(.+))$/);
    const label = match[1].toUpperCase().replace("①", "A").replace("②", "B").replace("③", "C").replace("④", "D");
    if (arrowMatch) {
      return {
        label,
        text: sanitizeText(arrowMatch[1]),
        to: sanitizeText(arrowMatch[2]),
      };
    }
    return {
      label,
      text: raw,
      to: "",
    };
  }

  function splitParagraphs(text) {
    const normalized = sanitizeText(text);
    if (!normalized) return [];
    return normalized
      .split(/\n{2,}/)
      .flatMap(block => block.split(/\n+/))
      .map(line => sanitizeText(line))
      .filter(Boolean);
  }

  function detectSpeaker(line) {
    const value = sanitizeText(line);
    const match = value.match(/^([^\s：:]{1,16})\s*[：:]\s*(.+)$/);
    if (!match) return null;
    const speaker = sanitizeText(match[1]);
    if (/^选择|^选项|^分支|^第[一二三四五六七八九十0-9]+[章节幕]/.test(speaker)) return null;
    return {
      speaker,
      text: sanitizeText(match[2].replace(/^「|^“|^"/, "").replace(/」$|”$|"$/, "")),
    };
  }

  function resolveSceneName(sceneTitle, indexWithinScene) {
    const cleanTitle = sanitizeText(sceneTitle) || "场景";
    return indexWithinScene === 1 ? cleanTitle : `${cleanTitle} · ${pad(indexWithinScene)}`;
  }

  function parseScriptToScenes(input) {
    const lines = splitParagraphs(input);
    const nodes = [];
    const sceneCountByTitle = new Map();
    let currentSceneTitle = "序章";
    let currentTheme = inferSceneTheme(currentSceneTitle);
    let currentSceneNodeCount = 0;
    let pendingChoiceAnchorIndex = -1;
    let choiceMode = false;
    let lastNodeIndex = -1;

    function pushNode({ speaker, text, isDialogue = false }) {
      const sceneIndex = sceneCountByTitle.get(currentSceneTitle) || 0;
      const nextCount = sceneIndex + 1;
      sceneCountByTitle.set(currentSceneTitle, nextCount);
      currentSceneNodeCount += 1;
      const node = {
        id: pad(nodes.length + 1),
        sceneTitle: currentSceneTitle,
        name: resolveSceneName(currentSceneTitle, currentSceneNodeCount),
        speaker: speaker || "旁白",
        text: sanitizeText(text),
        bgName: currentTheme.bgName,
        bg: currentTheme.bg,
        branches: [],
        isDialogue: Boolean(isDialogue),
      };
      nodes.push(node);
      lastNodeIndex = nodes.length - 1;
      return node;
    }

    function ensureNodeForChoice() {
      if (lastNodeIndex >= 0) return lastNodeIndex;
      const node = pushNode({
        speaker: "旁白",
        text: "故事从这里开始。",
      });
      return nodes.indexOf(node);
    }

    function addBranch(choice, branchIndex) {
      const anchorIndex = pendingChoiceAnchorIndex >= 0 ? pendingChoiceAnchorIndex : ensureNodeForChoice();
      const branch = {
        label: choice.label || String.fromCharCode(65 + branchIndex),
        text: choice.text || "继续",
        to: choice.to || "",
        targetKey: choice.to || "",
      };
      nodes[anchorIndex].branches.push(branch);
    }

    for (const rawLine of lines) {
      const line = sanitizeText(rawLine);
      if (!line) {
        choiceMode = false;
        pendingChoiceAnchorIndex = -1;
        continue;
      }

      const heading = isHeadingLine(line);
      if (heading) {
        currentSceneTitle = heading;
        currentTheme = inferSceneTheme(heading);
        currentSceneNodeCount = 0;
        choiceMode = false;
        pendingChoiceAnchorIndex = -1;
        lastNodeIndex = -1;
        continue;
      }

      if (isChoiceHeader(line)) {
        choiceMode = true;
        pendingChoiceAnchorIndex = lastNodeIndex;
        continue;
      }

      if (choiceMode) {
        const choice = parseChoiceLine(line);
        if (choice) {
          addBranch(choice, nodes[pendingChoiceAnchorIndex]?.branches.length || 0);
          continue;
        }
        choiceMode = false;
        pendingChoiceAnchorIndex = -1;
      }

      const speakerLine = detectSpeaker(line);
      if (speakerLine) {
        pushNode({
          speaker: speakerLine.speaker,
          text: speakerLine.text,
          isDialogue: true,
        });
        continue;
      }

      const narratorText = line.replace(/^（|^\(|^【/, "").replace(/）$|\)$|】$/, "");
      pushNode({
        speaker: "旁白",
        text: narratorText,
      });
    }

    if (!nodes.length) {
      const fallback = sanitizeText(input) || "这里还没有内容。";
      const chunks = fallback.split(/[。！？!?]/).map(item => sanitizeText(item)).filter(Boolean);
      chunks.forEach((chunk, index) => {
        pushNode({
          speaker: "旁白",
          text: chunk + (index < chunks.length - 1 ? "。" : ""),
        });
      });
    }

    return nodes;
  }

  function extractCharacters(scenes) {
    const seen = new Set();
    const chars = [];
    scenes.forEach(scene => {
      const speaker = sanitizeText(scene && scene.speaker);
      if (!speaker || speaker === "旁白") return;
      if (seen.has(speaker)) return;
      seen.add(speaker);
      chars.push(speaker);
    });
    return chars;
  }

  const DEFAULT_BACKGROUND_LIBRARY = [
    {
      id: "bg-free-rain-home",
      name: "雨夜公寓",
      aliases: ["公寓", "房间", "卧室", "雨夜房间"],
      prompt: "现代中国视觉小说默认背景，雨夜公寓，窗外雨痕与冷蓝室内光，适合悬疑开场。",
      gradient: "radial-gradient(circle at 32% 12%, rgba(157,198,255,0.22), transparent 34%), linear-gradient(135deg, #101c40, #060b1c 72%)",
      image: "./assets/generated/asset-job-realimg-demo1/01-background.png",
    },
    {
      id: "bg-free-classroom",
      name: "教室",
      aliases: ["课堂", "学校"],
      prompt: "现代中国高中教室，午后微光，适合校园恋爱与悬疑对话。",
      gradient: "radial-gradient(circle at 24% 16%, rgba(244,215,154,0.18), transparent 30%), linear-gradient(135deg, #1b2335, #0a1018 78%)",
      image: "./assets/ch2-v2/cg-ch2-classroom-corridor-zhang-gpt2.png",
    },
    {
      id: "bg-free-corridor",
      name: "走廊",
      aliases: ["楼梯", "楼梯间", "校园走廊"],
      prompt: "安静校园走廊，冷光与远处窗影，适合秘密跟踪和低声对话。",
      gradient: "radial-gradient(circle at 18% 22%, rgba(157,198,255,0.14), transparent 28%), linear-gradient(135deg, #121a2d, #07101b 76%)",
      image: "./assets/ch2-v2/cg-ch2-corridor-after-gpt2.png",
    },
    {
      id: "bg-free-rooftop",
      name: "楼顶",
      aliases: ["天台"],
      prompt: "城市学校楼顶，风和天光压低，适合告白、争执与危机戏。",
      gradient: "radial-gradient(circle at 42% 8%, rgba(157,198,255,0.18), transparent 34%), linear-gradient(135deg, #161c24, #0a1018 74%)",
      image: "./assets/cg-rooftop-gpt2.png",
    },
    {
      id: "bg-free-track",
      name: "操场",
      aliases: ["运动会", "跑道", "体育场"],
      prompt: "高中操场跑道，明亮青春气氛，适合运动会和关系升温。",
      gradient: "radial-gradient(circle at 22% 16%, rgba(244,215,154,0.18), transparent 28%), linear-gradient(135deg, #112230, #07111b 78%)",
      image: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    },
    {
      id: "bg-free-clinic",
      name: "医院",
      aliases: ["诊室", "诊所"],
      prompt: "清晨医院或诊室，干净冷白光，适合隐痛、照顾与真相靠近。",
      gradient: "radial-gradient(circle at 24% 18%, rgba(188,224,255,0.18), transparent 30%), linear-gradient(135deg, #14223a, #071019 78%)",
      image: "./assets/cg-hospital-gpt2.png",
    },
    {
      id: "bg-free-photo-room",
      name: "摄影教室",
      aliases: ["暗房", "照片墙", "摄影室"],
      prompt: "校园摄影教室，暗房红光和照片墙，适合悬疑线索与对峙。",
      gradient: "radial-gradient(circle at 74% 18%, rgba(244,154,154,0.14), transparent 26%), linear-gradient(135deg, #1d1826, #080b18 78%)",
      image: "./assets/ch4-v2/cg-ch4-photo-room-zhang-gpt2.png",
    },
    {
      id: "bg-free-store",
      name: "便利店",
      aliases: ["小卖部", "商店"],
      prompt: "夜晚便利店窗边，暖光与雨夜反差，适合回忆与温柔关系戏。",
      gradient: "radial-gradient(circle at 28% 20%, rgba(244,215,154,0.22), transparent 32%), linear-gradient(135deg, #261d15, #071019 76%)",
      image: "./assets/ch2-v2/cg-ch2-store-trio-gpt2.png",
    },
  ];

  const DEFAULT_CHARACTER_LIBRARY = [
    { id: "char-free-cool-heroine", name: "清冷女主", aliases: ["沈栀", "女主"], mood: "清醒、克制、代入感强", pose: "左侧站位", image: "./assets/characters/highschool/shen-zhi-highschool.png" },
    { id: "char-free-warm-friend", name: "温柔朋友", aliases: ["陆眠", "好友"], mood: "明亮、治愈、亲近感", pose: "右侧站位", image: "./assets/characters/highschool/lu-mian-highschool.png" },
    { id: "char-free-restrained-lead", name: "克制男主", aliases: ["周叙", "男主"], mood: "可靠、隐忍、女性向", pose: "右侧站位", image: "./assets/characters/highschool/zhou-xu-highschool.png" },
    { id: "char-free-cold-boy", name: "冷感少年", aliases: ["白祁"], mood: "苍白、疏离、有秘密", pose: "左侧站位", image: "./assets/characters/highschool/bai-qi-uniform-image13-final.png" },
    { id: "char-free-danger-classmate", name: "危险同学", aliases: ["张恒"], mood: "好看、压迫、不可全信", pose: "右侧站位", image: "./assets/characters/highschool/zhang-heng-highschool.png" },
  ];

  function normalizeAssetBaseName(value) {
    return sanitizeText(value)
      .replace(/\s*·\s*专属(?:背景|立绘)?$/g, "")
      .replace(/\s*专属(?:背景|立绘)?$/g, "");
  }

  function makeFreeBackgrounds() {
    return DEFAULT_BACKGROUND_LIBRARY.map(asset => ({
      ...asset,
      kind: "background",
      source: "free",
      baseName: asset.name,
      tone: toneFromText(asset.name),
      image: asset.image || "",
      status: "ready",
      creditCost: 0,
      priceCny: 0,
      sceneIds: [],
    }));
  }

  function makeFreeCharacters() {
    return DEFAULT_CHARACTER_LIBRARY.map(asset => {
      const tone = toneFromText(asset.name);
      return {
        ...asset,
        kind: "character",
        source: "free",
        baseName: asset.name,
        tone,
        prompt: makeCharacterPrompt(asset.name, []),
        image: asset.image || "",
        status: "ready",
        creditCost: 0,
        priceCny: 0,
      };
    });
  }

  function getAssetRequirementKey(kind, name) {
    return `${kind}:${normalizeLookupKey(normalizeAssetBaseName(name))}`;
  }

  function normalizeAssetPlan(plan) {
    const source = plan || {};
    return {
      backgrounds: Array.isArray(source.backgrounds) ? source.backgrounds.map(asset => ({ ...asset, kind: "background" })) : [],
      characters: Array.isArray(source.characters) ? source.characters.map(asset => ({ ...asset, kind: "character" })) : [],
      generationJobs: Array.isArray(source.generationJobs) ? source.generationJobs.map(job => ({ ...job })) : [],
      creditBalance: Number.isFinite(Number(source.creditBalance)) ? Number(source.creditBalance) : DEFAULT_CREDIT_BALANCE,
    };
  }

  function indexGeneratedAssets(plan, kind) {
    const list = kind === "background" ? plan.backgrounds : plan.characters;
    const indexed = new Map();
    list.forEach(asset => {
      if (asset.source !== "generated") return;
      const key = asset.requirementKey || getAssetRequirementKey(kind, asset.baseName || asset.name);
      indexed.set(key, asset);
    });
    return indexed;
  }

  function mergeGeneratedAsset(previous, next) {
    if (!previous) return next;
    return {
      ...next,
      ...previous,
      name: next.name,
      baseName: next.baseName,
      prompt: next.prompt,
      sceneIds: next.sceneIds || previous.sceneIds || [],
      mood: next.mood || previous.mood,
      pose: next.pose || previous.pose,
      creditCost: next.creditCost,
      priceCny: next.priceCny,
    };
  }

  function makeGeneratedImageDataUri(asset) {
    const tone = asset.tone || toneFromText(asset.baseName || asset.name);
    const hue = Number.isFinite(Number(tone.hue)) ? Number(tone.hue) : hashText(asset.name) % 360;
    const isCharacter = asset.kind === "character";
    const svg = isCharacter
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1400"><defs><linearGradient id="a" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="hsl(${hue},72%,70%)"/><stop offset=".54" stop-color="hsl(${(hue + 28) % 360},48%,34%)"/><stop offset="1" stop-color="#070b18"/></linearGradient><radialGradient id="g" cx=".5" cy=".18" r=".5"><stop offset="0" stop-color="#ffffff" stop-opacity=".7"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient></defs><rect width="900" height="1400" fill="url(#a)"/><ellipse cx="450" cy="292" rx="178" ry="205" fill="#f4efe7" opacity=".88"/><path d="M217 830c38-240 424-240 466 0l86 526H131l86-526z" fill="#111827" opacity=".86"/><path d="M196 362c74-238 432-238 506 0-42-66-126-108-252-108S238 296 196 362z" fill="#050816" opacity=".72"/><rect x="0" y="0" width="900" height="1400" fill="url(#g)"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><defs><linearGradient id="a" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="hsl(${hue},68%,34%)"/><stop offset=".52" stop-color="hsl(${(hue + 28) % 360},58%,18%)"/><stop offset="1" stop-color="#050816"/></linearGradient><radialGradient id="g" cx=".32" cy=".2" r=".5"><stop offset="0" stop-color="#cfe4ff" stop-opacity=".42"/><stop offset="1" stop-color="#cfe4ff" stop-opacity="0"/></radialGradient></defs><rect width="1600" height="900" fill="url(#a)"/><rect x="0" y="0" width="1600" height="900" fill="url(#g)"/><path d="M0 680c240-76 376-42 574-108 242-80 476-142 1026-36v364H0z" fill="#020617" opacity=".42"/><path d="M180 172h1160v42H180zM224 252h1080v24H224zM140 730h1320v2H140z" fill="#ffffff" opacity=".10"/></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  function buildAssetLibrary(nodes, previousPlan) {
    const parsedNodes = Array.isArray(nodes) ? nodes : [];
    const previous = normalizeAssetPlan(previousPlan);
    const previousBackgrounds = indexGeneratedAssets(previous, "background");
    const previousCharacters = indexGeneratedAssets(previous, "character");
    const backgrounds = makeFreeBackgrounds();
    const backgroundSeen = new Set();
    const backgroundRequirements = [];

    parsedNodes.forEach((node, index) => {
      const baseName = normalizeAssetBaseName(node.bgName || node.sceneTitle || node.name || `场景 ${index + 1}`) || "场景";
      const key = getAssetRequirementKey("background", baseName);
      if (backgroundSeen.has(key)) {
        const existing = backgroundRequirements.find(item => item.requirementKey === key);
        if (existing && node.id) existing.sceneIds.push(node.id);
        return;
      }
      backgroundSeen.add(key);
      const tone = toneFromText(baseName);
      const next = {
        id: `bg-gen-${pad(backgroundRequirements.length + 1)}`,
        kind: "background",
        source: "generated",
        name: `${baseName} · 专属背景`,
        baseName,
        requirementKey: key,
        prompt: makeBackgroundPrompt({ ...node, bgName: baseName }),
        tone,
        gradient: node.bg || `radial-gradient(circle at 32% 12%, ${tone.wash}, transparent 34%), linear-gradient(135deg, #101c40, #060b1c 72%)`,
        sceneIds: node.id ? [node.id] : [],
        image: "",
        status: "pending",
        creditCost: BACKGROUND_CREDIT_COST,
        priceCny: Number((BACKGROUND_CREDIT_COST * CREDIT_PRICE_CNY).toFixed(2)),
      };
      backgroundRequirements.push(mergeGeneratedAsset(previousBackgrounds.get(key), next));
    });

    const characters = makeFreeCharacters();
    const characterRequirements = extractCharacters(parsedNodes).map((name, index) => {
      const baseName = normalizeAssetBaseName(name);
      const key = getAssetRequirementKey("character", baseName);
      const sampleScene = parsedNodes.find(scene => sanitizeText(scene.speaker) === sanitizeText(name)) || parsedNodes[0];
      const tone = toneFromText(baseName);
      const next = {
        id: `char-gen-${pad(index + 1)}`,
        kind: "character",
        source: "generated",
        name: `${baseName} · 专属立绘`,
        baseName,
        requirementKey: key,
        tone,
        prompt: makeCharacterPrompt(baseName, parsedNodes),
        image: "",
        mood: describeSceneMood(sampleScene),
        pose: index % 2 === 0 ? "左侧站位" : "右侧站位",
        status: "pending",
        creditCost: CHARACTER_CREDIT_COST,
        priceCny: Number((CHARACTER_CREDIT_COST * CREDIT_PRICE_CNY).toFixed(2)),
      };
      return mergeGeneratedAsset(previousCharacters.get(key), next);
    });

    return {
      backgrounds: [...backgrounds, ...backgroundRequirements],
      characters: [...characters, ...characterRequirements],
      generationJobs: previous.generationJobs,
      creditBalance: previous.creditBalance,
    };
  }

  function getGenerationTargets(assetPlan) {
    const plan = normalizeAssetPlan(assetPlan);
    const actionable = asset => asset.source === "generated" && !["done", "generating"].includes(asset.status || "pending");
    return {
      backgrounds: plan.backgrounds.filter(actionable),
      characters: plan.characters.filter(actionable),
    };
  }

  function estimateGenerationCost(assetPlan) {
    const targets = getGenerationTargets(assetPlan);
    const backgroundCredits = targets.backgrounds.reduce((sum, asset) => sum + (Number(asset.creditCost) || BACKGROUND_CREDIT_COST), 0);
    const characterCredits = targets.characters.reduce((sum, asset) => sum + (Number(asset.creditCost) || CHARACTER_CREDIT_COST), 0);
    const credits = backgroundCredits + characterCredits;
    return {
      backgroundCount: targets.backgrounds.length,
      characterCount: targets.characters.length,
      total: targets.backgrounds.length + targets.characters.length,
      credits,
      priceCny: Number((credits * CREDIT_PRICE_CNY).toFixed(2)),
    };
  }

  function startAssetGeneration(assetPlan, options = {}) {
    const plan = normalizeAssetPlan(assetPlan);
    const targets = getGenerationTargets(plan);
    const targetIds = [...targets.backgrounds, ...targets.characters].map(asset => asset.id);
    const estimate = estimateGenerationCost(plan);
    const balance = Number.isFinite(Number(options.balance)) ? Number(options.balance) : plan.creditBalance;

    if (!estimate.total) {
      return { ok: false, reason: "NOTHING_TO_GENERATE", assetPlan: plan, estimate, balance };
    }
    if (balance < estimate.credits) {
      return { ok: false, reason: "INSUFFICIENT_CREDITS", assetPlan: plan, estimate, balance };
    }

    const job = {
      id: options.jobId || `asset-job-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: options.createdAt || new Date().toISOString(),
      status: "generating",
      total: estimate.total,
      completed: 0,
      credits: estimate.credits,
      priceCny: estimate.priceCny,
      itemIds: targetIds,
    };

    function markGenerating(asset) {
      if (!targetIds.includes(asset.id)) return asset;
      return { ...asset, status: "generating", jobId: job.id };
    }

    const nextPlan = {
      ...plan,
      creditBalance: balance - estimate.credits,
      backgrounds: plan.backgrounds.map(markGenerating),
      characters: plan.characters.map(markGenerating),
      generationJobs: [...plan.generationJobs, job],
    };

    return { ok: true, assetPlan: nextPlan, job, balance: nextPlan.creditBalance, estimate };
  }

  function completeAssetGeneration(assetPlan, jobId) {
    const plan = normalizeAssetPlan(assetPlan);
    const job = plan.generationJobs.find(item => item.id === jobId);
    if (!job) return plan;
    const targetIds = new Set(job.itemIds || []);
    function markDone(asset) {
      if (!targetIds.has(asset.id)) return asset;
      return {
        ...asset,
        status: "done",
        image: asset.image || makeGeneratedImageDataUri(asset),
        completedAt: new Date().toISOString(),
      };
    }
    return {
      ...plan,
      backgrounds: plan.backgrounds.map(markDone),
      characters: plan.characters.map(markDone),
      generationJobs: plan.generationJobs.map(item =>
        item.id === jobId ? { ...item, status: "done", completed: item.total, completedAt: new Date().toISOString() } : item
      ),
    };
  }

  function resolveAssetFromLibrary(assets, name) {
    const baseName = normalizeAssetBaseName(name);
    const targetKey = normalizeLookupKey(baseName);
    const matches = (Array.isArray(assets) ? assets : []).filter(asset => {
      const lookupNames = [asset.name, asset.baseName, ...(Array.isArray(asset.aliases) ? asset.aliases : [])];
      return lookupNames.some(value => normalizeLookupKey(normalizeAssetBaseName(value)) === targetKey);
    });
    return (
      matches.find(asset => asset.source === "generated" && asset.status === "done") ||
      matches.find(asset => asset.source === "free") ||
      matches.find(asset => asset.source === "generated") ||
      matches[0] ||
      null
    );
  }

  function canUseAssetImage(asset) {
    return Boolean(asset && asset.image && (asset.source === "free" || asset.status === "done"));
  }

  function resolvePublishedBackground(scene, assets) {
    const asset = resolveAssetFromLibrary(assets.backgrounds, scene.bgName);
    if (!asset) return { bg: scene.bg, bgImage: "", bgAsset: null };
    const image = canUseAssetImage(asset) ? asset.image : "";
    const base = scene.bg || asset.gradient || "";
    const bg = image ? `url("${image}") center/cover no-repeat, ${base}` : base;
    return { bg, bgImage: image, bgAsset: asset };
  }

  function resolvePublishedCharacter(scene, assets) {
    const asset = resolveAssetFromLibrary(assets.characters, scene.speaker);
    if (!asset) return { castImage: "", castAsset: null };
    return {
      castImage: canUseAssetImage(asset) ? asset.image : "",
      castAsset: asset,
    };
  }

  function normalizeSceneNodes(scenes) {
    const nodes = Array.isArray(scenes) ? scenes : [];
    return nodes.map((scene, index) => {
      const theme = inferSceneTheme(scene.sceneTitle || scene.name || scene.bgName);
      return {
        id: scene.id ? String(scene.id) : pad(index + 1),
        name: sanitizeText(scene.name) || resolveSceneName(scene.sceneTitle || scene.bgName || "场景", 1),
        speaker: sanitizeText(scene.speaker) || "旁白",
        text: sanitizeText(scene.text) || "……",
        bgName: sanitizeText(scene.bgName) || theme.bgName,
        bg: sanitizeText(scene.bg) || theme.bg,
        branches: Array.isArray(scene.branches)
          ? scene.branches.map((branch, branchIndex) => ({
              label: sanitizeText(branch.label) || String.fromCharCode(65 + branchIndex),
              text: sanitizeText(branch.text) || "继续",
              to: sanitizeText(branch.to) || "",
              targetKey: sanitizeText(branch.targetKey || branch.to) || "",
            }))
          : [],
      };
    });
  }

  function makeLookup(nodes) {
    const lookup = new Map();
    nodes.forEach((node, index) => {
      const keys = [
        node.id,
        String(index + 1),
        pad(index + 1),
        node.name,
        node.sceneTitle,
        node.bgName,
      ];
      keys.forEach(key => {
        const normalized = normalizeLookupKey(key);
        if (normalized) lookup.set(normalized, node.id);
      });
    });
    return lookup;
  }

  function resolveBranchTarget(target, currentIndex, nodes, lookup) {
    const raw = sanitizeText(target);
    const currentNode = nodes[currentIndex];
    if (!raw || /^下一(幕|场景|节点)?$/.test(raw) || /^继续$/.test(raw) || /^next$/i.test(raw)) {
      return nodes[currentIndex + 1]?.id || currentNode?.id || "";
    }
    if (/^上一(幕|场景|节点)?$/.test(raw) || /^prev(ious)?$/i.test(raw)) {
      return nodes[currentIndex - 1]?.id || currentNode?.id || "";
    }

    const numberMatch = raw.match(/^(?:场景|scene|第)?\s*0*([1-9]\d*)$/i);
    if (numberMatch) {
      const targetIndex = Number(numberMatch[1]) - 1;
      return nodes[targetIndex]?.id || nodes[currentIndex + 1]?.id || currentNode?.id || "";
    }

    const namedMatch = lookup.get(normalizeLookupKey(raw));
    if (namedMatch) return namedMatch;

    return nodes[currentIndex + 1]?.id || currentNode?.id || "";
  }

  function buildPublishedGame(options) {
    const scenes = normalizeSceneNodes(options.scenes);
    const lookup = makeLookup(scenes);
    const assets = normalizeAssetPlan(options.assets || buildAssetLibrary(scenes));
    const nodes = scenes.map((scene, index) => {
      const branches = scene.branches.map((branch, branchIndex) => ({
        label: branch.label || String.fromCharCode(65 + branchIndex),
        text: branch.text || "继续",
        rawTarget: branch.to || "",
        to: resolveBranchTarget(branch.to, index, scenes, lookup),
      }));
      const background = resolvePublishedBackground(scene, assets);
      const character = resolvePublishedCharacter(scene, assets);
      return {
        id: scene.id,
        name: scene.name,
        speaker: scene.speaker,
        text: scene.text,
        bgName: scene.bgName,
        bg: background.bg,
        bgImage: background.bgImage,
        bgAssetName: background.bgAsset ? background.bgAsset.name : "",
        castImage: character.castImage,
        castAssetName: character.castAsset ? character.castAsset.name : "",
        branches,
      };
    });

    const title = sanitizeText(options.title) || "未命名作品";
    const createdAt = options.createdAt || new Date().toISOString();
    const id = sanitizeText(options.id) || `sg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    return {
      id,
      title,
      description: sanitizeText(options.description),
      tags: Array.isArray(options.tags) ? options.tags.map(sanitizeText).filter(Boolean) : [],
      visibility: sanitizeText(options.visibility) || "public",
      createdAt,
      updatedAt: createdAt,
      cover: options.cover || "",
      nodes,
      characters: extractCharacters(scenes),
      assets,
      startNodeId: nodes[0]?.id || "",
    };
  }

  function loadPublishedGames(storage = getStorage()) {
    const realStorage = getStorage(storage);
    if (!realStorage) return [];
    const raw = safeJsonParse(realStorage.getItem(STORAGE_KEY), []);
    return Array.isArray(raw) ? raw : [];
  }

  function savePublishedGame(storage, game) {
    const realStorage = getStorage(storage);
    if (!realStorage) return game;
    const current = loadPublishedGames(realStorage);
    const next = current.filter(item => item.id !== game.id);
    next.unshift(game);
    realStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return game;
  }

  function getPublishedGame(storage, id) {
    const games = loadPublishedGames(storage);
    return games.find(game => game.id === id) || null;
  }

  function createDraftGameFromInput(options) {
    const scenes = parseScriptToScenes(options.script || "");
    return buildPublishedGame({
      id: options.id,
      title: options.title,
      description: options.description,
      tags: options.tags,
      visibility: options.visibility,
      createdAt: options.createdAt,
      cover: options.cover,
      scenes,
    });
  }

  function canShowInPlaza(game) {
    return game && game.visibility !== "private";
  }

  return {
    STORAGE_KEY,
    DEFAULT_CREDIT_BALANCE,
    parseScriptToScenes,
    extractCharacters,
    buildAssetLibrary,
    normalizeAssetPlan,
    normalizeSceneNodes,
    resolveBranchTarget,
    resolveAssetFromLibrary,
    buildPublishedGame,
    createDraftGameFromInput,
    estimateGenerationCost,
    startAssetGeneration,
    completeAssetGeneration,
    loadPublishedGames,
    savePublishedGame,
    getPublishedGame,
    canShowInPlaza,
  };
});
