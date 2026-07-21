# 替你活到明天 Narrative Emotional Suspense Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the first two chapters feel emotionally sticky and suspense-forward by adding real narrative state, stronger relationship payoffs, a longer first chapter, and a second chapter built around a bonding event before the cliffhanger.

**Architecture:** Keep the current single-file story engine, but extend it with a tiny story-state layer that tracks trust and clue acquisition. Use that state to vary chapter-two returns and the final cliffhanger so choices feel consequential without forcing a large refactor.

**Tech Stack:** Static HTML, vanilla JavaScript, CSS, local browser verification.

---

### Task 1: Add narrative state to the story engine

**Files:**
- Modify: `outputs/game.js:1598-2082`

- [ ] **Step 1: Add explicit story-state fields**

```js
const state = {
  nodeId: "start",
  history: [],
  sound: true,
  typingToken: 0,
  audioContext: null,
  bgm: null,
  currentBgm: "",
  bgmAudio: null,
  imageCache: new Map(),
  activeImage: "",
  selectedEnding: null,
  pendingContinue: null,
  currentFullText: "",
  luTrust: 0,
  baiBond: 0,
  zhouBond: 0,
  baiClue: 0,
  zhouClue: 0,
  memoryCount: 0
};
```

- [ ] **Step 2: Add a helper that applies node state deltas**

```js
function applyStateDelta(delta = {}) {
  if (typeof delta.luTrust === "number") state.luTrust += delta.luTrust;
  if (typeof delta.baiBond === "number") state.baiBond += delta.baiBond;
  if (typeof delta.zhouBond === "number") state.zhouBond += delta.zhouBond;
  if (typeof delta.baiClue === "number") state.baiClue += delta.baiClue;
  if (typeof delta.zhouClue === "number") state.zhouClue += delta.zhouClue;
  if (typeof delta.memoryCount === "number") state.memoryCount += delta.memoryCount;
}
```

- [ ] **Step 3: Let nodes use functional text**

```js
function resolveNodeText(text) {
  return typeof text === "function" ? text() : (text || "");
}
```

- [ ] **Step 4: Call the new helpers from `renderNode()`**

```js
applyStateDelta(node.stateDelta);
const fullText = resolveNodeText(node.text);
state.currentFullText = fullText;
typeText(fullText, token, () => {
  if (token === state.typingToken) renderChoices(node.choices || []);
});
```

- [ ] **Step 5: Verify no regressions in the existing start, save, load, and back flows**

Run:
```bash
python3 -m http.server 4175 --directory /Users/ivy/Documents/Codex/2026-06-17/web
```
Then open `http://127.0.0.1:4175/outputs/index-v2.html` and confirm the title screen, menu, and `开始游戏` button still work.

### Task 2: Expand chapter one with emotional setup before the investigation

**Files:**
- Modify: `outputs/game.js:549-1077`

- [ ] **Step 1: Insert a warm, limited-POV memory beat before the room search**

Add a new node between the room setup and the clue search:

```js
ch1_room_memory_01: {
  art: "album",
  scene: "studio",
  effect: "photo",
  speaker: "旁白",
  chapter: "第一章 · 她还在这里",
  stateDelta: { luTrust: 1, memoryCount: 1 },
  media: { type: "photo", title: "便利店合照", body: "陆眠和沈栀隔着玻璃坐着，桌上放着两杯热饮。" },
  text: "你在书桌角落摸到一张被压住的照片。照片里，陆眠和你坐在便利店里，窗外是雨，桌上是两杯冒热气的饮料。她没看镜头，反而在看你，像那天她只想确认你有没有好一点。照片背面写着：别把今天也熬成明天。",
  choices: [
    { text: "把照片收好", next: "ch1_choose_search" }
  ]
}
```

- [ ] **Step 2: Let White Qi behave like someone who has been quietly caring for both of you**

Add a warm beat before the room search that shows White Qi has been preserving Lu Mian's care for Shen Zhi:

```js
ch1_living_warm_01: {
  art: "album",
  scene: "home",
  effect: "photo",
  speaker: "旁白",
  chapter: "第一章 · 别空腹喝咖啡",
  stateDelta: { luTrust: 1, baiBond: 1, memoryCount: 1 },
  media: { type: "note", title: "冰箱便利贴", body: "栀，别空腹喝咖啡。冰箱第二层有酸奶。" },
  text: "你走到走廊口时，白祁忽然叫住你。他从冰箱门上撕下一张快褪色的便利贴，递过来。上面是陆眠的字：栀，别空腹喝咖啡。冰箱第二层有酸奶。白祁说：我一直没舍得撕。",
  choices: [
    { text: "收好便利贴", next: "ch1_room_01" }
  ]
}
```

- [ ] **Step 3: Keep the chapter-one key choice, but let one branch build trust instead of only clue state**

```js
ch1_ans_b_01: {
  stateDelta: { baiBond: 1 },
  text: "你没有先问旧手机，而是问白祁：你这几天是不是没睡？他愣了一下，垂眼说自己睡了，只是睡得很浅。你看见他眼下很淡的青色，也看见他没有把杯子收回去。",
  choices: [
    { text: "继续听", next: "ch1_ans_b_02" }
  ]
}
```

### Task 3: Make chapter two a relationship-building chapter with a sports-day beat

**Files:**
- Modify: `outputs/game.js:1208-1610`
- Add: `outputs/assets/scene-sports-day.svg`

- [ ] **Step 1: Add a school sports-day background**

Create a new SVG background with a bright track, banners, and bleachers so the sports-day scene feels distinct from the classroom and rooftop visuals.

- [ ] **Step 2: Insert a new sports-day sequence after the classroom introduction**

```js
ch2_sports_01: {
  art: "sportsDay",
  scene: "school",
  effect: "ambient",
  speaker: "陆眠",
  chapter: "第二章 · 运动会",
  stateDelta: { luTrust: 1, memoryCount: 1 },
  text: "操场被阳光晒得发亮，班里的人都在跑。陆眠把号码布别到你胸前，动作很轻，像怕扎疼你。她说：等会儿你站我旁边，别乱跑。你第一次觉得，高中时代的她是真的会把一个人拉进自己的世界里。",
  choices: [
    { text: "帮她整理号码布", next: "ch2_sports_02" },
    { text: "陪她去看台", next: "ch2_sports_03" }
  ]
}
```

- [ ] **Step 3: Add a bonding beat and a suspense beat inside the sports meet**

```js
ch2_sports_03: {
  text: "白祁抱着水站在看台边，陆眠跑下来时，他很自然地把毛巾递过去。她接得很顺手，像这样的照顾已经发生过很多次。可就在她抬头的一瞬间，你看见看台另一头的张恒停了一下，像是也看见了她。",
  choices: [
    { text: "留在她身边", next: "ch2_store_01" },
    { text: "看向张恒", next: "ch2_library_01" }
  ]
}
```

- [ ] **Step 4: Remove omniscient commentary from the chapter-two middle section**

Rewrite any line that tells the player what a character “really” knows into a line about what沈栀看见、听见、猜到的细节.

### Task 4: Rework the second-chapter return text and cliffhanger

**Files:**
- Modify: `outputs/game.js:112-145`

- [ ] **Step 1: Mark clue-giving nodes with story-state changes**

```js
ch2_ask_bai_01: {
  stateDelta: { baiClue: 1, baiBond: 1, memoryCount: 1 },
  ...
}
```

```js
ch2_ask_zhou_zhang_01: {
  stateDelta: { zhouClue: 1, zhouBond: 1, memoryCount: 1 },
  ...
}
```

```js
ch2_food_01: {
  stateDelta: { luTrust: 2, memoryCount: 1 },
  ...
}
```

```js
ch2_silent_01: {
  stateDelta: { luTrust: 1, memoryCount: 1 },
  ...
}
```

```js
ch2_follow_lu_02: {
  stateDelta: { luTrust: 2, memoryCount: 1 },
  ...
}
```

- [ ] **Step 2: Replace the static chapter-two return text with state-aware prose**

```js
ch2_return_01: {
  text: () => {
    const parts = [];
    if (state.baiClue > 0) parts.push("白祁不是旁观者，他是在替她挡一些你还不知道的东西。");
    if (state.zhouClue > 0) parts.push("周叙也不是无关的人，他看见过那一幕，却没能把它拦下来。");
    if (state.luTrust >= 3) parts.push("更重要的是，陆眠记住了你今天没有逼问她。");
    if (!parts.length) parts.push("你只拿到了轮廓，还没拿到真相。");
    return `你坐在公寓地板上，手机还捏在手里。${parts.join(" ")}屏幕忽然又亮了一次。`;
  },
  ...
}
```

- [ ] **Step 3: Give the second chapter a stronger cliffhanger**

```js
ch2_return_02: {
  text: () => {
    const line = state.luTrust >= 3
      ? "陆眠记住了你站在她身边的样子。"
      : "你终于看见了她当年的样子，却还没来得及伸手。";
    return `${line}桌上，那部旧手机的开机画面亮着。就在这时，一条陌生短信弹了出来：别再往回走。你已经来过一次了。`;
  },
  ...
}
```

- [ ] **Step 4: Keep the third chapter placeholder but make the transition feel intentional**

```js
ch2_return_02: {
  choices: [{ text: "继续", next: "ch3_coming" }]
}
```

- [ ] **Step 5: Verify the chapter-two route now shows different summaries depending on which clue nodes were visited**

Open the local page, play through:
1. `问白祁 + 问周叙 + 跟上陆眠`
2. `不问白祁 + 不问周叙 + 只沉默陪伴`

Confirm the return text and cliffhanger differ.

### Task 5: Align the landing page with the current playable scope

**Files:**
- Modify: `outputs/landing.html:120-128`
- Modify: `outputs/index-v2.html:20-40`

- [ ] **Step 1: Rewrite the work blurb to match the playable demo**

```html
<p class="work-blurb">
  今晚十二点前，你必须做出选择。一封来自已故之人的短信，把你拉回她死前的夏天。
  前两章试玩开放，感情线与悬疑线同步推进。
</p>
```

- [ ] **Step 2: Update the title-screen subtitle to emphasize the emotional-suspense tone**

```html
<p class="ts-tagline">今晚十二点前<br>你必须做出选择</p>
```

Keep the existing title-screen structure, but make sure the surrounding copy no longer overpromises four routes before they exist.

- [ ] **Step 3: Verify the landing page still links into the game and the game still loads from `outputs/index-v2.html`**

Open `http://127.0.0.1:4175/outputs/landing.html` and click `进入试玩`.
