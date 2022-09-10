module.exports.config = {
  name: "timev3",
  version: "1.2",
  hasPermssion: 0,
  credits: "TrúcCute",// chính chủ xin đừng hiểu nhầm thay credits
  description: "xem giờ",
  commandCategory: "Bổ não",
  usages: "[Trống]",
  cooldowns: 5,
  dependencies: {
    "moment-timezone": "",
    "axios": ""
  }
}

module.exports.run = async ({ api, event, Users }) => {
  const axios = require('axios');
  const res = await axios.get('https://apicadaovn.miraiofficials123.repl.co');
  const data = res.data.data;
  const data2 = res.data.url;
  let cc = (await axios.get(data2, {
			responseType: "stream"
		})).data;
  const qq = await axios.get('https://apithinh.miraiofficials123.repl.co');
  const data1 = qq.data.data;
  const moment = require('moment-timezone');
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
  var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
  var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
  var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐧𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝟐'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝟑'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝟒'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝟓'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝟔'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝟕'
  var tile = Math.floor(Math.random() * 101);
  var msg = [
    "𝐚𝐝𝐦𝐢𝐧 𝐫𝐚̂́𝐭 đ𝐞̣𝐩 𝐭𝐫𝐚𝐢",
    "đ𝐞́𝐨 𝐛𝐢𝐞̂́𝐭 𝐚𝐝𝐦𝐢𝐧 𝐬𝐢𝐧𝐡 𝐧𝐠𝐚̀𝐲 𝐛𝐚𝐨 𝐧𝐡𝐢𝐞̂𝐮 𝐭𝐡𝐢̀ đ𝐢 𝐜𝐡𝐞̂́𝐭 đ𝐢",
    "𝐚𝐝𝐦𝐢𝐧 đ𝐚𝐧𝐠 𝐤𝐢𝐞̂́𝐦 𝐛𝐨̂̀",
    "𝐊𝐞̣𝐨 𝐬𝐮̛̃𝐚 𝐦𝐢𝐤𝐢𝐭𝐚 đ𝐮̛𝐨̛̣𝐜 𝐥𝐚̀𝐦 𝐭𝐮̛̀ 𝐬𝐮̛̃𝐚",
    "𝐜𝐨𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐢𝐞̂́𝐮 𝐨𝐱𝐢 𝐬𝐞̃ 𝐜𝐡𝐞̂́𝐭",
    "𝐚𝐝𝐦𝐢𝐧 𝐫𝐚̂́𝐭 𝐲𝐞̂𝐮 𝐜𝐫𝐮𝐬𝐡",
    "𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐬𝐞̃ 𝐛𝐢̣ 𝐛𝐚𝐧",
    "𝐚𝐝𝐦𝐢𝐧 𝐥𝐚̀ 𝐭𝐫𝐚𝐢",
    "𝐚𝐝𝐦𝐢𝐧 𝐥𝐚̀ 𝐧𝐚𝐦",
    "𝐨𝐱𝐢 𝐥𝐚̀ 𝐜𝐡𝐚̂́𝐭 𝐠𝐚̂𝐲 𝐧𝐠𝐡𝐢𝐞̣̂𝐧",
    "𝐚𝐝𝐦𝐢𝐧 𝐭𝐡𝐢́𝐜𝐡 𝐜𝐡𝐨̛𝐢 𝐠𝐚𝐲 :Đ",
    "𝐚𝐝𝐦𝐢𝐧 𝐥𝐚̀ 𝐭𝐫𝐚𝐢 𝐭𝐡𝐚̆̉𝐧𝐠",
    "𝐭𝐚𝐠 𝐚𝐝𝐦𝐢𝐧 𝐛𝐚̆̀𝐧𝐠 𝐛𝐚𝐧",
    "𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐤𝐡𝐚́𝐜 𝐠𝐢̀ 𝐭𝐡𝐢𝐞̂̉𝐮 𝐧𝐚̆𝐧𝐠 𝐯𝐢̀ 𝐫𝐚̉𝐧𝐡 𝐡𝐚́𝐧𝐠 𝐜𝐡𝐮̛̉𝐢 𝟏 𝐭𝐡𝐮̛́ 𝐯𝐨̂ 𝐭𝐫𝐢",
    "𝐛𝐚̣𝐧 𝐬𝐞̃ 𝐧𝐨̂̉𝐢 𝐭𝐢𝐞̂́𝐧𝐠 𝐧𝐞̂́𝐮 𝐭𝐡𝐚𝐲 𝐜𝐫𝐞𝐝𝐢𝐭𝐬",
    "𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐓𝐫𝐮𝐧𝐠 𝐐𝐮𝐨̂́𝐜 𝐥𝐚̀ 𝐂𝐡𝐢𝐧𝐚",
    "𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐕𝐢𝐞̣̂𝐭 𝐍𝐚𝐦 𝐧𝐨́𝐢 𝐭𝐢𝐞̂́𝐧𝐠 𝐕𝐢𝐞̣̂𝐭",
    "𝐛𝐮𝐨̂̀𝐧 𝐧𝐠𝐮̉ 𝐛𝐚̣𝐧 𝐬𝐞̃ 𝐧𝐠𝐮̉",
    "𝐦𝐮𝐨̂́𝐢 𝐫𝐚̂́𝐭 𝐦𝐚̣̆𝐧",
    "đ𝐮̛𝐨̛̀𝐧𝐠 𝐫𝐚̂́𝐭 𝐧𝐠𝐨̣𝐭",
    "𝐜𝐨𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐢𝐞̂́𝐭 𝐧𝐨́𝐢",
    "𝐜𝐡𝐮́𝐧𝐠 𝐭𝐚 đ𝐚𝐧𝐠 𝐬𝐨̂́𝐧𝐠 𝐨̛̉ 𝐭𝐫𝐚́𝐢 đ𝐚̂́𝐭"
  ]
  let name = await Users.getNameUser(event.senderID)
  return api.sendMessage({body:
    `𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨 ` + name +
    `\n👾────────────👾` +
    `\n𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀ ` + thu +
    `\n𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀ ` + gio + 
    ` 𝐠𝐢𝐨̛̀ ` + phut + 
    ` 𝐩𝐡𝐮́𝐭 ` + giay + 
    ` 𝐠𝐢𝐚̂𝐲` +
    `\n𝐍𝐠𝐚̀𝐲  ` + ngay +
    ` 𝐍𝐠𝐚̀𝐲 ` + thang +
    ` 𝐧𝐚̆𝐦 ` + nam +
    `\n𝐓𝐢̉ 𝐥𝐞̣̂ 𝐜𝐨́ 𝐧𝐲 𝐭𝐫𝐨𝐧𝐠 𝐧𝐚̆𝐦 𝐧𝐚𝐲 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀: ` + tile + 
    `%` +
    `\n[⚡𝐁𝐚̣𝐧 𝐜𝐨́ 𝐛𝐢𝐞̂́𝐭⚡]: ` + msg[Math.floor(Math.random() * msg.length)] +
    `\n👾────────────👾` +
    `\n𝐓𝐡𝐢́𝐧𝐡: ` + data1 +
    `\n\n👾────────────👾` +
    `\n𝐂𝐚 𝐝𝐚𝐨: ` + data
                          , attachment: cc}, event.threadID, event.messageID)
}
