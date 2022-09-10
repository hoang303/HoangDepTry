module.exports.config = {
	name: "fuid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "lấy user id Facebook qua link profile",
	commandCategory: "info",
	cooldowns: 5
};

module.exports. run = async ({ event, args, api }) => {
  const fbtools = require("fb-tools");
  const returnUids = [];
  const error = [];
  const getUsername = fblink => {
  	try {
  		return /id=(.*?)$/.exec(fblink)[1];
  	}
  	catch(e) {
  		return /.com\/(.*?)$/.exec(fblink)[1];
  	}
  };
  
	for (const item of args) {
	  let uid;
		let vanity;

    try {
      vanity = getUsername(item);
      uid = await fbtools.findUid(item);
      returnUids.push({
        vanity,
        uid
      });
    }
    catch(err) {
      error.push({
        vanity,
        error: err
      });
    }
	}
  
  let msg = "";
  for (const item of returnUids) msg +=`𝐔𝐈𝐃: ${item.vanity}\n𝐔𝐈𝐃: ${item.uid}`;
  if (error.length) {
    msg += `𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐥𝐚̂́𝐲 𝐢𝐝 𝐜𝐮̉𝐚 ${error.length} 𝐮𝐬𝐞𝐫:`;
    for (const item of error) msg +=`\n- ${item.vanity}: ${item.error.message}`;
  }
  api.sendMessage(msg, event.threadID, event.messageID);
};