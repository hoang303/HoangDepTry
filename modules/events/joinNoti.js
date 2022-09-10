module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "HĐGN",//Update by ThanhAli
	description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`『❝ ${global.config.PREFIX} ❞』 ➠ ${(!global.config.BOTNAME) ? "𝒍𝒖𝒄𝒊𝒇𝒆𝒓   " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`[👑]𝑳𝒖𝒄𝒊𝒇𝒆𝒓 𝒕𝒆𝒂𝒎 𝒘𝒐𝒓𝒌𝒊𝒏𝒈 [👑] \n[🌸] 𝐊𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n[🌸] 𝐏𝐫𝐞𝐟𝐢𝐱: / \n[🌸] 𝐀𝐝𝐦𝐢𝐧: fb.me/User.Lucifer.s. \n 𝐁𝐚̣𝐧 đ𝐚𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐜𝐮̉𝐚 𝐥𝐮𝐜𝐢𝐟𝐞𝐫 𝐭𝐞𝐚𝐦 𝐰𝐨𝐫𝐤𝐢𝐧𝐠 
𝐂𝐡𝐮́𝐜 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐯𝐮𝐢 𝐯𝐞̉ `, attachment: fs.createReadStream(__dirname + "/cache/joinGif/1.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `1.mp4`);

			var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
        console.log(userName)
			}
			memLength.sort((a, b) => a - b);		
		(typeof threadData.customJoin == "undefined") ? msg = "\n━━━━━━━━━━━━\n[👑] 𝐖𝐄𝐂𝐎𝐌𝐄 {name} 𝐭𝐨̛́𝐢 𝐯𝐨̛́𝐢 𝐧𝐡𝐨́𝐦 {threadName}\n [⚔️]𝐔𝐑𝐋 𝐏𝐫𝐨𝐟𝐢𝐥𝐞:\nfb.com/{iduser}\n [⚔️]{type} 𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐡𝐮̛́ {soThanhVien} 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦\n [⚔️]Đ𝐮̛𝐨̛̣𝐜 𝐭𝐡𝐞̂𝐦 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 𝐛𝐨̛̉𝐢: {author}\n [⚔️]𝐇𝐚̃𝐲 𝐜𝐡𝐚̆𝐦 𝐜𝐡𝐢̉ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 đ𝐞̂̉ 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢̣ 𝐤𝐢𝐜𝐤 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐡𝐞́ 😋\n━━━━━━━━━━━━\n[ {time} ]": msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
			msg = msg
      .replace(/\{iduser}/g, iduser.join(', '))
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'Bạn' : 'BẠn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
      .replace(/\{author}/g, nameAuthor)
      .replace(/\{time}/g, time);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}