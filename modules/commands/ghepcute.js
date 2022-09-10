module.exports.config = {
    name: "ghepcute",
    version: "2.6.0",
    hasPermssion: 0,
    credits: "Binee",//tớ yêu gái đít bự mông to
    description: "",
    commandCategory: "Tiện ích",
    usages: "[/cute+@tag],để ra ảnh cute :3",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'cute.jpg');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/IOiF1Gi.jpg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let tromcho_img = await jimp.read(__root + "/cute.jpg");
    let pathImg = __root + `/cute${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    tromcho_img.composite(circleOne.resize(215, 185), 430, 410).composite(circleTwo.resize(215, 185), 81, 410);
    
    let raw = await tromcho_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions)[0]
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: " Bbi "  +  tag + ', trông cậu và tớ dễ thương chưa kìaaa :3',
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}// U là trời nhặt hộ liêm sĩ đi bạn ơi |Binee 