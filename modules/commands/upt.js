module.exports.config = {
	name: "uptv3",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Xem thông tin thời gian sử dụng bot",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"systeminformation": "",
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)}${units[l]}`;
}

module.exports.run = async function ({ api, event }) {
	const { time, cpu } = global.nodemodule["systeminformation"];
	const timeStart = Date.now();
  
	try {
    const pidusage = await global.nodemodule["pidusage"](process.pid);
		var { uptime } = await time();
		var hours = Math.floor(uptime / (60 * 60));
		var minutes = Math.floor((uptime % (60 * 60)) / 60);
		var seconds = Math.floor(uptime % 60);
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
    
    var upt = {
       body: "" + hours + ":" + minutes + ":" + seconds
    }
    return api.sendMessage(upt,event.threadID, event.messageID)
	}
	catch (e) {
		console.log(e)
	}
}
