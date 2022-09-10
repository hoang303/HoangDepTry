module.exports.config = {
  name: "databox",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "MewDevPro",
  description: "Cập nhật dữ liệu nhóm",
  commandCategory: "QTV-box",
  hide: true,
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, Threads }) {
  const { threadID, messageID } = event;
  const threadInfo = await api.getThreadInfo(threadID);
	await Threads.setData(threadID, { name: threadInfo.name, threadInfo });
	global.data.threadInfo.set(threadID, threadInfo);
  return api.sendMessage(`Xong`, threadID, messageID);
}