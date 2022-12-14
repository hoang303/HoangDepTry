module.exports.config = {
	name: 'checkban',
	eventType: ['log:subscribe'],
	version: '1.0.0',
	credits: 'DuyVuong',
	description: 'Listen events',
	dependencies: ''
};

module.exports.run = async function({ api, event, client }) {
	if (event.logMessageType == 'log:subscribe') {
		const fs = require('fs-extra');
		let { threadID, messageID } = event;

		if (!fs.existsSync(__dirname + `/../commands/cache/databan.json`)) return;

		var databan = JSON.parse(
			fs.readFileSync(__dirname + `/../commands/cache/databan.json`)
		);

		var listban = databan.banned[threadID];

		const allUserThread = (await api.getThreadInfo(event.threadID))
			.participantIDs;
		for (let info of allUserThread) {
			if (listban.includes(parseInt(info))) {
				api.removeUserFromGroup(parseInt(info), threadID, e => {
					if (e) return api.sendMessage(e, threadID);
					api.sendMessage(
						`@${global.data.userName.get(info)} 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚 𝐧𝐡𝐨́𝐦 𝐯𝐢̀ đ𝐚̃ 𝐛𝐢̣ 𝐜𝐚̂́𝐦 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦`,
						threadID
					);
				});
			}
		}
	}
};