module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "HĐGN",//Mod by H.Thanh
	description: "Thông báo Bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝗧𝘂̛̣ 𝗥𝗼̛̀𝗶" : "𝗕𝗶̣ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗸𝗶𝗰𝗸";
	const path = join(__dirname, "cache", "leaveGif");
	const pathGif = join(path, `${threadID}.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "〘 𝒍𝒖𝒄𝒊𝒇𝒆𝒓`𝒔 〙➢ 𝗖𝗵𝗶𝗮 𝗯𝘂𝗼̂̀𝗻 𝘃𝗼̛́𝗶 {name} 𝗸𝗵𝗶 {type} 𝗸𝗵𝗼̉𝗶 𝗻𝗵𝗼́𝗺\n〘 𝒍𝒖𝒄𝒊𝒇𝒆𝒓`𝒔 〙➢ 𝗛𝗲̣𝗻 𝗴𝗮̣̆𝗽 𝗹𝗮̣𝗶 𝘃𝗮̀ 𝗰𝗮̉𝗺 𝗼̛𝗻 {name} đ𝗮̃ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝘁𝗿𝗼𝗻𝗴 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗾𝘂𝗮\n〘𝒍𝒖𝒄𝒊𝒇𝒆𝒓`𝒔〙➢ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰 : {session} {time}" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝑠𝑎́𝑛𝑔" : 
    hours > 10 && hours <= 12 ? "𝑡𝑟𝑢̛𝑎" :
    hours > 12 && hours <= 18 ? "𝑐ℎ𝑖𝑒̂̀𝑢" : "𝑡𝑜̂́𝑖").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}