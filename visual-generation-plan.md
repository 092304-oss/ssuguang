# 《替你活到明天》视觉生成方案

## 当前结论

这个游戏应该用“剧情节点生成对应 CG / 短视频”的方式做，而不是继续手画占位 SVG。

当前页面已经支持：

- 每个节点绑定一个 `art` ID。
- 页面优先读取 `assets/cg-*.png`。
- 如果真实 CG 文件不存在，自动回退到现有 SVG。
- 所有关键 CG 和视频提示词已经写在 `art-manifest.json`。

## 为什么现在没有直接生图

当前会话没有暴露可调用的内置生图工具，也没有 `OPENAI_API_KEY`，所以不能在本地直接生成真实 CG / 视频文件。

接入后推荐生成：

- 11 张核心 CG，覆盖全剧关键情绪点。
- 4 段 4-6 秒短循环视频，用于雨、手机亮屏、投影噪点、清晨光效。

## 文件命名

把生成结果放到：

- `assets/cg-door.png`
- `assets/cg-phone.png`
- `assets/cg-album.png`
- `assets/cg-zhou-door.png`
- `assets/cg-car.png`
- `assets/cg-studio.png`
- `assets/cg-mirror.png`
- `assets/cg-rooftop.png`
- `assets/cg-lumian-video.png`
- `assets/cg-source.png`
- `assets/cg-dawn.png`

视频建议：

- `assets/video-rain-loop.mp4`
- `assets/video-phone-glow.mp4`
- `assets/video-projector-noise.mp4`
- `assets/video-dawn-light.mp4`

## 质量建议

图片：

- 16:9，至少 1600x900。
- 统一现代悬疑女性向视觉小说风格。
- 不要让画面里出现可读文字，文字由游戏 UI 承担。
- 主体不要放在底部 25% 区域，避免被字幕遮挡。

视频：

- 4-6 秒无缝循环。
- 只做环境动效，不要让人物嘴型或肢体产生奇怪变化。
- 输出 mp4/webm 均可。

## 下一步

如果有 API key 或生图工具，可以直接读取 `art-manifest.json` 批量生成 CG。
生成后放入 `assets/`，页面不需要改代码，会自动优先使用真实 CG。
