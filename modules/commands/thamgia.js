const chalk = require('chalk');
module.exports.config = {
    name: "thamgia",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "Henry",
    description: "Tham gia vÃ o cÃ¡c box Bot Äang á»",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 5
};
 module.exports.onLoad = () => {
  console.log(chalk.bold.hex("#00c300").bold("============ SUCCESFULLY LOADED THE JOIN COMMAND ============"));
  }
module.exports.handleReply = async function({ api, event, handleReply, Threads }) {
  var { threadID, messageID, senderID, body } = event;
              if (event.senderID != 100080431916488) return api.sendMessage(`ðð®ð²ðÌÌð§ ð¥ð¨ÌÌð§ ðð¢ðÌð§ ð ð¢ð¨ÌÌð¢ ð`, event.threadID, event.messageID)
  var { ID } = handleReply;
  console.log(ID)
  if (!body || !parseInt(body)) return api.sendMessage('Lá»±a chá»n cá»§a báº¡n pháº£i lÃ  má»t sá».', threadID, messageID);
  if ((parseInt(body) - 1) > ID.length) return api.sendMessage("Lá»±a chá»n cá»§a báº¡n khÃ´ng náº±m trong danh sÃ¡ch", threadID, messageID);
  try {
    var threadInfo = await Threads.getInfo(ID[body - 1]);
    var { participantIDs, approvalMode, adminIDs } = threadInfo;
    if (participantIDs.includes(senderID)) return api.sendMessage(`Báº¡n ÄÃ£ cÃ³ máº·t trong nhÃ³m nÃ y rá»i.`, threadID, messageID);
    api.addUserToGroup(senderID, ID[body - 1]);
    if (approvalMode == true && !adminIDs.some(item => item.id) == api.getCurrentUserID()) return api.sendMessage("ÄÃ£ thÃªm báº¡n vÃ o danh sÃ¡ch phÃª duyá»t cá»§a nhÃ³m... tá»± custom Äi", threadID, messageID);
    else return api.sendMessage(`ðð¨ÌÌ£ ð¯ð®ÌÌð ð­ð¡ðÌð¦ ðð§ð¡ ð¯ðÌð¨ ð§ð¡ð¨Ìð¦ ${threadInfo.threadName} ð«ð¨ÌÌð¢ ð§ð¡ð. ðð¢ðÌÌð¦ ð­ð«ð ð¨ÌÌ ð¦ð®Ì£ð ð­ð¢ð§ ð§ð¡ðÌÌð§ ðð¡ð¨ÌÌ ð¡ð¨ðÌ£Ìð ð¬ð©ðð¦ ð§ðÌÌð® ð¤ð¡ð¨Ìð§ð  ð­ð¡ðÌÌð² ðð¨ð± ð§ð¡ðÌ ð\nððÌð® ðð¡ð¨ÌÌð§ð ð  ð«ðÌÌð­ ð§ð¡ð¢ðÌÌð® ð`, threadID, messageID);
  } catch (error) {
    return api.sendMessage(`Em bá» lá»i nÃªn khÃ´ng thÃªm anh vÃ o nhÃ³m ÄÃ³ ÄÆ°á»£c :<.\n\n${error}`, threadID, messageID);
  }
}

module.exports.run = async function({ api, event, Threads }) {
  var { threadID, messageID, senderID } = event;
  var msg = `ð°==[ ðððð ððÌðð ððð ]==ð°\n\n`, number = 0, ID = [];
  var allThreads = await Threads.getAll();
  for (var i of allThreads) {
    number++;
    msg += `${number}. ${i.threadInfo.threadName}\n`;
    ID.push(i.threadID)
  }
  msg += `\nð ððð©ð¥ð² ð­ð¢ð§ ð§ð¡ðÌÌð§ ð§ðÌð² ð¤ðÌð¦ ð¬ð¨ÌÌ ð­ð®Ìð¨Ìð§ð  ð®ÌÌð§ð  ð¯ð¨ÌÌð¢ ð§ð¡ð¨Ìð¦ ð¦ðÌ ððÌ£ð§ ð¦ð®ð¨ÌÌð§ ð¯ðÌð¨`
  return api.sendMessage(msg, threadID, (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      author: senderID,
     messageID: info.messageID,
      ID: ID      
    })
  }, messageID)
}