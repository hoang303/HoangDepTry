module.exports.config = {
  name: "tarot",
  version: "1.0.2",
  hasPermssion: 0,
  creditss: "MintDaL",
  description: "Tarot",
  commandCategory: "nothing",
  usages: "",
  hide: true,
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const axios = global.nodemodule["axios"];
  const { threadID, messageID } = event;
  const fs = global.nodemodule["fs-extra"];
  const res = await axios.get(`https://tintaodi.glitch.me/other/tarot`);
  const { data } = await axios.get(res.data.data.image, { responseType: 'arraybuffer' });
  fs.writeFileSync(__dirname + '/cache/tarot.png', Buffer.from(data));
  return api.sendMessage({
    body: `=== 「 ${res.data.data.name} - ${res.data.data.suite} 」 ===` +
      `\n\n» Miêu tả: ${res.data.data.vi.description}` +
      `\n\n» Ý nghĩa: ${res.data.data.vi.interpretation}`+
      `\n» Đảo ngược: ${res.data.data.vi.reversed}`,
    attachment: fs.createReadStream(__dirname + '/cache/tarot.png')
  }, threadID, messageID)
}