const STORAGE_KEY = "live-until-tomorrow-v2";

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
    fallback: "./assets/cg-album-gpt2.png",
    prompt: "Visual novel CG, phone photo album open on a rainy night, old photo of two young Chinese women at a convenience store window, warm memory against cold present, cinematic close-up, emotional, no text, no watermark, 16:9."
  },
  zhouDoor: {
    image: "./assets/cg-zhou-door-gpt2.png",
    fallback: "./assets/cg-zhou-door-gpt2.png",
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
    fallback: "./assets/cg-cemetery-gpt2.png",
    prompt: "Quiet modern cemetery after rain, white roses, simple memorial stone, emotional healing visual novel CG, no readable text, no watermark, 16:9."
  },
  hospital: {
    image: "./assets/cg-hospital-gpt2.png",
    fallback: "./assets/cg-hospital-gpt2.png",
    prompt: "Hospital crisis counseling room at dawn, intake form, phone on desk, quiet recovery mood, visual novel CG, no readable text, no watermark, 16:9."
  },
  court: {
    image: "./assets/cg-court-gpt2.png",
    fallback: "./assets/cg-court-gpt2.png",
    prompt: "Modern courtroom or police evidence room, projector glow, evidence bags, USB drive, serious visual novel CG, no readable text, no watermark, 16:9."
  },
  flowerShop: {
    image: "./assets/cg-flower-shop-gpt2.png",
    fallback: "./assets/cg-flower-shop-gpt2.png",
    prompt: "Small flower shop on a rainy evening, white roses and blank card, lonely suspense visual novel CG, no readable text, no watermark, 16:9."
  }
};

const endings = {
  live: {
    title: "结局 A：替我活下去",
    hint: "在最终选择里选择沈栀。",
    detail: "你没有把活着当成赎罪，而是把它当成陆眠留给你的明天。",
    badge: "普通结局",
    thumbnail: "hospital",
    route: "查清天台录像和短信源头后，在最终选择里选择‘沈栀’。",
    meaning: "这不是被原谅后才允许活下去，而是在仍然有愧疚、仍然会痛的时候，承认自己需要帮助。",
    after: "沈栀开始接受危机干预，剪完陆眠的视频，也第一次能在墓前待到天色变暗。",
    key: "明天见，不是遗言。",
    conflict: "沈栀最大的敌人不是白祁、周叙或短信，而是她把‘活着’理解成对陆眠的背叛。这个结局里，她没有立刻变好，只是第一次把求助说出口。",
    cost: "代价是她必须保留全部记忆：未接来电、天台录像、陆眠最后的推手，都会跟着她进入每一个明天。",
    closure: "所以它的成就感不在于洗白，而在于沈栀终于没有把陆眠的爱继续用来惩罚自己。"
  },
  oldDream: {
    title: "结局 B：旧梦重燃",
    hint: "在周叙线里放弃查清真相，和他离开。",
    detail: "你们逃到了新的城市，却把 23:17 一起带了过去。",
    badge: "偏离结局",
    thumbnail: "cemetery",
    route: "相信周叙的逃跑邀请，带着或者交出 U 盘，离开旧城。",
    meaning: "它看起来像爱情，其实是两个人互相替对方逃避。温柔是真的，亏欠也是真的。",
    after: "你们最终还是回到陆眠墓前，承认逃离没有让任何人真正重新开始。",
    key: "偷来的明天，也要还利息。",
    conflict: "周叙给沈栀的不是坏结局里的恶意，而是一种很危险的温柔：他愿意照顾她，也愿意替她把真相继续藏起来。",
    cost: "这条路的代价是两个人都不用立刻面对陆眠，却也无法真正拥有新生活。新城市只是更远的旧现场。",
    closure: "最终回到墓园，说明这不是纯粹的恋爱线，而是一条迟到的认罪线。"
  },
  trial: {
    title: "结局 C：白祁的审判",
    hint: "在白祁线里拒绝继续看真相，或把决定交给白祁。",
    detail: "他没有伤害你，只是替姐姐把所有被忘掉的证据交给了清晨。",
    badge: "审判结局",
    thumbnail: "court",
    route: "进入白祁线，在摄影棚里退缩、拒绝继续看，触发白祁的强制审判。",
    meaning: "真相没有自动治愈任何人，但它阻止活着的人继续把陆眠当作互相惩罚的理由。",
    after: "白祁被带走前留下旧照片，沈栀作为重要证人说完整个夜晚。",
    key: "证词不是刀。",
    conflict: "白祁不是单纯的复仇者。他恨沈栀，也恨自己只能靠恨来保存姐姐。这个结局让他终于从‘审判沈栀’转向‘承认自己也被困住’。",
    cost: "代价是所有人都要在公开场合重述最不堪的一晚，真相不再只属于他们，也不再允许他们随意改写。",
    closure: "庭审不是胜利，是把陆眠从私人惩罚里救出来，让她重新成为一个被完整记住的人。"
  },
  erase: {
    title: "结局 D：删除明天",
    hint: "在逃避线里砸碎所有证据。",
    detail: "你得到了没有痛苦的第二天，也失去了最后一次想起陆眠的机会。",
    badge: "坏结局",
    thumbnail: "flowerShop",
    route: "关机、擦掉镜子文字、砸碎电视，并确认删除。",
    meaning: "痛苦被删除后，爱也一起被删掉。沈栀赢得安静，却失去理解自己为什么活下来的能力。",
    after: "她仍会被白玫瑰、旧视频和 23:17 追上，只是再也认不出那是谁在喊她。",
    key: "空白也会回声。",
    conflict: "这是沈栀最熟悉的生存方式：只要足够用力地删除，就假装没有发生。可这次被删掉的不只是痛苦，还有陆眠救她的证据。",
    cost: "代价是她获得一个看似轻松的明天，却失去辨认爱的能力。周叙、白祁、陆眠都变成陌生噪音。",
    closure: "它是坏结局，因为沈栀没有死，但‘被陆眠救下来的沈栀’已经不在了。"
  },
  forgive: {
    title: "隐藏结局 E：她没有怪你",
    hint: "在最终选择里回复陆眠：对不起，我想起来了。",
    detail: "陆眠从来不是要你偿命。她只是想让你替她看看更多明天。",
    badge: "隐藏结局",
    thumbnail: "dawn",
    route: "看完陆眠的视频，查到短信源头，最终回复‘对不起，我想起来了’。",
    meaning: "它不是赦免，而是沈栀终于明白：陆眠留下程序，不是为了索命，而是为了把她从危机里再拉一次。",
    after: "纪念页变成生活记录，白祁、周叙和沈栀都开始用活人的方式怀念陆眠。",
    key: "很多很多个明天，不靠遗忘解锁。",
    conflict: "隐藏结局的关键不是找到谁错得最多，而是沈栀终于停止追问‘陆眠怪不怪我’，改为承认‘我很想她，也还要活’。",
    cost: "代价是她必须允许陆眠真正死去：程序可以保存，但不能变成替代陆眠的幻影。",
    closure: "这是最完整的收束，因为它把爱情、友情、愧疚和纪念分开了。沈栀不是被过去释放，而是学会带着过去往前走。"
  },
  loop: {
    title: "隐藏坏结局：替她停留",
    hint: "在最终选择里选择陆眠。",
    detail: "你把自己关进三年前那一分钟，一遍遍被她救下，也一遍遍失去她。",
    badge: "隐藏坏结局",
    thumbnail: "rooftop",
    route: "查清真相后，在最终选择里选择‘陆眠：我把明天还给她’。",
    meaning: "沈栀以为循环是赎罪，实际上是把陆眠的爱变成自己的刑期，让她永远困在救人的十三秒里。",
    after: "城市没有清晨，陆眠每次都会重新奔向她，而沈栀记得每一次失败。",
    key: "永远的 23:17，永远不是重逢。",
    conflict: "这条结局最残忍的地方在于沈栀确实很爱陆眠，也确实想补偿。可她选择的补偿方式，是把陆眠最后一次爱她的动作无限重播。",
    cost: "陆眠不会成长、不会知道真相、不会拥有死亡之后的安宁。她永远只停在冲向沈栀的那一秒，永远被迫再次选择救人。",
    closure: "所以它不是殉情，也不是重逢，而是沈栀用自己的愧疚把两个人都关进了同一段视频里。真正的解法不是替她停留，而是替她活下去。"
  }
};

const script = {
  start: {
    art: "door",
    scene: "home",
    effect: "rain",
    speaker: "旁白",
    chapter: "序章 · 23:12",
    media: { type: "objective", title: "今晚目标", body: "查清短信来源。找回缺失记忆。活到明天。" },
    text: "你叫沈栀，二十七岁，剪辑师。今晚下班回家时，楼道灯坏了一半，雨水从伞骨滴到手背。你刚要开门，发现门口放着一束湿透的白玫瑰。卡片正面只有两个字：沈栀。",
    choices: [
      { text: "捡起卡片，查看背面", next: "noteBack" },
      { text: "先进门，把门反锁", next: "insideRoom" }
    ]
  },
  noteBack: {
    art: "door",
    scene: "home",
    effect: "rain",
    speaker: "旁白",
    chapter: "序章 · 白玫瑰",
    media: { type: "note", title: "卡片背面", body: "别装作不认识我。" },
    text: "卡片背面还有一行字，被雨水晕开了一半。你看了很久才认出那句：别装作不认识我。你的胃猛地一沉。这个字迹属于陆眠，你最好的朋友。她三年前已经死了。",
    choices: [
      { text: "带着卡片进屋", next: "insideRoom" },
      { text: "立刻拍照发给周叙", next: "zhou01" }
    ]
  },
  insideRoom: {
    art: "phone",
    scene: "living",
    effect: "rain",
    speaker: "旁白",
    chapter: "序章 · 23:16",
    media: { type: "room", title: "沈栀的客厅", body: "门已反锁。雨声还在窗外。" },
    text: "你把花放在桌上，手机、卡片、钥匙排成一条线。你告诉自己这只是恶作剧，可手机屏幕在下一秒亮起。时间是 23:17。发件人显示：陆眠。",
    choices: [
      { text: "点开短信前，先看清那三个名字", next: "memoryNames" }
    ]
  },
  memoryNames: {
    art: "album",
    scene: "videoRoom",
    effect: "photo",
    speaker: "旁白",
    chapter: "序章 · 三个名字",
    media: { type: "photo", title: "相册置顶", body: "陆眠 / 周叙 / 白祁。三年前以后，你再也没有同时点开过这三个人。" },
    text: "陆眠是你大学以来最好的朋友，最会把你从坏情绪里捞出来的人。周叙是你的前任，分手那晚没有接到陆眠的求救电话。白祁是陆眠的弟弟，陆眠死后，他看你的眼神像看一个活着的证物。",
    choices: [
      { text: "先翻陆眠置顶相册", next: "prologueAlbum" },
      { text: "先看和周叙最后的聊天", next: "prologueZhouChat" },
      { text: "先回想白祁为什么恨你", next: "prologueBaiMemory" }
    ]
  },
  prologueAlbum: {
    art: "album",
    scene: "videoRoom",
    effect: "photo",
    speaker: "旁白",
    chapter: "序章 · 陆眠",
    media: { type: "photo", title: "置顶照片", body: "今天也把栀栀捡回来啦。" },
    text: "置顶照片里，陆眠穿着浅黄色卫衣，举着两杯热牛奶，对镜头笑得很近。照片备注是她写的：今天也把栀栀捡回来啦。你以前觉得这句话肉麻，现在却看得喉咙发紧，因为你想不起她最后一次把你捡回来是什么时候。",
    choices: [
      { text: "点开陆眠发来的短信", next: "smsRule" }
    ]
  },
  prologueZhouChat: {
    art: "phone",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "序章 · 周叙",
    media: { type: "chat", title: "三年前最后聊天", body: "沈栀：我们分手吧。周叙：别用这种方式逼我。" },
    text: "你和周叙最后一条聊天停在三年前 23:11。你说分手，他说别用这种方式逼我。再往下是三个未接语音，来自陆眠。你删过很多东西，却偏偏留下这一截，像是潜意识里等着今晚有人来质问你。",
    choices: [
      { text: "点开陆眠发来的短信", next: "smsRule" }
    ]
  },
  prologueBaiMemory: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "旁白",
    chapter: "序章 · 白祁",
    media: { type: "photo", title: "葬礼那天", body: "白祁说：你为什么还活着？" },
    text: "陆眠葬礼那天，白祁拦在雨里问你：你为什么还活着？那时候他十七岁，袖口别着黑纱，眼睛红得像要把你拆开。你没有回答，因为你自己也不知道答案。",
    choices: [
      { text: "点开陆眠发来的短信", next: "smsRule" }
    ]
  },
  smsRule: {
    art: "phone",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "序章 · 死亡短信",
    media: { type: "sms", title: "陆眠", body: "栀栀，我快撑不住了。今晚十二点前，你必须选一个人替你活到明天。", choices: "候选人：周叙 / 白祁 / 沈栀" },
    text: "短信不是一句恐吓。它像某种倒计时，连续跳出三条说明：第一，十二点前必须选择。第二，选错的人会失去明天。第三，如果你想改答案，就去找回三年前 23:17 被你删掉的记忆。你终于明白，今晚不是鬼魂来找你，是你一直没敢打开的过去来敲门。",
    choices: [
      { text: "先回拨陆眠电话", next: "callLu01" },
      { text: "联系周叙：他是你前任", next: "zhou01" },
      { text: "联系白祁：他是陆眠弟弟", next: "bai01" },
      { text: "删掉短信，假装没看见", next: "escape01" }
    ]
  },
  callLu01: {
    art: "phone",
    scene: "living",
    effect: "message",
    speaker: "陆眠",
    chapter: "序章 · 无人接听",
    media: { type: "call", title: "通话中", body: "先别选别人。先确认你还记得我。" },
    text: "电话竟然通了。听筒里没有哭声，也没有鬼故事里的电流，只有很轻的呼吸。然后陆眠的声音贴着耳边响起：栀栀，先别选别人。先确认你还记得我。电话挂断，你的相册自动打开。",
    choices: [
      { text: "查看自动打开的相册", next: "album01" },
      { text: "你害怕了，联系周叙", next: "zhou01" },
      { text: "你想知道陆眠家人是否也收到短信", next: "bai01" }
    ]
  },
  album01: {
    art: "album",
    scene: "videoRoom",
    effect: "photo",
    speaker: "旁白",
    chapter: "序章 · 旧相册",
    media: { type: "photo", title: "照片备注", body: "今天也把栀栀捡回来啦。" },
    text: "相册停在三年前最后一组照片。便利店、天桥、摄影棚后台。最后一张模糊得厉害：你坐在顶楼边缘，陆眠蹲在你面前，手里拿着一罐热牛奶。备注是她写的：今天也把栀栀捡回来啦。",
    choices: [
      { text: "放大天台照片的时间码", next: "albumTimecode" },
      { text: "检查画面边缘的黑色外套", next: "albumCoat" },
      { text: "查看便利店照片的备注", next: "albumReceipt" }
    ]
  },
  albumTimecode: {
    art: "album",
    scene: "videoRoom",
    effect: "photo",
    speaker: "旁白",
    chapter: "调查 · 时间码",
    media: { type: "photo", title: "照片信息", body: "23:16:54。拍摄者：陆眠。" },
    text: "你把照片放到最大，右下角终于露出一行时间码：23:16:54。可陆眠的坠楼时间是 23:17。也就是说，这张照片不是事故后的记录，而是事故发生前十三秒。她那时还在救你。",
    choices: [
      { text: "继续检查照片里的人", next: "albumCoat" },
      { text: "去摄影棚找原始录像", next: "bai01" }
    ]
  },
  albumCoat: {
    art: "album",
    scene: "videoRoom",
    effect: "photo",
    speaker: "旁白",
    chapter: "调查 · 黑色外套",
    media: { type: "photo", title: "画面边缘", body: "一截黑色外套袖口，和周叙常穿的那件很像。" },
    text: "照片边缘有一截黑色外套，被雨水和运动模糊拉成一条暗影。你认得那件外套。周叙三年前总穿它来接你下班。可如果他在现场附近，为什么他说自己只是没接到电话？",
    choices: [
      { text: "立刻打给周叙问清楚", next: "zhou01" },
      { text: "先看陆眠留下的下一段视频残片", next: "albumClip" }
    ]
  },
  albumReceipt: {
    art: "album",
    scene: "videoRoom",
    effect: "photo",
    speaker: "旁白",
    chapter: "调查 · 便利店",
    media: { type: "photo", title: "便利店小票", body: "热牛奶 x2 / 创可贴 / 23:03" },
    text: "便利店照片下面还有一张小票。热牛奶两瓶，创可贴一盒，时间 23:03。你忽然想起那晚自己手腕上有伤，陆眠没有责备你，只是把创可贴拆开，说：先处理现在，别急着处理一辈子。",
    choices: [
      { text: "打开陆眠的视频残片", next: "albumClip" },
      { text: "去找白祁，他可能有原件", next: "bai01" }
    ]
  },
  albumClip: {
    art: "lumianVideo",
    scene: "videoRoom",
    effect: "video",
    speaker: "陆眠",
    chapter: "调查 · 视频残片",
    media: { type: "video", title: "自动恢复片段", body: "音频缺失，画面只有 5 秒。" },
    text: "视频残片自动播放。陆眠举着手机跑上楼梯，镜头晃得厉害。她喘着气，嘴型像是在喊你的名字。最后一帧，她推开天台门，画面黑掉。你终于不再觉得自己是在被恐吓，而是在被人拼命叫醒。",
    choices: [
      { text: "去摄影棚找完整原片", next: "bai01" },
      { text: "追问周叙为什么外套在现场", next: "zhou01" },
      { text: "把残片导入剪辑软件继续查", next: "evidenceTable01" }
    ]
  },
  evidenceTable01: {
    art: "source",
    scene: "source",
    effect: "message",
    speaker: "旁白",
    chapter: "调查 · 剪辑台",
    media: { type: "drive", title: "恢复素材", body: "rooftop_raw.mp4 / call_log.txt / lumian_cache.mov" },
    text: "你把残片导入剪辑软件。时间轴上有三个异常：一段被降噪抹平的呼喊，一组被改过的文件时间，还有一帧被手动裁掉的楼梯口。你终于有了一点主动权：先查哪一个，真相就会先从哪一处裂开。",
    choices: [
      { text: "修复被抹掉的环境音", next: "evidenceAudio" },
      { text: "核对素材创建时间", next: "evidenceMetadata" },
      { text: "放大被裁掉的楼梯口", next: "evidenceStair" }
    ]
  },
  evidenceAudio: {
    art: "source",
    scene: "source",
    effect: "video",
    speaker: "旁白",
    chapter: "调查 · 环境音",
    media: { type: "record", title: "音频恢复", body: "沈栀，回来。别看那边，看我。" },
    text: "你把底噪一点点拉回来。雨声下面，陆眠的声音终于清楚：沈栀，回来。别看那边，看我。她没有在责怪你，也没有在求救。她是在用最平稳的声音，把站在边缘的你往回牵。",
    choices: [
      { text: "继续查素材创建时间", next: "evidenceMetadata" },
      { text: "直接播放完整天台录像", next: "commonVideo01" }
    ]
  },
  evidenceMetadata: {
    art: "source",
    scene: "source",
    effect: "message",
    speaker: "旁白",
    chapter: "调查 · 文件时间",
    media: { type: "code", title: "素材元数据", body: "23:17:13 自动备份；23:19:02 手动复制。" },
    text: "元数据显示，原片在 23:17:13 自动备份，又在 23:19:02 被人手动复制过一次。那个人不是陆眠。你盯着电脑屏幕，突然明白白祁为什么能拿到证据，也明白周叙为什么这么多年不敢提那晚。",
    choices: [
      { text: "放大楼梯口那一帧", next: "evidenceStair" },
      { text: "带着这条线索去找白祁", next: "bai01" }
    ]
  },
  evidenceStair: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "旁白",
    chapter: "调查 · 楼梯口",
    media: { type: "photo", title: "楼梯口倒影", body: "白祁站在二楼，手里拿着陆眠的备用手机。" },
    text: "你放大那一帧，楼梯口的玻璃反光里出现白祁。他那时还很年轻，惊慌得像下一秒就会哭出来。他手里攥着陆眠的备用手机。也许这不是某个人独自犯下的罪，而是一群人一起没能来得及救回她。",
    choices: [
      { text: "去摄影棚找白祁问清楚", next: "bai01" },
      { text: "播放完整天台录像", next: "commonVideo01" }
    ]
  },

  zhou01: {
    art: "phone",
    scene: "living",
    effect: "message",
    speaker: "周叙",
    chapter: "周叙线 · 来电",
    media: { type: "call", title: "周叙", body: "你也收到她的消息了？" },
    text: "你拨给周叙。电话接通的第一秒，他没有问你怎么了，而是低声说：你也收到她的消息了？你听见他那边有车声。他像是已经在赶来的路上。",
    choices: [
      { text: "问他为什么知道短信", next: "zhou02" },
      { text: "让他先来你家", next: "zhou03" }
    ]
  },
  zhou02: {
    art: "phone",
    scene: "living",
    effect: "message",
    speaker: "周叙",
    chapter: "周叙线 · 三年前",
    media: { type: "record", title: "周叙的沉默", body: "三年前，陆眠也让我做过选择。" },
    text: "周叙沉默很久才说：三年前，陆眠也让我做过选择。她让我今晚无论如何看住你，可我没有接电话。沈栀，那天我不是凶手，但我也不干净。",
    choices: [
      { text: "把未接来电时间一条条逼问清楚", next: "zhou04" },
      { text: "让他把证据带过来", next: "zhou03" }
    ]
  },
  zhou03: {
    art: "zhouDoor",
    scene: "living",
    effect: "rain",
    speaker: "旁白",
    chapter: "周叙线 · 门外的人",
    media: { type: "chat", title: "陆眠旧聊天", body: "周叙，今晚看住栀栀。她说她不想活了。" },
    text: "门铃响起时，你还没决定要不要开门。周叙站在门外，外套湿透。他第一眼不是看你，而是看向客厅那束白玫瑰。他说：她真的开始了。",
    choices: [
      { text: "让他进来，把话说完", next: "zhou04" },
      { text: "问他是不是也想让你忘掉", next: "zhou05" },
      { text: "你没有开口，只是把门开大了一点", next: "zhou03_soft" }
    ]
  },
  zhou03_soft: {
    art: "zhouDoor",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "周叙线 · 门缝",
    media: { type: "chat", title: "未发出的消息", body: '你发了"周叙"两个字，删掉了，重新发了"你还好吗"，再次删掉。' },
    text: "你没有说话，只是把门开大了一点。周叙停了三秒，低头笑了一下，那个笑里有什么东西刚刚裂开。他没有立刻进来，先把伞靠在门框边，像是在确认你真的愿意让他进来。",
    choices: [
      { text: "让开，让他进来", next: "zhou04" },
      { text: "说：你脚踏进来了", next: "zhou03_flirt" }
    ]
  },
  zhou03_flirt: {
    art: "zhouDoor",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "周叙线 · 踏进来的脚",
    media: { type: "chat", title: "三年前晚上", body: "你送他到门口，他一直没走。" },
    text: "周叙低头看了眼自己的脚，嘴角微微弯起来，那个弧度比哭还危险。他说：是的。你要赶我走吗？他问这句话的语气不像在求情，更像是在赌你不会。你沉默了三秒，步子往后退了一步。他跟进来了。",
    choices: [
      { text: "把话说完再决定", next: "zhou04" }
    ]
  },
  zhou04: {
    art: "phone",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 未接来电",
    media: { type: "record", title: "通话记录", body: "陆眠 · 未接来电 23:17 / 23:19 / 23:22" },
    text: "周叙把三年前的通话记录给你看。陆眠在 23:17、23:19、23:22 连打三次。他都没接。他说那晚你提了分手，他以为陆眠只是替你求情，直到凌晨，白祁打来电话说姐姐坠楼了。",
    choices: [
      { text: "问：那我当时在哪里", next: "zhou05" },
      { text: "问：你为什么今天才说", next: "zhou06" },
      { text: "你把他的手机推开了", next: "zhou04_push" }
    ]
  },
  zhou04_push: {
    art: "phone",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 别给我看",
    media: { type: "record", title: "通话记录", body: "你不想看那三个时间。" },
    text: "你把手机推开。周叙没有坚持，把屏幕扣下来。他靠着沙发，沉默了很久，才说：沈栀，你现在还是会帮我挡掉那些东西。就像三年前一样。你问他什么意思，他摇了摇头，说：你自己想。",
    choices: [
      { text: "盯着他看：你说清楚", next: "zhou05" },
      { text: "往他旁边坐了一点", next: "zhou04_close" }
    ]
  },
  zhou04_close: {
    art: "zhouDoor",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 近一点",
    media: { type: "chat", title: "当年的消息", body: "周叙：沈栀，我今晚能去找你吗。发出时间：22:47。你没有回复。" },
    text: "你们挨得很近。周叙没有动，也没有说话。雨声很大，客厅灯光昏黄。他低着头，发尖上还有水珠，某一瞬间，你忽然想伸手替他擦掉。你没有，但他好像感觉到了，侧过脸来看你。",
    choices: [
      { text: "别过眼睛：先说正事", next: "zhou05" },
      { text: "你先擦掉了", next: "zhou04_touch" }
    ]
  },
  zhou04_touch: {
    art: "zhouDoor",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 手",
    media: { type: "chat", title: "三年前", body: "你第一次见他时，他也是这副淋雨的样子。" },
    text: "你伸手擦掉了他发尖上的水珠。周叙呼吸顿了一下。他没有抓住你的手，只是轻轻把脸偏过来，凑近了一点点，声音很低：你刚才是在心软还是在试探我？你的手悬在半空，答不上来。",
    choices: [
      { text: "收手：我只是看不下去", next: "zhou05" },
      { text: "不收手，等他说完", next: "zhou_romance01" }
    ]
  },
  zhou_romance01: {
    art: "zhouDoor",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 你在等什么",
    media: { type: "chat", title: "你们之间", body: "分手三年，今晚是第一次他开口叫你的名字。" },
    text: "周叙握住你的手腕，力道很轻，轻到你可以随时抽走。他说：沈栀，你知道我三年来最不甘心的是什么吗？不是陆眠那晚的电话。是你第二天醒来，眼睛里一点我都没有。",
    choices: [
      { text: "抽走手：你不能这样说", next: "zhou05" },
      { text: "不动：然后呢", next: "zhou_romance02" }
    ]
  },
  zhou_romance02: {
    art: "zhouDoor",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 然后",
    media: { type: "chat", title: "沈栀", body: "你在等他说完，或者等他做什么。" },
    text: "周叙笑了一下，比刚才那个笑多了点什么。他说：然后我就想，如果今晚她能再看我一次，我愿意把什么都说清楚。就算你看完以后走掉，我也认。他没有靠近，只是一直捏着你的手腕，等你开口。",
    choices: [
      { text: "你说：我先看 U 盘", next: "zhou05" },
      { text: "你说：你先欠我一个解释", next: "zhou_romance03" }
    ]
  },
  zhou_romance03: {
    art: "zhouDoor",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 欠你",
    media: { type: "chat", title: "周叙", body: "好。" },
    text: "周叙松开你的手腕，往后退了半步，给你留出空间，像在表态他不会先乱来。他说：好。你先问，我全答。今晚的事情说完之前，我哪里都不去。你看着他，第一次觉得——他也是在等这场对话三年了。",
    choices: [
      { text: "让他把那晚说清楚", next: "zhou05" }
    ]
  },
  zhou05: {
    art: "phone",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 被删掉的你",
    media: { type: "drive", title: "U 盘：23:17", body: "rooftop_raw.mp4 / lumian_final.mov / call_log.txt" },
    text: "他说你在摄影棚顶楼。不是陆眠约你去，是你把所有人都骗开以后，自己去了那里。周叙把一个旧 U 盘推到你面前：我不敢替你想起来，但今晚你必须自己看。",
    choices: [
      { text: "插入 U 盘，看天台录像", next: "commonVideo01" },
      { text: "带着 U 盘去找白祁对质", next: "bai01" },
      { text: "求周叙带你离开这座城市", next: "oldDream01" }
    ]
  },
  zhou06: {
    art: "zhouDoor",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "周叙线 · 逃跑邀请",
    media: { type: "choice", title: "周叙的提议", body: "现在走。换城市。换号码。天亮之前不要再看任何东西。" },
    text: "周叙说他不是不想说，是不敢说。他怕你一想起来，就会重新回到那天的天台。他拿起车钥匙，声音很低：如果你愿意，我现在就带你走。",
    choices: [
      { text: "跟他走，不再查了", next: "oldDream01" },
      { text: "留下来，看 U 盘", next: "commonVideo01" },
      { text: "你不走，也没让他走", next: "zhou06_stay" }
    ]
  },
  zhou06_stay: {
    art: "zhouDoor",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "周叙线 · 不走",
    media: { type: "chat", title: "凌晨的客厅", body: "雨还在下。你们都没有动。" },
    text: "周叙把车钥匙放回桌上。你们谁都没动，像两个人同时决定不逃了。他在沙发另一端坐下来，抬眼看你：那你要怎么办？你第一次觉得，这句话不是质问，是他在问你愿不愿意让他陪你。",
    choices: [
      { text: "你先说一件事：三年来你有没有找过我", next: "zhou06_ask" },
      { text: "你让他先说完那晚的事", next: "zhou05" }
    ]
  },
  zhou06_ask: {
    art: "zhouDoor",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "周叙线 · 找过你",
    media: { type: "chat", title: "未发出的消息", body: "一百四十七条。全部在草稿箱。" },
    text: "周叙拿出手机，打开草稿箱递给你。一百四十七条未发送的消息，最早一条是陆眠死后第四天，最近一条是今年你生日。他说：我没有一条敢发。我不知道你想不想被找到。",
    choices: [
      { text: "翻开第一条看看", next: "zhou06_msg01" },
      { text: "还给他：先把 U 盘看完", next: "zhou05" }
    ]
  },
  zhou06_msg01: {
    art: "zhouDoor",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 第一条草稿",
    media: { type: "chat", title: "第 1 条草稿", body: "沈栀，你还好吗。（发出时间：—）" },
    text: "第一条草稿只有五个字：沈栀，你还好吗。没有标点，像打了一半就不敢继续。你往后翻，他写过很多版本：我在外面、要不要见一面、对不起、再见。最后一条只有两个字：沈栀。你的名字就停在那里，像他说到一半咽回去的什么。",
    choices: [
      { text: "把手机还给他：我知道了", next: "zhou05" },
      { text: "你抬头看他，他也在看你", next: "zhou06_eyes" }
    ]
  },
  zhou06_eyes: {
    art: "zhouDoor",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 对视",
    media: { type: "chat", title: "客厅", body: "雨声很大。你们离得很近。" },
    text: "你们对视了大概三秒。周叙先别开眼睛，低声说：你现在看我，我会以为你还想要。你攥着手机没有动，意识到你们之间只隔了一个靠枕的距离。",
    choices: [
      { text: "把靠枕拿开", next: "zhou_romance01" },
      { text: "你先说：我们把 U 盘看完", next: "zhou05" }
    ]
  },

  // ── 周叙专属亲密场景：深夜送回家 ──
  zhou_sendHome: {
    art: "car",
    scene: "taxi",
    effect: "rain",
    speaker: "旁白",
    chapter: "周叙线 · 深夜送你",
    media: { type: "chat", title: "周叙", body: "我送你回去。" },
    text: "看完 U 盘已经快凌晨两点。周叙没有问，直接拿起外套说送你回去。楼道灯坏了，他走在你前面，用手机照着地面，力道刚好够你走路不踩空。",
    choices: [
      { text: "问他：你每次都这样吗", next: "zhou_sendHome02" },
      { text: "跟着他走，不说话", next: "zhou_sendHome02" }
    ]
  },
  zhou_sendHome02: {
    art: "car",
    scene: "taxi",
    effect: "rain",
    speaker: "周叙",
    chapter: "周叙线 · 楼道",
    media: { type: "chat", title: "周叙", body: "三年前也是这个楼道。灯也坏了。" },
    text: "周叙说：三年前我来接你，楼道灯也坏了，你拉住我外套走上来的。说完他自己笑了一下，像是觉得说这个很蠢，可他还是说了。你走到你家门口，发现他停在了两步远的地方。",
    choices: [
      { text: "你没开门：你等什么", next: "zhou_sendHome03" },
      { text: "你开门：进来坐一会儿", next: "zhou_sendHome04" }
    ]
  },
  zhou_sendHome03: {
    art: "zhouDoor",
    scene: "living",
    effect: "rain",
    speaker: "周叙",
    chapter: "周叙线 · 门口",
    media: { type: "chat", title: "周叙", body: "我在等你先进去。" },
    text: "周叙说：我在等你先进去。你问为什么，他说：怕我进去了就不走了。说完他自己先别开了眼睛，像觉得这句话说得太快。你站在门口，手里拿着钥匙，第一次觉得今晚还没有结束。",
    choices: [
      { text: "你先进去，转身把门留着缝", next: "zhou_sendHome04" },
      { text: "晚安，关上门", next: "zhou05" }
    ]
  },
  zhou_sendHome04: {
    art: "zhouDoor",
    scene: "living",
    effect: "memory",
    speaker: "周叙",
    chapter: "周叙线 · 进来了",
    media: { type: "chat", title: "凌晨客厅", body: "他把外套挂在你门口的钩子上，就像三年前一样。" },
    text: "周叙把外套挂在你门口，走进来坐下，什么都没说，只是低头看着手机屏幕。沉默了很久，他忽然问：如果那晚我接了电话，你觉得我们现在会在哪里？你回答不了，但你知道你没有想让他走的意思。",
    choices: [
      { text: "你去倒了两杯水，没有回答他", next: "zhou_romance03" },
      { text: "你说：不知道，但可能不是今晚才说清楚", next: "zhou_romance03" }
    ]
  },
  oldDream01: {
    art: "car",
    scene: "taxi",
    effect: "rain",
    speaker: "旁白",
    chapter: "结局线 · 离城",
    media: { type: "route", title: "你选择逃离", body: "车开上高架，23:43。" },
    text: "周叙的车驶上高架。雨刷一下下刮开前挡风玻璃，后座那只 U 盘像一枚烫伤的证物。周叙说：我们可以重新开始。你知道他在等你把真相交出去。",
    choices: [
      { text: "把 U 盘藏进外套", next: "oldDreamKeepDrive" },
      { text: "把 U 盘交给周叙", next: "oldDreamGiveDrive" }
    ]
  },
  oldDreamKeepDrive: {
    art: "car",
    scene: "taxi",
    effect: "rain",
    speaker: "旁白",
    chapter: "结局 B · 第一幕：带走证物",
    media: { type: "drive", title: "U 盘仍在", body: "你没有勇气看，也没有勇气丢。" },
    text: "你把 U 盘藏进外套内袋，像藏一颗还在跳的心。周叙看见了，却没有阻止。他只是把车开得更快，像速度足够快，就能把三年前甩在后视镜外。",
    choices: [
      { text: "继续", next: "oldDream02" }
    ]
  },
  oldDreamGiveDrive: {
    art: "car",
    scene: "taxi",
    effect: "rain",
    speaker: "周叙",
    chapter: "结局 B · 第一幕：交出证物",
    media: { type: "drive", title: "U 盘离开你的手", body: "周叙说：我替你处理。" },
    text: "周叙接过 U 盘，指节用力到发白。你问他会怎么处理，他说不会让它再伤害你。车窗外闪过跨江大桥，你忽然觉得自己不是在被救走，而是在被温柔地困住。",
    choices: [
      { text: "继续", next: "oldDream02" }
    ]
  },
  oldDream02: {
    art: "car",
    scene: "taxi",
    effect: "ending",
    speaker: "结局 B",
    chapter: "结局 · 旧梦重燃",
    ending: "oldDream",
    media: { type: "ending", title: "旧梦重燃", body: "有些明天，是偷来的。" },
    text: "天亮前，你们在陌生城市下车。周叙给你买了新的电话卡，替你删掉旧联系人。你看着自己的名字从通讯录里消失，忽然明白：这个结局不是重新开始，是两个人合谋把陆眠留在昨天。",
    choices: [
      { text: "继续", next: "oldDreamAfter" }
    ]
  },
  oldDreamAfter: {
    art: "car",
    scene: "taxi",
    effect: "ending",
    speaker: "旁白",
    chapter: "结局 B · 第二幕：新城市",
    media: { type: "reward", title: "图鉴已收录", body: "旧梦重燃：逃离不是结束，只是把真相带到更远的地方。" },
    text: "三个月后，你在新城市的剪辑室上班。这里没人知道陆眠，没人知道 23:17，也没人会问你为什么总在雨夜请假。你应该轻松，可每段素材的时间轴都会自动停在十三秒。",
    choices: [
      { text: "逼自己看一次", next: "oldDreamAfter2" },
      { text: "等周叙来接你", next: "oldDreamHide" }
    ]
  },
  oldDreamAfter2: {
    art: "car",
    scene: "taxi",
    effect: "ending",
    speaker: "结局 B",
    chapter: "结局 B · 第三幕：第一秒",
    media: { type: "memory", title: "被暂停的画面", body: "陆眠还没有回头。你已经开始发抖。" },
    text: "你只看了一秒。陆眠的鞋尖刚踏上天台门槛，画面还没来得及把死亡交出来，你已经喘不过气。你按下暂停，忽然恨自己：原来你连偷来的明天都没有勇气好好使用。",
    choices: [
      { text: "继续", next: "oldDreamAfter3" }
    ]
  },
  oldDreamHide: {
    art: "car",
    scene: "taxi",
    effect: "ending",
    speaker: "周叙",
    chapter: "结局 B · 第三幕：被照顾",
    media: { type: "chat", title: "周叙", body: "别看了。我在楼下。" },
    text: "周叙很快赶来。他没有责备你，只是替你关掉电脑，替你请假，替你把外套披上。他做得太熟练，熟练到你突然害怕：你们所谓的相爱，会不会只是互相替对方逃避。",
    choices: [
      { text: "继续", next: "oldDreamAfter3" }
    ]
  },
  oldDreamAfter3: {
    art: "car",
    scene: "taxi",
    effect: "ending",
    speaker: "结局 B",
    chapter: "结局 B · 第四幕：求婚",
    media: { type: "memory", title: "没有寄出的信", body: "收件人：陆眠。内容空白。" },
    text: "第二年冬天，周叙向你求婚。戒指盒里压着一张空白信纸，你认出那是陆眠以前最喜欢买的便签。你忽然意识到，周叙也没有真正走出来。他只是把愧疚换成了照顾你。",
    choices: [
      { text: "戴上戒指", next: "oldDreamPromise" },
      { text: "问他还欠陆眠什么", next: "oldDreamQuestion" }
    ]
  },
  oldDreamPromise: {
    art: "car",
    scene: "taxi",
    effect: "ending",
    speaker: "旁白",
    chapter: "结局 B · 第五幕：戒指",
    media: { type: "note", title: "你的答案", body: "好。我们继续往前走。" },
    text: "戒指很合适，像周叙早就量好了你所有能承受的尺寸。你说好。周叙低头吻你的手背，可你看见他睫毛上挂着一点湿意。那不是幸福，是终于有人愿意和他一起把真相埋下去。",
    choices: [
      { text: "继续", next: "oldDreamAfter4" }
    ]
  },
  oldDreamQuestion: {
    art: "car",
    scene: "taxi",
    effect: "ending",
    speaker: "周叙",
    chapter: "结局 B · 第五幕：欠账",
    media: { type: "record", title: "周叙的回答", body: "我欠她一个接起来的电话，也欠你一个不逃跑的我。" },
    text: "周叙没有立刻回答。他把戒指盒合上，像合上一份判决书。他说：我欠她一个接起来的电话，也欠你一个不逃跑的我。那一刻你才知道，原来逃走的路也会走到尽头。",
    choices: [
      { text: "继续", next: "oldDreamAfter4" }
    ]
  },
  oldDreamAfter4: {
    art: "cemetery",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 B",
    chapter: "结局 B · 第六幕：迟到的墓园",
    media: { type: "flower", title: "白玫瑰", body: "这一次，你在墓前站了很久。" },
    text: "你们回到旧城。墓园的路比记忆里短，你却走得像过一座桥。你把空白信纸放在陆眠墓前，终于承认：你不是想和周叙重新开始，你只是希望有个人陪你一起不敢回头。",
    choices: [
      { text: "继续", next: "oldDreamAfter5" }
    ]
  },
  oldDreamAfter5: {
    art: "cemetery",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 B",
    chapter: "结局 B · 第七幕：写给陆眠",
    media: { type: "note", title: "信纸第一行", body: "陆眠，我没有过得很好，但我没有再删掉你。" },
    text: "你在墓园长椅上写了很久。风把纸角吹起来，周叙坐在旁边，没有催你。你写下第一行：陆眠，我没有过得很好，但我没有再删掉你。写完以后，你第一次没有立刻崩溃。",
    choices: [
      { text: "继续", next: "oldDreamAfter6" }
    ]
  },
  oldDreamAfter6: {
    art: "cemetery",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 B",
    chapter: "结局 B · 终幕",
    media: { type: "ending", title: "旧梦重燃 完成", body: "成就解锁：偷来的明天，也要还利息" },
    text: "离开墓园时，手机在 23:17 震了一下。没有短信，只有你自己设下的提醒：明年也来。你和周叙牵着手往山下走，你们依然亏欠陆眠，但至少从这一刻起，不再假装那份亏欠不存在。",
    choices: [
      { text: "回到标题", action: "title" },
      { text: "查看结局图鉴", action: "gallery" }
    ]
  },

  bai01: {
    art: "car",
    scene: "taxi",
    effect: "rain",
    speaker: "白祁",
    chapter: "白祁线 · 定位",
    media: { type: "location", title: "城西废弃摄影棚", body: "想知道我姐怎么死的，就来这里。" },
    text: "你给白祁发消息。他只回了一个定位：城西废弃摄影棚。三年前，陆眠就是在那里坠楼。白祁比你小三岁，陆眠死后，他再也没有叫过你姐姐。",
    choices: [
      { text: "独自去摄影棚", next: "bai02" },
      { text: "叫周叙一起去", next: "bai03" }
    ]
  },
  bai02: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "旁白",
    chapter: "白祁线 · 照片墙",
    media: { type: "photos", title: "照片墙", body: "你上班。买药。去墓园。三分钟后离开。" },
    text: "摄影棚没有开灯。白祁站在二楼扶梯旁，身后是一整面照片墙。照片里几乎全是你。他说：我查了三年，一直以为你是凶手。直到今晚，我姐也给我发了消息。",
    choices: [
      { text: "问他收到的短信", next: "bai04" },
      { text: "看照片墙上的时间线", next: "bai05" },
      { text: "你不看照片，你看他", next: "bai02_look" }
    ]
  },
  bai02_look: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "白祁",
    chapter: "白祁线 · 你在看什么",
    media: { type: "photo", title: "白祁", body: "他比陆眠小三岁，但今晚他看起来不像弟弟。" },
    text: "你没有看照片墙，你看着白祁。他比三年前高了很多，也瘦了很多，脸上还留着那道伤疤——葬礼后，他打过一架，你没有去看他。他察觉到你在看他，眼神往侧面偏了一下：看什么。",
    choices: [
      { text: "你说：你长大了", next: "bai02_grow" },
      { text: "你说：伤疤是怎么来的", next: "bai02_scar" }
    ]
  },
  bai02_grow: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "白祁",
    chapter: "白祁线 · 长大了",
    media: { type: "photo", title: "摄影棚", body: "灯光只照着你。" },
    text: "白祁愣了一秒，嘴角往下压了一下，像是把某个表情强行按住了。他说：你才现在发现。他说这句话的语气很奇怪，不全是恨，但也不只是嘲讽，里面有一点你不敢细想的东西。",
    choices: [
      { text: "问他收到的短信", next: "bai04" },
      { text: "你说：那晚以后我不敢再看你", next: "bai02_confess" }
    ]
  },
  bai02_scar: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "白祁",
    chapter: "白祁线 · 那道伤",
    media: { type: "photo", title: "伤疤", body: "陆眠葬礼后的第三天。" },
    text: "白祁摸了一下脸上的伤疤，说：打架打的。葬礼后第三天。他停顿了一下，补充了一句：有人说我姐是自己跳下去的，我不服。你第一次意识到，这三年他一直在替陆眠打这场架，而你连他有没有打赢都不知道。",
    choices: [
      { text: "问他收到的短信", next: "bai04" },
      { text: "你说：我应该去找过你的", next: "bai02_confess" }
    ]
  },
  bai02_confess: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "白祁",
    chapter: "白祁线 · 那你为什么没来",
    media: { type: "photo", title: "白祁", body: "他盯着你看了很久。" },
    text: "白祁盯着你，安静得有点反常。他说：你那时候不是已经把我们全删了吗。他说的是〔我们〕，不是〔我姐〕。你终于明白，他恨你恨了三年，里面有一份是替陆眠恨的，还有一份说不清楚。",
    choices: [
      { text: "看照片墙，开始查", next: "bai05" },
      { text: "你说：我没有删你", next: "bai02_notdeleted" }
    ]
  },
  bai02_notdeleted: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 没删",
    media: { type: "chat", title: "沈栀的通讯录", body: "白祁。仍然存着。三年没动过。" },
    text: "你把手机打开，给他看通讯录。他的名字还在，头像还是三年前陆眠替他拍的那张。白祁看了很久，没有说话，把眼睛移开去，下巴绷着，像在努力让某个表情不要出来。",
    choices: [
      { text: "继续：先把今晚的事说完", next: "bai04" },
      { text: "你说：我也没删陆眠", next: "bai_romance01" }
    ]
  },
  bai_romance01: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 还在",
    media: { type: "photo", title: "通讯录", body: "陆眠。白祁。都还在。" },
    text: "白祁沉默了很久，才说：那你为什么从来不回来找我们？你说你害怕。他问：害怕什么？你说：害怕你们用她的眼神看我。白祁忽然往前走了一步，站得离你很近，声音压低：我用的是我自己的眼神。",
    choices: [
      { text: "你后退一步", next: "bai04" },
      { text: "你没动：你的眼神里有什么", next: "bai_romance02" }
    ]
  },
  bai_romance02: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 什么眼神",
    media: { type: "photo", title: "白祁", body: "他离你很近。你可以看见他的眼睫很长。" },
    text: "白祁没有立刻回答。他低头看了一眼你和他之间的距离，说：我用这双眼睛查你三年，看你上班、买药、去墓园。你以为我是在恨你。他顿了顿，声音更低：有一半是。",
    choices: [
      { text: "你问：另一半呢", next: "bai_romance03" },
      { text: "你说：把话说完，我们先查清楚", next: "bai04" }
    ]
  },
  bai_romance03: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 另一半",
    media: { type: "photo", title: "白祁", body: "他没有回答这个问题。" },
    text: "白祁没有回答。他往后退了一步，转身指向照片墙：另一半你自己想清楚再问我。他的声音恢复了那种压着什么的平静，但你注意到，他转身时顿了不到一秒。",
    choices: [
      { text: "去看照片墙", next: "bai05" }
    ]
  },
  bai03: {
    art: "studio",
    scene: "studio",
    effect: "video",
    speaker: "旁白",
    chapter: "白祁线 · 三人重逢",
    media: { type: "projector", title: "投影仪已启动", body: "rooftop_raw.mp4 / 00:00:13" },
    text: "周叙赶到摄影棚时，白祁笑了一声：当年没接电话的人，今天倒是来得很快。你站在两人中间，忽然明白一件事：所有人都被困在三年前，只有你把自己剪出了那段录像。",
    choices: [
      { text: "让白祁播放录像", next: "commonVideo01" },
      { text: "先问白祁收到的短信", next: "bai04" }
    ]
  },
  bai04: {
    art: "studio",
    scene: "studio",
    effect: "message",
    speaker: "白祁",
    chapter: "白祁线 · 她的留言",
    media: { type: "sms", title: "陆眠发给白祁", body: "别再恨沈栀了。她活着已经很难了。" },
    text: "白祁收到的短信只有一句：别再恨沈栀了。她活着已经很难了。白祁盯着屏幕，眼眶发红。他说：我不想信。我姐那么疼你，凭什么最后死的是她？",
    choices: [
      { text: "说：那你就让我想起来", next: "bai05" },
      { text: "说：你恨我是应该的", next: "trial01" }
    ]
  },
  bai05: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "旁白",
    chapter: "白祁线 · 时间线",
    media: { type: "timeline", title: "事故前一周", body: "失眠 / 请假 / 安眠药 / 删除聊天记录 / 如果我不在了" },
    text: "照片墙上贴着事故前一周的时间线。你失眠、请假、取走安眠药，还给陆眠发过一句：如果我不在了，你会不会轻松一点？白祁说：你不是忘了她，你是忘了你自己。",
    choices: [
      { text: "要求看完整录像", next: "commonVideo01" },
      { text: "找陆眠留下的原文件", next: "luVideo01" },
      { text: "受不了，拒绝继续看", next: "trial01" },
      { text: "你说：你为什么要帮我拼出这些", next: "bai05_why" }
    ]
  },
  bai05_why: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "白祁",
    chapter: "白祁线 · 为什么",
    media: { type: "photo", title: "照片墙", body: "你们对视着。" },
    text: "白祁愣了一秒。他应该准备了很多种你的反应，但没有准备这个问题。他说：我姐让我找你，我才找你的。你说：是吗。他沉默了，最后说：不全是。",
    choices: [
      { text: "你说：那是什么", next: "bai05_reason" },
      { text: "你转回去看照片墙", next: "bai05_wall" }
    ]
  },
  bai05_reason: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 查三年的理由",
    media: { type: "photo", title: "白祁手机", body: "一张你不知道的合照：白祁十五岁，陆眠把你和他的手拉在一起说，这是我的两个人。" },
    text: "白祁从口袋里摸出一张折叠的照片，展开递给你。你十七岁，他十五岁，陆眠站在你们中间，笑着说了什么。白祁说：我姐说你是她拣回来的人。我后来想——她走了以后，那个人要不要有人继续替她看着？",
    choices: [
      { text: "你说：你一直在看着我", next: "bai_romance04" },
      { text: "你问：看着，还是监视", next: "bai_romance04" }
    ]
  },
  bai_romance04: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 继续拣",
    media: { type: "photo", title: "白祁", body: "他皱眉了，但眼睛没有冷下来。" },
    text: "白祁皱了一下眉，说：两者都有。他停顿了一下，补充：但今晚你来了，我才知道我查三年不全是为了替她报仇。他说这话时侧过脸去，脖子有点红，像一个二十岁的人第一次承认了不该说的事。",
    choices: [
      { text: "你把照片还给他", next: "bai05_wall" },
      { text: "你说：那这张照片让我拿着", next: "bai_romance05" }
    ]
  },
  bai_romance05: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 拿着",
    media: { type: "photo", title: "三个人的合照", body: "陆眠在中间，你们在两边。" },
    text: "白祁没有立刻回应，让你拿着了。他把目光转向照片墙，声音恢复了克制：拿着没用，你还是要看完那些。但他说这话的时候，没有再叫你去死。",
    choices: [
      { text: "继续：看录像", next: "commonVideo01" },
      { text: "先问：你今晚之后想怎么办", next: "bai_romance06" }
    ]
  },
  bai_romance06: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 之后",
    media: { type: "photo", title: "白祁", body: "他低头想了很久。" },
    text: "白祁低头想了很久，说：之后让你欠我一顿饭。他说这话时的语气完全不像在玩笑，更像是在签一份他认为公平的协议。你第一次在他脸上看见了一点不像陆眠的东西——只属于他自己的、笨拙的、想继续往前走的东西。",
    choices: [
      { text: "你说：好，先把今晚过完", next: "commonVideo01" }
    ]
  },
  bai05_wall: {
    art: "studio",
    scene: "studio",
    effect: "photo",
    speaker: "旁白",
    chapter: "白祁线 · 回到照片墙",
    media: { type: "timeline", title: "事故前一周", body: "失眠 / 请假 / 安眠药 / 删除聊天记录 / 如果我不在了" },
    text: "你转回去看照片墙。白祁站在你旁边，比刚才近了半步，说：你自己想想从哪里开始。",
    choices: [
      { text: "要求看完整录像", next: "commonVideo01" },
      { text: "找陆眠留下的原文件", next: "luVideo01" }
    ]
  },

  // ── 白祁专属亲密场景：手腕 ──
  bai_wrist: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "白祁",
    chapter: "白祁线 · 手腕",
    media: { type: "photo", title: "白祁", body: "他抓住了你的手腕。" },
    text: "你想转身走。白祁从背后抓住你的手腕，力道比你预想的轻——他没有要拦你，只是不想让你就这样走掉。他说：沈栀，你要逃到哪里去？这个摄影棚你已经三年没来了，今晚你走了，下次还要再等三年吗？",
    choices: [
      { text: "你说：放开我", next: "bai_wrist02" },
      { text: "你没有动：你凭什么", next: "bai_wrist03" }
    ]
  },
  bai_wrist02: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "白祁",
    chapter: "白祁线 · 放开",
    media: { type: "photo", title: "白祁", body: "他松开了。" },
    text: "白祁松手了，比你要求的快。他低头看了一眼自己刚才握你的那只手，说：对不起。说完他转身回照片墙那边，背对着你，声音很低：但你别走。不是命令，是请求。",
    choices: [
      { text: "你留下来了", next: "bai05" },
      { text: "你还是走了，联系周叙", next: "zhou01" }
    ]
  },
  bai_wrist03: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 凭什么",
    media: { type: "photo", title: "白祁", body: "他没有立刻回答。" },
    text: "白祁没有立刻回答——凭什么。他低头看着你的手腕，说：凭我在这里查了三年。凭我每次在墓园碰到你，看见你三分钟就走，没有一次留下来。他抬头对上你的眼睛：凭你今晚终于来了。",
    choices: [
      { text: "你说：那你把手松一点", next: "bai_wrist04" },
      { text: "你说：我来不是来被困住的", next: "bai_wrist02" }
    ]
  },
  bai_wrist04: {
    art: "studio",
    scene: "studio",
    effect: "memory",
    speaker: "白祁",
    chapter: "白祁线 · 松一点",
    media: { type: "photo", title: "白祁的手", body: "他的手松了一点，但没有放开。" },
    text: "白祁把手松了一点，但没有完全放开。他说：这样行吗？他问的时候抬眼看了你一下，那个眼神有什么东西在里面，不全是恨，不全是愧疚，有一点让你没法定义的温度。",
    choices: [
      { text: "你把手抽走，但留下来了", next: "bai05" },
      { text: "你没抽走，先问他一句话", next: "bai_romance02" }
    ]
  },
  trial01: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "白祁",
    chapter: "结局线 · 白祁失控",
    media: { type: "projector", title: "多路投影", body: "哭声 / 喊声 / 迟来的奔跑声" },
    text: "你的退缩让白祁彻底失控。他反锁摄影棚大门，把所有投影同时打开。墙上全是你忘掉的那晚。他说：我姐死在那天，我妈疯在那天，我活在那天。只有你可以第二天醒来，什么都不记得。",
    choices: [
      { text: "求他停下", next: "trial02" },
      { text: "强迫自己看完", next: "commonVideo01" },
      { text: "你叫他的名字", next: "trial01_name" }
    ]
  },
  trial01_name: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "白祁",
    chapter: "白祁线 · 叫名字",
    media: { type: "photo", title: "白祁", body: "你叫了他的名字。他停了。" },
    text: "你叫了他的名字：白祁。他停了一秒。他大概已经很久没有人这样叫他了，不是〔陆眠弟弟〕，不是〔那个男孩〕，就是他自己的名字。他看着你，投影的光打在你脸上，他的眼眶有点红。",
    choices: [
      { text: "你说：我知道你累了", next: "trial01_tired" },
      { text: "你说：把这些关掉，我们一起看", next: "commonVideo01" }
    ]
  },
  trial01_tired: {
    art: "studio",
    scene: "studio",
    effect: "ending",
    speaker: "白祁",
    chapter: "白祁线 · 三年",
    media: { type: "photo", title: "白祁", body: "他慢慢蹲下来，背靠着墙。" },
    text: "白祁慢慢蹲下来，背靠着墙。他说：我查了三年，我以为查清楚了我就可以不再来这里了。他低着头，声音变得很小：但今晚我姐的消息一来，我第一反应不是复仇，是想找到你。他停了很久：我不知道这算什么。",
    choices: [
      { text: "你也蹲下来，陪着他", next: "trial02" },
      { text: "你伸手拉他起来", next: "bai_romance05" }
    ]
  },
  trial02: {
    art: "studio",
    scene: "studio",
    effect: "ending",
    speaker: "结局 C",
    chapter: "结局 · 白祁的审判",
    ending: "trial",
    media: { type: "ending", title: "白祁的审判", body: "他说他终于替姐姐等到一个答案。" },
    text: "白祁没有伤害你。他只是逼你看完全部录像。天快亮时，他替你报了警，也替自己报了警。警灯照进废弃摄影棚，照片墙上的每一张脸都变得苍白，像终于被迫出庭。",
    choices: [
      { text: "接过旧照片", next: "trialAfter" },
      { text: "让白祁停手", next: "trialMercy" }
    ]
  },
  trialMercy: {
    art: "studio",
    scene: "studio",
    effect: "ending",
    speaker: "白祁",
    chapter: "结局 C · 第一幕：停手",
    media: { type: "record", title: "白祁的供述", body: "我想让她记起来。我也想让自己停下来。" },
    text: "白祁的手抖得厉害。他说他准备了三年，想过很多种让你痛苦的方法，可真正看见你想起来，他反而只剩下空。你按住他的手腕，第一次把他当成一个还活着的人看。",
    choices: [
      { text: "继续", next: "trialAfter" }
    ]
  },
  trialAfter: {
    art: "studio",
    scene: "studio",
    effect: "ending",
    speaker: "旁白",
    chapter: "结局 C · 第二幕：天亮以前",
    media: { type: "reward", title: "图鉴已收录", body: "白祁的审判：真相没有救任何人，但它阻止所有人继续说谎。" },
    text: "白祁被带走前，把那张旧照片留给你。照片里陆眠站在你和他中间，笑得像什么坏事都不会发生。你终于发现照片背面还有字：如果我不在了，别让他们互相杀死。",
    choices: [
      { text: "念出照片背面的字", next: "trialReadBack" },
      { text: "去做笔录", next: "trialAfter2" }
    ]
  },
  trialReadBack: {
    art: "studio",
    scene: "studio",
    effect: "ending",
    speaker: "白祁",
    chapter: "结局 C · 第三幕：照片背面",
    media: { type: "photo", title: "陆眠的字", body: "别让他们互相杀死。" },
    text: "白祁听完以后低下头，肩膀一点点垮下去。他没有哭出声，只是问：那她有没有写，让我怎么办？你答不上来。陆眠留下了真相，却没有留下任何人该如何善后的说明书。",
    choices: [
      { text: "继续", next: "trialAfter2" }
    ]
  },
  trialAfter2: {
    art: "court",
    scene: "studio",
    effect: "ending",
    speaker: "结局 C",
    chapter: "结局 C · 第四幕：证物",
    media: { type: "record", title: "证物袋", body: "U 盘、旧照片、陆眠自拍视频备份。" },
    text: "警方把证物清单交给你签字。你看见自己的名字被写在受害者家属旁边，又被划掉，改成：重要证人。那一刻你才明白，白祁不是想审判你一个人，他是在审判所有把陆眠变成沉默的人。",
    choices: [
      { text: "补交删除记录", next: "trialConfessDelete" },
      { text: "签下证物清单", next: "trialAfter3" }
    ]
  },
  trialConfessDelete: {
    art: "court",
    scene: "studio",
    effect: "ending",
    speaker: "旁白",
    chapter: "结局 C · 第五幕：自证",
    media: { type: "record", title: "补充笔录", body: "沈栀承认事故后删除过部分记录。" },
    text: "你补交了自己最想藏起来的部分：事故后，你删过陆眠求救前的聊天记录。警员抬头看你，你没有解释。你知道这不能把陆眠带回来，但至少你终于没有让白祁替你说出所有难堪。",
    choices: [
      { text: "继续", next: "trialAfter3" }
    ]
  },
  trialAfter3: {
    art: "court",
    scene: "studio",
    effect: "ending",
    speaker: "结局 C",
    chapter: "结局 C · 第六幕：会见",
    media: { type: "chat", title: "探视登记", body: "探视人：沈栀。被探视人：白祁。" },
    text: "后来你去探望白祁。他隔着玻璃问：你现在还想忘吗？你看着那张旧照片，摇了摇头。白祁沉默了很久，忽然说：那我姐赢了一半。另一半，看你怎么活。",
    choices: [
      { text: "继续", next: "trialAfter4" }
    ]
  },
  trialAfter4: {
    art: "court",
    scene: "videoRoom",
    effect: "video",
    speaker: "陆眠",
    chapter: "结局 C · 第七幕：证词",
    media: { type: "video", title: "庭审播放片段", body: "陆眠：不要把我的死变成他们互相惩罚的理由。" },
    text: "开庭那天，陆眠的视频被作为证据播放。屏幕里的她笑着，却比任何人都清醒。她说：如果我真的出事，不要让他们互相惩罚。旁听席有人哭，白祁低着头，像终于被姐姐摸了一下头。",
    choices: [
      { text: "继续", next: "trialAfter5" }
    ]
  },
  trialAfter5: {
    art: "court",
    scene: "studio",
    effect: "ending",
    speaker: "结局 C",
    chapter: "结局 C · 终幕",
    media: { type: "ending", title: "白祁的审判 完成", body: "成就解锁：证词不是刀" },
    text: "你站在证人席上，完整说出那晚发生的事。说到陆眠把你推回来时，你没有替自己开脱，也没有把白祁的恨说成错误。审判结束后，真相没有救任何人，但它终于不再只压在一个死人身上。",
    choices: [
      { text: "回到标题", action: "title" },
      { text: "查看结局图鉴", action: "gallery" }
    ]
  },

  escape01: {
    art: "mirror",
    scene: "bathroom",
    effect: "horror",
    speaker: "旁白",
    chapter: "逃避线 · 关机",
    media: { type: "phone", title: "你选择关机", body: "23:32。屏幕黑下去。" },
    text: "你关机，洗澡，把白玫瑰塞进垃圾袋。你告诉自己这只是恶作剧，只要睡醒就会结束。可浴室镜子慢慢起雾，雾面上浮出一行字：你每次都这样。",
    choices: [
      { text: "擦掉镜子上的字", next: "escape02" },
      { text: "打开手机回复陆眠", next: "source01" }
    ]
  },
  escape02: {
    art: "mirror",
    scene: "bathroom",
    effect: "horror",
    speaker: "旁白",
    chapter: "逃避线 · 电视",
    media: { type: "tv", title: "客厅电视自动亮起", body: "画面时间：三年前 23:17。" },
    text: "你擦掉字，客厅电视却自动亮起。画面里是三年前的摄影棚顶楼。你站在栏杆边，陆眠正向你跑来。视频没有声音，可你看见她的口型：沈栀，回来。",
    choices: [
      { text: "坐回电视前，看清天台上发生了什么", next: "commonVideo01" },
      { text: "砸碎电视", next: "erase01" }
    ]
  },
  erase01: {
    art: "mirror",
    scene: "bathroom",
    effect: "horror",
    speaker: "旁白",
    chapter: "结局线 · 最后一次逃跑",
    media: { type: "warning", title: "00:00 前最后提示", body: "删除后，所有记忆将恢复到安全版本。" },
    text: "你砸碎电视，删除短信，把花和卡片全都扔进垃圾袋。手机却自己重启，弹出最后一条提示：确认删除明天？你知道只要按下去，痛苦就会消失。",
    choices: [
      { text: "确认删除", next: "erase02" },
      { text: "停下，打开短信源头", next: "source01" }
    ]
  },
  erase02: {
    art: "mirror",
    scene: "bathroom",
    effect: "ending",
    speaker: "结局 D",
    chapter: "结局 · 删除明天",
    ending: "erase",
    media: { type: "ending", title: "删除明天", body: "你已经用完了最后一次逃跑。" },
    text: "第二天，你照常醒来。你不记得陆眠，不记得周叙，不记得白祁，也不记得昨晚哭到喘不过气的自己。手机系统提示：安全版本恢复成功。镜子上却多了一行水雾写成的字：你已经用完了最后一次逃跑。",
    choices: [
      { text: "照常醒来", next: "eraseAfter" },
      { text: "藏起玻璃碎片", next: "erasePocket" }
    ]
  },
  erasePocket: {
    art: "mirror",
    scene: "bathroom",
    effect: "horror",
    speaker: "结局 D",
    chapter: "结局 D · 第一幕：碎片",
    media: { type: "warning", title: "异常残留", body: "一枚无法识别的玻璃碎片。" },
    text: "你把镜面上脱落的一小片玻璃藏进口袋。你不知道为什么要这么做，只觉得那片碎片里有个女孩正看着你。她的口型模糊，你听不见，只觉得胸口空得发痛。",
    choices: [
      { text: "继续", next: "eraseAfter" }
    ]
  },
  eraseAfter: {
    art: "flowerShop",
    scene: "bathroom",
    effect: "horror",
    speaker: "旁白",
    chapter: "结局 D · 第二幕：空白生活",
    media: { type: "reward", title: "图鉴已收录", body: "删除明天：你赢得了安静，也输掉了自己。" },
    text: "一个月后，你路过花店，莫名买下一束白玫瑰。店员问要写什么卡片，你想了很久，只写下两个字：沈栀。你不明白为什么写自己的名字会难过，只觉得那两个字像从别人墓碑上拓下来。",
    choices: [
      { text: "继续", next: "eraseAfter2" },
      { text: "撕掉卡片", next: "eraseNoName" }
    ]
  },
  eraseNoName: {
    art: "flowerShop",
    scene: "bathroom",
    effect: "horror",
    speaker: "旁白",
    chapter: "结局 D · 第三幕：无名花",
    media: { type: "flower", title: "无名白玫瑰", body: "没有收件人，也没有寄件人。" },
    text: "你把卡片撕掉。没有名字以后，白玫瑰反而更像一场无人认领的葬礼。晚上你做了一个梦，梦里有人把热牛奶放到你手里，说：栀栀，先喝一口。",
    choices: [
      { text: "继续", next: "eraseAfter2" }
    ]
  },
  eraseAfter2: {
    art: "mirror",
    scene: "bathroom",
    effect: "horror",
    speaker: "结局 D",
    chapter: "结局 D · 第四幕：安全版本",
    media: { type: "warning", title: "安全版本", body: "痛苦已删除。关联人物已模糊。" },
    text: "你的生活变得很顺。你不再失眠，也不再害怕雨夜。周叙打来电话时，你礼貌地问他是哪位；白祁在街角与你擦肩而过，你只觉得这个年轻人看你的眼神很奇怪。",
    choices: [
      { text: "接起周叙电话", next: "eraseZhouCall" },
      { text: "追上白祁", next: "eraseBaiStreet" },
      { text: "打开陌生视频", next: "eraseAfter3" }
    ]
  },
  eraseZhouCall: {
    art: "phone",
    scene: "living",
    effect: "message",
    speaker: "周叙",
    chapter: "结局 D · 第五幕：陌生前任",
    media: { type: "call", title: "周叙", body: "你真的不记得我了？" },
    text: "周叙在电话那头沉默很久，最后只问：你真的不记得我了？你说抱歉。他笑了一下，比哭还难听：这样也好。挂断前，他说如果哪天你看见 23:17，别再一个人待着。",
    choices: [
      { text: "继续", next: "eraseAfter3" }
    ]
  },
  eraseBaiStreet: {
    art: "studio",
    scene: "studio",
    effect: "horror",
    speaker: "白祁",
    chapter: "结局 D · 第五幕：陌生弟弟",
    media: { type: "photo", title: "白祁手机里的合照", body: "一个浅黄色卫衣的女孩站在你旁边。" },
    text: "白祁把手机屏幕举到你面前。照片里的女孩笑得很亮，站在你旁边。你盯着她看了很久，礼貌地问：这是你姐姐吗？白祁的眼神彻底碎掉。他说：沈栀，你赢了。",
    choices: [
      { text: "继续", next: "eraseAfter3" }
    ]
  },
  eraseAfter3: {
    art: "mirror",
    scene: "bathroom",
    effect: "horror",
    speaker: "结局 D",
    chapter: "结局 D · 第六幕：陌生视频",
    media: { type: "video", title: "未命名素材", body: "画面人物无法识别。音频关键词：栀栀。" },
    text: "直到某天，你剪到一段陌生视频。视频里的女孩穿着浅黄色卫衣，对镜头说：栀栀，如果你看到这里。你暂停画面，发现自己的手已经移到删除键上，动作熟练得像已经练习过很多次。",
    choices: [
      { text: "删除视频", next: "eraseAfter4" },
      { text: "导出视频", next: "eraseExport" }
    ]
  },
  eraseExport: {
    art: "lumianVideo",
    scene: "videoRoom",
    effect: "video",
    speaker: "旁白",
    chapter: "结局 D · 第七幕：备份",
    media: { type: "drive", title: "backup_final.mov", body: "你保存了它，却没有能力理解它。" },
    text: "你导出了一份备份，命名为 backup_final.mov。文件进度到 99% 时，电脑突然黑屏。你在黑色屏幕上看见自己的倒影，身后像站着另一个女孩。你回头，房间里什么都没有。",
    choices: [
      { text: "继续", next: "eraseAfter4" }
    ]
  },
  eraseAfter4: {
    art: "mirror",
    scene: "bathroom",
    effect: "horror",
    speaker: "结局 D",
    chapter: "结局 D · 终幕",
    media: { type: "ending", title: "删除明天 完成", body: "成就解锁：空白人生，空白也会回声" },
    text: "屏幕黑下去，倒映出一个完全陌生的你。那晚你睡得很好，梦里没有雨，没有天台，也没有人喊你的名字。可第二天醒来，床头多了一束白玫瑰，卡片上只有一句：你把我也删干净了吗？",
    choices: [
      { text: "回到标题", action: "title" },
      { text: "查看结局图鉴", action: "gallery" }
    ]
  },

  commonVideo01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "video",
    speaker: "旁白",
    chapter: "真相线 · 天台录像",
    media: { type: "video", title: "rooftop_raw.mp4", body: "栏杆断裂前 00:13。" },
    text: "录像很晃，像是有人把手机放在地上。你看见自己站在天台边，陆眠冲过来抱住你。你挣扎，不是推她，而是想把自己从边缘拖回来。风很大，周叙的未接来电亮了三次。",
    choices: [
      { text: "不要暂停，硬撑着看完最后十三秒", next: "commonVideo02" },
      { text: "暂停，先看陆眠自拍视频", next: "luVideo01" }
    ]
  },
  commonVideo02: {
    art: "rooftop",
    scene: "rooftop",
    effect: "memory",
    speaker: "旁白",
    chapter: "真相线 · 十三秒",
    media: { type: "memory", title: "最后动作", body: "陆眠把你推回安全的地方。" },
    text: "栏杆断开的瞬间，陆眠没有抓住你一起往下坠。她用尽最后的力气，把你推回了安全的一侧。你活下来了。你把脸埋进掌心，第一次明白：你不是忘了凶手，你是忘了救你的人。",
    choices: [
      { text: "崩溃道歉，查短信源头", next: "source01" },
      { text: "认为自己必须偿命", next: "loop01" },
      { text: "看陆眠留给你的完整视频", next: "luVideo01" }
    ]
  },
  luVideo01: {
    art: "lumianVideo",
    scene: "videoRoom",
    effect: "video",
    speaker: "陆眠",
    chapter: "真相线 · 陆眠的视频",
    media: { type: "video", title: "给终于想起来的沈栀", body: "我喜欢你活着。很麻烦也喜欢。" },
    text: "视频里的陆眠还活着，穿着浅黄色卫衣，坐在便利店窗边。她说：如果你看到这里，说明你又把最重要的事情忘掉了。沈栀，你不能拿我的死，当你不活下去的理由。",
    choices: [
      { text: "别打断她，把视频放到最后", next: "luVideo02" },
      { text: "查短信源头", next: "source01" }
    ]
  },
  luVideo02: {
    art: "lumianVideo",
    scene: "videoRoom",
    effect: "video",
    speaker: "陆眠",
    chapter: "真相线 · 她的请求",
    media: { type: "video", title: "陆眠的请求", body: "替我看看明天吧。看很多很多个。" },
    text: "陆眠靠近镜头，笑得很轻：我不怪你。真的不怪。可你要答应我，别再把活着当成惩罚。如果未来的你还愿意替我做一件事，就替我看看明天吧，看很多很多个。",
    choices: [
      { text: "打开短信源头", next: "source01" },
      { text: "去天台等天亮", next: "live01" }
    ]
  },
  source01: {
    art: "source",
    scene: "source",
    effect: "message",
    speaker: "旁白",
    chapter: "终章 · 短信源头",
    media: { type: "code", title: "延迟程序", body: "触发条件：沈栀再次进入心理危机档案。" },
    text: "你顺着短信链接查下去，发现它不是鬼魂。那是陆眠三年前写好的延迟程序。触发条件是：你的名字再次出现在心理危机档案里。她不是回来索命，她是怕你又一次一个人走到边缘。",
    choices: [
      { text: "读取最后一段留言", next: "finalChoice" }
    ]
  },
  finalChoice: {
    art: "source",
    scene: "source",
    effect: "message",
    speaker: "旁白",
    chapter: "终章 · 最终选择",
    media: { type: "sms", title: "陆眠", body: "沈栀，今晚十二点前，你选择谁替你活到明天？", choices: "周叙 / 白祁 / 沈栀 / 陆眠" },
    text: "屏幕上的候选名单重新出现。这一次，你终于知道它不是在问谁该死，而是在问：你还要不要把自己从明天里删掉。倒计时只剩最后十秒。",
    choices: [
      { text: "选择沈栀：我想活到明天", next: "live01" },
      { text: "选择陆眠：我把明天还给她", next: "loop01" },
      { text: "回复陆眠：对不起，我想起来了", next: "forgive01" }
    ]
  },
  live01: {
    art: "dawn",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 A",
    chapter: "结局 · 替我活下去",
    ending: "live",
    media: { type: "ending", title: "替我活下去", body: "我不会替你死了，陆眠。我会替你好好活。" },
    text: "你选择了沈栀。不是因为你无辜，也不是因为你终于被原谅。只是因为陆眠用最后的力气，把你推向了明天。清晨 6:12，你拨通心理咨询电话。号码接通前，你差点又挂断。",
    choices: [
      { text: "不挂断电话", next: "liveAfter" },
      { text: "发消息给周叙", next: "liveCallZhou" }
    ]
  },
  liveCallZhou: {
    art: "phone",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "结局 A · 第一幕：求助",
    media: { type: "chat", title: "发给周叙", body: "我想活，但我不想靠逃跑活。" },
    text: "你把消息发给周叙：我想活，但我不想靠逃跑活。发送成功那一刻，你手抖得几乎握不住手机。周叙只回了四个字：我在楼下。不是带你走，是陪你留下来。",
    choices: [
      { text: "继续", next: "liveAfter" }
    ]
  },
  liveAfter: {
    art: "hospital",
    scene: "dawn",
    effect: "ending",
    speaker: "旁白",
    chapter: "结局 A · 第二幕：第一次说出口",
    media: { type: "reward", title: "图鉴已收录", body: "替我活下去：你没有被治愈，但你开始向明天移动。" },
    text: "咨询师问你现在安全吗。你看着满桌证据、白玫瑰和亮着的视频窗口，第一次没有说我没事。你说：我现在不安全，但我愿意让人知道。说完以后，你像从很深的水里浮上来。",
    choices: [
      { text: "继续", next: "liveAfter2" }
    ]
  },
  liveAfter2: {
    art: "hospital",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 A",
    chapter: "结局 A · 第三幕：急诊室",
    media: { type: "record", title: "危机干预记录", body: "当事人主动求助，愿意配合短期安全计划。" },
    text: "天亮后，你坐在医院急诊室里，身上披着周叙的外套。医生让你写下今晚不能独处时可以联系的三个人。你写得很慢：咨询师、周叙、白祁。写到白祁时，你停了很久。",
    choices: [
      { text: "留下白祁的名字", next: "liveBaiName" },
      { text: "写下陆眠旧号码", next: "liveLuNumber" }
    ]
  },
  liveBaiName: {
    art: "hospital",
    scene: "studio",
    effect: "ending",
    speaker: "旁白",
    chapter: "结局 A · 第四幕：联系白祁",
    media: { type: "chat", title: "发给白祁", body: "我想起来了。你可以恨我，但我想把证据交给你。" },
    text: "你给白祁发消息，说自己想起来了。屏幕上方显示对方正在输入，又消失，又出现。最后他只回：我现在不想见你。但证据发来。你没有难过，反而松了一口气。他终于能拒绝你，而不是只被过去拖着走。",
    choices: [
      { text: "继续", next: "liveAfter3" }
    ]
  },
  liveLuNumber: {
    art: "hospital",
    scene: "living",
    effect: "message",
    speaker: "旁白",
    chapter: "结局 A · 第四幕：旧号码",
    media: { type: "sms", title: "未发送草稿", body: "陆眠，我今天没有挂断电话。" },
    text: "你把陆眠旧号码写在纸上，又划掉。咨询师没有阻止你，只问：如果她真的能收到，你最想告诉她什么？你想了很久，写下：我今天没有挂断电话。",
    choices: [
      { text: "继续", next: "liveAfter3" }
    ]
  },
  liveAfter3: {
    art: "hospital",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 A",
    chapter: "结局 A · 第五幕：第一次复诊",
    media: { type: "record", title: "咨询记录", body: "我今天想起她时，没有只想惩罚自己。" },
    text: "第一次复诊，你在纸上写下陆眠的名字。咨询师问你想对她说什么。你写了很久，最后只写：我今天吃早饭了。很普通的一句话，却让你在诊室里哭到停不下来。",
    choices: [
      { text: "继续", next: "liveAfter4" }
    ]
  },
  liveAfter4: {
    art: "dawn",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 A",
    chapter: "结局 A · 第六幕：剪完视频",
    media: { type: "video", title: "导出文件", body: "《明天见》.mov" },
    text: "三个月后，你第一次完整剪完陆眠留下的视频。导出文件时，你把标题改成《明天见》。你仍然会在雨夜惊醒，也仍然会在 23:17 看一眼手机。但这一次，你会把灯打开，对自己说：我在。",
    choices: [
      { text: "邀请白祁看成片", next: "liveScreeningBai" },
      { text: "一个人看完", next: "liveAfter5" }
    ]
  },
  liveScreeningBai: {
    art: "lumianVideo",
    scene: "videoRoom",
    effect: "video",
    speaker: "白祁",
    chapter: "结局 A · 第七幕：放映",
    media: { type: "video", title: "私人放映", body: "播放进度：23:17 / 27:06" },
    text: "白祁来了，但坐得离你很远。视频播放到陆眠说替我看看明天时，他突然按下暂停，问：你真的会看吗？你说会。白祁没有看你，只说：那你最好别骗她第二次。",
    choices: [
      { text: "继续", next: "liveAfter5" }
    ]
  },
  liveAfter5: {
    art: "cemetery",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 A",
    chapter: "结局 A · 第八幕：墓园",
    media: { type: "flower", title: "白玫瑰", body: "这一次，你没有只站三分钟。" },
    text: "你带着白玫瑰去墓园。以前你总是在三分钟内离开，因为再久一点就会喘不过气。这次你坐到天色变暗，把视频里的每一句话都讲给她听。风吹过来，花瓣轻轻碰到你的手背。",
    choices: [
      { text: "继续", next: "liveAfter6" }
    ]
  },
  liveAfter6: {
    art: "cemetery",
    scene: "dawn",
    effect: "ending",
    speaker: "结局 A",
    chapter: "结局 A · 终幕",
    media: { type: "ending", title: "替我活下去 完成", body: "成就解锁：明天见，不是遗言" },
    text: "离开前，你把手机放在墓碑前，按下播放。视频里的陆眠笑着说：替我看看明天吧。你点点头，把屏幕收回怀里。第二天早上，你给自己煮了早餐，拍照发到那个不会再回复的旧号码：明天见。",
    choices: [
      { text: "回到标题", action: "title" },
      { text: "查看结局图鉴", action: "gallery" }
    ]
  },
  loop01: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "隐藏坏结局",
    chapter: "结局 · 替她停留",
    ending: "loop",
    media: { type: "ending", title: "替她停留", body: "你把自己关进三年前那一分钟。" },
    text: "你选择了陆眠。你说，如果那晚死的人该是你，那就从现在开始，把明天还给她。雨滴停在半空，手机时间永远卡在 00:00。你听见系统提示：替换失败，正在重播死亡前十三秒。",
    choices: [
      { text: "抓住陆眠", next: "loopAfter" },
      { text: "堵住天台门", next: "loopBlockDoor" }
    ]
  },
  loopBlockDoor: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "隐藏坏结局",
    chapter: "替她停留 · 第一幕：堵门",
    media: { type: "memory", title: "循环尝试 001", body: "阻止陆眠进入天台。" },
    text: "你冲向天台门，用身体抵住门板。门外的陆眠在拍门，声音又急又哑：沈栀！你别一个人待着！你捂住耳朵，以为这样就能救她。下一秒，门锁从里面自动弹开。",
    choices: [
      { text: "继续", next: "loopAfter" }
    ]
  },
  loopAfter: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "旁白",
    chapter: "替她停留 · 第二幕：无数第一次",
    media: { type: "reward", title: "图鉴已收录", body: "替她停留：最痛的惩罚，是永远被爱救下。" },
    text: "第无数次循环里，你终于学会在陆眠跑来之前喊她的名字。她愣了一下，还是向你冲过来。你想告诉她别救我，可她听不见。世界又一次白掉。你重新睁眼，时间仍是 23:17。",
    choices: [
      { text: "继续", next: "loopAfter2" }
    ]
  },
  loopAfter2: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "隐藏坏结局",
    chapter: "替她停留 · 第十三次",
    media: { type: "memory", title: "循环记录", body: "你开始记得每一次失败。" },
    text: "第十三次，你提前抓住她的手。第二十七次，你把她推向门口。第一百零一次，你跪下来求她别过来。可陆眠每一次都会选择你。她不记得循环，只记得她爱你。",
    choices: [
      { text: "告诉她真相", next: "loopTellTruth" },
      { text: "放弃挣扎", next: "loopAfter3" }
    ]
  },
  loopTellTruth: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "陆眠",
    chapter: "替她停留 · 第三幕：说破",
    media: { type: "video", title: "口型同步失败", body: "她听见了，又像没有听见。" },
    text: "你终于在她冲过来前喊出：你救我会死！陆眠停住了半秒。那半秒长得像一生。然后她笑了一下，说：那你也先回来。她还是伸手，把你推回安全的一侧。",
    choices: [
      { text: "抓住她的袖口", next: "loopSleeve" }
    ]
  },
  loopSleeve: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "旁白",
    chapter: "替她停留 · 第四幕：袖口",
    media: { type: "memory", title: "新增变量", body: "你第一次抓住了陆眠的袖口。" },
    text: "这一次，你抓住了她的袖口。布料在掌心绷紧，陆眠的眼睛亮了一下，像她也以为结局终于改变。可是下一秒，袖口被雨水撕裂。世界没有给你奇迹，只给你一片浅黄色的布。",
    choices: [
      { text: "继续", next: "loopAfter3" }
    ]
  },
  loopAfter3: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "隐藏坏结局",
    chapter: "替她停留 · 第五幕：磨损",
    media: { type: "warning", title: "循环磨损", body: "记忆保留率：沈栀 100% / 陆眠 0%" },
    text: "后来你开始磨损。你记得每一次失败，陆眠却永远只活在第一次救你的那十三秒里。你试着背下她每一次呼吸，背到最后，连她原本的笑声都被循环里的雨声盖住。",
    choices: [
      { text: "继续", next: "loopAfter4" }
    ]
  },
  loopAfter4: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "隐藏坏结局",
    chapter: "替她停留 · 第六幕：纪念碑",
    media: { type: "memory", title: "你建立的规则", body: "每轮循环，都要叫她一次陆眠。" },
    text: "你给自己定了一条规则：每一轮，都要在她冲过来前叫她的全名。陆眠。陆眠。陆眠。名字成了这座循环里唯一的纪念碑。可纪念碑立得越高，你越清楚自己没有真的放过她。",
    choices: [
      { text: "继续", next: "loopAfter5" }
    ]
  },
  loopAfter5: {
    art: "rooftop",
    scene: "rooftop",
    effect: "horror",
    speaker: "隐藏坏结局",
    chapter: "替她停留 · 终幕",
    media: { type: "ending", title: "替她停留 完成", body: "成就解锁：永远的 23:17，永远不是重逢" },
    text: "最后你不再挣扎，也不再喊。你只是站在那里，等她向你跑来。雨停在半空，城市没有明天。陆眠抱住你的瞬间，你终于明白：你要的不是赎罪，是把她的爱变成你的刑期。",
    choices: [
      { text: "回到标题", action: "title" },
      { text: "查看结局图鉴", action: "gallery" }
    ]
  },
  forgive01: {
    art: "dawn",
    scene: "dawn",
    effect: "ending",
    speaker: "隐藏结局 E",
    chapter: "结局 · 她没有怪你",
    ending: "forgive",
    media: { type: "ending", title: "她没有怪你", body: "那天之后，沈栀终于开始把自己的名字写进未来。" },
    text: "你回复那条迟到三年的短信：对不起，我想起来了。几秒后，陆眠预设的视频自动播放。她说：看到这里的时候，你肯定哭得很丑。沈栀，我不怪你。真的不怪。替我看看明天吧。",
    choices: [
      { text: "问她：我很想你怎么办", next: "forgiveAskMiss" },
      { text: "存成纪念页", next: "forgiveAfter" }
    ]
  },
  forgiveAskMiss: {
    art: "lumianVideo",
    scene: "videoRoom",
    effect: "video",
    speaker: "陆眠",
    chapter: "隐藏结局 E · 第一幕：想念",
    media: { type: "video", title: "预设回答", body: "想我可以，但别只在最痛的时候想我。" },
    text: "你对着屏幕问：如果我还是很想你怎么办？视频像真的听见了一样，跳到下一段。陆眠托着下巴说：那就想啊。但别只在最痛的时候想我。也在吃到好吃的、看到好看的云时想我。",
    choices: [
      { text: "继续", next: "forgiveAfter" }
    ]
  },
  forgiveAfter: {
    art: "dawn",
    scene: "dawn",
    effect: "ending",
    speaker: "旁白",
    chapter: "隐藏结局 E · 第二幕：纪念页",
    media: { type: "reward", title: "隐藏图鉴已收录", body: "她没有怪你：不是原谅，是她从未把你当成罪人。" },
    text: "第二年春天，你把陆眠的视频做成一个只有自己能打开的纪念页。页面不是墓碑，也不是忏悔书。它有日期、天气、早餐记录和一栏很小的输入框：今天替陆眠看见了什么？",
    choices: [
      { text: "写下第一条记录", next: "forgiveCloud" },
      { text: "修复旧照片", next: "forgiveAfter2" }
    ]
  },
  forgiveCloud: {
    art: "dawn",
    scene: "dawn",
    effect: "ending",
    speaker: "旁白",
    chapter: "隐藏结局 E · 第三幕：第一条记录",
    media: { type: "record", title: "纪念页记录", body: "今天的云很像热牛奶。沈栀没有逃走。" },
    text: "你敲下第一条记录：今天的云很像热牛奶。写完以后，你等了很久，旧号码没有回信。你却没有失望。你忽然懂了，陆眠留下这个程序，不是为了永远回答你，而是为了让你重新开始回答世界。",
    choices: [
      { text: "继续", next: "forgiveAfter2" }
    ]
  },
  forgiveAfter2: {
    art: "dawn",
    scene: "dawn",
    effect: "ending",
    speaker: "隐藏结局 E",
    chapter: "她没有怪你 · 新页面",
    media: { type: "record", title: "纪念页", body: "今天也把栀栀捡回来啦。下面新增一行：今天栀栀自己走回来了。" },
    text: "你把相册里那张模糊照片修复了一点。陆眠蹲在你面前，手里拿着热牛奶，眼睛红得很明显。你以前只看见自己的狼狈，现在才看见她也害怕。你在照片下面加了一行字：谢谢你那天没有放开我。",
    choices: [
      { text: "发给白祁", next: "forgiveSendBai" },
      { text: "先藏起来", next: "forgiveKeepPhoto" }
    ]
  },
  forgiveSendBai: {
    art: "studio",
    scene: "studio",
    effect: "ending",
    speaker: "白祁",
    chapter: "隐藏结局 E · 第四幕：发给白祁",
    media: { type: "photo", title: "已发送图片", body: "白祁正在输入..." },
    text: "白祁过了很久才回复：她那天是不是也哭了？你说是。对话框上方反复显示正在输入，最后只剩下一句：原来我姐也会害怕。你没有安慰他。你知道这句话已经足够让他重新认识陆眠。",
    choices: [
      { text: "去墓园", next: "forgiveAfter3" }
    ]
  },
  forgiveKeepPhoto: {
    art: "album",
    scene: "videoRoom",
    effect: "photo",
    speaker: "旁白",
    chapter: "隐藏结局 E · 第四幕：暂存",
    media: { type: "photo", title: "私人收藏", body: "你还没有准备好分享，但没有再删除。" },
    text: "你把照片放进加密相册，没有发给任何人。以前你藏东西是为了逃避，现在你只是承认自己还没准备好。第二天，你把白祁从黑名单里放出来。这也是一种开始。",
    choices: [
      { text: "去墓园", next: "forgiveAfter3" }
    ]
  },
  forgiveAfter3: {
    art: "cemetery",
    scene: "dawn",
    effect: "ending",
    speaker: "隐藏结局 E",
    chapter: "她没有怪你 · 周年",
    media: { type: "flower", title: "不是忌日", body: "你把这一天改名为：陆眠拉我回来的日子。" },
    text: "三周年那天，你约了白祁和周叙一起去墓园。没有人说原谅，也没有人说重新开始。你们只是把三束花放在一起。白祁低声说：我姐应该会嫌我们哭得丑。你们都笑了。",
    choices: [
      { text: "让白祁单独说话", next: "forgiveBaiAlone" },
      { text: "播放陆眠的视频", next: "forgiveVideoTogether" }
    ]
  },
  forgiveBaiAlone: {
    art: "cemetery",
    scene: "dawn",
    effect: "ending",
    speaker: "旁白",
    chapter: "隐藏结局 E · 第六幕：留白",
    media: { type: "flower", title: "十分钟", body: "你和周叙站在墓园外，没有偷听。" },
    text: "你和周叙走到墓园门口，给白祁留下十分钟。风把白玫瑰吹得轻轻摇晃。周叙问你冷不冷，你说不冷。你们没有牵手，也没有回到从前，但终于可以安静地站在同一边。",
    choices: [
      { text: "继续", next: "forgiveAfter4" }
    ]
  },
  forgiveVideoTogether: {
    art: "lumianVideo",
    scene: "videoRoom",
    effect: "video",
    speaker: "陆眠",
    chapter: "隐藏结局 E · 第六幕：一起看",
    media: { type: "video", title: "三人放映", body: "陆眠：你们要是都在哭，就轮流丢脸。" },
    text: "你按下播放。陆眠出现在屏幕里，说：如果你们三个都在，那我先声明，谁哭得最丑谁负责买早餐。白祁笑着哭出来，周叙别过脸。你也哭，但这一次，哭声里终于有一点活人的气息。",
    choices: [
      { text: "继续", next: "forgiveAfter4" }
    ]
  },
  forgiveAfter4: {
    art: "dawn",
    scene: "dawn",
    effect: "ending",
    speaker: "隐藏结局 E",
    chapter: "她没有怪你 · 第七幕：程序自毁",
    media: { type: "warning", title: "最终提示", body: "延迟程序已完成全部使命，即将自毁。" },
    text: "晚上回家，你收到系统提示：延迟程序已完成全部使命，即将自毁。你看着屏幕很久，忽然意识到这才是陆眠真正留下的选择：你要把她做成永远响应你的程序，还是把她还给真实的死亡与真实的爱。",
    choices: [
      { text: "保存只读备份", next: "forgiveSaveArchive" },
      { text: "允许程序自毁", next: "forgiveLetGo" }
    ]
  },
  forgiveSaveArchive: {
    art: "source",
    scene: "source",
    effect: "message",
    speaker: "旁白",
    chapter: "她没有怪你 · 第八幕：备份",
    media: { type: "drive", title: "lumian_archive.readonly", body: "不可回复。不可触发。只可播放。" },
    text: "你保存了一份只读备份，取消了所有自动回复。它不能再在深夜替你做决定，也不能冒充陆眠活着。它只是一份声音，一段影像，一封终于可以被好好保管的信。",
    choices: [
      { text: "继续", next: "forgiveAfter5" }
    ]
  },
  forgiveLetGo: {
    art: "source",
    scene: "source",
    effect: "message",
    speaker: "陆眠",
    chapter: "她没有怪你 · 第八幕：放手",
    media: { type: "sms", title: "陆眠最后一行", body: "栀栀，别总回头。我在你明天里。" },
    text: "你没有备份。程序消失前，弹出陆眠最后一行字：栀栀，别总回头。我在你明天里。屏幕暗下去，你没有立刻哭。你只是把窗帘拉开，让清晨的光落在桌面上。",
    choices: [
      { text: "继续", next: "forgiveAfter5" }
    ]
  },
  forgiveAfter5: {
    art: "dawn",
    scene: "dawn",
    effect: "ending",
    speaker: "隐藏结局 E",
    chapter: "她没有怪你 · 终幕",
    media: { type: "ending", title: "她没有怪你 完成", body: "成就解锁：很多很多个明天，不靠遗忘解锁" },
    text: "纪念页最后没有写结局，只多了一行普通到近乎笨拙的记录：今天，沈栀活到了明天。你把电脑合上，去厨房给自己煮早餐。水汽升起来时，你听见心里有个很轻的声音说：好，明天也见。",
    choices: [
      { text: "回到标题", action: "title" },
      { text: "查看结局图鉴", action: "gallery" }
    ]
  }
};

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
  currentFullText: ""
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
  setTitleVisible(false);
  renderNode(nodeId);
}

function renderNode(nodeId) {
  const node = script[nodeId];
  if (!node) return;
  closeMenu();

  state.nodeId = nodeId;
  state.typingToken += 1;
  const token = state.typingToken;
  const store = readStore();
  state.pendingContinue = null;
  state.currentFullText = node.text || "";
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
  els.chapter.textContent = node.chapter || "替你活到明天";
  els.speaker.textContent = node.speaker || "旁白";
  els.nodeCount.textContent = `${Math.max(1, state.history.length + 1).toString().padStart(2, "0")}`;

  els.dialoguePanel.classList.remove("pulse", "shake");
  void els.dialoguePanel.offsetWidth;
  els.dialoguePanel.classList.add("pulse");

  renderMedia(node.media);
  typeText(node.text, token, () => {
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
  els.mediaTopline.textContent = media.title || "线索";

  const body = escapeHtml(media.body || "");
  const extra = media.choices ? `<small>${escapeHtml(media.choices)}</small>` : "";
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
  const isContinueOnly = choices.length === 1 && choices[0].next && choices[0].text === "继续";
  if (isContinueOnly) {
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
    button.className = `choice-button ${isContinueOnly ? "is-continue" : ""}`;
    button.innerHTML = isContinueOnly
      ? `<span>阅读</span>继续阅读`
      : `<span>选项 ${index + 1}</span>${escapeHtml(choice.text)}`;
    button.addEventListener("click", () => choose(choice));
    els.choices.appendChild(button);
  });
}

function advanceByScreenClick(event) {
  if (els.title.classList.contains("is-visible")) return;
  if (els.saveModal.open || els.galleryModal.open) return;
  if (event.target.closest("button, dialog, .top-menu, .choice-dock, .story-prop")) return;
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
    state.history.push(state.nodeId);
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
  renderNode(prev);
}

function saveToSlot(slot) {
  const store = readStore();
  store.saves[slot] = {
    nodeId: state.nodeId,
    history: [...state.history],
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
  state.history = save.history || [];
  els.saveModal.close();
  setTitleVisible(false);
  renderNode(save.nodeId);
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
    const card = document.createElement("article");
    card.className = "slot-card";
    card.innerHTML = `
      <div>
        <strong>档位 ${slot} · ${node ? escapeHtml(node.chapter) : "空档位"}</strong>
        <span>${node ? escapeHtml(`${node.speaker}：${node.text.slice(0, 42)}...`) : "还没有保存进度"}</span>
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
  state.history = latest.history || [];
  setTitleVisible(false);
  renderNode(latest.nodeId);
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
