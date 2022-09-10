module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tiadals với api của Kadeer",
  description: "Vợ tôi",
  commandCategory: "Random-img alime",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apikanna.change-itit.repl.co/').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `⚡ 𝘼𝙙𝙢𝙞𝙣 𝘽𝙊𝙏 🔥

👁️ 𝙏𝙚̂𝙣:𝒏𝒈𝒖𝒚ễ𝒏 𝒕𝒓ườ𝒏𝒈 𝒈𝒊𝒂𝒏𝒈 ☫
⚜️ 𝘽𝙞𝙚̣̂𝙩 𝙙𝙖𝙣𝙝:𝒍𝒖𝒄𝒊𝒇𝒆𝒓𝒔♚
❎ 𝙏𝙪𝙤̂̉𝙞: 17
🎂 𝙎𝙞𝙣𝙝 𝙣𝙝𝙖̣̂𝙩: 𝟎𝟗✵𝟎𝟏✵𝟐𝟎𝟎𝟔
♂️ 𝙂𝙞𝙤̛́𝙞 𝙩𝙞́𝙣𝙝: 𝒏𝒂𝒎
🚶 𝘾𝙝𝙞𝙚̂̀𝙪 𝘾𝙖𝙤: 𝟏𝑀𝟕𝟎
⚖️ 𝘾𝙖̂𝙣 𝙣𝙖̣̆𝙣𝙜: 𝟓𝟐𝐾g
😉 𝙏𝙞́𝙣𝙝 𝙘𝙖́𝙘𝙝: 𝒉𝒊𝒆̂̀𝒏
😍 𝙎𝙤̛̉ 𝙩𝙝𝙞́𝙘𝙝: 𝐶ℎ𝑜̛𝑖 𝑔𝑎𝑚𝑒 ,...
♋ 𝘾𝙪𝙣𝙜: 𝒎𝒂 𝒌𝒆̂́𝒕
💘 𝙈𝙤̂́𝙞 𝙦𝙪𝙖𝙣 𝙝𝙚̣̂: độ𝒄 𝒕𝒉â𝒏
🏡 𝙉𝙤̛𝙞 𝙤̛̉: 𝟏𝟕➣𝒕𝒉𝒂́𝒊 𝒃𝒊̀𝒏𝒉 
🖥️ 𝘾𝙤̂𝙣𝙜 𝙫𝙞𝙚̣̂𝙘:𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌➣ 𝒄𝒉𝒂̣𝒚 𝒃𝒐𝒕➣𝒄𝒉𝒖̉ 𝒃𝒐𝒕  
🏧 𝙈𝙤𝙢𝙤:𝟎𝟑𝟖𝟖𝟗𝟖𝟗𝟏𝟏𝟖
📲 𝙇𝙞𝙚̂𝙣 𝙝𝙚̣̂ / 𝙕𝙖𝙡𝙤: 𝟎𝟑𝟖𝟖𝟗𝟖𝟗𝟏𝟏𝟖
🌐 𝙈𝙚𝙩𝙖: https://www.facebook.com/User.Lucifer.s
💌 𝙀𝙢𝙖𝙞𝙡: copyright.ntg@gmail.com `,
            attachment: fs.createReadStream(__dirname + `/cache/chitanda.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/chitanda.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/chitanda.${ext}`)).on("close", callback);
      })
}