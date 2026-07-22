const STORAGE_KEY = "live-until-tomorrow-v4-dialogue-20260718";

const artManifest = {
  door: {
    image: "./assets/cg-door-gpt2.png",
    fallback: "./assets/cg-door-gpt2.png",
    prompt: "Modern Chinese visual novel CG, rainy apartment corridor at night, wet white roses lying outside a dark apartment door, cinematic composition, soft blue-gray rain light, delicate suspense mood, no text, no watermark, 16:9."
  },
  phone: {
    image: "./assets/cg-phone-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Modern suspense visual novel CG, dim apartment living room at 23:17, a smartphone glowing on a table with an ominous message notification, rain on window, moody cyan light, female-oriented mystery aesthetic, no readable text, no watermark, 16:9."
  },
  album: {
    image: "./assets/cg-album-gpt2.png",
    fallback: "./assets/cg-lumian-video-gpt2.png",
    prompt: "Visual novel CG, phone photo album open on a rainy night, old photo of two young Chinese women at a convenience store window, warm memory against cold present, cinematic close-up, emotional, no text, no watermark, 16:9."
  },
  zhouDoor: {
    image: "./assets/cg-zhou-door-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Modern romance suspense visual novel CG, drenched young man standing outside apartment door at night, heroine seen from behind, hallway rain reflection, tense reunion, cinematic lighting, no text, no watermark, 16:9."
  },
  car: {
    image: "./assets/cg-car-gpt2.png",
    fallback: "./assets/cg-car-gpt2.png",
    prompt: "Modern Chinese city at night through taxi window, heavy rain streaks, blurred neon lights, heroine reflection in glass, anxious ride to abandoned studio, high quality visual novel background, no text, no watermark, 16:9."
  },
  studio: {
    image: "./assets/cg-studio-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Abandoned photography studio interior, wall covered in investigation photos and red strings, projector dust beam, cinematic thriller atmosphere, Chinese visual novel CG, polished, no readable text, no watermark, 16:9."
  },
  mirror: {
    image: "./assets/cg-mirror-gpt2.png",
    fallback: "./assets/cg-mirror-gpt2.png",
    prompt: "Modern bathroom mirror covered with steam, horror suspense mood, reflected silhouette of a young woman, cold blue-green light, visual novel CG, no readable text, no watermark, 16:9."
  },
  rooftop: {
    image: "./assets/cg-rooftop-gpt2.png",
    fallback: "./assets/cg-rooftop-gpt2.png",
    prompt: "Rainy rooftop at night, two young Chinese women near a broken railing, one reaching to save the other, emotional suspense, cinematic visual novel CG, tasteful, no gore, no text, no watermark, 16:9."
  },
  lumianVideo: {
    image: "./assets/cg-lumian-video-gpt2.png",
    fallback: "./assets/cg-lumian-video-gpt2.png",
    prompt: "Recorded video frame of a warm young Chinese woman in yellow hoodie sitting by a convenience store window, smiling gently, nostalgic visual novel CG, VHS overlay area, emotional, no text, no watermark, 16:9."
  },
  source: {
    image: "./assets/cg-source-gpt2.png",
    fallback: "./assets/cg-source-gpt2.png",
    prompt: "Dark laptop screen and phone on desk, delayed message program interface implied but no readable code, cyan glow, mystery visual novel CG, cinematic, no text, no watermark, 16:9."
  },
  dawn: {
    image: "./assets/cg-dawn-gpt2.png",
    fallback: "./assets/cg-dawn-gpt2.png",
    prompt: "Soft dawn in modern apartment, white roses in a glass cup, phone beside a notebook, warm sunlight after a rainy night, healing visual novel ending CG, no text, no watermark, 16:9."
  },
  cemetery: {
    image: "./assets/cg-cemetery-gpt2.png",
    fallback: "./assets/cg-dawn-gpt2.png",
    prompt: "Quiet modern cemetery after rain, white roses, simple memorial stone, emotional healing visual novel CG, no readable text, no watermark, 16:9."
  },
  hospital: {
    image: "./assets/cg-hospital-gpt2.png",
    fallback: "./assets/cg-dawn-gpt2.png",
    prompt: "Hospital crisis counseling room at dawn, intake form, phone on desk, quiet recovery mood, visual novel CG, no readable text, no watermark, 16:9."
  },
  court: {
    image: "./assets/cg-court-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Modern courtroom or police evidence room, projector glow, evidence bags, USB drive, serious visual novel CG, no readable text, no watermark, 16:9."
  },
  sportsDay: {
    image: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    prompt: "Bright Chinese high school sports day, running track, banners, bleachers, summer sunlight, emotional visual novel background, no readable text, no watermark, 16:9."
  },
  flowerShop: {
    image: "./assets/cg-flower-shop-gpt2.png",
    fallback: "./assets/cg-dawn-gpt2.png",
    prompt: "Small flower shop on a rainy evening, white roses and blank card, lonely suspense visual novel CG, no readable text, no watermark, 16:9."
  },
  proTaxiShen: {
    image: "./assets/prologue-v2/cg-pro-taxi-shen-gpt2.png",
    fallback: "./assets/cg-car-gpt2.png",
    prompt: "Rainy taxi interior with Shen Zhi reflected in the window, holding Lu Mian's phone and a folded note."
  },
  proDoorHall: {
    image: "./assets/prologue-v2/cg-pro-door-hall-gpt2.png",
    fallback: "./assets/cg-door-gpt2.png",
    prompt: "Rainy apartment corridor at night, dark door under weak hallway light."
  },
  proDoorFloor: {
    image: "./assets/prologue-v2/cg-pro-door-floor-gpt2.png",
    fallback: "./assets/cg-door-gpt2.png",
    prompt: "Phone and paper note on the wet corridor floor beside white roses."
  },
  proRoomDark: {
    image: "./assets/prologue-v2/cg-pro-room-dark-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Dark rainy apartment interior after the heroine closes the door."
  },
  proPhoneCharge: {
    image: "./assets/prologue-v2/cg-pro-phone-charge-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Old phone charging on the table, screen beginning to light up."
  },
  proMemoShen: {
    image: "./assets/prologue-v2/cg-pro-memo-shen-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Shen Zhi half-lit by the old phone after reading Lu Mian's final memo."
  },
  proRealizeShen: {
    image: "./assets/prologue-v2/cg-pro-realize-shen-gpt2.png",
    fallback: "./assets/cg-mirror-gpt2.png",
    prompt: "Shen Zhi facing her reflection as she realizes the death was not an accident."
  },
  proSmsThreat: {
    image: "./assets/prologue-v2/cg-pro-sms-threat-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Threatening message thread on the old phone, screen text blurred."
  },
  proAlbumMemory: {
    image: "./assets/prologue-v2/cg-pro-album-shen-lu-gpt2.png",
    fallback: "./assets/cg-album-gpt2.png",
    prompt: "Warm memory of Shen Zhi and Lu Mian at a convenience store window."
  },
  proDraftEvidence: {
    image: "./assets/prologue-v2/cg-pro-draft-evidence-gpt2.png",
    fallback: "./assets/cg-source-gpt2.png",
    prompt: "Desk covered with unsent reports, evidence photos, laptop, and investigation notes."
  },
  proChoicePhone: {
    image: "./assets/prologue-v2/cg-pro-choice-phone-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Phone on a rainy table at the first major route choice."
  },
  proCallBai: {
    image: "./assets/prologue-v2/cg-pro-call-bai-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Late-night phone call with Bai Qi appearing guarded near the doorway."
  },
  proCallZhou: {
    image: "./assets/prologue-v2/cg-pro-call-zhou-gpt2.png",
    fallback: "./assets/cg-zhou-door-gpt2.png",
    prompt: "Rainy-night call with Zhou Xu, cool and restrained outside the doorway."
  },
  proFailAlone: {
    image: "./assets/prologue-v2/cg-pro-fail-alone-gpt2.png",
    fallback: "./assets/cg-door-gpt2.png",
    prompt: "Failure route: the heroine waits alone outside a closed door."
  },
  proFailWait: {
    image: "./assets/prologue-v2/cg-pro-fail-wait-gpt2.png",
    fallback: "./assets/cg-phone-gpt2.png",
    prompt: "Failure route: pale morning, the old phone being taken away after waiting too long."
  },
  proFailWaitBai: {
    image: "./assets/prologue-v2/cg-pro-fail-wait-bai-gpt2.png",
    fallback: "./assets/prologue-v2/cg-pro-fail-wait-gpt2.png",
    prompt: "Failure route: Bai Qi quietly takes Lu Mian's old phone away."
  },
  ch1DoorBai: {
    image: "./assets/ch1-v2/cg-ch1-door-bai-gpt2.png",
    fallback: "./assets/cg-door-gpt2.png",
    prompt: "Chapter 1 CG: Shen Zhi arrives at Lu family's rainy doorway, Bai Qi opens the door, tense intimate reunion."
  },
  ch1LivingBai: {
    image: "./assets/ch1-v2/cg-ch1-living-bai-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 1 CG: dim Lu family living room, Bai Qi keeps watch while Shen Zhi asks about Lu Mian's room."
  },
  ch1LivingThree: {
    image: "./assets/ch1-v2/cg-ch1-living-three-gpt2.png",
    fallback: "./assets/cg-zhou-door-gpt2.png",
    prompt: "Chapter 1 CG: Shen Zhi, Zhou Xu, and Bai Qi sit in Lu family's living room under rainy window light."
  },
  ch1FridgeNoteBai: {
    image: "./assets/ch1-v2/cg-ch1-fridge-note-bai-gpt2.png",
    fallback: "./assets/cg-album-gpt2.png",
    prompt: "Chapter 1 CG: Bai Qi hands Shen Zhi Lu Mian's old fridge note, a small warm memory in a cold room."
  },
  ch1BaiDoorframe: {
    image: "./assets/ch1-v2/cg-ch1-bai-doorframe-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 1 CG: Bai Qi leans in Lu Mian's bedroom doorway, guarded and sleepless, asking what Shen Zhi found."
  },
  ch1UmbrellaBai: {
    image: "./assets/ch1-v2/cg-ch1-umbrella-bai-gpt2.png",
    fallback: "./assets/cg-door-gpt2.png",
    prompt: "Chapter 1 CG: Bai Qi gives Shen Zhi a black umbrella in the rainy corridor, quiet emotional trust."
  },
  ch1LivingEmpty: {
    image: "./assets/ch1-v2/cg-ch1-living-empty-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 1 CG: empty Lu family living room at night, too tidy, rain beyond the window."
  },
  ch1RoomDoor: {
    image: "./assets/ch1-v2/cg-ch1-room-door-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 1 CG: Lu Mian's bedroom door half open, viewed from Shen Zhi's perspective."
  },
  ch1PolaroidDesk: {
    image: "./assets/ch1-v2/cg-ch1-polaroid-desk-gpt2.png",
    fallback: "./assets/cg-album-gpt2.png",
    prompt: "Chapter 1 CG: polaroid photo on Lu Mian's desk, a warm memory hidden in evidence."
  },
  ch1DeskSun: {
    image: "./assets/ch1-v2/cg-ch1-desk-sun-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 1 CG: exercise book and a small sun scribbled dark, close-up evidence."
  },
  ch1TinboxClinic: {
    image: "./assets/ch1-v2/cg-ch1-tinbox-clinic-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 1 CG: blue tin box with school badge and clinic slip, intimate suspense clue."
  },
  ch1DiaryTorn: {
    image: "./assets/ch1-v2/cg-ch1-diary-torn-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 1 CG: torn diary pages on Lu Mian's desk, unreadable fragments and heavy silence."
  },
  ch1WardrobePhone: {
    image: "./assets/ch1-v2/cg-ch1-wardrobe-phone-gpt2.png",
    fallback: "./assets/cg-source-gpt2.png",
    prompt: "Chapter 1 CG: old phone hidden deep in Lu Mian's wardrobe, discovered from a low protagonist angle."
  },
  ch1OldphoneKey: {
    image: "./assets/ch1-v2/cg-ch1-oldphone-key-gpt2.png",
    fallback: "./assets/cg-source-gpt2.png",
    prompt: "Chapter 1 CG: old phone and black umbrella on a table, the first key to the past."
  },
  ch2PhoneWhiteflash: {
    image: "./assets/ch2-v2/cg-ch2-phone-whiteflash-gpt2.png",
    fallback: "./assets/cg-source-gpt2.png",
    prompt: "Chapter 2 CG: old phone emits a white flash in a dark room as time begins to pull Shen Zhi back."
  },
  ch2TrackArriveBg: {
    image: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    prompt: "Chapter 2 CG: high school running track in morning sunlight, arrival into the past."
  },
  ch2ClassroomZhang: {
    image: "./assets/ch2-v2/cg-ch2-classroom-corridor-zhang-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 2 CG: classroom doorway and corridor, Zhang Heng seen at a distance from Shen Zhi's seat."
  },
  ch2CorridorAfter: {
    image: "./assets/ch2-v2/cg-ch2-corridor-after-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 2 CG: empty school corridor after a missed confrontation, late sun and unease."
  },
  ch2WhiteReturnTrack: {
    image: "./assets/ch2-v2/cg-ch2-white-return-track-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    prompt: "Chapter 2 CG: a hair tie against blinding sunset on the track as time snaps back."
  },
  ch2ArriveLu: {
    image: "./assets/ch2-v2/cg-ch2-arrive-lu-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    prompt: "Chapter 2 CG: sixteen-year-old Lu Mian turns back on the high school track, bright and alive."
  },
  ch2SportsPin: {
    image: "./assets/ch2-v2/cg-ch2-sports-pin-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    prompt: "Chapter 2 CG: Lu Mian pins a race number for Shen Zhi during sports day, soft romantic closeness."
  },
  ch2FinishLu: {
    image: "./assets/ch2-v2/cg-ch2-finish-lu-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    prompt: "Chapter 2 CG: Lu Mian runs toward the finish line in sunlight, hopeful and vivid."
  },
  ch2StoreTrio: {
    image: "./assets/ch2-v2/cg-ch2-store-trio-gpt2.png",
    fallback: "./assets/cg-album-gpt2.png",
    prompt: "Chapter 2 CG: Shen Zhi, Lu Mian, and Bai Qi at the school store, playful school-life warmth."
  },
  ch2SportsBaiWater: {
    image: "./assets/ch2-v2/cg-ch2-sports-bai-water-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    prompt: "Chapter 2 CG: Bai Qi brings water on sports day while Lu Mian and Shen Zhi laugh together."
  },
  ch2LibraryZhou: {
    image: "./assets/ch2-v2/cg-ch2-library-zhou-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 2 CG: Zhou Xu in the school library, restrained and observant beside Shen Zhi."
  },
  ch2MorningFood: {
    image: "./assets/ch2-v2/cg-ch2-morning-food-gpt2.png",
    fallback: "./assets/cg-album-gpt2.png",
    prompt: "Chapter 2 CG: Shen Zhi shares breakfast with Lu Mian in classroom light, gentle bond-building."
  },
  ch2CorridorConfront: {
    image: "./assets/ch2-v2/cg-ch2-corridor-confront-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 2 CG: tense corridor confrontation with Zhang Heng, viewed from Shen Zhi's limited perspective."
  },
  ch2FollowMirror: {
    image: "./assets/ch2-v2/cg-ch2-follow-mirror-gpt2.png",
    fallback: "./assets/cg-mirror-gpt2.png",
    prompt: "Chapter 2 CG: restroom mirror scene, Shen Zhi quietly follows Lu Mian without pushing her."
  },
  ch2EveningHairtie: {
    image: "./assets/ch2-v2/cg-ch2-evening-hairtie-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-track-arrive-bg-gpt2.png",
    prompt: "Chapter 2 CG: Lu Mian gives Shen Zhi a hair tie at evening track, a small beautiful promise."
  },
  ch3LuBox: {
    image: "./assets/ch3-v2/cg-ch3-lu-box-gpt2.png",
    fallback: "./assets/ch1-v2/cg-ch1-tinbox-clinic-gpt2.png",
    prompt: "Chapter 3 CG: Shen Zhi and Bai Qi open Lu Mian's old keepsake box in the rainy living room."
  },
  ch3YearbookTorn: {
    image: "./assets/ch3-v2/cg-ch3-yearbook-torn-gpt2.png",
    fallback: "./assets/cg-court-gpt2.png",
    prompt: "Chapter 3 CG: torn school yearbook page in the exhibition room, clue-focused and not omniscient."
  },
  ch3ThreatWindow: {
    image: "./assets/ch3-v2/cg-ch3-threat-window-gpt2.png",
    fallback: "./assets/prologue-v2/cg-pro-sms-threat-gpt2.png",
    prompt: "Chapter 3 CG: old phone threat in the dark exhibition room with only an ambiguous window reflection."
  },
  ch3BackupTrio: {
    image: "./assets/ch3-v2/cg-ch3-backup-trio-gpt2.png",
    fallback: "./assets/ch1-v2/cg-ch1-living-three-gpt2.png",
    prompt: "Chapter 3 CG: Shen Zhi, Bai Qi, and Zhou Xu back up evidence together, fragile present-day alliance."
  },
  ch4NoteDesk: {
    image: "./assets/ch4-v2/cg-ch4-note-desk-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-morning-food-gpt2.png",
    prompt: "Chapter 4 CG: folded threatening note on Lu Mian's desk, seen from Shen Zhi's limited viewpoint."
  },
  ch4ArtroomPromise: {
    image: "./assets/ch4-v2/cg-ch4-artroom-promise-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-evening-hairtie-gpt2.png",
    prompt: "Chapter 4 CG: Shen Zhi and Lu Mian share a warm art-room promise before the case escalates."
  },
  ch4WallUpdate: {
    image: "./assets/ch4-v2/cg-ch4-wall-update-gpt2.png",
    fallback: "./assets/cg-source-gpt2.png",
    prompt: "Chapter 4 CG: anonymous wall upload screen, blurred and clue-focused."
  },
  ch4PhotoRoomZhang: {
    image: "./assets/ch4-v2/cg-ch4-photo-room-zhang-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-corridor-confront-gpt2.png",
    prompt: "Chapter 4 CG: Lu Mian and Shen Zhi face Zhang Heng in the photography club room."
  },
  ch5FlowerOrder: {
    image: "./assets/ch5-v2/cg-ch5-flower-order-gpt2.png",
    fallback: "./assets/cg-flower-shop-gpt2.png",
    prompt: "Chapter 5 CG: present-day white rose order clue in the rainy flower shop."
  },
  ch5StudioWall: {
    image: "./assets/ch5-v2/cg-ch5-studio-wall-gpt2.png",
    fallback: "./assets/cg-studio-gpt2.png",
    prompt: "Chapter 5 CG: abandoned photography studio evidence wall and original files."
  },
  ch5EnvelopeBai: {
    image: "./assets/ch5-v2/cg-ch5-envelope-bai-gpt2.png",
    fallback: "./assets/ch1-v2/cg-ch1-bai-doorframe-gpt2.png",
    prompt: "Chapter 5 CG: Bai Qi holds Lu Mian's sealed envelope in the abandoned studio."
  },
  ch5CallRecording: {
    image: "./assets/ch5-v2/cg-ch5-call-recording-gpt2.png",
    fallback: "./assets/ch3-v2/cg-ch3-backup-trio-gpt2.png",
    prompt: "Chapter 5 CG: Shen Zhi, Bai Qi, and Zhou Xu record the unknown call in present-day casual clothes."
  },
  ch6BroadcastRoom: {
    image: "./assets/ch6-v2/cg-ch6-broadcast-room-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-follow-mirror-gpt2.png",
    prompt: "Chapter 6 CG: Shen Zhi reaches Lu Mian in the broadcast room with the hair tie promise."
  },
  ch6StaircaseZhang: {
    image: "./assets/ch6-v2/cg-ch6-staircase-zhang-gpt2.png",
    fallback: "./assets/ch2-v2/cg-ch2-corridor-confront-gpt2.png",
    prompt: "Chapter 6 CG: Zhang Heng blocks the stairwell while Shen Zhi keeps close to Lu Mian."
  },
  ch6RooftopReach: {
    image: "./assets/ch6-v2/cg-ch6-rooftop-reach-gpt2.png",
    fallback: "./assets/cg-rooftop-gpt2.png",
    prompt: "Chapter 6 CG: rooftop rescue by offering the hair tie, not forcing Lu Mian."
  },
  ch6HospitalDawn: {
    image: "./assets/ch6-v2/cg-ch6-hospital-dawn-gpt2.png",
    fallback: "./assets/cg-hospital-gpt2.png",
    prompt: "Chapter 6 CG: good ending dawn in the hospital counseling room with Lu Mian alive."
  }
};

const endings = {
  rescue: {
    title: "结局 A：替你活到明天",
    hint: "成功解救陆眠",
    detail: "你穿越回去，改变了那一天，陆眠活了下来。",
    badge: "真实结局",
    thumbnail: "ch6HospitalDawn",
    route: "在第四章做出正确选择，阻止悲剧发生。",
    meaning: "真相被说出口以后，陆眠终于不再独自背着过去。沈栀明白，所谓替她活到明天，不是替她承受一切，而是在她坠落前走到她身边。",
    after: "陆眠开始接受治疗，白祁不再把沉默误当成懂事，周叙也交出了他曾目击的那一小块拼图。很多事还要慢慢修复，但明天第一次不是惩罚。",
    key: "早一点来，刚刚好。",
    conflict: "沈栀必须在不暴露穿越秘密的前提下，让高中时代的陆眠相信她，也要在现实里把林中留下的证据拼成完整链条。",
    cost: "她失去了继续把陆眠的死解释成意外的退路，也不得不面对自己曾经错过的每一个求救信号。",
    closure: "天亮时，陆眠站在花店门口，递给沈栀一束没有写卡片的白玫瑰。她说：这次，明天见。"
  },
  fail: {
    title: "结局 B：没来得及",
    hint: "干预失败",
    detail: "你知道了真相，但没能改变结局。",
    badge: "坏结局",
    thumbnail: "cemetery",
    route: "关键选择选错，干预失败。",
    meaning: "真相不是只要被发现就会自动改变命运。错过关键证据、误判陆眠的恐惧，都会让沈栀再次回到那场雨里。",
    after: "旧手机熄灭，白祁拿走了遗物，周叙也无法再补上缺失的时间。沈栀知道自己离答案很近，可陆眠已经等不到她。",
    key: "有些事，晚一步就是永远。",
    conflict: "沈栀试图用成年后的判断去解释高中时代的伤口，却忽略了陆眠真正害怕的并不是被看见，而是被看见之后依然无人相信。",
    cost: "她保住了自己的安全距离，却失去了最后一次抵达陆眠身边的机会。",
    closure: "墓园的风很轻，手机屏幕再也没有亮起。沈栀把那句没能说出口的道歉，留在了雨声里。"
  }
};

function buildChapterTwoReturnText() {
  const fragments = [];

  if (state.baiClue > 0) {
    fragments.push("白祁替她挡过一阵风，但他自己也没站稳。");
  }
  if (state.zhouClue > 0) {
    fragments.push("周叙见过那一幕，也伸过一次手。");
  }
  if (state.baiBond > 0) {
    fragments.push("白祁看你的时候，不再只是看一个来查旧事的人。");
  }
  if (state.zhouBond > 0) {
    fragments.push("周叙说话还是少，但他没有把你挡在外面。");
  }
  if (state.luTrust >= 3) {
    fragments.push("陆眠记住了你站在她旁边，也记住了你没有把她当成一桩案子。");
  } else if (state.luTrust > 0) {
    fragments.push("陆眠对你松开了一点手指，但还没把全部秘密交给你。");
  }
  if (state.memoryCount > 0) {
    fragments.push(`你带回了 ${state.memoryCount} 块回声，它们开始像同一段夏天。`);
  }
  if (!fragments.length) {
    fragments.push("你只摸到了轮廓，还没摸到真正的伤口。");
  }

  return `你坐在公寓地板上，手机还捏在手里。屏幕上，发给那个号码的消息显示已发送。没有回复。${fragments.join(" ")}然后，旧手机忽然又亮了一次。`;
}

function buildChapterTwoCliffhangerText() {
  const emotionalHook = state.luTrust >= 3
    ? "陆眠记住了你站在她身边时的样子。"
    : "你记住了她在阳光里抬起头的那一瞬间。";
  const clueHook = state.baiClue > 0 && state.zhouClue > 0
    ? "白祁和周叙都碰到过边缘，只是谁都还没摸到中心。"
    : state.baiClue > 0
      ? "白祁守着门，但门后还有一层没揭开的东西。"
      : state.zhouClue > 0
        ? "周叙拦住过一次，却没拦住后来所有的沉默。"
        : "你还不知道谁在门里，谁在门外。";

  return `${emotionalHook}${clueHook}桌上，那部旧手机的开机画面亮着。下一秒，一条陌生短信弹了出来：别再往回走。你已经来过一次了。`;
}

const script = {
  start: {
    art: "proTaxiShen",
    scene: "taxi",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 今晚",
    media: { type: "objective", title: "首要任务", body: "知晓陆眠过去的真相，并解救她。关键线索选错，则任务失败。" },
    text: "我叫沈栀，二十七岁，剪辑师。今晚十一点，我坐在回家的出租车后座，雨水把车窗外的灯拉成一条一条的线。",
    choices: [
      { text: "看向车窗里的自己", next: "pro_rain_02" }
    ]
  },
  pro_rain_02: {
    art: "proTaxiShen",
    scene: "taxi",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 回家路",
    text: "五个月前，陆眠死了。所有人都说那是意外。我也试着接受过这个说法，只是怎么都接受不了。",
    choices: [
      { text: "下车，回家", next: "pro_hall_01" }
    ]
  },
  pro_hall_01: {
    art: "proDoorHall",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 公寓门口",
    text: "三楼走廊的灯慢半拍才亮。我家门口放着一个东西。不是快递，也不是外卖。",
    choices: [
      { text: "蹲下查看", next: "pro_hall_02" }
    ]
  },
  pro_hall_02: {
    art: "proDoorFloor",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 门口的东西",
    media: { type: "note", title: "门口遗留物", body: "一部手机。屏幕朝下。旁边压着一张纸条。" },
    text: "是一部手机，屏幕朝下。旁边压着一张纸条。我拿起来，看见白祁的字。",
    choices: [
      { text: "读纸条", next: "pro_note_01" }
    ]
  },
  pro_note_01: {
    art: "proDoorFloor",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "序章 · 白祁的纸条",
    media: { type: "note", title: "白祁的字", body: "姐姐的手机。你应该看看。我找了五个月，我觉得你应该知道。" },
    text: "姐姐的手机。你应该看看。我找了五个月，我觉得你应该知道。",
    choices: [
      { text: "拿起手机进屋", next: "pro_room_01" }
    ]
  },
  pro_room_01: {
    art: "proRoomDark",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 客厅",
    text: "我把手机拿进屋，门在身后合上。客厅没有开灯，雨声贴着玻璃往下滑。",
    choices: [
      { text: "打开客厅灯", next: "pro_room_02" }
    ]
  },
  pro_room_02: {
    art: "proPhoneCharge",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 陆眠的手机",
    media: { type: "note", title: "手机外观", body: "浅蓝色手机壳，右下角有一个小裂缝。" },
    text: "灯亮后，我终于看清它。陆眠的手机。浅蓝色手机壳右下角有一道小裂缝，是去年她说等裂大了再换的那一道。",
    choices: [
      { text: "插上充电线", next: "pro_charge_01" }
    ]
  },
  pro_charge_01: {
    art: "proPhoneCharge",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 等它开机",
    text: "我把手机插上充电线。开机动画转了很久，久到我开始怀疑它是不是也已经坏了。",
    choices: [
      { text: "继续等待", next: "pro_charge_02" }
    ]
  },
  pro_charge_02: {
    art: "proPhoneCharge",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 开机",
    text: "屏幕终于亮了。没有锁屏密码。陆眠以前总说，手机不设密码的人不是坦荡，是不怕丢。那时候我笑她，现在笑不出来。",
    choices: [
      { text: "打开备忘录", next: "pro_memo_01" }
    ]
  },
  pro_memo_01: {
    art: "proMemoShen",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 最后一条备忘录",
    media: { type: "note", title: "备忘录 · 死前两天", body: "我好害怕。我不知道我还能撑多久。有一件事我从来没告诉过任何人。我以为我扛过去了。但它一直在。它一直在。" },
    text: "最后一条备忘录创建于她死前两天。第一行只有四个字：我好害怕。我盯着它看了很久，几乎怀疑自己看错了。",
    choices: [
      { text: "继续看下去", next: "pro_memo_02" }
    ]
  },
  pro_memo_02: {
    art: "proMemoShen",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 她没有说完",
    text: "陆眠总是这样。我问她怎么样，她说还好；我再问，她说真的还好。然后我就信了。现在那句有一件事我从来没告诉过任何人，像按住了我的喉咙。",
    choices: [
      { text: "意识到不对劲", next: "pro_realize_01" }
    ]
  },
  pro_realize_01: {
    art: "proRealizeShen",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 不是意外",
    text: "陆眠的死不是意外。至少不是他们告诉我的那种意外。一个人在死前两天写下我不知道我还能撑多久，不可能只是因为一场突发事故。",
    choices: [
      { text: "继续翻手机", next: "pro_search_01" }
    ]
  },
  pro_search_01: {
    art: "proSmsThreat",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 找那件事",
    text: "我翻她的短信、微信、相册，一条一条找她没说出口的事。每点开一个图标，都像在推开一扇我本来没有资格打开的门。",
    choices: [
      { text: "查看短信", next: "pro_sms_01" }
    ]
  },
  pro_sms_01: {
    art: "proSmsThreat",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 陌生号码",
    media: { type: "sms", title: "陌生号码短信记录", body: "你换号也没用。\n你在哪。\n你今天为什么不回消息。\n昨天的事你别想着去说，没人会信你的。" },
    text: "短信里有一个陌生号码。最近一条是：你换号也没用。再往上，是：昨天的事你别想着去说，没人会信你的。",
    choices: [
      { text: "继续往上翻", next: "pro_sms_02" }
    ]
  },
  pro_sms_02: {
    art: "proSmsThreat",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 三个月",
    text: "我往上翻了很久。那个号码发来的消息密密麻麻，跨度三个月。陆眠很少回，偶尔只回好，或者知道了。",
    choices: [
      { text: "查看最早一条", next: "pro_sms_03" }
    ]
  },
  pro_sms_03: {
    art: "proSmsThreat",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 林中",
    media: { type: "sms", title: "最早一条", body: "新来的，我带你熟悉一下。" },
    text: "最早一条是：新来的，我带你熟悉一下。我查到那个号码属于林中，陆眠上一份工作的直属上司。",
    choices: [
      { text: "想起她说过的还好", next: "pro_work_01" }
    ]
  },
  pro_work_01: {
    art: "proAlbumMemory",
    scene: "living",
    effect: "photo",
    speaker: "沈栀",
    chapter: "序章 · 还好",
    text: "她在那家公司待了十个月。那时我问她工作怎么样，她说：还好，上司有点烦，项目有点累。",
    choices: [
      { text: "继续想下去", next: "pro_work_02" }
    ]
  },
  pro_work_02: {
    art: "proAlbumMemory",
    scene: "living",
    effect: "photo",
    speaker: "沈栀",
    chapter: "序章 · 你信了",
    text: "还好。还好。还好。我现在才发现，她把很多求救信号都包进这两个字里递给我，而我一次次信了。",
    choices: [
      { text: "查看草稿箱", next: "pro_draft_01" }
    ]
  },
  pro_draft_01: {
    art: "proDraftEvidence",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 举报信",
    media: { type: "note", title: "草稿箱", body: "三封写好但没有发出的举报信。格式完整，证据附件齐全。" },
    text: "草稿箱里有三封写好没发出去的举报信。格式完整，附件齐全，就差按下发送。",
    choices: [
      { text: "继续看草稿", next: "pro_draft_02" }
    ]
  },
  pro_draft_02: {
    art: "proDraftEvidence",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 没发出去",
    text: "她在收集证据。她准备好了。然后她死了，什么都没发出去。我的视线又回到备忘录那句话：有一件事我从来没告诉过任何人。",
    choices: [
      { text: "重新判断线索", next: "pro_logic_01" }
    ]
  },
  pro_logic_01: {
    art: "proRealizeShen",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 不是这件事",
    text: "不是这件事。林中的事很可怕，但她有证据，也知道怎么处理。备忘录指向的是另一件事，更早，更深。",
    choices: [
      { text: "继续思考", next: "pro_logic_02" }
    ]
  },
  pro_logic_02: {
    art: "proRealizeShen",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 更早的事",
    text: "我不知道那是什么。我只知道，陆眠大学以后从来不提高中。唯独那几年，她像从人生里剪掉了。",
    choices: [
      { text: "决定下一步", next: "pro_choice" }
    ]
  },
  pro_choice: {
    art: "proChoicePhone",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 选择",
    media: { type: "objective", title: "首要任务", body: "找到陆眠过去真相。选错线索，任务失败。" },
    text: "雨还在下。手机屏幕暗了一次，又被我按亮。现在我只能选一条路。",
    choices: [
      { text: "打给白祁，问他知道多少", next: "pro_call_bai_01" },
      { text: "打给周叙", next: "pro_call_zhou_01" },
      { text: "自己去陆家", next: "pro_fail_alone_01" },
      { text: "今晚先不动，等明天", next: "pro_fail_wait_01" }
    ]
  },
  pro_call_bai_01: {
    art: "proCallBai",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "序章 · 打给白祁",
    text: "白祁接得很快。电话那头安静得厉害，像他一直在等。",
    choices: [
      { text: "继续", next: "pro_call_bai_02" }
    ]
  },
  pro_call_bai_02: {
    art: "proCallBai",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "序章 · 问白祁",
    text: "白祁，她到底有什么事瞒着我？",
    choices: [
      { text: "继续听", next: "pro_call_bai_03" }
    ]
  },
  pro_call_bai_03: {
    art: "proCallBai",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "序章 · 沉默",
    text: "电话那头停了很久。久到我以为信号断了，白祁才终于开口。",
    choices: [
      { text: "继续听", next: "pro_call_bai_04" }
    ]
  },
  pro_call_bai_04: {
    art: "proCallBai",
    scene: "living",
    effect: "message",
    speaker: "白祁",
    chapter: "序章 · 答案在家里",
    text: "我不确定。她提过那段时间很难，但没说细节。我问她，她不说。可我觉得答案在家里。她留了很多东西，我没动。你来一趟吧。我在。",
    choices: [
      { text: "去陆家", next: "ch1_start" }
    ]
  },
  pro_call_zhou_01: {
    art: "proCallZhou",
    scene: "living",
    effect: "rain",
    speaker: "旁白",
    chapter: "序章 · 打给周叙",
    text: "周叙接了，沉默了两秒才开口：沈栀。你们已经很久没有在深夜打过电话了。分手以后，你们把所有能避免的时间点都避开了，深夜尤其是其中之一。",
    choices: [
      { text: "问他", next: "pro_call_zhou_02" }
    ]
  },
  pro_call_zhou_02: {
    art: "proCallZhou",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "序章 · 她的过往",
    text: "你没有寒暄，直接问：周叙，她的过往……你知道多少？他没有立刻回答。你听见那边有钥匙碰到桌面的声音，像他站了起来，又像他只是下意识抓住了什么东西。",
    choices: [
      { text: "继续", next: "pro_call_zhou_03" }
    ]
  },
  pro_call_zhou_03: {
    art: "proCallZhou",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "序章 · 他也不知道",
    text: "他说：她从来不提高中。我问过一次，她直接换话题，我就没再问。停顿以后，他又说：但那个换话题的方式……我一直觉得那里有什么东西。你说：我想去陆家看看。他没有迟疑：我陪你去。",
    choices: [
      { text: "和周叙一起去陆家", next: "ch1_start_zhou" }
    ]
  },
  pro_fail_alone_01: {
    art: "proFailAlone",
    scene: "home",
    effect: "rain",
    speaker: "旁白",
    chapter: "任务失败 · 门外",
    text: "你没有打给任何人，直接出门。走廊的灯感应亮了，雨声从楼道口传进来。你到了陆家楼下，按了对讲机。里面很久没有回应。",
    choices: [
      { text: "继续等待", next: "pro_fail_alone_02" }
    ]
  },
  pro_fail_alone_02: {
    art: "proFailAlone",
    scene: "home",
    effect: "rain",
    speaker: "陆眠妈妈",
    chapter: "任务失败 · 陆家",
    text: "然后是陆眠妈妈的声音，很短：谁？你报了名字。又是一段沉默。她说：现在很晚了。门没有开。那句话不是拒绝，是提醒你，你在陆家眼里没有进入她遗物的资格。",
    choices: [
      { text: "继续", next: "pro_fail_alone_03" }
    ]
  },
  pro_fail_alone_03: {
    art: "proFailAlone",
    scene: "home",
    effect: "rain",
    speaker: "旁白",
    chapter: "任务失败",
    text: "陆家不会在深夜让一个人独自进来。有些门，需要有人陪你才能推开。你在楼下站到雨停，手机电量一点点掉下去，线索断在门外。",
    choices: [
      { text: "回到首页", action: "title" }
    ]
  },
  pro_fail_wait_01: {
    art: "proRoomDark",
    scene: "living",
    effect: "rain",
    speaker: "旁白",
    chapter: "任务失败 · 等明天",
    text: "你把手机放回桌上。太晚了。你太累了。你告诉自己，等明天想清楚了再说。你去洗了把脸，躺到床上。雨声一直在，你盯着天花板，睡不着，但身体不让你动。",
    choices: [
      { text: "天亮了", next: "pro_fail_wait_02" }
    ]
  },
  pro_fail_wait_02: {
    art: "proFailWait",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "任务失败 · 手机被取走",
    text: "第二天早上九点多，白祁发消息：栀，我来取一下姐的手机。她之前交代过，那个手机不能放太久。你看着手机，没有来得及说什么，白祁已经在楼下了。",
    choices: [
      { text: "继续", next: "pro_fail_wait_03" }
    ]
  },
  pro_fail_wait_03: {
    art: "proFailWaitBai",
    scene: "living",
    effect: "rain",
    speaker: "旁白",
    chapter: "任务失败",
    text: "他上来，拿走了手机，在门口站了一秒，说：有想问的，随时找我。然后走了。桌上什么都没有了。线索就这样断了。等待，有时候不是稳妥，是放弃。",
    choices: [
      { text: "回到首页", action: "title" }
    ]
  },
  ch1_start: {
    art: "door",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第一章 · 陆家门口",
    text: "我来了。电梯门在身后合上，走廊很安静。我站在陆家门口，抬手敲门，指节碰到门板时，心里先响了一下。",
    choices: [
      { text: "再敲一次：白祁，是我", next: "ch1_start_02" }
    ]
  },
  ch1_start_02: {
    art: "door",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第一章 · 白祁开门",
    text: "进来吧。门一直没锁。白祁站在门口，头发有点乱，眼睛却很清醒，像他早就在等我。",
    choices: [
      { text: "进门，先问一句：你一直醒着？", next: "ch1_living_01" }
    ]
  },
  ch1_start_zhou: {
    art: "zhouDoor",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第一章 · 周叙同行",
    text: "周叙把车停在小区外，一路都没逼我说话。我们上楼时，雨还粘在伞骨上，像没来得及放下的心事。",
    choices: [
      { text: "抬手敲门，顺便说：他陪我来的", next: "ch1_start_zhou_02" }
    ]
  },
  ch1_start_zhou_02: {
    art: "zhouDoor",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第一章 · 三个人",
    text: "……进来吧。白祁看了我一眼，又看了周叙一眼，语气没有多余起伏，可门还是让开了。",
    choices: [
      { text: "和周叙一起进去", next: "ch1_living_zhou_01" }
    ]
  },
  ch1_living_01: {
    art: "studio",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第一章 · 陆家客厅",
    text: "客厅没开主灯，只有一盏小夜灯。屋子太整齐了，整齐得像在故意装作什么都没发生过。",
    choices: [
      { text: "问白祁：她的房间还在吗", next: "ch1_living_02" }
    ]
  },
  ch1_living_02: {
    art: "studio",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第一章 · 体面",
    text: "还在。没人动她的房间。白祁顿了一下，又补了一句：阿姨说，人走了也要体面。所以很多东西都收得很快。",
    choices: [
      { text: "看着他，问：你也觉得该这样吗", next: "ch1_living_03" }
    ]
  },
  ch1_living_03: {
    art: "studio",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第一章 · 她的房间",
    text: "她房间在里面。我没动她的东西。大部分没动。白祁说完这句，像怕我不信，又把手收回去了。",
    choices: [
      { text: "去陆眠房间", next: "ch1_living_warm_01" }
    ]
  },
  ch1_living_zhou_01: {
    art: "studio",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第一章 · 陆家客厅",
    text: "我和周叙坐下时，白祁也没赶人。三个人都没先开口，像谁先说话，谁就会先把伤口掀开。",
    choices: [
      { text: "问：你们昨天有没有人碰过她的房间", next: "ch1_living_zhou_02" }
    ]
  },
  ch1_living_zhou_02: {
    art: "studio",
    scene: "home",
    effect: "rain",
    speaker: "周叙",
    chapter: "第一章 · 体面",
    text: "没有。周叙看着电视柜边上的照片，说得很慢：我们来的时候，门口就已经这样了。白祁没说话，只是把杯子往前推了一点。",
    choices: [
      { text: "顺着话问：那她的房间呢", next: "ch1_living_zhou_03" }
    ]
  },
  ch1_living_zhou_03: {
    art: "studio",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第一章 · 她的房间",
    text: "她房间在里面。我没动她的东西。大部分没动。白祁这次说得更低，像在给我留一条能走过去的路。",
    choices: [
      { text: "去陆眠房间", next: "ch1_living_warm_01" }
    ]
  },
  ch1_living_warm_01: {
    art: "album",
    scene: "home",
    effect: "photo",
    speaker: "白祁",
    chapter: "第一章 · 别空腹喝咖啡",
    stateDelta: { luTrust: 1, baiBond: 1, memoryCount: 1 },
    media: { type: "note", title: "冰箱便利贴", body: "栀，别空腹喝咖啡。冰箱第二层有酸奶。" },
    text: "等一下。白祁从冰箱门上撕下一张快褪色的便利贴递给我：她以前贴的。她总知道你会忘记吃东西。",
    choices: [
      { text: "收好便利贴，轻声说谢谢", next: "ch1_room_01" }
    ]
  },
  ch1_room_01: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第一章 · 房间门口",
    text: "陆眠的房门虚掩着。门缝里有一点旧书和洗衣液的味道，我站在门口，先没进去。",
    choices: [
      { text: "推门进去", next: "ch1_room_02" }
    ]
  },
  ch1_room_02: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第一章 · 房间陈设",
    text: "房间很小，但东西摆得很齐。床、书桌、书架、衣柜，像被人小心收过一遍，又没收完。",
    choices: [
      { text: "往里走一步", next: "ch1_room_03" }
    ]
  },
  ch1_room_03: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第一章 · 没清完的痕迹",
    text: "这里也被整理过，但不彻底。有人只收了表面，没敢把真正重要的东西拿走。",
    choices: [
      { text: "先看书桌角落", next: "ch1_room_memory_01" }
    ]
  },
  ch1_room_memory_01: {
    art: "album",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 她还在这里",
    stateDelta: { luTrust: 1, memoryCount: 1 },
    media: { type: "photo", title: "便利店合照", body: "陆眠和沈栀隔着玻璃坐着，桌上放着两杯热饮。" },
    text: "书桌角落压着一张拍立得。照片里我和陆眠坐在便利店靠窗的位置，她没看镜头，只是在看我。背面写着：别把今天也熬成明天。",
    choices: [
      { text: "把照片收好", next: "ch1_choose_search" }
    ]
  },
  ch1_choose_search: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第一章 · 先看哪里",
    media: { type: "objective", title: "线索搜索", body: "这一组选项都能继续，只会发现不同线索。真正的关键选择在后面。" },
    text: "房间里还有很多东西没看完。我得一个个问过去。",
    choices: [
      { text: "看书桌抽屉", next: "ch1_desk_01" },
      { text: "看床头柜", next: "ch1_bedside_01" },
      { text: "看书架", next: "ch1_shelf_01" }
    ]
  },
  ch1_desk_01: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 书桌抽屉",
    text: "抽屉里有回形针、橡皮、电池，还有一片没拆开的创可贴。太普通了，普通得像她明天还会回来继续用。",
    choices: [
      { text: "继续翻抽屉", next: "ch1_desk_02" }
    ]
  },
  ch1_desk_02: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 练习册",
    text: "中间那格是几本练习册，封面写着陆眠的名字。她的字总是很稳，最后一笔却会轻一点，像怕把纸戳疼。",
    choices: [
      { text: "翻到背面，看那个太阳", next: "ch1_desk_03" }
    ]
  },
  ch1_desk_03: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 被涂掉的小太阳",
    stateDelta: { memoryCount: 1 },
    media: { type: "photo", title: "练习册背面", body: "右下角的小太阳被铅笔反复涂黑，纸面几乎被压破。" },
    text: "右下角画着一个小太阳，又被反复涂黑，纸面都快压破了。那不是随手一划，更像是有人想把某个念头按回去。",
    choices: [
      { text: "把东西放回原位", next: "ch1_bai_appears_01" }
    ]
  },
  ch1_bedside_01: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 床头柜",
    text: "床头柜上放着一瓶空了的护手霜。下面那层有个深蓝色铁皮盒，盖子压得很紧。",
    choices: [
      { text: "打开铁皮盒", next: "ch1_bedside_02" }
    ]
  },
  ch1_bedside_02: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 铁皮盒",
    text: "盒子里只有两样东西：一枚高中校徽，一张心理科挂号单。日期是高二下学期。",
    choices: [
      { text: "翻看挂号单背面", next: "ch1_bedside_03" }
    ]
  },
  ch1_bedside_03: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 我去了。没用。",
    stateDelta: { memoryCount: 1 },
    media: { type: "note", title: "心理科挂号单", body: "背面写着：我去了。没用。" },
    text: "背面只有四个字：我去了。没用。字写得很急，像那天她已经不想再解释第二遍。",
    choices: [
      { text: "把盒子放回去", next: "ch1_bai_appears_01" }
    ]
  },
  ch1_shelf_01: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 书架",
    text: "书架很整齐，最下面却压着几本横放的书。像是故意藏起来的。",
    choices: [
      { text: "抽出日记本", next: "ch1_shelf_02" }
    ]
  },
  ch1_shelf_02: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 日记第一页",
    stateDelta: { memoryCount: 1 },
    media: { type: "note", title: "日记本 · 高二上学期九月", body: "如果有人能替我记住这件事就好了。但没有人会信。所以还是算了。" },
    text: "日记本没有名字。第一页只写着一句话：如果有人能替我记住这件事就好了。",
    choices: [
      { text: "继续往后翻", next: "ch1_shelf_03" }
    ]
  },
  ch1_shelf_03: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 撕掉的页",
    text: "很多页被撕掉了，只剩锯齿形的边。剩下的那几页里，有一句话只写到一半：今天他又——",
    choices: [
      { text: "先合上日记", next: "ch1_shelf_04" }
    ]
  },
  ch1_shelf_04: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 暂时不看完",
    text: "我没有继续看完。不是不想知道，是我忽然明白，有些东西不能硬拆开。",
    choices: [
      { text: "站起来", next: "ch1_bai_appears_01" }
    ]
  },
  ch1_bai_appears_01: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 门框里的人",
    text: "别翻得太快。你找到什么了？白祁靠在门框上，像早就知道我会把房间看一遍。",
    choices: [
      { text: "回答他", next: "ch1_bai_appears_02" }
    ]
  },
  ch1_bai_appears_02: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 找到什么了",
    text: "白祁问得很轻：找到什么了？我听得出来，他不是想听结果，是想确认我有没有碰到她最不想被看见的那部分。",
    choices: [
      { text: "回答白祁", next: "ch1_choose_answer" }
    ]
  },
  ch1_choose_answer: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第一章 · 怎么回答",
    text: "现在轮到我问了。我可以问高中，也可以先问他有没有好好睡觉。",
    choices: [
      { text: "你知道高中发生了什么吗", next: "ch1_ans_a_01" },
      { text: "你这几天是不是没睡", next: "ch1_ans_b_01" },
      { text: "先别站着，进来坐一下", next: "ch1_ans_c_01" }
    ]
  },
  ch1_ans_a_01: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 知道一点",
    text: "知道一点，但不是全部。姐不让我查。她说那些事都过去了，没必要翻旧账。",
    choices: [
      { text: "继续听", next: "ch1_ans_a_02" }
    ]
  },
  ch1_ans_a_02: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 过去了",
    text: "后来我才明白，她说过去了，不是真的过去了。她只是觉得，说了也没用。",
    choices: [
      { text: "去衣柜找", next: "ch1_wardrobe_01" }
    ]
  },
  ch1_ans_b_01: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 没怎么睡",
    stateDelta: { baiBond: 1 },
    text: "睡了一点，不多。她出事以后，我总在这儿，怕屋子太安静。",
    choices: [
      { text: "继续听", next: "ch1_ans_b_02" }
    ]
  },
  ch1_ans_b_02: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 旧手机",
    text: "衣柜最里面有部旧手机。高中的。我没开过，觉得不该是我先看。",
    choices: [
      { text: "去衣柜找", next: "ch1_wardrobe_01" }
    ]
  },
  ch1_ans_c_01: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第一章 · 不回答",
    text: "我没回答，只往旁边让了一点。白祁坐下来，没走，也没再问。",
    choices: [
      { text: "继续找", next: "ch1_ans_c_02" }
    ]
  },
  ch1_ans_c_02: {
    art: "studio",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 默许",
    stateDelta: { baiBond: 1 },
    text: "你找吧。我不拦你。白祁说完这句，像终于把房间让给了我一点。",
    choices: [
      { text: "去衣柜找", next: "ch1_wardrobe_01" }
    ]
  },
  ch1_wardrobe_01: {
    art: "source",
    scene: "studio",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第一章 · 衣柜",
    text: "衣柜里一层层叠着盒子。最里面的角落，有部黑色手机，屏幕朝下放着。",
    choices: [
      { text: "拿起旧手机", next: "ch1_wardrobe_02" }
    ]
  },
  ch1_wardrobe_02: {
    art: "source",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 旧手机",
    media: { type: "phone", title: "旧手机", body: "黑色机身，透明星星贴纸快掉了，屏幕左上角有弧形划痕。" },
    text: "手机背面贴着快掉的星星贴纸，屏幕左上角还有一道划痕。它很旧，但还留着能被叫醒的样子。",
    choices: [
      { text: "查看手机下面", next: "ch1_wardrobe_03" }
    ]
  },
  ch1_wardrobe_03: {
    art: "album",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 照片",
    media: { type: "photo", title: "压在手机下的照片", body: "高中走廊。一个陌生男生站在陆眠侧后方。照片背面无字。" },
    text: "手机下面还压着一张照片。陆眠站在走廊里，旁边有个陌生男生。她没有看镜头，像在躲什么。",
    choices: [
      { text: "翻看背面", next: "ch1_wardrobe_04" }
    ]
  },
  ch1_wardrobe_04: {
    art: "album",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第一章 · 背面无字",
    text: "照片背面是空的。陆眠把它压在手机下面，没有扔掉，也没有再看第二眼。",
    choices: [
      { text: "决定带走什么", next: "ch1_choose_take" }
    ]
  },
  ch1_choose_take: {
    art: "source",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 带走什么",
    media: { type: "objective", title: "关键选择", body: "首要任务：知晓陆眠过去真相并解救她。选错关键线索，任务失败。" },
    text: "我只能帮你带走一样。少一件，阿姨一定会发现。白祁说完，没再催我。",
    choices: [
      { text: "带走旧手机", next: "ch1_take_phone_01" },
      { text: "带走照片", next: "ch1_take_photo_01" },
      { text: "什么都不带", next: "ch1_take_nothing_01" }
    ]
  },
  ch1_take_phone_01: {
    art: "source",
    scene: "studio",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第一章 · 正确线索",
    text: "我把旧手机收进口袋。白祁看了一眼，点头让我把照片放回去。",
    choices: [
      { text: "听白祁说", next: "ch1_take_phone_02" }
    ]
  },
  ch1_take_phone_02: {
    art: "source",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第一章 · 恢复原状",
    text: "如果里面真有东西，别一个人扛。白祁把盒子搬回去，动作很轻。",
    choices: [
      { text: "离开房间", next: "ch1_leave_01" }
    ]
  },
  ch1_take_photo_01: {
    art: "album",
    scene: "studio",
    effect: "rain",
    speaker: "旁白",
    chapter: "任务失败",
    text: "任务失败。你带走了照片。可照片里只有一张陌生的、模糊的脸。没有名字，没有校牌，没有时间，也没有任何能够追溯的号码。你回到家查了一整夜，只查到一片空白。旧手机留在衣柜里，第二天被清理掉。通往过去的门，就这样关上了。",
    choices: [
      { text: "回到首页", action: "title" }
    ]
  },
  ch1_take_nothing_01: {
    art: "source",
    scene: "studio",
    effect: "rain",
    speaker: "旁白",
    chapter: "任务失败",
    text: "任务失败。你什么都没有带走。离开陆家以后，所有线索只剩回忆里的形状。没有实物，没有旧号码，没有任何可以触发异常的载体。你以为记住就够了，但有些门，需要钥匙才能打开。",
    choices: [
      { text: "回到首页", action: "title" }
    ]
  },
  ch1_leave_01: {
    art: "door",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第一章 · 送你离开",
    text: "我走出房间时，客厅还是那盏小夜灯。白祁走在前面替我开门，像怕我回头会后悔。",
    choices: [
      { text: "走到门口", next: "ch1_leave_02" }
    ]
  },
  ch1_leave_02: {
    art: "door",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第一章 · 早点来",
    text: "栀。她跟我说过一句话，我一直不明白是什么意思。她说，要是有人早点来就好了。",
    choices: [
      { text: "问他：她说的是谁", next: "ch1_leave_03" }
    ]
  },
  ch1_leave_03: {
    art: "door",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第一章 · 可能不是我",
    text: "我以前以为是我。现在又觉得，可能不是。白祁看着走廊另一头，声音低下去：也可能是她一直在等一个敢问到底的人。",
    choices: [
      { text: "下楼", next: "ch1_leave_04" }
    ]
  },
  ch1_leave_04: {
    art: "door",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第一章 · 一把黑伞",
    stateDelta: { baiBond: 1 },
    text: "等等。白祁又把门打开一条缝，递出一把黑伞：姐以前放在我这儿的。她说你总是不带伞。",
    choices: [
      { text: "接过伞，进电梯", next: "ch1_end_01" }
    ]
  },
  ch1_end_01: {
    art: "source",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第一章 · 口袋里的重量",
    text: "电梯门合上，我在镜子里看见自己的脸。口袋里的旧手机很冷，黑伞却还带着一点白祁手心的温度。",
    choices: [
      { text: "回家给旧手机充电", next: "ch1_end_02" }
    ]
  },
  ch1_end_02: {
    art: "source",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第一章 · 第一把钥匙",
    text: "陆眠，你到底想让我看见什么？我把手机握紧，第一次觉得它不像遗物，更像一把钥匙。",
    choices: [
      { text: "进入第二章", next: "ch2_trigger" }
    ]
  },
  ch2_trigger: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第二章 · 旧手机开机",
    text: "我把旧手机插上充电线。屏幕黑了很久才亮，像有人从很远的地方睁开眼睛。",
    choices: [
      { text: "解锁旧手机", next: "ch2_trigger_02" }
    ]
  },
  ch2_trigger_02: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第二章 · 通讯录",
    media: { type: "phone", title: "旧通讯录", body: "只有一个没有备注的联系人，头像空着。" },
    text: "旧手机没有密码。通讯录里只剩一个没有备注的号码，没有班级，也没有解释。",
    choices: [
      { text: "盯着这个号码", next: "ch2_trigger_03" }
    ]
  },
  ch2_trigger_03: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第二章 · 你对她做了什么",
    text: "你打开短信输入框。也许是太累，也许是盯着那串号码太久，你打下一句话：你对她做了什么。发送成功。下一秒，手机屏幕突然变白。不是死机，是那种白得像一张纸，像一扇门的光。",
    choices: [
      { text: "坠入白光", next: "ch2_trigger_04" }
    ]
  },
  ch2_trigger_04: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "第二章 · 坠落",
    text: "你感觉自己在往下坠。不是从高处，而是从现在，坠进某个更早的时间里。最后一个清醒的念头是：这不可能。然后雨声消失，取而代之的是上课铃。",
    choices: [
      { text: "睁开眼", next: "ch2_arrive_01" }
    ]
  },
  ch2_arrive_01: {
    art: "rooftop",
    scene: "school",
    effect: "ambient",
    speaker: "旁白",
    chapter: "第二章 · 高二开学",
    text: "画面亮起来的时候，你站在高中操场边。阳光是下午三四点的角度，打在跑道上。你手里拿着一个不认识的书包，身上穿着校服，胸牌边缘写着转学生。风里有塑胶跑道被晒过的味道。",
    choices: [
      { text: "环顾四周", next: "ch2_arrive_02" }
    ]
  },
  ch2_arrive_02: {
    art: "rooftop",
    scene: "school",
    effect: "ambient",
    speaker: "旁白",
    chapter: "第二章 · 她还在",
    text: "有人从你身边跑过去，校服，马尾。然后那个人停住，转过来。是陆眠。她比你记忆里的陆眠小了很多，脸还是那张脸，但眼睛里有一种你后来再没见过的东西：干净，轻，没有设防。",
    choices: [
      { text: "听她说话", next: "ch2_arrive_03" }
    ]
  },
  ch2_arrive_03: {
    art: "rooftop",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 转学生",
    text: "陆眠看着你，愣了一秒，然后皱起眉：你怎么在这里站着发呆，下午还有课。她认识你。在这里，你们是同学。你是刚转来的学生，她是第一个主动跟你说话的人。",
    choices: [
      { text: "选择回应", next: "ch2_choose_respond" }
    ]
  },
  ch2_choose_respond: {
    art: "rooftop",
    scene: "school",
    effect: "ambient",
    speaker: "旁白",
    chapter: "第二章 · 怎么回应",
    text: "十七岁的陆眠站在你面前，是真的在等你回答。你知道自己回来了，可她不知道。她只看到一个转学生站在操场边，像突然被什么吓住。",
    choices: [
      { text: "我在想事情", next: "ch2_resp_a_01" },
      { text: "对不起，我刚才想到一件事", next: "ch2_resp_b_01" },
      { text: "跟上去，什么都不说", next: "ch2_resp_c_01" }
    ]
  },
  ch2_resp_a_01: {
    art: "rooftop",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 奇怪的转学生",
    text: "陆眠歪了歪头：想什么？你顿了一下，说：在想你这个人。陆眠愣住，随即笑了，是那种有点不好意思但还是笑出来的表情：转学生都这么奇怪的吗。走啦，一起去教室。",
    choices: [
      { text: "跟她去教室", next: "ch2_classroom_01" }
    ]
  },
  ch2_resp_b_01: {
    art: "rooftop",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 别迟到",
    text: "你说：对不起，我刚才想到一件事。陆眠没有追问，只是点点头：行，但别迟到，班主任会点名的。她走在你前面，又回头等你，像这个动作已经做过很多次。",
    choices: [
      { text: "跟她去教室", next: "ch2_classroom_01" }
    ]
  },
  ch2_resp_c_01: {
    art: "rooftop",
    scene: "school",
    effect: "ambient",
    speaker: "旁白",
    chapter: "第二章 · 安静的人",
    text: "你没有解释，只跟上去。陆眠走了几步，发现你在旁边，侧过头看了你一眼，也没说话。操场的风把她的发丝吹起来一点。她像是记住了：你是一个不太爱说话的人。",
    choices: [
      { text: "一起去教室", next: "ch2_classroom_01" }
    ]
  },
  ch2_classroom_01: {
    art: "studio",
    scene: "classroom",
    effect: "ambient",
    speaker: "旁白",
    chapter: "第二章 · 教室",
    text: "你坐在陆眠后排靠窗的位置。这是你在这个时间点的第一天，大家对你还陌生。教室里粉笔灰味很重，窗帘被风吹起一点，窗外有两个男生站在走廊说话。",
    choices: [
      { text: "看向走廊", next: "ch2_classroom_02" }
    ]
  },
  ch2_classroom_02: {
    art: "studio",
    scene: "classroom",
    effect: "ambient",
    speaker: "旁白",
    chapter: "第二章 · 走廊那边",
    text: "你认出了其中一个。白祁，更小，还带着一点少年气，但眉眼已经是那个样子。另一个你没见过，高，侧脸，站在走廊窗边逆光，看不清表情。陆眠回头，压低声音说：别看那边。",
    choices: [
      { text: "问为什么", next: "ch2_classroom_03" }
    ]
  },
  ch2_classroom_03: {
    art: "studio",
    scene: "classroom",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 走廊那边",
    text: "你问：为什么？陆眠低下头，声音更轻：别问了。她没有再多说。可她捏紧了校服下摆。你顺着她的目光看过去，只记住走廊窗边那个逆光的侧影。",
    choices: [
      { text: "下午运动会", next: "ch2_sports_01" }
    ]
  },
  ch2_sports_01: {
    art: "sportsDay",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 运动会",
    stateDelta: { luTrust: 1, memoryCount: 1 },
    media: { type: "photo", title: "班级号码布", body: "四乘一百米接力。第三棒：陆眠。临时替补：沈栀。" },
    text: "过来，号码布歪了。陆眠低头替我别好别针，指尖隔着校服碰到我，很轻：等会儿你站我旁边，别乱跑。",
    choices: [
      { text: "帮她也整理号码布", next: "ch2_sports_02" },
      { text: "问她紧不紧张", next: "ch2_sports_03" }
    ]
  },
  ch2_sports_02: {
    art: "sportsDay",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 站我旁边",
    stateDelta: { luTrust: 1 },
    text: "你还挺会照顾人。陆眠没躲，只是低头看着我替她别号码布。风吹过来，她忽然笑了一下：那等会儿我跑完，你也要在终点接我。",
    choices: [
      { text: "答应她：我会在终点", next: "ch2_sports_04" }
    ]
  },
  ch2_sports_03: {
    art: "sportsDay",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 不紧张",
    stateDelta: { luTrust: 1 },
    text: "不紧张。陆眠把发绳咬在唇边，声音有点含糊：我就是讨厌有人盯着终点。她很快又弯起眼睛：你别摔就行，我会笑很大声。",
    choices: [
      { text: "笑她：那你得跑快一点", next: "ch2_sports_04" }
    ]
  },
  ch2_sports_04: {
    art: "sportsDay",
    scene: "school",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 看台边",
    stateDelta: { baiBond: 1 },
    text: "白祁抱着两瓶水挤过来，把冰水贴到陆眠脸侧。她被冰得缩了一下，转头就要踢他。我正想笑，却看见看台另一头有人停住了。",
    choices: [
      { text: "留在陆眠身边", next: "ch2_sports_05" },
      { text: "看向那边", next: "ch2_sports_06" }
    ]
  },
  ch2_sports_05: {
    art: "sportsDay",
    scene: "school",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 接力",
    stateDelta: { luTrust: 1 },
    text: "我没有追着看那个人，只往陆眠身边靠了一步。她把水瓶塞给我：帮我拿着。接力开始后，她跑得很快。冲过终点时，她第一眼找的不是成绩牌，是我站的位置。",
    choices: [
      { text: "跑过去接她", next: "ch2_store_01" }
    ]
  },
  ch2_sports_06: {
    art: "sportsDay",
    scene: "school",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 视线",
    stateDelta: { baiClue: 1, memoryCount: 1 },
    media: { type: "note", title: "运动会视线", body: "操场看台。有人看见陆眠时停住，白祁下意识挡到了她前面。" },
    text: "我顺着那道视线看过去。那个人和几个男生站在一起，像只是路过。可白祁也看见了。他把水瓶换到左手，右手垂下来，正好挡在陆眠和看台之间。",
    choices: [
      { text: "把视线收回来", next: "ch2_store_01" }
    ]
  },
  ch2_store_01: {
    art: "album",
    scene: "store",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 小卖部",
    text: "给你。陆眠把冰棍递过来，脸颊还带着跑完步的热：别说我没照顾转学生。白祁在旁边替她把快滑下来的发绳往上推，她立刻拍开他的手。",
    choices: [
      { text: "接过冰棍，看向白祁", next: "ch2_store_02" }
    ]
  },
  ch2_store_02: {
    art: "album",
    scene: "store",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第二章 · 表弟",
    text: "你就是新来的？白祁看我一眼，又看向陆眠。陆眠咬着冰棍替我说话：她刚刚跑得还行。白祁这才说：那以后多看着她点。",
    choices: [
      { text: "问白祁那个人是谁", next: "ch2_ask_bai_01" },
      { text: "不问，跟他们一起走", next: "ch2_walk_together_01" },
      { text: "问陆眠刚才怎么了", next: "ch2_ask_lu_01" }
    ]
  },
  ch2_ask_bai_01: {
    art: "album",
    scene: "store",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第二章 · 碎片 ①",
    stateDelta: { baiClue: 1, baiBond: 1, memoryCount: 1 },
    media: { type: "note", title: "记忆碎片 ①", body: "白祁听见你提到那个人时，第一眼看的不是你，是陆眠。" },
    text: "隔壁班的。白祁的表情很快恢复正常，可第一眼看的不是我，是陆眠。他压低声音：别跟他搭上关系就行。",
    choices: [
      { text: "记住这个名字", next: "ch2_library_01" }
    ]
  },
  ch2_walk_together_01: {
    art: "album",
    scene: "store",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 普通下午",
    stateDelta: { luTrust: 1, memoryCount: 1 },
    text: "我没有问。三个人一起走出校门，陆眠把最甜的那一截冰棍留给我，说转学生跑完步应该补糖。那一刻太普通了，普通到我舍不得它结束。",
    choices: [
      { text: "把这个下午记住", next: "ch2_library_01" }
    ]
  },
  ch2_ask_lu_01: {
    art: "album",
    scene: "store",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 碎片 ②",
    stateDelta: { memoryCount: 1 },
    media: { type: "note", title: "记忆碎片 ②", body: "陆眠一看见那个人，就先确认周围有没有人在看。" },
    text: "没什么，别管他。陆眠说得很平，可她先看了一眼小卖部门口的人群，才低头把冰棍纸捏皱。",
    choices: [
      { text: "不再逼问她", next: "ch2_library_01" }
    ]
  },
  ch2_library_01: {
    art: "studio",
    scene: "library",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 图书馆",
    text: "傍晚，我找了个借口留在图书馆。运动会散场时，我看见周叙也停过脚步。他也看见了那个人。",
    choices: [
      { text: "找到周叙", next: "ch2_library_02" }
    ]
  },
  ch2_library_02: {
    art: "studio",
    scene: "library",
    effect: "ambient",
    speaker: "周叙",
    chapter: "第二章 · 高中时的周叙",
    text: "你找我？周叙把旁边那把椅子往外挪了一点，语气冷淡，动作却不像要赶人。",
    choices: [
      { text: "问他知道那个人吗", next: "ch2_ask_zhou_zhang_01" },
      { text: "问他也认识陆眠？", next: "ch2_ask_zhou_lu_01" },
      { text: "不说话，在附近坐下", next: "ch2_watch_zhou_01" }
    ]
  },
  ch2_ask_zhou_zhang_01: {
    art: "studio",
    scene: "library",
    effect: "ambient",
    speaker: "周叙",
    chapter: "第二章 · 碎片 ③",
    stateDelta: { zhouClue: 1, zhouBond: 1, memoryCount: 1 },
    media: { type: "note", title: "记忆碎片 ③", body: "周叙说见过一次。说这句话时，他把笔帽扣得很紧。" },
    text: "见过一次。周叙把笔帽扣上，声音压低：不清楚他对陆眠做过什么。但如果你跟她走得近，就别让她一个人落单。",
    choices: [
      { text: "追问：你是不是看见过什么", next: "ch2_library_03" }
    ]
  },
  ch2_ask_zhou_lu_01: {
    art: "studio",
    scene: "library",
    effect: "ambient",
    speaker: "周叙",
    chapter: "第二章 · 普通认识",
    stateDelta: { zhouBond: 1 },
    text: "同届，不同班。见过。周叙回答得很短，目光却停在我胸前还没摘掉的号码布上：你们今天一起跑接力？",
    choices: [
      { text: "点头：她跑得很好", next: "ch2_library_03" }
    ]
  },
  ch2_watch_zhou_01: {
    art: "studio",
    scene: "library",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 旁观周叙",
    stateDelta: { zhouBond: 1 },
    text: "我没有开口，只在附近坐下。周叙也没追问，只把桌上没开封的水推到两张桌子的中线。",
    choices: [
      { text: "接过那瓶水", next: "ch2_library_03" }
    ]
  },
  ch2_library_03: {
    art: "studio",
    scene: "library",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 熄灯前",
    text: "离开图书馆时，天已经暗了。我只拼出三个细节：陆眠会躲，白祁会挡，周叙会沉默。可真正的事，还在更后面。",
    choices: [
      { text: "第二天早自习", next: "ch2_morning_01" }
    ]
  },
  ch2_morning_01: {
    art: "studio",
    scene: "classroom",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 早自习",
    text: "第二天我早到，陆眠已经趴在桌上。我坐到她旁边，小声问：昨晚没睡好？",
    choices: [
      { text: "问她梦见什么", next: "ch2_morning_02" }
    ]
  },
  ch2_morning_02: {
    art: "studio",
    scene: "classroom",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 梦见一件事",
    text: "梦见一件事。我一直以为我忘了，结果没有。陆眠没有再说，桌上也没有早饭。",
    choices: [
      { text: "把自己的早饭分给她", next: "ch2_food_01" },
      { text: "那件事，你想说吗？", next: "ch2_ask_event_01" },
      { text: "不说话，陪她坐着", next: "ch2_silent_01" }
    ]
  },
  ch2_food_01: {
    art: "studio",
    scene: "classroom",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 分给她的早饭",
    stateDelta: { luTrust: 2, memoryCount: 1 },
    text: "那你呢？陆眠没有立刻接。我说不饿。她拆开袋子，只拿了一半，又把另一半推回来：别装，跑接力的人第二天最容易低血糖。",
    choices: [
      { text: "问她：你是不是也总这样照顾别人", next: "ch2_corridor_01" }
    ]
  },
  ch2_ask_event_01: {
    art: "studio",
    scene: "classroom",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第二章 · 碎片 ④",
    stateDelta: { memoryCount: 1 },
    media: { type: "note", title: "记忆碎片 ④", body: "陆眠说：说了也没用。她没有解释这句话从哪里来。" },
    text: "没什么好说的。陆眠转头看向窗外，声音很轻：说了也没用。",
    choices: [
      { text: "不逼她，换个话题", next: "ch2_corridor_01" }
    ]
  },
  ch2_silent_01: {
    art: "studio",
    scene: "classroom",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 不追问",
    stateDelta: { luTrust: 1, memoryCount: 1 },
    text: "我没有追问，只是坐在她旁边。早自习开始后，陆眠把半块橡皮推过来，小声说：你桌子晃，垫一下。",
    choices: [
      { text: "接过橡皮", next: "ch2_corridor_01" }
    ]
  },
  ch2_corridor_01: {
    art: "studio",
    scene: "corridor",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 水房外",
    text: "中午，我在水房外听见有人压低声音说话。我走近一点，看见那个人站在陆眠面前。她背靠着墙，肩膀绷得很紧。",
    choices: [
      { text: "继续看", next: "ch2_corridor_02" }
    ]
  },
  ch2_corridor_02: {
    art: "studio",
    scene: "corridor",
    effect: "ambient",
    speaker: "周叙",
    chapter: "第二章 · 周叙开口",
    text: "周叙从另一侧走过来，停在他们面前：班主任叫你。我听得出来，这是临时编出来的借口。",
    choices: [
      { text: "继续看那个人反应", next: "ch2_corridor_03" }
    ]
  },
  ch2_corridor_03: {
    art: "studio",
    scene: "corridor",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 没有被救",
    text: "那个人看了周叙一眼，又看了陆眠一眼，才转身离开。陆眠站在原地没动。周叙低声问了句什么，她只是摇头。",
    choices: [
      { text: "看陆眠有没有受伤", next: "ch2_corridor_04" }
    ]
  },
  ch2_corridor_04: {
    art: "studio",
    scene: "corridor",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 楼梯口的回头",
    text: "陆眠经过我身边时，手指还在发抖。那个人转进楼梯口前又回头看了一眼，那一眼没有落在周叙身上，而是落在陆眠离开的方向。",
    choices: [
      { text: "你怎么做", next: "ch2_choose_after" }
    ]
  },
  ch2_choose_after: {
    art: "studio",
    scene: "corridor",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 之后怎么做",
    text: "走廊很快恢复吵闹，像刚才什么都没发生。可我知道不能当没看见。我只有几秒钟决定。",
    choices: [
      { text: "走过去，问周叙那是怎么回事", next: "ch2_ask_zhou_after_01" },
      { text: "什么都没看见，离开", next: "ch2_ignore_01" },
      { text: "跟上陆眠", next: "ch2_follow_lu_01" }
    ]
  },
  ch2_ask_zhou_after_01: {
    art: "studio",
    scene: "corridor",
    effect: "ambient",
    speaker: "周叙",
    chapter: "第二章 · 碎片 ⑤",
    stateDelta: { zhouClue: 1, zhouBond: 1, memoryCount: 1 },
    media: { type: "note", title: "记忆碎片 ⑤", body: "周叙刚才叫走那个人，是临时编出来的理由。" },
    text: "老师没叫他。周叙看向楼梯口，又把目光收回来：我只是看见她的表情不像没事。",
    choices: [
      { text: "记住周叙这句话", next: "ch2_evening_01" }
    ]
  },
  ch2_ignore_01: {
    art: "studio",
    scene: "corridor",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第二章 · 错过一块拼图",
    text: "我把水打完，走回教室。陆眠已经回来了，趴在桌上，看不见脸。我坐下，忽然觉得这次沉默不叫陪伴，叫错过。",
    choices: [
      { text: "把这块空白记住", next: "ch2_evening_01" }
    ]
  },
  ch2_follow_lu_01: {
    art: "studio",
    scene: "corridor",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第二章 · 跟上她",
    text: "我放下水杯，跟上陆眠。她站在镜子前，手撑着台面，听见动静才抬眼看我。",
    choices: [
      { text: "轻声说：我不是来逼你的", next: "ch2_follow_lu_02" }
    ]
  },
  ch2_follow_lu_02: {
    art: "studio",
    scene: "corridor",
    effect: "photo",
    speaker: "陆眠",
    chapter: "第二章 · 我只是不想走",
    stateDelta: { luTrust: 2, memoryCount: 1 },
    media: { type: "note", title: "核心记忆", body: "陆眠记住了这一天：有人没有逼问，也没有离开。" },
    text: "你不用管这件事。我说：我没说我要管。运动会的时候，你让我站你旁边。现在我也站这儿。陆眠看着镜子里的我，过了很久，才很轻地笑了一下：你真的很奇怪。",
    choices: [
      { text: "陪她一起出去", next: "ch2_evening_01" }
    ]
  },
  ch2_evening_01: {
    art: "sportsDay",
    scene: "school",
    effect: "photo",
    speaker: "陆眠",
    chapter: "第二章 · 傍晚",
    text: "喂，一起回去。陆眠从背后拍了我一下，把那根松掉的发绳递过来：你拿着吧，反正你今天帮我别过号码布。",
    choices: [
      { text: "问她早一点来做什么", next: "ch2_evening_02" }
    ]
  },
  ch2_evening_02: {
    art: "sportsDay",
    scene: "school",
    effect: "photo",
    speaker: "陆眠",
    chapter: "第二章 · 来我旁边",
    text: "有时候我觉得，要是有个人早一点来就好了。我问：早一点来做什么？陆眠看着跑道，声音很轻：来我旁边。",
    choices: [
      { text: "握紧那根发绳", next: "ch2_evening_03" }
    ]
  },
  ch2_evening_03: {
    art: "sportsDay",
    scene: "school",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第二章 · 回拉",
    text: "下一秒，白光从跑道尽头漫过来。陆眠的声音被拉远，我只来得及在心里说：我会再来的。",
    choices: [
      { text: "回到现实", next: "ch2_return_01" }
    ]
  },
  ch2_return_01: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "第二章 · 回到现实",
    media: { type: "phone", title: "旧手机", body: "屏幕亮着。发给那个号码的短信显示：已发送。" },
    text: () => buildChapterTwoReturnText(),
    choices: [
      { text: "继续", next: "ch2_return_02" }
    ]
  },
  ch2_return_02: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "第二章 · 轮廓",
    text: () => buildChapterTwoCliffhangerText(),
    choices: [
      { text: "继续", next: "ch3_reality_01" }
    ]
  },
  ch3_reality_01: {
    art: "ch2PhoneWhiteflash",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 别再往回走",
    media: { type: "sms", title: "陌生短信", body: "别再往回走。你已经来过一次了。" },
    text: "我盯着那行字，手指一点点凉下去。短信很短，语气却太熟，像有人刚刚伸手碰过我的背。我不能把它当成答案，也不能立刻把它当成威胁，只能先记住它出现的时机。",
    choices: [
      { text: "截屏，先保留证据", next: "ch3_reality_02" }
    ]
  },
  ch3_reality_02: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 现实没有暂停",
    stateDelta: { memoryCount: 1 },
    text: "客厅里只有雨声。旧手机还亮着，新手机也在震。我第一次清楚地意识到，回到过去不是逃离现实。过去动一下，现实就会在我脚边裂开一道缝。",
    choices: [
      { text: "决定先联系谁", next: "ch3_choice_first" }
    ]
  },
  ch3_choice_first: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 第一通电话",
    text: "我不能一个人查下去。可第一个被我拉进来的人，会决定我接下来得到的是保护、证词，还是另一层沉默。",
    choices: [
      { text: "把截图发给白祁", next: "ch3_bai_call_01" },
      { text: "打给周叙，问走廊那边", next: "ch3_zhou_call_01" },
      { text: "先不惊动任何人，查旧手机", next: "ch3_phone_search_01" }
    ]
  },
  ch3_bai_call_01: {
    art: "proCallBai",
    scene: "living",
    effect: "message",
    speaker: "白祁",
    chapter: "第三章 · 白祁的停顿",
    stateDelta: { baiBond: 1 },
    text: "白祁接得很快。我把截图发过去，电话那头静了几秒。他没有问我为什么半夜还醒着，只说：不要回。也不要删。我过去。",
    choices: [
      { text: "问他：你以前见过这个人吗", next: "ch3_bai_call_02" }
    ]
  },
  ch3_bai_call_02: {
    art: "proCallBai",
    scene: "living",
    effect: "message",
    speaker: "白祁",
    chapter: "第三章 · 他知道一点",
    text: "见过。白祁的声音压得很低：我姐高中的时候，有一段时间，只要那段事被提起，她就会把耳机音量调到最大。她不说，我也不敢问。",
    choices: [
      { text: "让白祁过来", next: "ch3_bai_call_03" }
    ]
  },
  ch3_bai_call_03: {
    art: "proCallBai",
    scene: "living",
    effect: "rain",
    speaker: "白祁",
    chapter: "第三章 · 我在路上",
    text: "他像已经穿好外套，呼吸里带着电梯间的空响：沈栀，你别一个人撑着。她以前就是这样，什么都不说，最后所有人都以为她没事。",
    choices: [
      { text: "等他来", next: "ch3_wait_01" }
    ]
  },
  ch3_zhou_call_01: {
    art: "proCallZhou",
    scene: "living",
    effect: "message",
    speaker: "周叙",
    chapter: "第三章 · 周叙没有问为什么",
    stateDelta: { zhouBond: 1 },
    text: "周叙听完短信内容，没有问我从哪里拿到的。他只问：你现在在哪？我说在家。他说：锁门，别回短信，我查一下旧同学群。",
    choices: [
      { text: "问他高中那段事", next: "ch3_zhou_call_02" }
    ]
  },
  ch3_zhou_call_02: {
    art: "proCallZhou",
    scene: "living",
    effect: "message",
    speaker: "周叙",
    chapter: "第三章 · 不太对劲的人",
    text: "那个人不算显眼。周叙顿了顿：就是那种总在边上看热闹的人。别人起哄，他不一定开口，但你回头的时候，会发现他一直在那里。",
    choices: [
      { text: "听他继续", next: "ch3_zhou_call_03" }
    ]
  },
  ch3_zhou_call_03: {
    art: "proCallZhou",
    scene: "living",
    effect: "message",
    speaker: "周叙",
    chapter: "第三章 · 一张旧截图",
    stateDelta: { zhouClue: 1, memoryCount: 1 },
    media: { type: "chat", title: "旧同学群截图", body: "有人问：当年摄影社那个林中还在不在群里？下面很快没人接话。" },
    text: "他很快发来一张截图。旧同学群里有人提到另一个名字：林中。我看着那两个字，心里忽然沉了一下。原来线头不止一条。",
    choices: [
      { text: "让周叙也过来", next: "ch3_wait_01" }
    ]
  },
  ch3_phone_search_01: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 先查旧手机",
    text: "我没有立刻打给任何人，先把旧手机调成飞行模式。屏幕里有很多年以前的灰尘，通讯录、短信、相册，每个图标都像一个还没打开的房间。",
    choices: [
      { text: "打开通讯录", next: "ch3_phone_search_02" }
    ]
  },
  ch3_phone_search_02: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 林中",
    stateDelta: { memoryCount: 1 },
    media: { type: "phone", title: "通讯录", body: "一个没有头像的号码，旁边还有另一个名字。备注都被删掉，只剩号码。" },
    text: "通讯录里，那个没有头像的号码下面，还有一个名字叫林中。不是昵称，像真名，又像被故意留下来的一块指路牌。",
    choices: [
      { text: "这时门铃响了", next: "ch3_wait_01" }
    ]
  },
  ch3_wait_01: {
    art: "ch1DoorBai",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第三章 · 门铃",
    text: "门铃响的时候，我第一反应不是开门，而是把旧手机扣在桌上。这个动作让我自己都愣了一下。原来我已经开始害怕被人看见它。",
    choices: [
      { text: "确认猫眼", next: "ch3_bai_arrive_01" }
    ]
  },
  ch3_bai_arrive_01: {
    art: "ch1DoorBai",
    scene: "home",
    effect: "rain",
    speaker: "白祁",
    chapter: "第三章 · 他没带伞",
    text: "猫眼里是白祁。他没带伞，肩膀湿了一片，手里却抱着一个塑料收纳箱。门一开，他先看我，再看桌上的旧手机，声音很轻：你脸色很差。",
    choices: [
      { text: "让他进来", next: "ch3_bai_arrive_02" }
    ]
  },
  ch3_bai_arrive_02: {
    art: "ch1LivingBai",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第三章 · 陆眠的箱子",
    text: "他把收纳箱放到地上。箱盖上贴着陆眠的名字，字迹很端正，像她明知道有一天会有人翻开，所以提前把自己收好。",
    choices: [
      { text: "问箱子里是什么", next: "ch3_bai_arrive_03" }
    ]
  },
  ch3_bai_arrive_03: {
    art: "ch1LivingBai",
    scene: "living",
    effect: "photo",
    speaker: "白祁",
    chapter: "第三章 · 不敢看的东西",
    stateDelta: { baiBond: 1 },
    text: "她高中带回来的东西。我以前不敢看，怕看见她那时候过得不好。白祁低头笑了一下，不像笑，更像认输：现在不敢也得看了。",
    choices: [
      { text: "和他一起打开箱子", next: "ch3_box_01" }
    ]
  },
  ch3_box_01: {
    art: "ch1TinboxClinic",
    scene: "living",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第三章 · 箱底",
    media: { type: "photo", title: "旧箱子", body: "校徽、空药盒、半本相册、几张没有寄出的明信片。" },
    text: "箱子里没有惊天动地的证据。只有校徽、空药盒、半本相册、几张没有寄出的明信片。越普通，越像一个人曾经努力活下去的全部证据。",
    choices: [
      { text: "翻开半本相册", next: "ch3_box_02" }
    ]
  },
  ch3_box_02: {
    art: "ch1PolaroidDesk",
    scene: "living",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第三章 · 被裁掉的人",
    stateDelta: { memoryCount: 1 },
    media: { type: "photo", title: "相册缺口", body: "很多合照只剩陆眠半边肩膀，另一个人被整齐裁掉。" },
    text: "有几张照片被裁过。陆眠还在画面里，另一个人被整齐地剪掉，只剩半截袖口。那袖口上有摄影社的胸针，像一只银色的眼睛。",
    choices: [
      { text: "把照片递给白祁看", next: "ch3_box_03" }
    ]
  },
  ch3_box_03: {
    art: "ch1LivingBai",
    scene: "living",
    effect: "photo",
    speaker: "白祁",
    chapter: "第三章 · 摄影社",
    stateDelta: { baiClue: 1, baiBond: 1 },
    text: "白祁看了很久：这个胸针我见过。姐以前说，摄影社的人最会把别人拍成他们想看的样子。那时候我听不懂。",
    choices: [
      { text: "继续查旧手机", next: "ch3_phone_hub_01" }
    ]
  },
  ch3_phone_hub_01: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 三个入口",
    text: "旧手机的电量停在百分之四十九，不再往下掉。像它也在等我选择。短信、相册、备忘录，三个入口都能打开同一段高中。",
    choices: [
      { text: "先看短信", next: "ch3_sms_01" },
      { text: "先看相册", next: "ch3_album_01" },
      { text: "先看备忘录", next: "ch3_memo_01" }
    ]
  },
  ch3_sms_01: {
    art: "proSmsThreat",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 同一句话",
    stateDelta: { memoryCount: 1 },
    media: { type: "sms", title: "旧短信", body: "别回头。别告诉别人。说了也没用。" },
    text: "旧短信里反复出现一句话：说了也没用。我在第二章听陆眠亲口说过。原来那不是她天生悲观，是有人一遍遍把这句话塞进她心里。",
    choices: [
      { text: "继续往下翻", next: "ch3_zhou_arrive_01" }
    ]
  },
  ch3_album_01: {
    art: "ch1PolaroidDesk",
    scene: "living",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第三章 · 照片背面",
    stateDelta: { memoryCount: 1 },
    media: { type: "photo", title: "照片背面", body: "角落有一行很浅的水印：LIN PHOTO。" },
    text: "相册里有一张照片背面被磨得发白。我把台灯压低，看见角落里一行很浅的水印：LIN PHOTO。林中不是路人。",
    choices: [
      { text: "把水印拍下来", next: "ch3_zhou_arrive_01" }
    ]
  },
  ch3_memo_01: {
    art: "proDraftEvidence",
    scene: "living",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第三章 · 没发出去的备忘",
    stateDelta: { memoryCount: 1 },
    media: { type: "note", title: "备忘录草稿", body: "如果我说出来，白祁会不会也被他们盯上？" },
    text: "备忘录里没有完整控诉，只有一行又一行删剩下的短句。最上面那句是：如果我说出来，白祁会不会也被他们盯上？",
    choices: [
      { text: "把手机推给白祁", next: "ch3_zhou_arrive_01" }
    ]
  },
  ch3_zhou_arrive_01: {
    art: "ch1LivingThree",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "第三章 · 周叙也来了",
    text: "门外又响了一声。周叙站在门口，外套上也有雨。他看见白祁，像并不意外，只把手机递给我：旧同学群里，有人把林中踢出群过。",
    choices: [
      { text: "看周叙的手机", next: "ch3_zhou_arrive_02" }
    ]
  },
  ch3_zhou_arrive_02: {
    art: "ch1LivingThree",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 被踢出群的人",
    stateDelta: { zhouClue: 1 },
    media: { type: "chat", title: "旧群记录", body: "林中被移出群聊。移除人：班长。时间：高二下学期五月。" },
    text: "群记录很短。林中被移出群聊，时间是高二下学期五月。再往上翻，有人发过一句：别再传那个链接了。没有人接。",
    choices: [
      { text: "问那个链接是什么", next: "ch3_zhou_arrive_03" }
    ]
  },
  ch3_zhou_arrive_03: {
    art: "ch1LivingThree",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "第三章 · 匿名墙",
    stateDelta: { zhouBond: 1 },
    text: "一个匿名投稿墙。周叙说：那时候很多学校都有，表白、吐槽、照片，什么都发。后来出过事，页面关了。我以为只是普通校园闹剧。",
    choices: [
      { text: "白祁听见后变了脸色", next: "ch3_bai_memory_01" }
    ]
  },
  ch3_bai_memory_01: {
    art: "ch1BaiDoorframe",
    scene: "living",
    effect: "memory",
    speaker: "白祁",
    chapter: "第三章 · 她关掉过屏幕",
    text: "我想起来了。白祁的声音忽然哑了：有一次我进她房间，她正在关电脑。她看见我，就把显示器电源拔了。她说网页太亮，刺眼。",
    choices: [
      { text: "问他还记得日期吗", next: "ch3_bai_memory_02" }
    ]
  },
  ch3_bai_memory_02: {
    art: "ch1BaiDoorframe",
    scene: "living",
    effect: "memory",
    speaker: "白祁",
    chapter: "第三章 · 校庆前一天",
    stateDelta: { baiClue: 1, memoryCount: 1 },
    media: { type: "note", title: "时间点", body: "高二校庆前一天晚上，陆眠关掉过一个刺眼的网页。" },
    text: "白祁闭上眼想了很久：校庆前一天。因为第二天学校放半天假，我还问她能不能带我去小卖部买汽水。她说别来学校。",
    choices: [
      { text: "去旧学校查校庆资料", next: "ch3_school_01" }
    ]
  },
  ch3_school_01: {
    art: "ch2TrackArriveBg",
    scene: "school",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第三章 · 旧学校",
    text: "雨停时，我们到了旧学校。门卫室的灯还亮着，操场被夜色压得很低。我站在校门口，忽然想起陆眠在阳光里回头看我的样子。",
    choices: [
      { text: "进门登记", next: "ch3_school_02" }
    ]
  },
  ch3_school_02: {
    art: "ch2ClassroomZhang",
    scene: "school",
    effect: "ambient",
    speaker: "门卫",
    chapter: "第三章 · 校庆册",
    text: "校庆资料？门卫大叔看了我们一眼：档案室没有，展览室有纪念册。你们别乱翻，十分钟。",
    choices: [
      { text: "去展览室", next: "ch3_school_03" }
    ]
  },
  ch3_school_03: {
    art: "court",
    scene: "school",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第三章 · 纪念册缺页",
    stateDelta: { memoryCount: 1 },
    media: { type: "photo", title: "校庆纪念册", body: "摄影社展页被人撕掉半页，只剩标题：溯光。" },
    text: "纪念册翻到摄影社那页时，我停住了。半页被撕掉，只剩一个标题：溯光。纸边不新，像很多年前就被人处理过。",
    choices: [
      { text: "看剩下的名单", next: "ch3_school_04" }
    ]
  },
  ch3_school_04: {
    art: "court",
    scene: "school",
    effect: "photo",
    speaker: "周叙",
    chapter: "第三章 · 名单",
    media: { type: "note", title: "摄影社名单", body: "指导老师空缺。负责人：林中。协助栏被刮花，只剩一小截笔画。" },
    text: "周叙把纪念册转到灯下。名单没被撕干净。负责人：林中还在，协助栏却被人刮花，像故意不让后来的人看见全部。白祁在旁边低声说：这页有人动过手脚。",
    choices: [
      { text: "我说：还不能确定", next: "ch3_school_05" }
    ]
  },
  ch3_school_05: {
    art: "ch1LivingThree",
    scene: "school",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第三章 · 不把猜测当真相",
    text: "我强迫自己把那句话咽回去。不能因为愤怒就替陆眠补完证词。她没亲口说的地方，我只能叫线索，不能叫真相。",
    choices: [
      { text: "离开展览室", next: "ch3_threat_01" }
    ]
  },
  ch3_threat_01: {
    art: "proSmsThreat",
    scene: "school",
    effect: "message",
    speaker: "旁白",
    chapter: "第三章 · 第二条短信",
    media: { type: "sms", title: "未知号码", body: "别带周叙。也别带那个小孩。" },
    text: "旧手机忽然震了一下。屏幕上跳出第二条短信：别带周叙。也别带那个小孩。我抬头时，展览室窗外只有树影。",
    choices: [
      { text: "你怎么处理这条短信", next: "ch3_choice_threat" }
    ]
  },
  ch3_choice_threat: {
    art: "proSmsThreat",
    scene: "school",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 回不回复",
    text: "如果回，我也许能套出对方是谁。如果删，白祁和周叙会少一点危险。如果不动，至少证据还在。",
    choices: [
      { text: "回复：你是谁", next: "ch3_reply_01" },
      { text: "不回复，立刻备份", next: "ch3_backup_01" },
      { text: "先删掉，别牵连他们", next: "ch3_delete_01" }
    ]
  },
  ch3_reply_01: {
    art: "proSmsThreat",
    scene: "school",
    effect: "horror",
    speaker: "未知号码",
    chapter: "第三章 · 对方在看",
    text: "对方几乎秒回：你还是这么喜欢替她决定。下一秒，手机自动打开相机。黑色屏幕里映出我、白祁、周叙三个人的脸。",
    choices: [
      { text: "马上锁屏", next: "ch3_backup_01" }
    ]
  },
  ch3_backup_01: {
    art: "source",
    scene: "school",
    effect: "message",
    speaker: "周叙",
    chapter: "第三章 · 备份",
    stateDelta: { zhouClue: 1, memoryCount: 1 },
    media: { type: "drive", title: "证据备份", body: "短信、纪念册照片、LIN PHOTO 水印、旧群记录已分别保存。" },
    text: "周叙拿出自己的手机：我备份。白祁看着我，说：我也备一份。那一刻我忽然觉得，我们不是三个人围着一件旧案，是三个人终于站到了陆眠没等到的位置。",
    choices: [
      { text: "旧手机开始发烫", next: "ch3_flash_01" }
    ]
  },
  ch3_delete_01: {
    art: "source",
    scene: "school",
    effect: "message",
    speaker: "沈栀",
    chapter: "第三章 · 删掉之后",
    stateDelta: { memoryCount: -1 },
    text: "我按下删除。屏幕干净了，可我的心没有轻一点。白祁看着我，声音很低：你刚才删掉的，可能就是她当年没能留下的东西。",
    choices: [
      { text: "沉默，重新把剩下证据备份", next: "ch3_backup_01" }
    ]
  },
  ch3_flash_01: {
    art: "ch2PhoneWhiteflash",
    scene: "school",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第三章 · 校庆前一天",
    text: "旧手机在我掌心发烫，屏幕白得像一扇被强行打开的门。白祁伸手来拉我，周叙喊了我的名字。可我已经听不清了。",
    choices: [
      { text: "回到校庆前一天", next: "ch4_arrive_01" }
    ]
  },
  ch4_arrive_01: {
    art: "ch2TrackArriveBg",
    scene: "school",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第四章 · 第二次回去",
    text: "我睁开眼时，广播里正在试音。操场边挂着校庆横幅，风把红布吹得鼓起来。有人从身后拍了我一下：喂，你又发呆。",
    choices: [
      { text: "回头看陆眠", next: "ch4_lu_01" }
    ]
  },
  ch4_lu_01: {
    art: "ch2ArriveLu",
    scene: "school",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第四章 · 她记得一点",
    text: "陆眠站在阳光里，手腕上那根发绳还在。她眯着眼看我：你今天怎么像好久没见过我一样？",
    choices: [
      { text: "说：因为我真的很想见你", next: "ch4_lu_02" },
      { text: "装作轻松：可能是昨晚没睡好", next: "ch4_lu_03" }
    ]
  },
  ch4_lu_02: {
    art: "ch2ArriveLu",
    scene: "school",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第四章 · 很想见你",
    stateDelta: { luTrust: 2 },
    text: "陆眠愣了一下，耳尖慢慢红了：你这人，突然说这种话很犯规。她低头把发绳绕紧，声音小了些：那今天别乱跑，我也想见你。",
    choices: [
      { text: "答应她", next: "ch4_class_01" }
    ]
  },
  ch4_lu_03: {
    art: "ch2ArriveLu",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第四章 · 没睡好",
    stateDelta: { luTrust: 1 },
    text: "陆眠伸手在我额头碰了一下：没发烧。那你今天跟着我，别又突然消失。她说得像玩笑，可最后几个字放得很轻。",
    choices: [
      { text: "跟她去教室", next: "ch4_class_01" }
    ]
  },
  ch4_class_01: {
    art: "ch2ClassroomZhang",
    scene: "classroom",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第四章 · 校庆前的教室",
    text: "教室里到处都是彩纸和气球。陆眠坐下时，课桌里掉出一张折成方块的纸。她脸上的笑一下收住了。",
    choices: [
      { text: "看那张纸", next: "ch4_note_01" }
    ]
  },
  ch4_note_01: {
    art: "proSmsThreat",
    scene: "classroom",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第四章 · 纸条",
    media: { type: "note", title: "匿名纸条", body: "下午四点，摄影社。你不来，照片会替你来。" },
    text: "纸条上没有署名。下午四点，摄影社。你不来，照片会替你来。我的指尖压在那行字上，终于知道这一天不是普通校庆前夕。",
    choices: [
      { text: "先看陆眠反应", next: "ch4_lu_note_01" }
    ]
  },
  ch4_lu_note_01: {
    art: "ch2MorningFood",
    scene: "classroom",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第四章 · 她想笑过去",
    text: "陆眠把纸条揉进掌心，抬头时又笑了：恶作剧吧。校庆前大家都很闲。我说：你手在抖。她的笑停了一下。",
    choices: [
      { text: "把纸条还给她，问她想怎么做", next: "ch4_choice_after_note" }
    ]
  },
  ch4_choice_after_note: {
    art: "ch2MorningFood",
    scene: "classroom",
    effect: "ambient",
    speaker: "沈栀",
    chapter: "第四章 · 先做什么",
    text: "我不能替她做决定。但我也不能站在原地等。现在最重要的不是把那个放纸条的人逼出来，是让陆眠知道，她不是一个人走向那间摄影社。",
    choices: [
      { text: "陪陆眠去小卖部，先让她缓下来", next: "ch4_store_01" },
      { text: "去找白祁，让他今天别靠近摄影社", next: "ch4_bai_01" },
      { text: "去图书馆找周叙，问匿名墙", next: "ch4_zhou_01" }
    ]
  },
  ch4_store_01: {
    art: "ch2StoreTrio",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第四章 · 小卖部的汽水",
    stateDelta: { luTrust: 2 },
    text: "陆眠挑了一瓶橘子汽水，又拿了一盒牛奶塞给我：你脸色比我还差。我说你还有心情管我。她拧开瓶盖，气泡轻轻炸开：管你会让我没那么怕。",
    choices: [
      { text: "问她怕什么", next: "ch4_store_02" }
    ]
  },
  ch4_store_02: {
    art: "ch2StoreTrio",
    scene: "school",
    effect: "ambient",
    speaker: "陆眠",
    chapter: "第四章 · 怕被看见",
    stateDelta: { memoryCount: 1 },
    text: "不是怕照片。陆眠看着冰柜玻璃里的自己：是怕所有人都看见以后，还觉得只是玩笑。那样我就再也不知道该相信谁了。",
    choices: [
      { text: "说：那先相信我一分钟", next: "ch4_artroom_01" }
    ]
  },
  ch4_artroom_01: {
    art: "album",
    scene: "classroom",
    effect: "memory",
    speaker: "沈栀",
    chapter: "第四章 · 美术教室",
    text: "陆眠没有立刻回教室，而是带我去了美术教室。那里没人，窗台上堆着没晾干的水彩纸，阳光透过玻璃落在她的校服袖口上。",
    choices: [
      { text: "坐到她旁边", next: "ch4_artroom_02" }
    ]
  },
  ch4_artroom_02: {
    art: "album",
    scene: "classroom",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第四章 · 她画的明天",
    stateDelta: { luTrust: 1 },
    media: { type: "photo", title: "水彩纸", body: "一条很亮的街，街角有花店，窗边坐着两个女孩子。" },
    text: "陆眠把一张水彩纸翻过来给我看。画上是一条很亮的街，街角有花店，窗边坐着两个女孩子。她说：我以前想过，以后开一家很小的花店。",
    choices: [
      { text: "问她为什么是花店", next: "ch4_artroom_03" }
    ]
  },
  ch4_artroom_03: {
    art: "flowerShop",
    scene: "classroom",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第四章 · 因为花会明天再开",
    text: "因为花很诚实。陆眠用笔尖点了点纸上的窗：今天开不好，明天还会再试。人就不一样，人会假装自己一直很好。",
    choices: [
      { text: "认真告诉她：你不用一直很好", next: "ch4_artroom_04" }
    ]
  },
  ch4_artroom_04: {
    art: "ch2EveningHairtie",
    scene: "classroom",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第四章 · 很慢的一秒",
    stateDelta: { luTrust: 2, memoryCount: 1 },
    text: "陆眠看着我，很慢地眨了一下眼。她没有笑，也没有躲开。只是把那张水彩纸推到我们中间，说：那你也别一直装得很会救人。",
    choices: [
      { text: "低声说：好", next: "ch4_artroom_05" }
    ]
  },
  ch4_artroom_05: {
    art: "source",
    scene: "classroom",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第四章 · 画纸背面",
    media: { type: "note", title: "画纸背面", body: "背面贴着一枚旧标签：溯光摄影社回收作品。" },
    text: "我把画纸收好时，看见背面贴着一枚旧标签：溯光摄影社回收作品。美好的东西也被他们碰过，这让我胸口发紧。",
    choices: [
      { text: "去找白祁", next: "ch4_bai_01" }
    ]
  },
  ch4_bai_01: {
    art: "ch2SportsBaiWater",
    scene: "school",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第四章 · 十六岁的白祁",
    text: "白祁抱着一袋练习册从楼梯口下来，看见陆眠就皱眉：你又没吃午饭？陆眠说关你什么事。他把面包往她桌上一放：关我事。",
    choices: [
      { text: "把纸条给白祁看", next: "ch4_bai_02" }
    ]
  },
  ch4_bai_02: {
    art: "ch2SportsBaiWater",
    scene: "school",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第四章 · 他想冲过去",
    stateDelta: { baiBond: 1 },
    text: "白祁看完纸条，脸色一下冷下来：谁放的？我按住他的手腕：你现在冲过去，只会让她更难收场。他看着我，很不甘心，但没有甩开。",
    choices: [
      { text: "告诉他：你今天守楼梯口", next: "ch4_bai_03" }
    ]
  },
  ch4_bai_03: {
    art: "ch2SportsBaiWater",
    scene: "school",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第四章 · 不是小孩",
    stateDelta: { baiClue: 1 },
    text: "白祁说：我不是小孩。我说我知道，所以才找你。你守楼梯口，不是为了打人，是为了让陆眠知道，有一条路能离开。白祁低下头：好。",
    choices: [
      { text: "去找周叙", next: "ch4_zhou_01" }
    ]
  },
  ch4_zhou_01: {
    art: "ch2LibraryZhou",
    scene: "library",
    effect: "ambient",
    speaker: "周叙",
    chapter: "第四章 · 图书馆的周叙",
    text: "周叙坐在靠窗的位置，桌上摊着校庆节目单。我还没开口，他先说：如果你是来问匿名墙，页面在校内网，下午三点会更新。",
    choices: [
      { text: "问他为什么知道", next: "ch4_zhou_02" }
    ]
  },
  ch4_zhou_02: {
    art: "ch2LibraryZhou",
    scene: "library",
    effect: "ambient",
    speaker: "周叙",
    chapter: "第四章 · 他一直在看",
    stateDelta: { zhouBond: 1 },
    text: "因为上次有人把照片传上去，陆眠一天没来上课。周叙的笔尖停住：我那时候以为她只是不舒服。后来才知道，不舒服也分很多种。",
    choices: [
      { text: "问他能不能帮忙", next: "ch4_zhou_03" }
    ]
  },
  ch4_zhou_03: {
    art: "ch2LibraryZhou",
    scene: "library",
    effect: "photo",
    speaker: "周叙",
    chapter: "第四章 · 校内网入口",
    stateDelta: { zhouClue: 1, memoryCount: 1 },
    media: { type: "screen", title: "校内网页面", body: "匿名墙后台入口需要摄影社账号。账号名：linphoto。" },
    text: "周叙把笔记本转向我。匿名墙后台入口还没关，账号名是 linphoto。林中把名字藏得很浅，浅到像笃定没人会认真看。",
    choices: [
      { text: "三点快到了", next: "ch4_update_01" }
    ]
  },
  ch4_update_01: {
    art: "source",
    scene: "library",
    effect: "message",
    speaker: "旁白",
    chapter: "第四章 · 三点更新",
    media: { type: "screen", title: "匿名墙预览", body: "一张模糊照片正在排队发布。照片角落露出陆眠校服袖口。" },
    text: "三点整，页面刷新。待发布列表里多了一张照片。没有脸，只有校服袖口、操场栏杆、和一个足够让熟人猜出来的侧影。",
    choices: [
      { text: "立刻处理", next: "ch4_choice_wall" }
    ]
  },
  ch4_choice_wall: {
    art: "source",
    scene: "library",
    effect: "message",
    speaker: "沈栀",
    chapter: "第四章 · 怎么阻止照片",
    text: "我只有几分钟。粗暴删掉，后台可能留下痕迹。公开撕破，陆眠会被所有人盯住。最难的，是不让她再次成为被围观的人。",
    choices: [
      { text: "让周叙截证，白祁去关展厅电源", next: "ch4_wall_good_01" },
      { text: "冲到走廊，当众质问那个人", next: "ch4_wall_public_01" },
      { text: "先问陆眠要不要自己处理", next: "ch4_wall_lu_01" }
    ]
  },
  ch4_wall_good_01: {
    art: "ch2CorridorConfront",
    scene: "corridor",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第四章 · 不让她被围观",
    stateDelta: { luTrust: 1, baiClue: 1, zhouClue: 1, memoryCount: 1 },
    text: "周叙截下页面和后台时间，白祁去展厅门口找电闸。我留在陆眠身边。走廊的广播忽然断了一秒，像整栋楼一起屏住呼吸。",
    choices: [
      { text: "陪陆眠去摄影社", next: "ch4_photo_room_01" }
    ]
  },
  ch4_wall_public_01: {
    art: "ch2CorridorConfront",
    scene: "corridor",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第四章 · 当众质问",
    stateDelta: { luTrust: -1, memoryCount: 1 },
    text: "我冲到走廊叫住那个人。周围的同学立刻看过来。他举起双手，笑得很无辜：我什么都没做啊。陆眠站在人群后面，脸色一点点白下去。",
    choices: [
      { text: "意识到自己把她推到了人群里", next: "ch4_photo_room_01" }
    ]
  },
  ch4_wall_lu_01: {
    art: "ch2FollowMirror",
    scene: "corridor",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第四章 · 她自己的选择",
    stateDelta: { luTrust: 2, memoryCount: 1 },
    text: "陆眠看着我，像第一次被允许拥有选择。她说：我现在还做不到一个人处理。可是如果你在旁边，我可以走过去看看。",
    choices: [
      { text: "说：我在", next: "ch4_photo_room_01" }
    ]
  },
  ch4_photo_room_01: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第四章 · 摄影社",
    text: "摄影社在实验楼顶层。门半开着，里面有冲洗药水的味道。墙上挂着很多校庆照片，每一张笑脸都被灯照得过分明亮。",
    choices: [
      { text: "走进去", next: "ch4_photo_room_02" }
    ]
  },
  ch4_photo_room_02: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "门口那个人",
    chapter: "第四章 · 他在等",
    stateDelta: { zhangKnown: 1 },
    text: "暗房门口坐着一个男生，手里转着一个胶卷盒。门外有人低声叫了他一声：张恒。他抬眼看见陆眠，笑了一下：你终于来了。我往前站半步，他的目光才落到我身上：新来的，你管太多了。",
    choices: [
      { text: "不接他的话，只看陆眠", next: "ch4_photo_room_03" }
    ]
  },
  ch4_photo_room_03: {
    art: "ch2FollowMirror",
    scene: "studio",
    effect: "memory",
    speaker: "沈栀",
    chapter: "第四章 · 不替她回答",
    text: "我没有替陆眠骂回去，也没有替她解释。我只是把手伸到她能碰到的位置。陆眠看着那只手，慢慢吸了一口气。",
    choices: [
      { text: "等陆眠开口", next: "ch4_lu_speaks_01" }
    ]
  },
  ch4_lu_speaks_01: {
    art: "ch2EveningHairtie",
    scene: "studio",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第四章 · 她说不",
    stateDelta: { luTrust: 2, memoryCount: 1 },
    text: "陆眠说：我不拍。声音不大，但很清楚。门口那个人的笑停了一下。她又说了一遍：我不拍，也不去匿名墙道歉。你们发什么，都不是我的错。",
    choices: [
      { text: "记住这句话", next: "ch4_photo_room_04" }
    ]
  },
  ch4_photo_room_04: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "张恒",
    chapter: "第四章 · 林中会生气",
    media: { type: "record", title: "现场录音", body: "张恒说：林中会生气的。你以为关掉一个页面就结束了？" },
    text: "张恒站起来，声音低下去：林中会生气的。你以为关掉一个页面就结束了？我听见自己的心跳。终于，他亲口把林中和这件事连在一起。",
    choices: [
      { text: "白光再次出现", next: "ch4_return_01" }
    ]
  },
  ch4_return_01: {
    art: "ch2WhiteReturnTrack",
    scene: "studio",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第四章 · 带回来的声音",
    text: "白光从暗房里涌出来。我死死攥着那句录音，像攥着陆眠第一次说出的不。回到现实前，我听见她在身后喊：沈栀，别忘了。",
    choices: [
      { text: "回到现实", next: "ch5_reality_01" }
    ]
  },
  ch5_reality_01: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第五章 · 录音还在",
    media: { type: "record", title: "新增录音", body: "林中会生气的。你以为关掉一个页面就结束了？" },
    text: "我摔回客厅地板，第一反应是摸手机。录音还在。不是梦，不是幻觉。陆眠说过的不，也终于有了一点能留下来的形状。",
    choices: [
      { text: "把录音放给他们听", next: "ch5_listen_01" }
    ]
  },
  ch5_listen_01: {
    art: "ch1LivingThree",
    scene: "living",
    effect: "message",
    speaker: "白祁",
    chapter: "第五章 · 白祁听见了",
    text: "录音放完，白祁很久没动。他像被那句林中会生气的按回十六岁，眼眶红得很克制：她那时候，真的说过不。",
    choices: [
      { text: "握住旧手机", next: "ch5_listen_02" }
    ]
  },
  ch5_listen_02: {
    art: "ch1LivingThree",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "第五章 · 证据链",
    text: "周叙把所有文件排到桌上：短信、匿名墙、摄影社名单、录音。还差一个东西。他看向我：林中现在在哪里。",
    choices: [
      { text: "先查白玫瑰订单", next: "ch5_flower_01" }
    ]
  },
  ch5_flower_01: {
    art: "flowerShop",
    scene: "home",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第五章 · 白玫瑰订单",
    text: "我忽然想起序章门口那束白玫瑰。陆眠不是会随便留下仪式感的人。她每一次放花，应该都有地址，有时间，也有一个她想让我看见的理由。",
    choices: [
      { text: "搜索附近花店", next: "ch5_flower_02" }
    ]
  },
  ch5_flower_02: {
    art: "flowerShop",
    scene: "home",
    effect: "message",
    speaker: "店员",
    chapter: "第五章 · 不是第一次",
    media: { type: "chat", title: "花店客服", body: "陆小姐以前订过同款白玫瑰，备注：如果我没来取，请送到沈栀家门口。" },
    text: "花店客服回得很快：陆小姐以前订过同款白玫瑰。备注是，如果我没来取，请送到沈栀家门口。我看着那句话，忽然不敢眨眼。",
    choices: [
      { text: "问她最后一次取花时间", next: "ch5_flower_03" }
    ]
  },
  ch5_flower_03: {
    art: "flowerShop",
    scene: "home",
    effect: "message",
    speaker: "店员",
    chapter: "第五章 · 五个月前晚上",
    stateDelta: { memoryCount: 1 },
    media: { type: "note", title: "订单记录", body: "五个月前 21:12。陆眠取走一束白玫瑰，随后前往废弃摄影棚方向。" },
    text: "最后一次是五个月前晚上九点十二分。她取走一束白玫瑰，没让店员包卡片。白祁低声问：她那天是去告别，还是去给自己留证？",
    choices: [
      { text: "没有人立刻回答", next: "ch5_flower_04" }
    ]
  },
  ch5_flower_04: {
    art: "ch1LivingThree",
    scene: "living",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第五章 · 她早就把我算进来了",
    text: "我忽然明白，那束白玫瑰不是遗物。是陆眠把我算进她最后计划里的证据。她怕我不来，又怕我来得太晚，所以把花放在门口，像一只不能说话的手。",
    choices: [
      { text: "把订单截图备份", next: "ch5_flower_05" }
    ]
  },
  ch5_flower_05: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "周叙",
    chapter: "第五章 · 路线重合",
    stateDelta: { zhouClue: 1, memoryCount: 1 },
    media: { type: "drive", title: "路线拼图", body: "花店、废弃摄影棚、天台新闻照片，三条路线重合。" },
    text: "周叙把花店地址、摄影棚地址和新闻照片定位叠在一起：路线重合。她不是漫无目的地走到天台，她沿着一条被安排好的路走过去。",
    choices: [
      { text: "继续查 LIN PHOTO", next: "ch5_search_lin_01" }
    ]
  },
  ch5_search_lin_01: {
    art: "source",
    scene: "living",
    effect: "message",
    speaker: "沈栀",
    chapter: "第五章 · LIN PHOTO",
    text: "我搜索 LIN PHOTO，跳出来的是一个停更多年的摄影账号。最后一条动态在五个月前：旧片重洗，今晚见。",
    choices: [
      { text: "点开最后一条", next: "ch5_search_lin_02" }
    ]
  },
  ch5_search_lin_02: {
    art: "studio",
    scene: "living",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第五章 · 五个月前",
    stateDelta: { memoryCount: 1 },
    media: { type: "photo", title: "账号动态", body: "配图是废弃摄影棚门口。门牌上的数字和陆眠死亡当晚新闻照片一致。" },
    text: "配图是一扇生锈的门。门牌号和陆眠死亡当晚新闻照片里的背景一致。五个月前，她不是随便去那里。有人约她重洗旧片。",
    choices: [
      { text: "去废弃摄影棚", next: "ch5_studio_01" }
    ]
  },
  ch5_studio_01: {
    art: "car",
    scene: "taxi",
    effect: "rain",
    speaker: "沈栀",
    chapter: "第五章 · 去摄影棚",
    text: "出租车穿过雨后的高架。白祁坐在副驾，一路没说话。周叙把定位发给我，又补了一句：到了以后不要单独进去。",
    choices: [
      { text: "到达摄影棚", next: "ch5_studio_02" }
    ]
  },
  ch5_studio_02: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第五章 · 废弃摄影棚",
    text: "门没有锁。灰尘很厚，地上有被雨水踩出的新脚印。这里不像废弃，像有人每隔一段时间回来确认伤口还在不在。",
    choices: [
      { text: "开手机手电", next: "ch5_studio_03" }
    ]
  },
  ch5_studio_03: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "白祁",
    chapter: "第五章 · 墙上的照片",
    text: "手电照到墙面时，白祁低低骂了一句。墙上贴着很多旧照片，不全是陆眠，还有别的学生。每张照片角落都有同一个水印：LIN PHOTO。",
    choices: [
      { text: "不要碰原件，先拍照", next: "ch5_studio_04" }
    ]
  },
  ch5_studio_04: {
    art: "court",
    scene: "studio",
    effect: "photo",
    speaker: "周叙",
    chapter: "第五章 · 原件",
    stateDelta: { zhouClue: 1, memoryCount: 1 },
    media: { type: "drive", title: "暗房证据", body: "旧照片原件、投稿墙导出记录、多个学生姓名缩写。" },
    text: "周叙在暗房抽屉里找到一个硬盘：原件在这里。不要拔，先拍序列号。他的声音很稳，可手背上的青筋绷得很紧。",
    choices: [
      { text: "抽屉最底下还有信封", next: "ch5_envelope_01" }
    ]
  },
  ch5_envelope_01: {
    art: "ch1DiaryTorn",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第五章 · 陆眠的信封",
    media: { type: "note", title: "信封", body: "如果我没有回来，请把这些交给白祁。不要让他一个人看。" },
    text: "信封上是陆眠的字：如果我没有回来，请把这些交给白祁。不要让他一个人看。白祁伸出去的手停在半空，像终于明白她为什么总把他挡在门外。",
    choices: [
      { text: "问白祁要不要现在看", next: "ch5_choice_envelope" }
    ]
  },
  ch5_choice_envelope: {
    art: "ch1BaiDoorframe",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第五章 · 给不给他看",
    text: "这是陆眠留给白祁的东西，可她也写了不要让他一个人看。我不能替她藏，也不能替他承受。",
    choices: [
      { text: "递给白祁，说我陪你看", next: "ch5_envelope_together_01" },
      { text: "先收起来，等案子结束再说", next: "ch5_envelope_later_01" }
    ]
  },
  ch5_envelope_together_01: {
    art: "ch1BaiDoorframe",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "第五章 · 姐，我看见了",
    stateDelta: { baiBond: 2, memoryCount: 1 },
    text: "白祁读得很慢。读到最后一句，他把纸抵在额头上：姐，我看见了。这一次我看见了。我没有安慰他，只站在旁边，把手电照稳。",
    choices: [
      { text: "继续查硬盘", next: "ch5_drive_01" }
    ]
  },
  ch5_envelope_later_01: {
    art: "ch1BaiDoorframe",
    scene: "studio",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第五章 · 先收起来",
    stateDelta: { baiBond: -1 },
    text: "我把信封收起来。白祁看见了，但没有拦。他只是轻声说：你们总觉得我会碎。可有时候，被瞒着才更像碎掉。",
    choices: [
      { text: "继续查硬盘", next: "ch5_drive_01" }
    ]
  },
  ch5_drive_01: {
    art: "source",
    scene: "studio",
    effect: "message",
    speaker: "沈栀",
    chapter: "第五章 · 导出记录",
    media: { type: "screen", title: "硬盘目录", body: "upload_wall、proof_lu、roof_meet、backup_lin。" },
    text: "硬盘目录里有四个文件夹。upload_wall 是匿名墙上传记录，proof_lu 是陆眠整理的证据，roof_meet 是五个月前的会面记录，backup_lin 被加密。",
    choices: [
      { text: "先打开 proof_lu", next: "ch5_drive_02" }
    ]
  },
  ch5_drive_02: {
    art: "source",
    scene: "studio",
    effect: "photo",
    speaker: "沈栀",
    chapter: "第五章 · 她不是没有反抗",
    stateDelta: { memoryCount: 1 },
    media: { type: "drive", title: "proof_lu", body: "截图、录音、时间线、匿名墙后台地址。陆眠把证据整理得很清楚。" },
    text: "文件夹里不是求救，是证据。陆眠把时间线整理得很清楚。哪天收到纸条，哪天页面更新，哪天她去找老师，哪天没有结果。她不是没有反抗。",
    choices: [
      { text: "打开 roof_meet", next: "ch5_drive_03" }
    ]
  },
  ch5_drive_03: {
    art: "rooftop",
    scene: "studio",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第五章 · 五个月前的邀约",
    media: { type: "sms", title: "roof_meet", body: "今晚十点，天台。我给你原件。一个人来。" },
    text: "roof_meet 里只有几张截图。五个月前，有人约陆眠去天台，说可以给她当年的原件。一个人来。所有人都说她是意外，可她是去拿证据的。",
    choices: [
      { text: "旧手机突然来电", next: "ch5_call_01" }
    ]
  },
  ch5_call_01: {
    art: "proSmsThreat",
    scene: "studio",
    effect: "message",
    speaker: "未知号码",
    chapter: "第五章 · 电话",
    text: "旧手机响了。来电没有号码。我按下免提，对面只有一点电流声。然后一个男人的声音说：沈栀，原件不在你那里。",
    choices: [
      { text: "问他是不是林中", next: "ch5_call_02" }
    ]
  },
  ch5_call_02: {
    art: "proSmsThreat",
    scene: "studio",
    effect: "horror",
    speaker: "未知号码",
    chapter: "第五章 · 他不承认",
    text: "他笑了一声：你们这些人总喜欢给坏事找一个名字。林中、张恒、摄影社，随便哪个都行。可她当年最怕的，不就是没有人信吗？",
    choices: [
      { text: "别被他带着走", next: "ch5_choice_call" }
    ]
  },
  ch5_choice_call: {
    art: "proSmsThreat",
    scene: "studio",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第五章 · 怎么回他",
    text: "他想让我急，想让我在白祁和周叙面前说出无法证明的话。越到这里，越不能让愤怒替我选择。",
    choices: [
      { text: "说：我只相信陆眠留下的证据", next: "ch5_call_good_01" },
      { text: "骂他：你们都该付出代价", next: "ch5_call_angry_01" },
      { text: "不说话，示意周叙继续录音", next: "ch5_call_silent_01" }
    ]
  },
  ch5_call_good_01: {
    art: "proSmsThreat",
    scene: "studio",
    effect: "message",
    speaker: "未知号码",
    chapter: "第五章 · 他急了",
    stateDelta: { memoryCount: 1 },
    text: "电话那头沉默了一秒。我知道我戳中了他。他可以嘲笑我，可以恐吓我，但他最怕的是陆眠留下的东西被完整看见。",
    choices: [
      { text: "继续拖住他", next: "ch5_police_01" }
    ]
  },
  ch5_call_angry_01: {
    art: "proSmsThreat",
    scene: "studio",
    effect: "horror",
    speaker: "未知号码",
    chapter: "第五章 · 他笑了",
    stateDelta: { memoryCount: -1 },
    text: "他笑了：看，你也只是想赢。电话挂断前，我听见他低声说：那你会来不及。屏幕黑下去，我才意识到自己给了他想要的失控。",
    choices: [
      { text: "重新冷静下来", next: "ch5_police_01" }
    ]
  },
  ch5_call_silent_01: {
    art: "proSmsThreat",
    scene: "studio",
    effect: "message",
    speaker: "沈栀",
    chapter: "第五章 · 留下他的声音",
    stateDelta: { zhouBond: 1, memoryCount: 1 },
    text: "我没有说话，只把手机放在桌上。周叙很快明白我的意思，打开录音。白祁站在门口，把外面的脚步声挡住。我们第一次没有被他牵着走。",
    choices: [
      { text: "继续拖住他", next: "ch5_police_01" }
    ]
  },
  ch5_police_01: {
    art: "court",
    scene: "studio",
    effect: "message",
    speaker: "周叙",
    chapter: "第五章 · 报警不是终点",
    text: "周叙把硬盘、录音和定位一起发出去：我联系了认识的律师，也报了警。可如果旧手机还会把你带回去，真正能改变陆眠那一天的人，还是你。",
    choices: [
      { text: "旧手机显示最后一次", next: "ch5_final_prep_01" }
    ]
  },
  ch5_final_prep_01: {
    art: "ch2PhoneWhiteflash",
    scene: "studio",
    effect: "message",
    speaker: "旁白",
    chapter: "第五章 · 最后一次",
    media: { type: "phone", title: "旧手机", body: "最后一次同步。目标时间：陆眠坠落前二十分钟。" },
    text: "旧手机跳出一行字：最后一次同步。目标时间：陆眠坠落前二十分钟。我的喉咙像被什么堵住。二十分钟，够不够把一个人从边缘拉回来？",
    choices: [
      { text: "先想清楚：我要救的不是证据，是陆眠", next: "ch6_arrive_01" }
    ]
  },
  ch6_arrive_01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第六章 · 坠落前二十分钟",
    text: "风声先涌进耳朵。我站在教学楼顶层楼梯口，校服袖口被风吹得发冷。走廊尽头的门半开着，门后是天台。",
    choices: [
      { text: "先找陆眠", next: "ch6_find_lu_01" },
      { text: "先去找张恒对质", next: "ch6_wrong_zhang_01" },
      { text: "先冲上天台", next: "ch6_wrong_roof_01" }
    ]
  },
  ch6_find_lu_01: {
    art: "ch2CorridorAfter",
    scene: "corridor",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第六章 · 不是天台",
    text: "我没有立刻冲上天台。陆眠现在最需要的，不是有人替她抓凶手，是有人先找到她。楼梯间旁边的广播室门虚掩着，里面传来很轻的呼吸声。",
    choices: [
      { text: "推开广播室门", next: "ch6_broadcast_01" }
    ]
  },
  ch6_wrong_zhang_01: {
    art: "ch2CorridorConfront",
    scene: "corridor",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第六章 · 找错了人",
    text: "我转身去找张恒。走廊里人很多，每张脸都像他，又都不是他。等我再跑回楼梯口，天台门已经被风撞得砰砰响。",
    choices: [
      { text: "冲上去", next: "ch6_fail_late_01" }
    ]
  },
  ch6_wrong_roof_01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第六章 · 太快",
    text: "我直接冲上天台。风把门撞到墙上，声音惊动了站在边缘的人。陆眠回头看我，眼神里不是获救，是被发现后的慌乱。",
    choices: [
      { text: "试着解释", next: "ch6_fail_panic_01" }
    ]
  },
  ch6_broadcast_01: {
    art: "ch2FollowMirror",
    scene: "corridor",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第六章 · 广播室",
    text: "陆眠坐在广播桌下，膝盖抱得很紧。她看见我，没有惊讶，只说：你怎么每次都能找到我？",
    choices: [
      { text: "蹲下来，和她平视", next: "ch6_broadcast_02" }
    ]
  },
  ch6_broadcast_02: {
    art: "ch2FollowMirror",
    scene: "corridor",
    effect: "memory",
    speaker: "沈栀",
    chapter: "第六章 · 不说大道理",
    text: "我蹲下来，没有说你要坚强，也没有说事情会过去。我只是把声音放得很低：我来晚过一次，所以这次跑得快了一点。",
    choices: [
      { text: "把发绳拿出来", next: "ch6_hairtie_01" }
    ]
  },
  ch6_hairtie_01: {
    art: "ch2EveningHairtie",
    scene: "corridor",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第六章 · 发绳",
    stateDelta: { luTrust: 2 },
    text: "陆眠看见那根发绳，眼睛一点点红了：我给你的？我点头。她伸手碰了一下，又缩回去：可是我不记得。",
    choices: [
      { text: "说：不记得也没关系，它记得", next: "ch6_hairtie_02" }
    ]
  },
  ch6_hairtie_02: {
    art: "ch2EveningHairtie",
    scene: "corridor",
    effect: "memory",
    speaker: "沈栀",
    chapter: "第六章 · 它记得",
    text: "它记得你在终点笑，记得你把早饭分一半给我，记得你说要是有人早一点来就好了。我看着她：陆眠，我来了。",
    choices: [
      { text: "等她回应", next: "ch6_lu_respond_01" }
    ]
  },
  ch6_lu_respond_01: {
    art: "ch2FollowMirror",
    scene: "corridor",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第六章 · 我真的说过吗",
    text: "陆眠很久才问：我真的说过吗？我说真的。她把脸埋进手臂里，声音闷闷的：那我那时候一定很想活。",
    choices: [
      { text: "说：你现在也可以想", next: "ch6_lu_respond_02" }
    ]
  },
  ch6_lu_respond_02: {
    art: "ch2FollowMirror",
    scene: "corridor",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第六章 · 可以想",
    stateDelta: { luTrust: 2, memoryCount: 1 },
    text: "她抬起头，眼泪落得很安静：可是他们有照片，有录音，有我解释不清的东西。我说：那就不在这里解释。我们先离开这里。",
    choices: [
      { text: "带她往楼下走", next: "ch6_stair_01" }
    ]
  },
  ch6_stair_01: {
    art: "ch2CorridorAfter",
    scene: "corridor",
    effect: "horror",
    speaker: "旁白",
    chapter: "第六章 · 楼梯口",
    text: "我们刚走到楼梯口，手机震了一下。陆眠也听见了。屏幕上是一条匿名消息：你走一步，所有人都会看见。",
    choices: [
      { text: "陆眠停住了", next: "ch6_stair_02" }
    ]
  },
  ch6_stair_02: {
    art: "proSmsThreat",
    scene: "corridor",
    effect: "message",
    speaker: "陆眠",
    chapter: "第六章 · 她又被拽回去",
    text: "陆眠的手从我掌心里滑出去。她看着楼梯下面来来往往的人，像每个人都已经看见了她最害怕的样子。她说：我下不去。",
    choices: [
      { text: "叫白祁和周叙", next: "ch6_support_01" }
    ]
  },
  ch6_support_01: {
    art: "ch2SportsBaiWater",
    scene: "corridor",
    effect: "ambient",
    speaker: "白祁",
    chapter: "第六章 · 白祁在楼下",
    text: "我推开楼梯间的窗，喊白祁。十六岁的白祁抬头，脸色一下变了。他什么都没问，转身就往上跑。",
    choices: [
      { text: "再找周叙", next: "ch6_support_02" }
    ]
  },
  ch6_support_02: {
    art: "ch2LibraryZhou",
    scene: "corridor",
    effect: "ambient",
    speaker: "周叙",
    chapter: "第六章 · 周叙拿到证据",
    stateDelta: { zhouBond: 1 },
    text: "周叙从另一侧走廊赶来，手里拿着打印出来的后台记录：我发给老师了，也发给了校医室。不是发给班群，不会让她被围观。",
    choices: [
      { text: "让陆眠听见这句话", next: "ch6_support_03" }
    ]
  },
  ch6_support_03: {
    art: "ch2SportsBaiWater",
    scene: "corridor",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第六章 · 不是班群",
    text: "陆眠抬起眼。她最怕的是所有人看见。周叙却说，不发给班群。白祁站在楼梯上，气喘吁吁：姐，我在这里。",
    choices: [
      { text: "张恒出现了", next: "ch6_zhang_01" }
    ]
  },
  ch6_zhang_01: {
    art: "ch2CorridorConfront",
    scene: "corridor",
    effect: "horror",
    speaker: "张恒",
    chapter: "第六章 · 最后一推",
    text: "张恒从走廊尽头走过来，手里拿着手机。他没有看我，只看陆眠：你真要让他们替你出头？你以为他们以后不会后悔认识你？",
    choices: [
      { text: "不要替陆眠回答", next: "ch6_zhang_02" }
    ]
  },
  ch6_zhang_02: {
    art: "ch2CorridorConfront",
    scene: "corridor",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第六章 · 不替她回答",
    text: "我看着陆眠，没有看张恒。只要我和他吵起来，陆眠又会变成被迫站在中间的人。我把发绳放到她掌心，说：你可以不回答他。",
    choices: [
      { text: "陆眠握住发绳", next: "ch6_zhang_03" }
    ]
  },
  ch6_zhang_03: {
    art: "ch2EveningHairtie",
    scene: "corridor",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第六章 · 不回答",
    stateDelta: { luTrust: 1 },
    text: "陆眠握住发绳，指节慢慢恢复血色。她说：我不回答你。张恒的表情终于变了。他往前一步，白祁立刻挡在他面前。",
    choices: [
      { text: "天台门被风撞开", next: "ch6_rooftop_01" }
    ]
  },
  ch6_rooftop_01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "旁白",
    chapter: "第六章 · 风口",
    text: "混乱里，陆眠还是被风声吸引着往天台走了一步。我跟上去，没有拉她。天台很空，城市在栏杆外沉默地亮着。",
    choices: [
      { text: "最后选择", next: "ch6_final_choice" }
    ]
  },
  ch6_final_choice: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "沈栀",
    chapter: "第六章 · 最后选择",
    text: "我终于站到那个位置。不是侦探，不是审判者，也不是替她活的人。我要做的，只有把她从一个人的边缘带回两个人的旁边。",
    choices: [
      { text: "立刻公开所有证据，让所有人知道真相", next: "ch6_fail_public_01" },
      { text: "抓住陆眠的手腕，把她往回拉", next: "ch6_fail_grab_01" },
      { text: "把发绳递给她：我来你旁边了", next: "ch6_rescue_01" }
    ]
  },
  ch6_rescue_01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "memory",
    speaker: "沈栀",
    chapter: "第六章 · 我来你旁边了",
    text: "我没有碰她，只把发绳递过去。风很大，我的声音几乎被吹散：陆眠，我来你旁边了。你不用马上相信明天，你先相信这一秒。",
    choices: [
      { text: "等她伸手", next: "ch6_rescue_02" }
    ]
  },
  ch6_rescue_02: {
    art: "rooftop",
    scene: "rooftop",
    effect: "memory",
    speaker: "陆眠",
    chapter: "第六章 · 她伸手",
    text: "陆眠看着我，眼泪被风吹到脸侧。她很慢很慢地伸出手，先碰到发绳，再碰到我的指尖。她说：你真的来了。",
    choices: [
      { text: "说：这次不会走", next: "ch6_rescue_03" }
    ]
  },
  ch6_rescue_03: {
    art: "rooftop",
    scene: "rooftop",
    effect: "memory",
    speaker: "白祁",
    chapter: "第六章 · 他们也在",
    text: "白祁站在门口，声音抖得不像他：姐。周叙把打印件交给赶来的老师和校医，没有让人群围上来。陆眠回头看了一眼，终于往我这边走了一步。",
    choices: [
      { text: "接住她", next: "ch6_rescue_04" }
    ]
  },
  ch6_rescue_04: {
    art: "hospital",
    scene: "hospital",
    effect: "ending",
    speaker: "旁白",
    chapter: "第六章 · 明天以前",
    text: "后来的事很乱。校医室、老师、报警、家长、硬盘、录音。可这一次，乱的不是陆眠一个人的世界。有人记录，有人作证，有人陪她坐到天亮。",
    choices: [
      { text: "现实开始改变", next: "ch6_rescue_05" }
    ]
  },
  ch6_rescue_05: {
    art: "dawn",
    scene: "home",
    effect: "ending",
    speaker: "沈栀",
    chapter: "第六章 · 现实的清晨",
    text: "我在清晨醒来。手机里没有五个月前的讣告，只有一条新消息。陆眠发来一张照片：医院花园里，一束白玫瑰插在玻璃杯里。",
    choices: [
      { text: "点开消息", next: "ch6_rescue_06" }
    ]
  },
  ch6_rescue_06: {
    art: "dawn",
    scene: "home",
    effect: "ending",
    speaker: "陆眠",
    chapter: "结局 A · 替你活到明天",
    ending: "rescue",
    text: "消息下面只有一句话：沈栀，明天见。我看着那三个字，忽然哭出来。原来救一个人不是替她活下去，是终于让她可以自己说出明天。",
    choices: [
      { text: "查看结局图鉴", action: "gallery" },
      { text: "返回主菜单", action: "title" }
    ]
  },
  ch6_fail_public_01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "沈栀",
    chapter: "坏结局 · 太亮的真相",
    text: "我打开手机，想把证据一次性发出去。可屏幕亮起的瞬间，陆眠像被那束光刺到。她退后一步，声音很轻：不要让他们都看见我。",
    choices: [
      { text: "伸手已经晚了", next: "ch6_fail_end_01" }
    ]
  },
  ch6_fail_grab_01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "沈栀",
    chapter: "坏结局 · 失控的手",
    text: "我扑过去抓住她的手腕。陆眠被吓得整个人一颤。她不是不想被救，她只是又一次被人替她决定了身体要往哪里去。",
    choices: [
      { text: "她挣开了", next: "ch6_fail_end_01" }
    ]
  },
  ch6_fail_panic_01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "沈栀",
    chapter: "坏结局 · 被发现",
    text: "我说了很多话，证据、张恒、林中、未来。每一句都是真的，可每一句都太重。陆眠看着我，像看着另一个无法相信她的人。",
    choices: [
      { text: "风声盖住回答", next: "ch6_fail_end_01" }
    ]
  },
  ch6_fail_late_01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "沈栀",
    chapter: "坏结局 · 晚一步",
    text: "我冲上天台时，风已经把所有声音吹散。白祁在楼梯口喊她，周叙手里的证据散了一地。我终于明白，找对真相不等于找对她。",
    choices: [
      { text: "回到现实", next: "ch6_fail_end_01" }
    ]
  },
  ch6_fail_end_01: {
    art: "cemetery",
    scene: "home",
    effect: "ending",
    speaker: "旁白",
    chapter: "结局 B · 没来得及",
    ending: "fail",
    text: "旧手机熄灭了。现实没有再给我下一次。墓园的风很轻，白玫瑰被雨水压弯。我终于知道，真相不能代替陪伴，抓住凶手也不能替她走下天台。",
    choices: [
      { text: "查看结局图鉴", action: "gallery" },
      { text: "返回主菜单", action: "title" }
    ]
  },
  __title__: {
    art: "dawn",
    scene: "home",
    effect: "ambient",
    speaker: "旁白",
    chapter: "返回主菜单",
    text: "返回标题页。",
    choices: [
      { text: "返回主菜单", action: "title" }
    ]
  }
};

const chapterArtOverrides = {
  ch1_start: "ch1DoorBai",
  ch1_start_02: "ch1DoorBai",
  ch1_start_zhou: "ch1LivingThree",
  ch1_start_zhou_02: "ch1LivingThree",
  ch1_living_01: "ch1LivingEmpty",
  ch1_living_02: "ch1LivingBai",
  ch1_living_03: "ch1LivingBai",
  ch1_living_zhou_01: "ch1LivingThree",
  ch1_living_zhou_02: "ch1LivingThree",
  ch1_living_zhou_03: "ch1LivingThree",
  ch1_living_warm_01: "ch1FridgeNoteBai",
  ch1_room_01: "ch1RoomDoor",
  ch1_room_02: "ch1RoomDoor",
  ch1_room_03: "ch1RoomDoor",
  ch1_room_memory_01: "ch1PolaroidDesk",
  ch1_choose_search: "ch1RoomDoor",
  ch1_desk_01: "ch1DeskSun",
  ch1_desk_02: "ch1DeskSun",
  ch1_desk_03: "ch1DeskSun",
  ch1_bedside_01: "ch1TinboxClinic",
  ch1_bedside_02: "ch1TinboxClinic",
  ch1_bedside_03: "ch1TinboxClinic",
  ch1_shelf_01: "ch1DiaryTorn",
  ch1_shelf_02: "ch1DiaryTorn",
  ch1_shelf_03: "ch1DiaryTorn",
  ch1_shelf_04: "ch1DiaryTorn",
  ch1_bai_appears_01: "ch1BaiDoorframe",
  ch1_bai_appears_02: "ch1BaiDoorframe",
  ch1_choose_answer: "ch1BaiDoorframe",
  ch1_ans_a_01: "ch1BaiDoorframe",
  ch1_ans_a_02: "ch1BaiDoorframe",
  ch1_ans_b_01: "ch1BaiDoorframe",
  ch1_ans_b_02: "ch1BaiDoorframe",
  ch1_ans_c_01: "ch1BaiDoorframe",
  ch1_ans_c_02: "ch1BaiDoorframe",
  ch1_wardrobe_01: "ch1WardrobePhone",
  ch1_wardrobe_02: "ch1WardrobePhone",
  ch1_wardrobe_03: "ch1WardrobePhone",
  ch1_wardrobe_04: "ch1WardrobePhone",
  ch1_choose_take: "ch1WardrobePhone",
  ch1_take_phone_01: "ch1OldphoneKey",
  ch1_take_phone_02: "ch1OldphoneKey",
  ch1_take_photo_01: "ch1PolaroidDesk",
  ch1_take_nothing_01: "ch1WardrobePhone",
  ch1_leave_01: "ch1UmbrellaBai",
  ch1_leave_02: "ch1UmbrellaBai",
  ch1_leave_03: "ch1UmbrellaBai",
  ch1_leave_04: "ch1UmbrellaBai",
  ch1_end_01: "ch1OldphoneKey",
  ch1_end_02: "ch1OldphoneKey",
  ch2_trigger: "ch2PhoneWhiteflash",
  ch2_trigger_02: "ch2PhoneWhiteflash",
  ch2_trigger_03: "ch2PhoneWhiteflash",
  ch2_trigger_04: "ch2PhoneWhiteflash",
  ch2_arrive_01: "ch2TrackArriveBg",
  ch2_arrive_02: "ch2ArriveLu",
  ch2_arrive_03: "ch2ArriveLu",
  ch2_choose_respond: "ch2ArriveLu",
  ch2_resp_a_01: "ch2ArriveLu",
  ch2_resp_b_01: "ch2ArriveLu",
  ch2_resp_c_01: "ch2ArriveLu",
  ch2_classroom_01: "ch2ClassroomZhang",
  ch2_classroom_02: "ch2ClassroomZhang",
  ch2_classroom_03: "ch2ClassroomZhang",
  ch2_sports_01: "ch2SportsPin",
  ch2_sports_02: "ch2SportsPin",
  ch2_sports_03: "ch2SportsPin",
  ch2_sports_04: "ch2SportsBaiWater",
  ch2_sports_05: "ch2FinishLu",
  ch2_sports_06: "ch2SportsBaiWater",
  ch2_store_01: "ch2StoreTrio",
  ch2_store_02: "ch2StoreTrio",
  ch2_ask_bai_01: "ch2StoreTrio",
  ch2_walk_together_01: "ch2StoreTrio",
  ch2_ask_lu_01: "ch2StoreTrio",
  ch2_library_01: "ch2LibraryZhou",
  ch2_library_02: "ch2LibraryZhou",
  ch2_ask_zhou_zhang_01: "ch2LibraryZhou",
  ch2_ask_zhou_lu_01: "ch2LibraryZhou",
  ch2_watch_zhou_01: "ch2LibraryZhou",
  ch2_library_03: "ch2LibraryZhou",
  ch2_morning_01: "ch2MorningFood",
  ch2_morning_02: "ch2MorningFood",
  ch2_food_01: "ch2MorningFood",
  ch2_ask_event_01: "ch2MorningFood",
  ch2_silent_01: "ch2MorningFood",
  ch2_corridor_01: "ch2CorridorConfront",
  ch2_corridor_02: "ch2CorridorConfront",
  ch2_corridor_03: "ch2CorridorConfront",
  ch2_corridor_04: "ch2CorridorConfront",
  ch2_choose_after: "ch2CorridorConfront",
  ch2_ask_zhou_after_01: "ch2CorridorConfront",
  ch2_ignore_01: "ch2CorridorAfter",
  ch2_follow_lu_01: "ch2FollowMirror",
  ch2_follow_lu_02: "ch2FollowMirror",
  ch2_evening_01: "ch2EveningHairtie",
  ch2_evening_02: "ch2EveningHairtie",
  ch2_evening_03: "ch2WhiteReturnTrack",
  ch2_return_01: "ch2PhoneWhiteflash",
  ch2_return_02: "ch2PhoneWhiteflash",
  ch3_bai_arrive_02: "ch3LuBox",
  ch3_bai_arrive_03: "ch3LuBox",
  ch3_box_01: "ch3LuBox",
  ch3_box_02: "ch3LuBox",
  ch3_box_03: "ch3LuBox",
  ch3_school_02: "ch3YearbookTorn",
  ch3_school_03: "ch3YearbookTorn",
  ch3_school_04: "ch3YearbookTorn",
  ch3_school_05: "ch3YearbookTorn",
  ch3_threat_01: "ch3ThreatWindow",
  ch3_choice_threat: "ch3ThreatWindow",
  ch3_reply_01: "ch3ThreatWindow",
  ch3_delete_01: "ch3ThreatWindow",
  ch3_backup_01: "ch3BackupTrio",
  ch4_class_01: "ch4NoteDesk",
  ch4_note_01: "ch4NoteDesk",
  ch4_lu_note_01: "ch4NoteDesk",
  ch4_choice_after_note: "ch4NoteDesk",
  ch4_artroom_01: "ch4ArtroomPromise",
  ch4_artroom_02: "ch4ArtroomPromise",
  ch4_artroom_03: "ch4ArtroomPromise",
  ch4_artroom_04: "ch4ArtroomPromise",
  ch4_artroom_05: "ch4ArtroomPromise",
  ch4_update_01: "ch4WallUpdate",
  ch4_choice_wall: "ch4WallUpdate",
  ch4_wall_good_01: "ch4WallUpdate",
  ch4_wall_public_01: "ch4WallUpdate",
  ch4_wall_lu_01: "ch4WallUpdate",
  ch4_photo_room_01: "ch4PhotoRoomZhang",
  ch4_photo_room_02: "ch4PhotoRoomZhang",
  ch4_photo_room_03: "ch4PhotoRoomZhang",
  ch4_lu_speaks_01: "ch4PhotoRoomZhang",
  ch4_photo_room_04: "ch4PhotoRoomZhang",
  ch5_flower_01: "ch5FlowerOrder",
  ch5_flower_02: "ch5FlowerOrder",
  ch5_flower_03: "ch5FlowerOrder",
  ch5_flower_04: "ch5FlowerOrder",
  ch5_flower_05: "ch5FlowerOrder",
  ch5_search_lin_02: "ch5StudioWall",
  ch5_studio_02: "ch5StudioWall",
  ch5_studio_03: "ch5StudioWall",
  ch5_studio_04: "ch5StudioWall",
  ch5_envelope_01: "ch5EnvelopeBai",
  ch5_choice_envelope: "ch5EnvelopeBai",
  ch5_envelope_together_01: "ch5EnvelopeBai",
  ch5_envelope_later_01: "ch5EnvelopeBai",
  ch5_drive_01: "ch5StudioWall",
  ch5_drive_02: "ch5StudioWall",
  ch5_call_01: "ch5CallRecording",
  ch5_call_02: "ch5CallRecording",
  ch5_choice_call: "ch5CallRecording",
  ch5_call_good_01: "ch5CallRecording",
  ch5_call_angry_01: "ch5CallRecording",
  ch5_call_silent_01: "ch5CallRecording",
  ch5_police_01: "ch5CallRecording",
  ch6_find_lu_01: "ch6BroadcastRoom",
  ch6_broadcast_01: "ch6BroadcastRoom",
  ch6_broadcast_02: "ch6BroadcastRoom",
  ch6_hairtie_01: "ch6BroadcastRoom",
  ch6_hairtie_02: "ch6BroadcastRoom",
  ch6_lu_respond_01: "ch6BroadcastRoom",
  ch6_lu_respond_02: "ch6BroadcastRoom",
  ch6_stair_01: "ch6StaircaseZhang",
  ch6_stair_02: "ch6StaircaseZhang",
  ch6_zhang_01: "ch6StaircaseZhang",
  ch6_zhang_02: "ch6StaircaseZhang",
  ch6_zhang_03: "ch6StaircaseZhang",
  ch6_rooftop_01: "ch6RooftopReach",
  ch6_final_choice: "ch6RooftopReach",
  ch6_rescue_01: "ch6RooftopReach",
  ch6_rescue_02: "ch6RooftopReach",
  ch6_rescue_03: "ch6RooftopReach",
  ch6_rescue_04: "ch6HospitalDawn",
  ch6_rescue_05: "ch6HospitalDawn",
  ch6_rescue_06: "ch6HospitalDawn"
};

Object.entries(chapterArtOverrides).forEach(([nodeId, art]) => {
  if (script[nodeId]) {
    script[nodeId].art = art;
  }
});

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
  renderedImage: "",
  selectedEnding: null,
  pendingContinue: null,
  currentFullText: "",
  luTrust: 0,
  baiBond: 0,
  zhouBond: 0,
  baiClue: 0,
  zhouClue: 0,
  memoryCount: 0,
  zhangKnown: 0
};

const els = {
  shell: document.querySelector(".game-shell"),
  sceneBg: document.querySelector(".scene-bg"),
  title: document.querySelector("#titleScreen"),
  menuBtn: document.querySelector("#menuBtn"),
  menuPopover: document.querySelector("#menuPopover"),
  dialoguePanel: document.querySelector("#dialoguePanel"),
  speaker: document.querySelector("#speakerName"),
  nodeCount: document.querySelector("#nodeCount"),
  text: document.querySelector("#dialogueText"),
  continueHint: document.querySelector("#continueHint"),
  choices: document.querySelector("#choiceList"),
  chapter: document.querySelector("#chapterPill"),
  toast: document.querySelector("#toast"),
  saveModal: document.querySelector("#saveModal"),
  galleryModal: document.querySelector("#galleryModal"),
  modalTitle: document.querySelector("#modalTitle"),
  slotGrid: document.querySelector("#slotGrid"),
  endingGrid: document.querySelector("#endingGrid"),
  endingDetail: document.querySelector("#endingDetail"),
  soundBtn: document.querySelector("#soundBtn"),
  mediaCard: document.querySelector("#mediaCard"),
  mediaDevice: document.querySelector("#mediaDevice"),
  mediaTopline: document.querySelector("#mediaTopline"),
  mediaBody: document.querySelector("#mediaBody")
};

const mediaKindByType = {
  sms: "phone",
  chat: "phone",
  note: "note",
  objective: "evidence",
  room: "room",
  photo: "photo",
  video: "video",
  drive: "evidence",
  code: "screen",
  record: "record",
  mirror: "mirror",
  memory: "photo"
};

const bgmManifest = {
  rain:    "./assets/audio/bgm-rain.mp3",
  senti:   "./assets/audio/bgm-senti.mp3",
  epic:    "./assets/audio/bgm-epic.mp3"
};

// 每种 effect 对应哪首 BGM
const bgmByEffect = {
  rain:    "rain",
  message: "rain",
  photo:   "senti",
  memory:  "senti",
  video:   "senti",
  horror:  "epic",
  ending:  "epic"
};


function storyStateDefaults() {
  return {
    luTrust: 0,
    baiBond: 0,
    zhouBond: 0,
    baiClue: 0,
    zhouClue: 0,
    memoryCount: 0,
    zhangKnown: 0
  };
}

function resetStoryState() {
  restoreStoryState(storyStateDefaults());
}

function captureStoryState() {
  return {
    luTrust: state.luTrust,
    baiBond: state.baiBond,
    zhouBond: state.zhouBond,
    baiClue: state.baiClue,
    zhouClue: state.zhouClue,
    memoryCount: state.memoryCount,
    zhangKnown: state.zhangKnown
  };
}

function restoreStoryState(snapshot = {}) {
  const next = { ...storyStateDefaults(), ...(snapshot || {}) };
  state.luTrust = Number(next.luTrust) || 0;
  state.baiBond = Number(next.baiBond) || 0;
  state.zhouBond = Number(next.zhouBond) || 0;
  state.baiClue = Number(next.baiClue) || 0;
  state.zhouClue = Number(next.zhouClue) || 0;
  state.memoryCount = Number(next.memoryCount) || 0;
  state.zhangKnown = Number(next.zhangKnown) || 0;
}

function normalizeHistory(history = []) {
  return history
    .map((entry) => {
      if (typeof entry === "string") {
        return { nodeId: entry, storyState: storyStateDefaults() };
      }
      if (!entry || !entry.nodeId) return null;
      return {
        nodeId: entry.nodeId,
        storyState: { ...storyStateDefaults(), ...(entry.storyState || {}) }
      };
    })
    .filter(Boolean);
}

function applyStateDelta(delta = {}) {
  if (typeof delta.luTrust === "number") state.luTrust += delta.luTrust;
  if (typeof delta.baiBond === "number") state.baiBond += delta.baiBond;
  if (typeof delta.zhouBond === "number") state.zhouBond += delta.zhouBond;
  if (typeof delta.baiClue === "number") state.baiClue += delta.baiClue;
  if (typeof delta.zhouClue === "number") state.zhouClue += delta.zhouClue;
  if (typeof delta.memoryCount === "number") state.memoryCount += delta.memoryCount;
  if (typeof delta.zhangKnown === "number") state.zhangKnown = delta.zhangKnown ? 1 : 0;
}

function softenZhangText(text) {
  const raw = String(text ?? "");
  if (state.zhangKnown) return raw;
  return raw
    .replace(/张恒短信/g, "陌生短信")
    .replace(/张恒/g, "那个人");
}

function resolveNodeText(text) {
  return softenZhangText(typeof text === "function" ? text() : (text || ""));
}

function resolveTextForStoryState(node, snapshot) {
  const previous = captureStoryState();
  restoreStoryState(snapshot || storyStateDefaults());
  const text = resolveNodeText(node.text);
  restoreStoryState(previous);
  return text;
}

function readStore() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { saves: {}, endings: {} };
  } catch {
    return { saves: {}, endings: {} };
  }
}

function writeStore(next) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

function audio() {
  if (!state.audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) state.audioContext = new AudioContext();
  }
  return state.audioContext;
}

// ─── BGM ─────────────────────────────────────────────────────────────────────
function playBgm(key) {
  if (!state.sound) return;
  const src = bgmManifest[key];
  if (!src) return;
  if (state.currentBgm === key && state.bgmAudio && !state.bgmAudio.paused) return;

  stopBgm();

  const audio = new Audio(src);
  audio.loop = true;
  audio.volume = 0;
  audio.play().catch(() => {});
  // fade in
  const fadeIn = setInterval(() => {
    if (audio.volume < 0.34) audio.volume = Math.min(0.34, audio.volume + 0.01);
    else clearInterval(fadeIn);
  }, 80);

  state.bgmAudio = audio;
  state.currentBgm = key;
}

function stopBgm() {
  if (!state.bgmAudio) return;
  const a = state.bgmAudio;
  const fadeOut = setInterval(() => {
    if (a.volume > 0.02) a.volume = Math.max(0, a.volume - 0.02);
    else { clearInterval(fadeOut); a.pause(); a.src = ""; }
  }, 80);
  state.bgmAudio = null;
  state.currentBgm = "";
}

function beep(kind = "choice") {
  if (!state.sound) return;
  const ctx = audio();
  if (!ctx) return;
  const now = ctx.currentTime;
  const playTone = ({ freq, start = 0, duration = 0.08, type = "sine", gain = 0.04, detune = 0 }) => {
    const osc = ctx.createOscillator();
    const vol = ctx.createGain();
    osc.frequency.value = freq;
    osc.detune.value = detune;
    osc.type = type;
    vol.gain.setValueAtTime(0.0001, now + start);
    vol.gain.exponentialRampToValueAtTime(gain, now + start + 0.012);
    vol.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);
    osc.connect(vol);
    vol.connect(ctx.destination);
    osc.start(now + start);
    osc.stop(now + start + duration + 0.03);
  };

  const noise = ({ start = 0, duration = 0.16, gain = 0.025 }) => {
    const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const vol = ctx.createGain();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(620, now + start);
    vol.gain.setValueAtTime(gain, now + start);
    vol.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);
    source.buffer = buffer;
    source.connect(filter);
    filter.connect(vol);
    vol.connect(ctx.destination);
    source.start(now + start);
    source.stop(now + start + duration);
  };

  const cues = {
    choice: () => playTone({ freq: 620, duration: 0.055, type: "triangle", gain: 0.035 }),
    save: () => {
      playTone({ freq: 520, duration: 0.075, type: "sine", gain: 0.035 });
      playTone({ freq: 780, start: 0.055, duration: 0.11, type: "sine", gain: 0.045 });
    },
    message: () => {
      playTone({ freq: 880, duration: 0.05, type: "sine", gain: 0.034 });
      playTone({ freq: 1175, start: 0.085, duration: 0.07, type: "sine", gain: 0.03 });
    },
    video: () => {
      noise({ duration: 0.18, gain: 0.022 });
      playTone({ freq: 126, start: 0.015, duration: 0.2, type: "sawtooth", gain: 0.018 });
    },
    memory: () => {
      playTone({ freq: 1046, duration: 0.06, type: "sine", gain: 0.026 });
      playTone({ freq: 784, start: 0.045, duration: 0.12, type: "triangle", gain: 0.02 });
      noise({ start: 0.02, duration: 0.11, gain: 0.01 });
    },
    horror: () => {
      playTone({ freq: 92, duration: 0.32, type: "sawtooth", gain: 0.018, detune: -8 });
      playTone({ freq: 138, start: 0.04, duration: 0.24, type: "triangle", gain: 0.014, detune: 12 });
      noise({ start: 0.02, duration: 0.22, gain: 0.014 });
    },
    ending: () => {
      playTone({ freq: 196, duration: 0.46, type: "triangle", gain: 0.036 });
      playTone({ freq: 247, start: 0.045, duration: 0.42, type: "triangle", gain: 0.028 });
      playTone({ freq: 330, start: 0.09, duration: 0.48, type: "sine", gain: 0.032 });
      noise({ start: 0.02, duration: 0.22, gain: 0.012 });
    },
    error: () => {
      playTone({ freq: 148, duration: 0.075, type: "square", gain: 0.022 });
      playTone({ freq: 96, start: 0.06, duration: 0.09, type: "square", gain: 0.018 });
    }
  };
  (cues[kind] || cues.choice)();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("is-visible"), 1900);
}

function closeMenu() {
  els.menuPopover.classList.remove("is-open");
  els.menuBtn.setAttribute("aria-expanded", "false");
}

function setTitleVisible(visible) {
  els.title.classList.toggle("is-visible", visible);
  els.shell.classList.toggle("is-title", visible);
  if (visible) {
    closeMenu();
    state.typingToken += 1;
    state.nodeId = "title";
    state.history = [];
    resetStoryState();
    state.selectedEnding = null;
    state.pendingContinue = null;
    state.currentFullText = "";
    els.choices.innerHTML = "";
    els.text.textContent = "";
    els.continueHint.classList.remove("is-visible");
    els.mediaCard.classList.remove("is-visible");
    els.chapter.textContent = "替你活到明天";
    els.speaker.textContent = "旁白";
    els.nodeCount.textContent = "00";
    applyVisual({ art: "door", scene: "home", effect: "rain" });
  }
}

function startGame(nodeId = "start", preserveHistory = false) {
  if (!preserveHistory) state.history = [];
  if (!preserveHistory) resetStoryState();
  setTitleVisible(false);
  renderNode(nodeId);
}

function renderNode(nodeId, options = {}) {
  const node = script[nodeId];
  if (!node) return;
  closeMenu();

  state.nodeId = nodeId;
  state.typingToken += 1;
  const token = state.typingToken;
  const store = readStore();
  state.pendingContinue = null;
  if (!options.skipStateDelta) applyStateDelta(node.stateDelta);
  const fullText = resolveNodeText(node.text);
  state.currentFullText = fullText;
  els.continueHint.classList.remove("is-visible");

  if (node.ending) {
    store.endings[node.ending] = true;
    writeStore(store);
    beep("ending");
    showToast(`已解锁：${endings[node.ending].title}`);
  } else if (node.effect === "message") {
    beep("message");
  } else if (node.effect === "video") {
    beep("video");
  } else if (node.effect === "memory") {
    beep("memory");
  } else if (node.effect === "horror") {
    beep("horror");
  }

  const bgmKey = bgmByEffect[node.effect || "rain"] || "rain";
  if (bgmKey !== state.currentBgm) playBgm(bgmKey);

  applyVisual(node);
  els.chapter.textContent = softenZhangText(node.chapter || "替你活到明天");
  els.speaker.textContent = softenZhangText(node.speaker || "旁白");
  els.nodeCount.textContent = `${Math.max(1, state.history.length + 1).toString().padStart(2, "0")}`;

  els.dialoguePanel.classList.remove("pulse", "shake");
  void els.dialoguePanel.offsetWidth;
  els.dialoguePanel.classList.add("pulse");

  renderMedia(node.media);
  typeText(fullText, token, () => {
    if (token === state.typingToken) renderChoices(node.choices || []);
  });
  renderChoices([]);
}

function applyVisual(node) {
  const art = artManifest[node.art] || artManifest.door;
  els.shell.dataset.scene = node.scene || "home";
  els.shell.dataset.effect = node.effect || "rain";
  els.shell.dataset.cast = "none";
  setSceneImage(node.image || art.image, art.fallback);
}

function inferCast(node) {
  const parts = new Set();
  const haystack = `${node.speaker || ""} ${node.chapter || ""} ${node.text || ""}`;
  if (/沈栀|你选择了沈栀|咨询师|急诊室|复诊/.test(haystack)) parts.add("shen");
  if (/周叙/.test(haystack)) parts.add("zhou");
  if (/白祁/.test(haystack)) parts.add("bai");
  if (/陆眠|浅黄色卫衣|旧号码|纪念页/.test(haystack)) parts.add("lu");

  if (node.art === "lumianVideo") {
    parts.clear();
    parts.add("lu");
  }
  if (node.scene === "rooftop") {
    parts.add("shen");
    parts.add("lu");
  }
  if (node.scene === "studio" && /白祁/.test(haystack)) {
    parts.add("shen");
    parts.add("bai");
  }
  if (node.art === "zhouDoor" || /周叙线|周叙/.test(haystack)) {
    parts.add("shen");
    parts.add("zhou");
  }
  if (/三人|周叙.*白祁|白祁.*周叙/.test(haystack)) {
    parts.add("zhou");
    parts.add("bai");
  }

  return parts.size ? [...parts].join(" ") : "none";
}

function setSceneImage(candidate, fallback) {
  const safeFallback = fallback || "./assets/cg-door-gpt2.png";
  const paintImage = image => {
    state.renderedImage = image;
    els.sceneBg.style.setProperty("--scene-image", `url("${image}")`);
    els.shell.classList.add("is-visual-ready");
  };

  if (!candidate) {
    state.activeImage = safeFallback;
    paintImage(safeFallback);
    return;
  }
  state.activeImage = candidate;

  if (state.imageCache.get(candidate) === true) {
    paintImage(candidate);
    return;
  }
  if (state.imageCache.get(candidate) === false) {
    if (!state.renderedImage) paintImage(safeFallback);
    return;
  }

  const img = new Image();
  img.onload = () => {
    state.imageCache.set(candidate, true);
    if (state.activeImage === candidate) {
      paintImage(candidate);
    }
  };
  img.onerror = () => {
    state.imageCache.set(candidate, false);
    if (state.activeImage === candidate && !state.renderedImage) {
      paintImage(safeFallback);
    }
  };
  img.src = candidate;
}

function renderMedia(media) {
  if (!media) {
    els.mediaCard.classList.remove("is-visible");
    els.mediaCard.removeAttribute("data-kind");
    return;
  }

  const kind = mediaKindByType[media.type || ""] || "evidence";
  els.mediaCard.className = `story-prop is-visible prop-${kind}`;
  els.mediaCard.dataset.kind = kind;
  els.mediaDevice.className = `prop-device prop-device-${kind}`;
  els.mediaTopline.textContent = softenZhangText(media.title || "线索");

  const body = escapeHtml(softenZhangText(media.body || ""));
  const extra = media.choices ? `<small>${escapeHtml(softenZhangText(media.choices))}</small>` : "";
  const details = body ? `<p>${body}</p>${extra}` : extra;

  if (kind === "phone") {
    els.mediaBody.innerHTML = `<div class="phone-speaker"></div><div class="message-bubble">${details}</div><div class="phone-home"></div>`;
    return;
  }
  if (kind === "video") {
    els.mediaBody.innerHTML = `<div class="video-frame"><span></span>${details}</div><div class="video-progress"></div>`;
    return;
  }
  if (kind === "photo") {
    els.mediaBody.innerHTML = `<div class="photo-paper">${details}</div>`;
    return;
  }
  if (kind === "screen") {
    els.mediaBody.innerHTML = `<div class="screen-lines">${details}</div>`;
    return;
  }
  els.mediaBody.innerHTML = `<div class="evidence-paper">${details}</div>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function typeText(text, token, onDone) {
  els.text.textContent = "";
  const chars = Array.from(text);
  let index = 0;
  const step = () => {
    if (token !== state.typingToken) return;
    index += 1;
    els.text.textContent = chars.slice(0, index).join("");
    if (index < chars.length) {
      window.setTimeout(step, 11);
    } else {
      onDone?.();
    }
  };
  step();
}

function renderChoices(choices) {
  els.choices.innerHTML = "";
  const isScreenAdvance = choices.length === 1 && Boolean(choices[0]?.next);
  if (isScreenAdvance) {
    state.pendingContinue = choices[0];
    els.continueHint.classList.add("is-visible");
    els.shell.classList.add("can-advance");
    return;
  }
  state.pendingContinue = null;
  els.continueHint.classList.remove("is-visible");
  els.shell.classList.remove("can-advance");
  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = `<span>选项 ${index + 1}</span>${escapeHtml(softenZhangText(choice.text))}`;
    button.addEventListener("click", () => choose(choice));
    els.choices.appendChild(button);
  });
}

function advanceByScreenClick(event) {
  if (els.title.classList.contains("is-visible")) return;
  if (els.saveModal.open || els.galleryModal.open) return;
  if (event.target.closest("button, dialog, .top-menu, .story-prop")) return;
  if (event.target.closest(".choice-dock") && els.choices.querySelector("button")) return;
  const node = script[state.nodeId];
  if (!node) return;

  if (els.text.textContent !== state.currentFullText) {
    state.typingToken += 1;
    els.text.textContent = state.currentFullText;
    renderChoices(node.choices || []);
    beep("choice");
    return;
  }

  if (state.pendingContinue) {
    choose(state.pendingContinue);
  }
}

function choose(choice) {
  beep("choice");
  if (choice.action === "title") {
    setTitleVisible(true);
    return;
  }
  if (choice.action === "gallery") {
    openGallery();
    return;
  }
  if (choice.next) {
    state.history.push({
      nodeId: state.nodeId,
      storyState: captureStoryState()
    });
    renderNode(choice.next);
  }
}

function goBack() {
  closeMenu();
  const prev = state.history.pop();
  if (!prev) {
    els.dialoguePanel.classList.remove("shake");
    void els.dialoguePanel.offsetWidth;
    els.dialoguePanel.classList.add("shake");
    beep("error");
    showToast("已经是当前路线的第一幕");
    return;
  }
  const entry = typeof prev === "string"
    ? { nodeId: prev, storyState: storyStateDefaults() }
    : prev;
  restoreStoryState(entry.storyState);
  renderNode(entry.nodeId, { skipStateDelta: true });
}

function saveToSlot(slot) {
  const store = readStore();
  store.saves[slot] = {
    nodeId: state.nodeId,
    history: [...state.history],
    storyState: captureStoryState(),
    savedAt: new Date().toISOString()
  };
  writeStore(store);
  beep("save");
  renderSlots("save");
  showToast(`已存入档位 ${slot}`);
}

function loadFromSlot(slot) {
  const store = readStore();
  const save = store.saves[slot];
  if (!save) {
    beep("error");
    showToast("这个档位还是空的");
    return;
  }
  state.history = normalizeHistory(save.history || []);
  restoreStoryState(save.storyState);
  els.saveModal.close();
  setTitleVisible(false);
  renderNode(save.nodeId, { skipStateDelta: true });
  showToast(`已读取档位 ${slot}`);
}

function formatTime(iso) {
  if (!iso) return "空档位";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(iso));
}

function renderSlots(mode) {
  els.modalTitle.textContent = mode === "save" ? "存档" : "读档";
  const store = readStore();
  els.slotGrid.innerHTML = "";

  [1, 2, 3].forEach((slot) => {
    const save = store.saves[slot];
    const node = save ? script[save.nodeId] : null;
    const previewText = node ? resolveTextForStoryState(node, save.storyState) : "";
    const chapterLabel = node ? softenZhangText(node.chapter) : "";
    const speakerLabel = node ? softenZhangText(node.speaker) : "";
    const card = document.createElement("article");
    card.className = "slot-card";
    card.innerHTML = `
      <div>
        <strong>档位 ${slot} · ${node ? escapeHtml(chapterLabel) : "空档位"}</strong>
        <span>${node ? escapeHtml(`${speakerLabel}：${previewText.slice(0, 42)}...`) : "还没有保存进度"}</span>
      </div>
      <div class="slot-foot">
        <span>${formatTime(save?.savedAt)}</span>
        <div class="slot-actions">
          <button type="button" data-action="save">存入</button>
          <button type="button" data-action="load">读取</button>
        </div>
      </div>
    `;
    card.querySelector('[data-action="save"]').addEventListener("click", () => saveToSlot(slot));
    card.querySelector('[data-action="load"]').addEventListener("click", () => loadFromSlot(slot));
    els.slotGrid.appendChild(card);
  });
}

function openSlots(mode) {
  closeMenu();
  renderSlots(mode);
  els.saveModal.showModal();
}

function getEndingImage(ending) {
  const art = artManifest[ending.thumbnail] || artManifest.dawn;
  return art.image || art.fallback || "./assets/cg-dawn-gpt2.png";
}

function renderEndingDetail(id, unlocked) {
  const ending = endings[id];
  if (!ending) return;
  const lockLabel = unlocked ? "已解锁" : "未解锁";
  els.endingDetail.innerHTML = `
    <p class="detail-kicker">${escapeHtml(lockLabel)} · ${escapeHtml(ending.badge || "结局")}</p>
    <h3>${escapeHtml(unlocked ? ending.title : "？？？")}</h3>
    <p class="detail-quote">${escapeHtml(unlocked ? ending.key : ending.hint)}</p>
    <dl>
      <div>
        <dt>回收条件</dt>
        <dd>${escapeHtml(ending.route || ending.hint)}</dd>
      </div>
      <div>
        <dt>结局含义</dt>
        <dd>${escapeHtml(unlocked ? ending.meaning : "先在正篇里抵达这个结局，图鉴会补全它真正代表的选择。")}</dd>
      </div>
      <div>
        <dt>关键矛盾</dt>
        <dd>${escapeHtml(unlocked ? ending.conflict : "这里会记录这个结局真正卡住角色的地方。")}</dd>
      </div>
      <div>
        <dt>选择代价</dt>
        <dd>${escapeHtml(unlocked ? ending.cost : "未解锁前不展开代价，避免提前剧透。")}</dd>
      </div>
      <div>
        <dt>角色后续</dt>
        <dd>${escapeHtml(unlocked ? ending.after : "未解锁前只显示路线方向，避免剧透终幕细节。")}</dd>
      </div>
      <div>
        <dt>收束含义</dt>
        <dd>${escapeHtml(unlocked ? ending.closure : "解锁后会显示为什么这个结局成立。")}</dd>
      </div>
    </dl>
  `;
}

function openGallery() {
  closeMenu();
  const store = readStore();
  els.endingGrid.innerHTML = "";
  const entries = Object.entries(endings);
  const firstUnlocked = entries.find(([id]) => Boolean(store.endings[id]))?.[0] || entries[0]?.[0];

  entries.forEach(([id, ending]) => {
    const unlocked = Boolean(store.endings[id]);
    const selected = id === firstUnlocked;
    const card = document.createElement("button");
    card.type = "button";
    card.className = `ending-card ${unlocked ? "" : "is-locked"} ${selected ? "is-selected" : ""}`;
    card.dataset.ending = id;
    card.innerHTML = `
      <span class="ending-thumb" style="background-image: linear-gradient(180deg, rgba(6,6,9,0.02), rgba(6,6,9,0.64)), url('${escapeHtml(getEndingImage(ending))}')"></span>
      <span class="ending-badge">${escapeHtml(ending.badge || "结局")}</span>
      <strong>${unlocked ? escapeHtml(ending.title) : "未解锁结局"}</strong>
      <span>${escapeHtml(unlocked ? ending.detail : ending.hint)}</span>
    `;
    card.addEventListener("click", () => {
      state.selectedEnding = id;
      els.endingGrid.querySelectorAll(".ending-card").forEach((item) => item.classList.toggle("is-selected", item === card));
      renderEndingDetail(id, unlocked);
      beep(unlocked ? "choice" : "error");
    });
    els.endingGrid.appendChild(card);
  });
  state.selectedEnding = firstUnlocked;
  renderEndingDetail(firstUnlocked, Boolean(store.endings[firstUnlocked]));
  els.galleryModal.showModal();
}

function continueLatest() {
  const saves = readStore().saves || {};
  const latest = Object.values(saves)
    .filter(Boolean)
    .sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt))[0];
  if (!latest) {
    showToast("还没有可读取的存档");
    beep("error");
    return;
  }
  state.history = normalizeHistory(latest.history || []);
  restoreStoryState(latest.storyState);
  setTitleVisible(false);
  renderNode(latest.nodeId, { skipStateDelta: true });
}

document.querySelector("#startBtn").addEventListener("click", () => {
  beep("choice");
  startGame("start");
});
document.querySelector("#continueBtn").addEventListener("click", continueLatest);
document.querySelector("#titleGalleryBtn").addEventListener("click", openGallery);
els.menuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = !els.menuPopover.classList.contains("is-open");
  els.menuPopover.classList.toggle("is-open", open);
  els.menuBtn.setAttribute("aria-expanded", String(open));
});
document.querySelector("#homeBtn").addEventListener("click", () => setTitleVisible(true));
document.querySelector("#backBtn").addEventListener("click", goBack);
document.querySelector("#saveBtn").addEventListener("click", () => openSlots("save"));
document.querySelector("#loadBtn").addEventListener("click", () => openSlots("load"));
document.querySelector("#galleryBtn").addEventListener("click", openGallery);
document.querySelector("#soundBtn").addEventListener("click", () => {
  state.sound = !state.sound;
  els.soundBtn.classList.toggle("is-muted", !state.sound);
  if (!state.sound) {
    stopBgm();
    state.currentBgm = "";
  } else {
    const node = script[state.nodeId];
    if (node) playBgm(bgmByEffect[node.effect || "rain"] || "rain");
  }
  showToast(state.sound ? "音乐已开启" : "音乐已关闭");
  closeMenu();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    return;
  }
  const number = Number(event.key);
  if (!Number.isInteger(number) || number < 1) return;
  const choice = script[state.nodeId]?.choices?.[number - 1];
  if (choice && !els.title.classList.contains("is-visible")) choose(choice);
});

window.addEventListener("click", (event) => {
  if (!event.target.closest(".top-menu")) closeMenu();
  advanceByScreenClick(event);
});

setTitleVisible(true);
