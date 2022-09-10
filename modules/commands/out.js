module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Tài khoản",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const permission = ["100080431916488"];
  if (!permission.includes(event.senderID))
  return api.sendMessage("Xin cái tuổi để bố mày out?", event.threadID, event.messageID);
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage('Đ𝗮̃ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗲̣̂𝗻𝗵 𝗼𝘂𝘁 𝘁𝘂̛̀ 𝗰𝘂𝗻𝗴 𝗰𝗵𝘂̉☕', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}