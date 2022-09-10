module.exports.config = {
  name: "allmoney",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ProCoderCyrus",
  description: "Được ăn cả, ngã về không, còn thở là còn gỡ",
  commandCategory: "Game",
  usages: "",
  cooldowns: 5
};

function getLucky() {
    var Lucky = ['1234', '5678', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999']
    return Lucky[Math.floor(Math.random() * Lucky.length)];
}
function getLuckyNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports.handleReaction = async function({ api, event, Currencies, Users, handleReaction }) {
    var { threadID, messageID, userID } = event;
    if (userID != handleReaction.player || messageID != handleReaction.messageID) return;
    var luckyNumber = getLuckyNumber(1000, 9999);
    var lucky = getLucky();
    var name = (await Users.getData(handleReaction.player)).name;
    return api.sendMessage(`Đ𝐚𝐧𝐠 𝐜𝐡𝐮𝐚̂̉𝐧 𝐛𝐢̣ 𝐛𝐚̆́𝐭 đ𝐚̂̀𝐮 𝐭𝐫𝐨̀ 𝐜𝐡𝐨̛𝐢...`, threadID, () => {
        var userInfo = handleReaction.playerInfo;
        if (luckyNumber == lucky) {
            userInfo.money = userInfo.money * 10000;
            Currencies.setData(handleReaction.player, userInfo);
            api.sendMessage(`𝐒𝐨̂́ 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐥𝐚̀: ${lucky}\n𝐒𝐨̂́ 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀: ${luckyNumber}\n\n🎉𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠🎉 ${name} đ𝐚̃ 𝐭𝐡𝐚̆́𝐧𝐠 𝐭𝐫𝐨̀ 𝐜𝐡𝐨̛𝐢 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐧𝐡𝐚̣̂𝐧 đ𝐮̛𝐨̛̣𝐜 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐭𝐡𝐮̛𝐨̛̉𝐧𝐠 𝐠𝐚̂́𝐩 𝟏𝟎.𝟎𝟎𝟎 𝐥𝐚̂̀𝐧\n𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐡𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀: ${userInfo.money}`, threadID)
        } else {
            Currencies.setData(handleReaction.player, { money: 0 })
            api.sendMessage(`𝐒𝐨̂́ 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐥𝐚̀: ${lucky}\n𝐒𝐨̂́ 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀: ${luckyNumber}\n\n𝐓𝐢𝐞̂́𝐜 𝐪𝐮𝐚́ ${name}, 𝐛𝐚̣𝐧 𝐜𝐨̀𝐧 𝐦𝐨̂̃𝐢 𝐜𝐚́𝐢 𝐧𝐢̣𝐭 𝐭𝐡𝐨̂𝐢 :Đ`, threadID)
        }
    })
}

module.exports.run = async function({ api, event, Currencies }) {
    var { threadID, senderID, messageID } = event;
    var listThreadBanned = ['2392402354140014', '4115747231847743', '6130616870282577', '3402498063192680', '5930840416989874'];
    if (listThreadBanned.includes(threadID)) return api.sendMessage('𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐩𝐡𝐞́𝐩 𝐜𝐡𝐨̛𝐢 𝐌𝐢𝐧𝐢𝐆𝐚𝐦𝐞 𝐨̛̉ 𝐛𝐨𝐱 𝐜𝐡𝐢́𝐧𝐡.', threadID, messageID);
    var userInfo = await Currencies.getData(senderID);
    if (userInfo.money < 100000) return api.sendMessage("𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐝𝐮̛𝐨̛́𝐢 𝟏𝟎𝟎.𝟎𝟎𝟎 đ𝐞̂̉ 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐜𝐡𝐨̛𝐢 𝐚𝐥𝐥𝐦𝐨𝐧𝐞𝐲", threadID)
    return api.sendMessage(`𝐁𝐚̣𝐧 đ𝐚𝐧𝐠 𝐜𝐨́ ${userInfo.money}, 𝐛𝐚̣𝐧 𝐜𝐨́ 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐨̛𝐢 "𝐚𝐥𝐥𝐦𝐨𝐧𝐞𝐲" 𝐤𝐡𝐨̂𝐧𝐠?\n\n[🎟️𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ đ𝐨̂̀𝐧𝐠 𝐲́🎫]`, threadID, (error, info) => {
        global.client.handleReaction.push({
            name: this.config.name,
            messageID: info.messageID,
            player: senderID,
            playerInfo: userInfo
        })
    }, messageID)
}