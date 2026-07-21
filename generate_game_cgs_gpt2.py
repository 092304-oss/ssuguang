from pathlib import Path

from req_gpt_image2_base64 import generate_image_to_image


ROOT = Path("/Users/ivy/Documents/Codex/2026-06-17/web/outputs/assets")

STYLE = (
    "High-end Chinese female-oriented visual novel CG, polished mobile story game background, "
    "cinematic lighting, emotional suspense, elegant composition, rich detail, painterly-realistic anime style, "
    "premium 16:9 CG, no readable text, no logo, no watermark."
)

ASSETS = [
    (
        "cg-door-gpt2.png",
        "Rainy modern apartment corridor at night, half-broken ceiling light, dark apartment door, soaked bouquet of white roses on wet floor, small blank card near the flowers, deep blue-black atmosphere, delicate reflections, suspenseful first scene.",
    ),
    (
        "cg-phone-gpt2.png",
        "Dim modern apartment living room at 23:17, smartphone glowing on a low table beside wet white roses and keys, rain streaks on window, city lights outside, lonely female protagonist implied but not shown clearly, ominous message mood.",
    ),
    (
        "cg-album-gpt2.png",
        "Close-up of a smartphone photo album on a desk in a dark room, screen showing a nostalgic blurred photo of two young Chinese women at a convenience store window, warm memory light contrasting with cold rainy night, no legible UI text.",
    ),
    (
        "cg-zhou-door-gpt2.png",
        "Drenched young Chinese man standing outside an apartment door at night, heroine seen from behind inside the doorway, rain reflected in hallway tiles, tense reunion, romantic suspense mood, elegant otome visual novel framing.",
    ),
    (
        "cg-car-gpt2.png",
        "Inside a car or taxi at night during heavy rain, blurred Chinese city neon through wet windshield and side window, heroine's faint reflection in glass, anxious escape from the city, cinematic blue and amber lighting.",
    ),
    (
        "cg-studio-gpt2.png",
        "Abandoned photography studio interior, dusty projector beam, investigation photo wall with red strings and pinned photos, old camera equipment, broken windows, tense thriller atmosphere, no readable labels.",
    ),
    (
        "cg-mirror-gpt2.png",
        "Modern bathroom at night, fogged mirror with a vague female silhouette reflection, cracked wet tile, cold blue-green light, psychological suspense, elegant horror mood, no readable writing.",
    ),
    (
        "cg-rooftop-gpt2.png",
        "Rainy rooftop at midnight, two young Chinese women near a broken railing, one reaching to pull the other back, intense emotional rescue moment, city lights far below, tasteful, no gore, cinematic visual novel climax.",
    ),
    (
        "cg-lumian-video-gpt2.png",
        "Recorded video frame of a warm young Chinese woman in a pale yellow hoodie sitting by a convenience store window at night, gentle smile with hidden sadness, nostalgic VHS-like framing but clean, soft warm light, no readable subtitles.",
    ),
    (
        "cg-source-gpt2.png",
        "Dark desk with laptop and smartphone, delayed message program interface implied by abstract light blocks but no readable code, cyan screen glow, white rose petals and old USB drive nearby, mystery investigation mood.",
    ),
    (
        "cg-dawn-gpt2.png",
        "Soft dawn in a modern apartment after a rainy night, white roses in a glass cup, phone beside a notebook and breakfast, warm sunlight through curtains, healing visual novel ending CG, hopeful and quiet.",
    ),
    (
        "cg-cemetery-gpt2.png",
        "Quiet modern cemetery at late afternoon after rain, white roses placed before a simple memorial stone with no readable inscription, soft wind, distant city and trees, emotional healing atmosphere, not horror.",
    ),
    (
        "cg-hospital-gpt2.png",
        "Hospital crisis counseling room at dawn, warm fluorescent light, a phone and intake form on a desk, a young Chinese woman sitting with a coat over her shoulders, quiet recovery mood, no readable text.",
    ),
    (
        "cg-court-gpt2.png",
        "Modern courtroom or police evidence room, projector screen glowing softly, evidence bags, old photo and USB drive on a table, serious but restrained atmosphere, cinematic visual novel CG, no readable text.",
    ),
    (
        "cg-flower-shop-gpt2.png",
        "Small flower shop on a rainy evening, white roses wrapped in translucent paper, blank card on the counter, lonely reflective mood, warm indoor light against cold blue rain outside, no readable text.",
    ),
]


def main():
    ROOT.mkdir(parents=True, exist_ok=True)
    for filename, scene in ASSETS:
        out = ROOT / filename
        if out.exists() and out.stat().st_size > 100_000:
            print(f"[skip] {out}")
            continue
        prompt = f"{STYLE} Scene: {scene}"
        print(f"[generate] {out.name}")
        result = generate_image_to_image(prompt, target_size=(1792, 1024))
        generated = Path(result)
        if generated.resolve() != out.resolve():
            out.write_bytes(generated.read_bytes())
        print(f"[done] {out}")


if __name__ == "__main__":
    main()
