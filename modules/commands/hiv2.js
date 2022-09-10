module.exports.config = {
  name: "hiv2",
  version: "1.0.0",
  hasPermssion: 0,
  credit: "Sam",
  description: "hi gửi sticker",
  commandCategory: "không cần dấu lệnh",
  usages: "[text]",
  cooldowns: 0
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "hello",
    "hello mng",
    "hi",
    "hai",
    "chào",
    "hí",
    "híí",
    "hì",
    "hìì",
    "lô",
    "hii",
    "helo",
    "hê nhô"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      ""
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    let data2 = [
      "Dùng phẫn để gỡ tin nhắn bot gửi cho nhanh",
      "Gõ lệnh /callad để báo về cho admin bot Bảo An xinh gái",
      "Dùng lệnh /ad để xem thông tin về admin xinh gái của chúng ta",
      "Dùng /work , /daily để nhận tiền chơi các game trong bot",
      "Game được ưa chuộng nhất trong bot là tài xỉu và kéo búa bao",
      "Các chức nắng tìm người yêu được sử dụng nhất là /rela , /ghép , /gheplove ,....",
      "ADMIN yêu và cảm ơn mọi người đã tin dùng dịch vụ của BẢO AN ADMINBOT"
    ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "sáng tinh mơ" : 
    hours > 401 && hours <= 700 ? "sáng sớm" :
    hours > 701 && hours <= 1000 ? "sáng" :
    hours > 1001 && hours <= 1200 ? "trưa" : 
    hours > 1201 && hours <= 1700 ? "chiều" : 
    hours > 1701 && hours <= 1800 ? "chiều tà" : 
    hours > 1801 && hours <= 2100 ? "tối" : 
    hours > 2101 && hours <= 2400 ? "tối muộn" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `Chào ${name}, Bạn có biết :" ${text} ""`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
      }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}