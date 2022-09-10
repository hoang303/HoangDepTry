module.exports.config = {
	name: "reset",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Khởi động lại Bot",
	commandCategory: "Admin",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`⚙️Đang Khởi Động Lại Bot...`, threadID, () => process.exit(1));
}