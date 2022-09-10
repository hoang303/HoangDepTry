module.exports.config = {
  name: "duyetbox",
  version: "1.0.2",
  hasPermssion: 3,
  credits: "DungUwU",
  description: "duyệt box dùng bot xD",
  commandCategory: "Người hỗ trợ bot",
  cooldowns: 5
};
  
  
const dataPath = __dirname + "/cache/approvedThreads.json";
const pendingPath = __dirname + "/cache/pendingThreads.json";
const onPath = __dirname + "/cache/on.json";
const fs = require("fs");

module.exports.onLoad = () => {
    if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
    if (!fs.existsSync(pendingPath)) fs.writeFileSync(pendingPath, JSON.stringify([]));
    if (!fs.existsSync(onPath)) fs.writeFileSync(onPath, JSON.stringify({ uwu : false }, null, 4));
}

module.exports.run = async ({ event, api, args }) => {
    const { threadID, messageID, senderID } = event;
    const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
    let data = JSON.parse(fs.readFileSync(dataPath));
    let pending = JSON.parse(fs.readFileSync(pendingPath));
    let on = JSON.parse(fs.readFileSync(onPath));
    let msg = "";
    let idBox = (args[0]) ? args[0] : threadID;
    if (args[0] == "list") {
      msg = "𝐃𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐚́𝐜 𝐧𝐡𝐨́𝐦 đ𝐮̛𝐨̛̣𝐜 𝐩𝐡𝐞́𝐩 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭";
      let count = 0;
      for (e of data) {
        msg += `\n${count += 1}. 𝐈𝐃: ${e}`;
      }
      api.sendMessage(msg, threadID, messageID);
    }
    else if (args[0] == "del") {
      let threadInfo = await api.getThreadInfo(event.threadID);
    let threadName = threadInfo.threadName;
      idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage("𝐊𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐦𝐨̣̂𝐭 𝐜𝐨𝐧 𝐬𝐨̂́", threadID, messageID);
      if (!data.includes(idBox)) return api.sendMessage("𝐁𝐨𝐱 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐝𝐮𝐲𝐞̣̂𝐭 𝐭𝐮̛̀ 𝐭𝐫𝐮̛𝐨̛́𝐜!", threadID, messageID);
      api.sendMessage(`𝐁𝐨𝐱: ${threadName}\n𝐈𝐃: ${idBox}\n𝐓𝐢𝐦𝐞: ${timeNow}\nđ𝐚̃ 𝐛𝐢̣ 𝐠𝐨̛̃ 𝐤𝐡𝐨̉𝐢 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 đ𝐮̛𝐨̛̣𝐜 𝐩𝐡𝐞́𝐩 𝐝𝐮̀𝐧𝐠 𝐁𝐨𝐭`, threadID, () => {
        if (!pending.includes(idBox)) pending.push(idBox);
        data.splice(data.indexOf(idBox), 1);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
      }, messageID)
    }
    else if (args[0] == "pending") {
      
      msg = "𝐃𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐚́𝐜 𝐧𝐡𝐨́𝐦 đ𝐚𝐧𝐠 𝐜𝐡𝐨̛̀ 𝐝𝐮𝐲𝐞̣̂𝐭!";
      let count = 0;
      for (e of pending) {
        let name = (await api.getThreadInfo(e)).name || "𝐍𝐡𝐨́𝐦 𝐂𝐡𝐚𝐭";
        msg += `\n${count + 1}. ${name}\n𝐈𝐃: ${e}`;
        count++;
      }
      if(count == 0) msg = "𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐧𝐡𝐨́𝐦 𝐧𝐚̀𝐨 đ𝐚𝐧𝐠 𝐜𝐡𝐨̛̀ 𝐝𝐮𝐲𝐞̣̂𝐭";
      api.sendMessage(msg, threadID, messageID);
    } else if (args[0] == "on") {
      on.uwu = true;
      fs.writeFileSync(onPath, JSON.stringify(on, null, 4));
      api.sendMessage("» Đ𝐚̃ 𝐛𝐚̣̂𝐭 𝐝𝐮𝐲𝐞𝐭𝐛𝐨𝐱.\n𝐂𝐡𝐢̉ 𝐜𝐨́ 𝐜𝐚́𝐜 𝐧𝐡𝐨́𝐦 đ𝐚̃ đ𝐮̛𝐨̛̣𝐜 𝐝𝐮𝐲𝐞̣̂𝐭 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭", threadID, messageID);
    } else if (args[0] == "off") {
      on.uwu = false;
      fs.writeFileSync(onPath, JSON.stringify(on, null, 4));
      api.sendMessage("» Đ𝐚̃ 𝐭𝐚̆́𝐭 𝐝𝐮𝐲𝐞𝐭𝐛𝐨𝐱.\n𝐌𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 𝐭𝐡𝐨𝐚̉𝐢 𝐦𝐚́𝐢", threadID, messageID);
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("𝐈𝐃 𝐛𝐚̣𝐧 𝐧𝐡𝐚̣̂𝐩 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`𝐈𝐃 ${idBox} đ𝐚̃ đ𝐮̛𝐨̛̣𝐜 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭 𝐭𝐮̛̀ 𝐭𝐫𝐮̛𝐨̛́𝐜!`, threadID, messageID);
    else api.sendMessage("» 𝐁𝐨𝐱 đ𝐚̃ đ𝐮̛𝐨̛̣𝐜 𝐚𝐝𝐦𝐢𝐧 𝐝𝐮𝐲𝐞̣̂𝐭.\n» 𝐒𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐯𝐮𝐢 𝐯𝐞̉", idBox, (error, info) => {
      if (error) return api.sendMessage("Đ𝐚̃ 𝐜𝐨́ 𝐥𝐨̂̃𝐢 𝐱𝐚̉𝐲 𝐫𝐚, đ𝐚̉𝐦 𝐛𝐚̉𝐨 𝐫𝐚̆̀𝐧𝐠 𝐢𝐝 𝐛𝐚̣𝐧 𝐧𝐡𝐚̣̂𝐩 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂ 𝐯𝐚̀ 𝐛𝐨𝐭 đ𝐚𝐧𝐠 𝐨̛̉ 𝐭𝐫𝐨𝐧𝐠 𝐛𝐨𝐱!", threadID, messageID);
      else {
        data.push(idBox);
        pending.splice(pending.indexOf(idBox), 1);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
        api.sendMessage(`» 𝐏𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐛𝐨𝐱: ${idBox}`, threadID, messageID);
      }
    });
}