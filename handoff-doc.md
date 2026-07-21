# 《替你活到明天》Web 文游项目交接文档

本文档用于交接当前 Web 版视觉文字游戏 MVP，方便后续开发者继续修改剧情、视觉、UI、音频和结局系统。

## 1. 项目概况

项目名称：替你活到明天

类型：女性向悬疑分支视觉小说 / 文游 MVP

当前访问地址：

```text
http://127.0.0.1:4175/index.html?v=20260618-ui4
```

当前实现形式：纯静态网页，无构建流程，无后端依赖。核心代码都在 `outputs/` 目录下。

当前已有功能：

- 标题页和玩家阅读页分离。
- 点击屏幕推进剧情，不再强制显示“继续”按钮。
- 有关键分支选项，多结局。
- 支持存档、读档、回看上一幕、回标题、结局图鉴。
- 结局图鉴可点击，已解锁结局会显示详细解释。
- 背景图、雨夜、VHS、闪白、暗角等视觉效果已接入。
- 图片资源通过 `artManifest` 管理。
- 存档和结局解锁保存在浏览器 `localStorage`。

当前主要不足：

- 背景音乐还没有真正接入，目前只有 Web Audio 合成的点击/提示音。
- 部分剧情信息仍以左上角 `media-card` 卡片呈现，用户希望后续改成对应的手机、短信、证据、视频等画面化表现。
- 人物立绘系统目前被 CSS 隐藏，后续应替换为高质量 2D 动漫立绘。
- 部分人物年龄和视觉设定需要进一步统一：沈栀、周叙应为 24-25 岁，不要显老、不要真人感。
- 当前 CG 中部分男性角色图不符合用户审美，需要重生或替换。

## 2. 运行方式

项目目录：

```text
/Users/ivy/Documents/Codex/2026-06-17/web
```

本地启动命令：

```bash
python3 -m http.server 4175 --directory outputs
```

启动后访问：

```text
http://127.0.0.1:4175/index.html?v=20260618-ui4
```

如果修改了 `styles.css` 或 `game.js`，建议同步修改 `outputs/index.html` 里的版本号，避免浏览器缓存旧文件：

```html
<link rel="stylesheet" href="./styles.css?v=20260618-ui5" />
<script src="./game.js?v=20260618-ui5"></script>
```

## 3. 文件结构

```text
outputs/
  index.html              页面结构，标题页、阅读页、弹窗、菜单入口
  styles.css              视觉样式、布局、动效、响应式
  game.js                 剧情数据、分支逻辑、存档读档、图鉴、音效
  art-manifest.json       图片资源清单备份
  visual-generation-plan.md
  assets/                 当前 CG、背景 SVG、测试图

work/
  req_gpt_image2_base64.py
  run_gpt_image2_local.py
  generate_game_cgs_gpt2.py
  generate_character_sprites.py
```

主要修改通常只需要动这三个文件：

- `outputs/game.js`
- `outputs/styles.css`
- `outputs/index.html`

如果只是改剧情、选项、结局、图片引用，优先改 `outputs/game.js`。

## 4. 核心代码结构

`outputs/game.js` 里主要分成几块：

```js
const STORAGE_KEY = "live-until-tomorrow-v2";
const artManifest = { ... };
const endings = { ... };
const script = { ... };
const state = { ... };
const els = { ... };
```

各部分作用：

- `STORAGE_KEY`：浏览器本地存储 key。改它会导致旧存档和旧结局解锁记录失效。
- `artManifest`：所有剧情背景图/CG 的资源表。
- `endings`：所有结局的图鉴信息。
- `script`：全部剧情节点、分支、正文、角色名、场景效果。
- `state`：当前阅读状态，比如当前节点、历史记录、音效开关。
- `els`：页面 DOM 元素引用。

核心函数：

- `startGame(nodeId)`：从某个节点开始游戏。
- `renderNode(nodeId)`：渲染剧情节点。
- `applyVisual(node)`：根据节点切换背景、特效和角色状态。
- `renderMedia(media)`：渲染左上角媒体卡片。
- `typeText(text, token, onDone)`：打字机文本效果。
- `renderChoices(choices)`：渲染选项。
- `advanceByScreenClick(event)`：点击屏幕推进剧情。
- `saveToSlot(slot)` / `loadFromSlot(slot)`：存档读档。
- `openGallery()` / `renderEndingDetail()`：结局图鉴。

## 5. 如何修改剧情

剧情都在 `outputs/game.js` 的 `const script = { ... }` 中。每一幕是一个节点，基本格式如下：

```js
nodeId: {
  art: "phone",
  scene: "living",
  effect: "message",
  speaker: "旁白",
  chapter: "序章 · 死亡短信",
  media: { type: "sms", title: "陆眠", body: "短信内容" },
  text: "这里是当前这一幕正文。",
  choices: [
    { text: "选项一", next: "nextNodeId" },
    { text: "选项二", next: "anotherNodeId" }
  ]
}
```

字段说明：

- `nodeId`：节点唯一 ID，只能用英文、数字，不能重复。
- `art`：当前画面使用的 CG，对应 `artManifest` 里的 key。
- `scene`：基础场景类型，会影响 CSS 背景兜底。
- `effect`：视觉特效，例如 `rain`、`message`、`photo`、`video`、`memory`、`horror`、`ending`。
- `speaker`：说话人显示在文本框左上。
- `chapter`：左上角章节标签。
- `media`：左上角媒体卡片内容，目前用户希望后续弱化或替换为视觉化道具。
- `text`：正文。
- `choices`：玩家选项。

如果只想让玩家点击屏幕继续，不显示选项按钮，写一个文本为“继续”的选项即可：

```js
choices: [
  { text: "继续", next: "nextNodeId" }
]
```

代码会自动把这种单独的“继续”隐藏成“点击屏幕继续”。

如果是有意义的分支，写多个选项：

```js
choices: [
  { text: "追问周叙为什么外套在现场", next: "zhou01" },
  { text: "去找白祁拿原始录像", next: "bai01" },
  { text: "删掉短信，假装没看见", next: "escape01" }
]
```

## 6. 如何新增一幕

1. 在 `script` 里新增一个唯一节点 ID。
2. 给上一幕的选项加上 `next: "新节点ID"`。
3. 确认新节点里的 `art` 已存在于 `artManifest`。
4. 确认新节点最终能走到某个结局或已存在节点，避免断线。

示例：

```js
newScene01: {
  art: "phone",
  scene: "living",
  effect: "message",
  speaker: "沈栀",
  chapter: "新增章节 · 未命名",
  media: { type: "sms", title: "陌生短信", body: "你终于想起来了吗？" },
  text: "沈栀盯着屏幕，觉得这句话不像威胁，更像一场迟到三年的确认。",
  choices: [
    { text: "继续", next: "newScene02" }
  ]
}
```

## 7. 如何修改结局

结局信息在 `const endings = { ... }`。

每个结局的结构：

```js
live: {
  title: "结局 A：替我活下去",
  hint: "在最终选择里选择沈栀。",
  detail: "图鉴卡片里的短描述。",
  badge: "普通结局",
  thumbnail: "hospital",
  route: "回收条件说明。",
  meaning: "结局含义。",
  after: "角色后续。",
  key: "结局金句。",
  conflict: "关键矛盾。",
  cost: "选择代价。",
  closure: "收束含义。"
}
```

要让某个剧情节点解锁结局，在该节点里加：

```js
ending: "live"
```

例如：

```js
live02: {
  art: "hospital",
  scene: "dawn",
  effect: "ending",
  speaker: "结局 A",
  chapter: "结局 · 替我活下去",
  ending: "live",
  text: "这里是结局第一幕。",
  choices: [
    { text: "继续", next: "liveAfter01" }
  ]
}
```

建议结局不要只写一幕。用户明确要求结局要有成就感，所以每个结局最好有 5-8 幕后日谈：

- 第一幕：抵达结局的瞬间。
- 第二幕：角色意识到自己做了什么选择。
- 第三幕：选择带来的现实代价。
- 第四幕：与关键角色的后续关系。
- 第五幕：回到陆眠/真相/墓园/视频等核心主题。
- 终幕：给玩家明确的收束和成就感。

## 8. 如何替换或新增图片

图片资源放在：

```text
outputs/assets/
```

`artManifest` 管理图片：

```js
phone: {
  image: "./assets/cg-phone-gpt2.png",
  fallback: "./assets/scene-living.svg",
  prompt: "图片生成提示词，方便后续重跑。"
}
```

字段说明：

- `image`：优先使用的图片。
- `fallback`：图片加载失败时的兜底图。
- `prompt`：原始生成提示词，方便后续重新生图。

新增图片流程：

1. 把图片放入 `outputs/assets/`。
2. 在 `artManifest` 新增 key。
3. 在剧情节点里使用 `art: "新key"`。

示例：

```js
coverRain: {
  image: "./assets/cover-rain.png",
  fallback: "./assets/scene-home.svg",
  prompt: "横屏 16:9 女性向悬疑视觉小说封面，女主居中..."
}
```

剧情节点使用：

```js
art: "coverRain"
```

## 9. 当前图片资源说明

当前已接入的 GPT 生成图主要包括：

- `cg-door-gpt2.png`：雨夜公寓门口、白玫瑰。
- `cg-phone-gpt2.png`：手机短信、客厅夜晚。
- `cg-album-gpt2.png`：相册记忆。
- `cg-zhou-door-gpt2.png`：周叙门外重逢，但用户不满意男性脸。
- `cg-car-gpt2.png`：雨夜车内。
- `cg-studio-gpt2.png`：废弃摄影棚、照片墙。
- `cg-mirror-gpt2.png`：浴室镜子。
- `cg-rooftop-gpt2.png`：天台真相。
- `cg-lumian-video-gpt2.png`：陆眠视频。
- `cg-source-gpt2.png`：短信源头/电脑。
- `cg-dawn-gpt2.png`：清晨治愈结局。
- `cg-cemetery-gpt2.png`：墓园。
- `cg-hospital-gpt2.png`：危机干预室。
- `cg-court-gpt2.png`：证物/庭审。
- `cg-flower-shop-gpt2.png`：花店坏结局。

用户重点反馈：

- 图片必须和剧情内容对应。
- 男性角色必须好看，不能显老、不能真人感、不能油腻。
- 游戏整体应是高质量 2D 动漫乙女视觉小说风格。
- 不要生成图片里的文字，标题和 UI 文本应由网页后期叠加。

## 10. 人物视觉设定

故事主角是女性，女主沈栀必须是视觉中心。

主要人物：

- 沈栀：女主，24-25 岁，剪辑师，冷感、克制、漂亮，有被过去追上的脆弱感。不要显老，不要过度严肃，不要真人感。
- 周叙：男主/前任，24-25 岁，年轻、干净、漂亮，有保护感和愧疚感。不要油腻，不要反派脸。
- 白祁：陆眠弟弟，约 22 岁，已有人物参考图被用户认可。气质冷、受伤、防备，但必须好看。
- 陆眠：死者，温暖、明亮、浅黄色/米白色系，像记忆和光，不恐怖。

已知用户认可参考：

```text
/Users/ivy/Downloads/22_year_old_Chinese_.png
```

这张是白祁。

其余人物需要继续优化，尤其沈栀和周叙要年轻、2D 动漫、乙女向。

## 11. 封面图中文提示词

后续如果要生成封面，使用横屏 16:9，女主沈栀必须在正中央、最大、最醒目。不要在图里生成文字。

```text
参考上传的人物图：
男主参考图：图2
女主沈栀参考图：图3
白祁参考图：图4，他是死者的弟弟
陆眠参考图：图5，她是死者
图1只参考电影海报式群像构图和压迫感，不参考校服、学校、文字内容。

生成一张横屏 16:9 的电影海报质感游戏封面，用于女性向悬疑文字视觉游戏《替你活到明天》。

画面核心：
女主沈栀必须在画面正中央，并且是最大、最醒目的主视觉。她是绝对主角。她站在前景中央，冷感、美丽、克制，眼神有一点被过去追上的恍惚和痛感，但脸必须好看、年轻、有乙女游戏女主气质。她看向镜头或微微侧头，身上有雨夜冷光。

人物布局：
男主站在女主一侧稍后方，保护感和愧疚感并存，年轻、干净、漂亮，不油腻，不像反派。
白祁站在女主另一侧稍后方，眼神冷、受伤、有防备感，是死者弟弟，带一点压抑的恨意，但仍然好看。
陆眠出现在女主身后更远处，像温暖的记忆或幽灵感残影，不恐怖。她穿浅黄色和米白色，带温柔光晕，笑得很轻，但有悲伤。她是整张海报里的“失去的人”。

场景氛围：
雨夜城市，公寓走廊、天台栏杆、白玫瑰、发光手机屏幕、午夜倒计时的感觉融合在背景里。画面有悬疑、爱情、愧疚、记忆、死亡短信的氛围。整体是深蓝黑雨夜色调，陆眠周围有一点温暖浅黄色光，形成冷暖对比。

构图：
电影群像海报构图，女主居中最大，其他三人围绕她形成三角构图。画面要有层次和压迫感，有雨丝、反光、暗部、柔和边缘光。左上或上方保留干净留白，方便后期加游戏标题，不要直接生成文字。

风格：
高质量 2D 动漫乙女游戏封面，精致线稿，漂亮脸，干净高级的人物五官，细腻头发，高级视觉小说主视觉，电影海报质感，精致光影，统一画风，横屏封面，情绪强但人物必须好看。

必须避免：
不要真人感，不要 3D，不要照片质感，不要韩剧海报真人风，不要丑脸，不要显老，不要油腻，不要五官崩坏，不要阴间恐怖脸，不要廉价网漫风，不要校服，不要警服，不要多余人物，不要生成任何文字、logo、水印、韩文、英文、乱码。
```

## 12. UI 修改重点

`outputs/styles.css` 负责全部 UI。

重点区域：

- `.title-screen`：标题页。
- `.top-menu` / `.menu-popover`：右上角菜单。
- `.chapter-tag`：左上角章节标签。
- `.media-card`：左上角媒体信息卡片。
- `.choice-dock` / `.choice-button`：选项区域。
- `.text-dock` / `.dialogue-text`：底部文本框。
- `.modal` / `.slot-grid`：存档读档弹窗。
- `.gallery-layout` / `.ending-card` / `.ending-detail`：结局图鉴。

用户对 UI 的明确偏好：

- 开始界面和正文阅读界面必须分开。
- “继续阅读”不要按钮，点击屏幕即可。
- 右上角菜单不要做得太突兀。
- 结局图鉴要能点开，并且能解释结局内涵。
- 左上角媒体卡片目前不满意，后续应改成更有代入感的图片化呈现。
- 整体要像易次元/橙光类视觉小说，画面漂亮，有高级感，不要像普通网页表单。

## 13. 左上角媒体卡片的后续改造建议

当前代码只显示这些 media 类型：

```js
const visibleMediaTypes = new Set(["sms", "video", "drive", "code", "record", "photo"]);
```

也就是说，不在这个集合里的 `media.type` 不会显示卡片。

用户不喜欢“内容说明卡片直接贴在左上角”。后续建议：

- 短信：做成手机屏幕浮层或直接换成手机 CG。
- 视频：做成录像画面、进度条、VHS 叠层。
- 证据：做成桌面证物、照片墙、U 盘特写。
- 回忆：用 CG、闪白、旧照片边框表现。
- 结局奖励：不要只写一张卡，最好配合专属结局 CG 和成就弹窗。

如果先想快速隐藏左上角媒体卡片，可以在 `renderMedia(media)` 里直接返回，或把 `visibleMediaTypes` 清空。但更推荐重做为画面化组件。

## 14. 音频系统现状和改造建议

当前 `game.js` 的 `beep(kind)` 使用 Web Audio 临时合成提示音，并没有真实音乐文件。

用户想要的是背景音乐，而不是点击音效。

建议新增：

```text
outputs/assets/audio/
  bgm-rain-night.mp3
  bgm-memory.mp3
  bgm-truth.mp3
  bgm-ending-good.mp3
  bgm-ending-bad.mp3
```

在节点里增加字段：

```js
bgm: "rainNight"
```

再新增音频表：

```js
const bgmManifest = {
  rainNight: "./assets/audio/bgm-rain-night.mp3",
  memory: "./assets/audio/bgm-memory.mp3",
  truth: "./assets/audio/bgm-truth.mp3",
  endingGood: "./assets/audio/bgm-ending-good.mp3",
  endingBad: "./assets/audio/bgm-ending-bad.mp3"
};
```

然后在 `renderNode(nodeId)` 里调用 `playBgm(node.bgm)`。

注意：浏览器通常要求用户先点击页面后才能自动播放音频，所以 BGM 最好在点击“开始游戏”后启动。

## 15. 存档、读档、图鉴数据

存储位置：

```js
localStorage["live-until-tomorrow-v2"]
```

存储内容大概是：

```json
{
  "saves": {
    "1": {
      "nodeId": "当前节点",
      "history": ["历史节点"],
      "savedAt": "保存时间"
    }
  },
  "endings": {
    "live": true,
    "trial": true
  }
}
```

如果开发期间想清空存档，可以在浏览器控制台执行：

```js
localStorage.removeItem("live-until-tomorrow-v2")
```

或者把 `STORAGE_KEY` 改成新版本，例如：

```js
const STORAGE_KEY = "live-until-tomorrow-v3";
```

## 16. 修改后检查清单

每次改完剧情后，至少检查：

- 所有 `next` 指向的节点都存在。
- 所有 `art` 都在 `artManifest` 里存在。
- 所有 `ending` 都在 `endings` 里存在。
- 每个路线最终能抵达结局或标题页。
- 单独的“继续”不会显示成按钮。
- 真正分支选项能点击。
- 存档和读档后画面能恢复。
- 结局解锁后图鉴能点开详情。
- 手机端文字不溢出，选项不挡住文本。
- 改了 JS/CSS 后 `index.html` 版本号已更新。

语法检查命令：

```bash
/Users/ivy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check /Users/ivy/Documents/Codex/2026-06-17/web/outputs/game.js
```

## 17. 当前剧情修订建议

用户对当前版本的核心反馈：

- “还是太短了”，尤其结局需要好几幕介绍。
- “选择太简单”，过程里需要更多有意义的调查、怀疑、情感判断。
- “不能全是剧情，不需要我探索”，玩家应该能参与查证据、追问、选择相信谁。
- “结局太简单，没有成就感”，结局需要后日谈和明确收束。
- “图片跟内容不对应”，每段重要剧情要配对应 CG。
- “人物太丑/太老/太严肃/太像真人”，视觉必须改成 2D 动漫乙女风。

后续剧情优化方向：

- 开头用 3-5 幕把人物关系讲清楚：沈栀、陆眠、周叙、白祁分别是谁。
- 中段增加调查节点：相册、短信、通话记录、U 盘、摄影棚、天台录像。
- 分支选择不要只是“去 A / 去 B”，要带心理代价，例如“相信他但交出证据”或“留下来但隐瞒一条线索”。
- 每个结局保留 5-8 幕，包含选择后果、角色关系、主题回扣。
- 隐藏结局要有更强完成感，最好需要玩家看完多个关键证据后才能进入。

## 18. 交接给后续开发者的优先级

建议优先级如下：

1. 先换封面和关键人物立绘，统一 2D 动漫乙女画风。
2. 重做周叙相关 CG，解决男性角色不好看的问题。
3. 把左上角 `media-card` 改成手机/证据/视频画面化组件。
4. 接入真实 BGM，按场景切换音乐。
5. 继续扩写剧情中段，让玩家有更多调查和判断。
6. 继续扩写每个结局的后日谈，提高成就感。
7. 做移动端适配检查，保证手机上文本和选项不挤。

## 19. 给后续开发者的一句话

这个项目的重点不是做成普通网页，而是让玩家感觉自己在玩一个漂亮、有氛围、有分支、有情绪回报的女性向悬疑视觉小说。修改时优先保证三件事：画面好看、选择有代价、结局有余味。
