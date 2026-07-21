# Creator Publish Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the current "开始创作" flow produce locally playable visual-novel games from pasted text or TXT files.

**Architecture:** Keep the existing landing and official game untouched, add a small shared creator engine for parsing, publishing, and storage, then add a generic player page for user-created works. `creator.html` uses the engine to parse real input and save games to `localStorage`; `landing.html` only injects published works into the existing plaza design.

**Tech Stack:** Static HTML/CSS/vanilla JS, browser `localStorage`, bundled Node.js for syntax and behavior checks.

---

### Task 1: Shared Creator Engine

**Files:**
- Create: `/Users/ivy/Documents/Codex/2026-06-17/web/outputs/creator-engine.js`
- Create: `/Users/ivy/Documents/Codex/2026-06-17/web/outputs/creator-engine.test.js`

- [ ] **Step 1: Write failing parser and publish tests**

```js
const engine = require("./creator-engine.js");

function createMemoryStorage() {
  const data = new Map();
  return {
    getItem: key => data.has(key) ? data.get(key) : null,
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: key => data.delete(key)
  };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const script = `【场景：雨夜天台】
沈栀：「你为什么知道我在这里？」
周叙：因为我来晚过一次。
选择：
A. 靠近他
B. 后退一步

【场景：楼梯间】
旁白：灯忽然灭了。`;

const scenes = engine.parseScriptToScenes(script);
assert(scenes.length >= 2, "parses multiple scenes");
assert(scenes[0].speaker === "沈栀", "extracts speaker from dialogue");
assert(scenes[0].branches.length === 2, "extracts A/B choices");
assert(engine.extractCharacters(scenes).includes("周叙"), "extracts characters");

const game = engine.buildPublishedGame({
  title: "测试游戏",
  description: "这是简介",
  tags: ["悬疑", "恋爱"],
  visibility: "public",
  scenes
});
assert(game.nodes.length === scenes.length, "published game has nodes");
assert(game.nodes[0].branches[0].to === game.nodes[1].id, "choice target resolves");

const storage = createMemoryStorage();
engine.savePublishedGame(storage, game);
assert(engine.loadPublishedGames(storage).length === 1, "loads saved game");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `/Users/ivy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node outputs/creator-engine.test.js`
Expected: FAIL because `creator-engine.js` does not exist.

- [ ] **Step 3: Implement engine**

Create `creator-engine.js` with pure functions: `parseScriptToScenes`, `extractCharacters`, `buildPublishedGame`, `savePublishedGame`, `loadPublishedGames`, `getPublishedGame`, and `resolveBranchTarget`.

- [ ] **Step 4: Run test to verify it passes**

Run: `/Users/ivy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node outputs/creator-engine.test.js`
Expected: PASS with `creator-engine tests passed`.

### Task 2: Creator Integration

**Files:**
- Modify: `/Users/ivy/Documents/Codex/2026-06-17/web/outputs/creator.html`

- [ ] **Step 1: Add engine script before the inline script**

Load `./creator-engine.js?v=20260720-publishflow1` before the current inline script.

- [ ] **Step 2: Replace fake parse result with engine output**

In `showParseResults()`, call `SuguangCreatorEngine.parseScriptToScenes(scriptInput.value)` and update `state.scenes`, character count, choice count, node preview, editor list, and preview from real parsed scenes.

- [ ] **Step 3: Read TXT files into the textarea**

In `handleFile(file)`, if extension is `.txt`, use `FileReader.readAsText(file)` and fill `scriptInput.value`; for DOCX/PDF keep the file chip but show a clear toast asking users to paste text for this local demo.

- [ ] **Step 4: Replace fake publish with local publish**

Build a published game with `SuguangCreatorEngine.buildPublishedGame`, save it with `savePublishedGame`, then redirect to `./player.html?id=<id>`.

### Task 3: Generic Player

**Files:**
- Create: `/Users/ivy/Documents/Codex/2026-06-17/web/outputs/player.html`
- Create: `/Users/ivy/Documents/Codex/2026-06-17/web/outputs/player.css`
- Create: `/Users/ivy/Documents/Codex/2026-06-17/web/outputs/player.js`

- [ ] **Step 1: Build player shell**

Create a title screen, top menu, text dock, choice dock, progress indicator, and empty-state for missing games.

- [ ] **Step 2: Implement game runtime**

Load the selected game from `localStorage`, start at the first node, advance by click/space, render choices, resolve branches, save progress, and return to title.

- [ ] **Step 3: Match visual language**

Use the same deep navy, ice-blue accent, serif type, cinematic gradients, vignette, and restrained motion already used by the creator workbench.

### Task 4: Landing Plaza Injection

**Files:**
- Modify: `/Users/ivy/Documents/Codex/2026-06-17/web/outputs/landing.html`

- [ ] **Step 1: Load the engine**

Add `./creator-engine.js?v=20260720-publishflow1` before the landing inline script.

- [ ] **Step 2: Insert user-published works**

Read `SuguangCreatorEngine.loadPublishedGames(localStorage)` and prepend public/local created works after the official featured card using the existing `work-card` structure.

- [ ] **Step 3: Keep original landing visual intact**

Do not change hero markup, hero CSS, or the existing official game card.

### Task 5: Verification

**Files:**
- Test: `/Users/ivy/Documents/Codex/2026-06-17/web/outputs/creator-engine.test.js`
- Test: browser at `http://localhost:4175/outputs/creator.html?v=20260720-publishflow1`

- [ ] **Step 1: Run JS behavior test**

Run: `/Users/ivy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node outputs/creator-engine.test.js`
Expected: `creator-engine tests passed`.

- [ ] **Step 2: Run syntax checks**

Run: `/Users/ivy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check outputs/creator-engine.js`
Run: `/Users/ivy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check outputs/player.js`
Run the inline creator script syntax check with `new Function(...)`.

- [ ] **Step 3: Browser smoke test**

Open creator, fill title and text, parse, enter editor, publish, confirm redirect to `player.html?id=...`, start game, click through dialogue, choose a branch, then return to landing and confirm the created work appears in the plaza.

## Self-Review

- Spec coverage: The plan covers local parsing, TXT input, publish persistence, generic playback, plaza visibility, and verification.
- Placeholder scan: No `TBD` or deferred behavior remains; DOCX/PDF are explicitly scoped to a local-demo paste-text message.
- Type consistency: The shared game shape uses `game.nodes`, each node has `id`, `name`, `speaker`, `text`, `bgName`, `bg`, and `branches`.
