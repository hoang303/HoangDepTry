module.exports.config = {
	name: "rnamebot",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Đổi biệt danh của bot ở toàn bộ bot!",
	commandCategory: "system",
	usages: "[Biệt danh cần đặt]",
	cooldowns: 20,
};

module.exports.run = async ({ event, api, args, Threads }) => {
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]),
            idBot = api.getCurrentUserID();
    var threadError = [],
        count = 0;
   if (event.senderID != 100018689287953) return api.sendMessage(`𝐐𝐮𝐲𝐞̂̀𝐧 𝐥𝐨̂̀𝐧 𝐛𝐢𝐞̂𝐧 𝐠𝐢𝐨̛́𝐢 🎀`, event.threadID, event.messageID)
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.changeNickname(custom, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại" + threadError.lenght + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
    else {
        for (const idThread of allThread) {
            const threadSetting = global.client.threadData.get(idThread.threadID) || {};
            api.changeNickname(`[ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại " + threadError.length + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
}