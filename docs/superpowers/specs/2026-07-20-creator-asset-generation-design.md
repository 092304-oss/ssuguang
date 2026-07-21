# Creator Asset Generation Design

## Goal

Turn the creator workbench into a usable visual-novel production flow where creators can start for free with a default background and character library, then optionally pay credits/money to batch-generate story-specific backgrounds and character sprites.

## Product Positioning

The creator should make the free path feel complete enough to publish a playable game, while clearly showing that custom batch art is a premium upgrade.

Recommended user-facing copy:

> 免费版提供默认背景 + 立绘库；批量生成对应图片属于高级能力，需要消耗积分和金额。

## Scope

This design covers the static local demo implementation. It should simulate the full paid generation flow end-to-end without real payment or real image API calls yet.

Included:

- A default background and character library that can be applied immediately.
- Auto-generated art requirements from parsed story scenes and characters.
- A premium batch-generation panel with credit/cost estimation.
- A confirm flow that simulates spending credits.
- A queued generation state with progress, success, failed, and retry states.
- Generated assets flowing back into the current project's asset library and publish payload.

Not included in this pass:

- Real payment processing.
- Real external image-generation API calls.
- Account login, server-side persistence, or cross-device sync.
- Commercial rights/legal copy beyond lightweight demo labeling.

## Recommended Approach

Use a two-layer asset model.

Layer 1: Free default library

- Available immediately after parsing.
- Includes cinematic backgrounds such as 教室, 走廊, 天台, 雨夜公寓, 操场, 医院, 摄影教室, 便利店.
- Includes reusable character sprite presets such as 清冷女主, 温柔朋友, 克制男主, 冷感少年, 危险同学.
- These assets use existing gradient/placeholder visuals in the local demo, but behave like real selectable assets.

Layer 2: Premium batch generation

- The creator can click "批量生成专属图片".
- The system groups requirements into 背景包 and 立绘包.
- It estimates credits and money before generation.
- The user confirms generation, then sees a task queue.
- Completed assets are marked "专属生成" and become selectable in the same asset panel.

This avoids making new users stuck at image upload, while still building the future paid pipeline.

## Creator Flow

1. Upload or paste a story.
2. Parse script into scenes, characters, branches, and asset requirements.
3. Enter visual arrangement.
4. The right-side asset panel shows free default assets first.
5. A premium section shows:
   - Needed backgrounds count.
   - Needed character sprites count.
   - Estimated credits.
   - Estimated price.
   - Generate button.
6. Confirm modal explains the free/premium boundary.
7. Generation task queue runs locally as a simulated async job.
8. Generated assets appear in the asset panels and can be applied to scenes.
9. Publishing saves selected/generated assets into the game payload.

## UI Components

Asset Library Header:

- Shows "免费素材库" and "专属生成" as clear sections.
- Avoids hiding free assets behind pay prompts.

Batch Generation Card:

- Title: "批量生成专属图片"
- Copy: "根据你的角色和场景一次性生成配套背景与立绘。"
- Cost line: "预计消耗 X 积分，约 ¥Y。"
- Buttons: "查看清单", "确认生成"

Generation Checklist:

- Background requirements from unique scene backgrounds.
- Character requirements from parsed speakers.
- Each item shows name, type, prompt summary, status, and retry action if failed.

Task Queue:

- Status states: pending, generating, done, failed.
- Progress shown as completed count / total count.
- Local demo generation completes by creating styled placeholder assets from prompts.

## Data Model

Extend each published game and draft state with an asset plan:

```js
{
  assets: {
    backgrounds: [
      {
        id,
        name,
        source: "free" | "generated" | "uploaded",
        prompt,
        image,
        gradient,
        status: "ready" | "pending" | "generating" | "done" | "failed",
        creditCost,
        priceCny
      }
    ],
    characters: [
      {
        id,
        name,
        source: "free" | "generated" | "uploaded",
        prompt,
        image,
        tone,
        mood,
        pose,
        status,
        creditCost,
        priceCny
      }
    ],
    generationJobs: [
      {
        id,
        createdAt,
        status,
        total,
        completed,
        credits,
        priceCny,
        itemIds
      }
    ]
  }
}
```

Cost assumptions for local demo:

- Background: 8 credits each, ¥0.80 equivalent.
- Character sprite: 12 credits each, ¥1.20 equivalent.
- Demo starting balance: 120 credits.

These values are demo defaults and can be changed later.

## Error Handling

- If there is no parsed story, disable batch generation and show "先解析剧本".
- If no custom assets are needed, show "当前素材已足够".
- If credits are insufficient, show a simulated recharge prompt instead of starting generation.
- If a task fails, keep existing free/default assets usable.
- Publishing should never be blocked by premium generation.

## Testing

Automated checks:

- Asset plan includes free defaults plus parsed story requirements.
- Cost estimator returns stable totals.
- Insufficient credits prevents generation.
- Completed generated assets are added back to the selectable library.
- Published game preserves asset metadata.

Browser smoke test:

- Paste a sample story.
- Parse it.
- Enter editor.
- Confirm free assets are selectable.
- Run batch generation.
- See progress complete.
- Apply generated background and generated character.
- Publish and open the player.

## Self-Review

- Placeholder scan: No unresolved TBD/TODO markers remain.
- Consistency check: Free assets and premium generated assets use the same asset panel and data model.
- Scope check: The design is limited to a local simulated paid-generation flow and does not require backend/payment/API integration.
- Ambiguity check: The free/premium boundary, demo credit values, and failure behavior are explicit.
