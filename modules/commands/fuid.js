module.exports.config = {
	name: "fuid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "lแบฅy user id Facebook qua link profile",
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
  for (const item of returnUids) msg +=`๐๐๐: ${item.vanity}\n๐๐๐: ${item.uid}`;
  if (error.length) {
    msg += `๐๐ก๐จฬ๐ง๐  ๐ญ๐ก๐ฬฬ ๐ฅ๐ฬฬ๐ฒ ๐ข๐ ๐๐ฎฬ๐ ${error.length} ๐ฎ๐ฌ๐๐ซ:`;
    for (const item of error) msg +=`\n- ${item.vanity}: ${item.error.message}`;
  }
  api.sendMessage(msg, event.threadID, event.messageID);
};