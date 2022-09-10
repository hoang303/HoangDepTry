module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ManhG",
  description: "Xem prefix của BOT",
  commandCategory: "Nhóm",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "ManhG") { return api.sendMessage(`Sai credits!`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
		const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`🥪 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗹𝗮̀: ${prefix}`)
      }
      else return out(' ' + data.PREFIX)
    }

  });
};module.exports.config = {
  name: "prefix",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "Prefix",
    cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
  if (!event.body) return;
  var { threadID, messageID } = event;
  if (event.body.toLowerCase().indexOf("prefix") == 0) {
    //getPrefix
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    const admins = global.config.ADMINBOT;
    var msg = {
      body: `🍰 𝗣𝗿𝗲𝗳𝗶𝘅 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗹𝗮̀: ${prefix}\n\n[===> 𝐃𝐀𝐍𝐇 𝐒𝐀́𝐂𝐇 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 <===]`,
    }
    for (let i of admins) {
      let count = admins.indexOf(i) + 1;
      let name = await Users.getNameUser(i) || "Admin";
      msg.body += `\n\n💎 ${count + "/ " +name} \nfacebook.com/${i}\n`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
};
module.exports.run = () => {};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("error", event.threadID)
    }