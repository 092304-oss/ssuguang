const engine = require("./creator-engine.js");

function createMemoryStorage() {
  const data = new Map();
  return {
    getItem: key => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: key => data.delete(key),
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
assert(scenes.length >= 3, "parses scene headings and dialogue nodes");
assert(scenes[0].name.includes("雨夜天台"), "uses scene heading in node name");
assert(scenes[0].speaker === "沈栀", "extracts speaker from dialogue");
assert(scenes[1].speaker === "周叙", "extracts later speakers");
assert(scenes[1].branches.length === 2, "extracts choices onto the previous node");
assert(engine.extractCharacters(scenes).includes("周叙"), "extracts characters");

const game = engine.buildPublishedGame({
  title: "测试游戏",
  description: "这是简介",
  tags: ["悬疑", "恋爱"],
  visibility: "public",
  scenes,
});
assert(game.nodes.length === scenes.length, "published game has nodes");
assert(game.nodes[1].branches[0].to === game.nodes[2].id, "choice target resolves");
assert(game.assets.backgrounds.length >= 2, "builds background asset library");
assert(game.assets.characters.length >= 2, "builds character asset library");
assert(game.assets.backgrounds.some(asset => asset.source === "free"), "includes free default backgrounds");
assert(game.assets.characters.some(asset => asset.source === "free"), "includes free default character sprites");

const freeScene = [{
  id: "free-01",
  name: "免费素材验证",
  speaker: "清冷女主",
  text: "这里应该能直接看到免费立绘。",
  bgName: "雨夜公寓",
  bg: "linear-gradient(135deg, #101c40, #060b1c 72%)",
  branches: [],
}];
const freeAssetPlan = engine.buildAssetLibrary(freeScene);
const freeBackground = freeAssetPlan.backgrounds.find(asset => asset.source === "free" && asset.name === "雨夜公寓");
const freeCharacter = freeAssetPlan.characters.find(asset => asset.source === "free" && asset.name === "清冷女主");
assert(Boolean(freeBackground && freeBackground.image), "free backgrounds carry real image paths");
assert(Boolean(freeCharacter && freeCharacter.image), "free characters carry real image paths");

const freePublishedGame = engine.buildPublishedGame({
  title: "免费素材验证",
  description: "检查免费素材发布后是否保留图片",
  tags: ["测试"],
  visibility: "public",
  scenes: freeScene,
  assets: freeAssetPlan,
});
assert(Boolean(freePublishedGame.nodes[0].bgImage), "published nodes keep free background images");
assert(Boolean(freePublishedGame.nodes[0].castImage), "published nodes keep free character images");

const customScript = `【场景：旧礼堂后台】
林晚：别出声，帘子后面有人。
顾沉：我带你走。

【场景：废弃泳池】
旁白：水面没有风，却自己晃了一下。`;
const customScenes = engine.parseScriptToScenes(customScript);
const assetPlan = engine.buildAssetLibrary(customScenes);
const estimate = engine.estimateGenerationCost(assetPlan);
assert(estimate.backgroundCount >= 2, "estimates premium background requirements");
assert(estimate.characterCount >= 2, "estimates premium character sprite requirements");
assert(estimate.credits > 0 && estimate.priceCny > 0, "estimates credits and money");

const blockedJob = engine.startAssetGeneration(assetPlan, { balance: 1 });
assert(blockedJob.ok === false && blockedJob.reason === "INSUFFICIENT_CREDITS", "blocks generation when credits are insufficient");

const startedJob = engine.startAssetGeneration(assetPlan, { balance: estimate.credits });
assert(startedJob.ok === true, "starts generation when credits are sufficient");
assert(startedJob.balance === 0, "deducts credits after generation starts");
assert(startedJob.assetPlan.generationJobs.length === 1, "creates a generation queue job");
assert(startedJob.assetPlan.backgrounds.some(asset => asset.status === "generating"), "marks backgrounds as generating");

const completedPlan = engine.completeAssetGeneration(startedJob.assetPlan, startedJob.job.id);
assert(completedPlan.backgrounds.some(asset => asset.source === "generated" && asset.status === "done" && asset.image), "completes generated backgrounds with images");
assert(completedPlan.characters.some(asset => asset.source === "generated" && asset.status === "done" && asset.image), "completes generated character sprites with images");

const storage = createMemoryStorage();
const gameWithGeneratedAssets = engine.buildPublishedGame({
  title: "测试游戏",
  description: "这是简介",
  tags: ["悬疑", "恋爱"],
  visibility: "public",
  scenes: customScenes,
  assets: completedPlan,
});
engine.savePublishedGame(storage, gameWithGeneratedAssets);
assert(engine.loadPublishedGames(storage).length === 1, "loads saved game");
assert(engine.getPublishedGame(storage, gameWithGeneratedAssets.id).title === "测试游戏", "loads a game by id");
assert(engine.getPublishedGame(storage, gameWithGeneratedAssets.id).assets.generationJobs.length === 1, "publishes generation job metadata");
assert(gameWithGeneratedAssets.nodes.some(node => String(node.bg || "").includes("data:image/svg")), "published nodes use generated background images");
assert(gameWithGeneratedAssets.nodes.some(node => String(node.castImage || "").includes("data:image/svg")), "published nodes carry generated character images");

console.log("creator-engine tests passed");
