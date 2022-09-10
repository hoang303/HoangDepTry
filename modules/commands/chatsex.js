module.exports.config = {
    name: "chatsex",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "datoccho",
    description: "a",
    commandCategory: "a",
    usages: "a",
    cooldowns: 5
};
module.exports.run = async ({ api, event, args, Currencies }) => {
    const { getData } = Currencies;
    const { threadID, messageID, senderID } = event;
    const data = (await Currencies.getData(senderID)).data || {};
    const money = (await getData(senderID)).money;
    const coin = Math.floor(Math.random() * 5000);
    var rdm = [`Bạn đã nhận được ${coin}$ từ việc bucu cho admin 🍑`, ` Bạn đã nhận được ${coin}$ từ việc vuốt trụ cho admin`, ` Bạn đã nhận được ${coin}$ từ việc chat sex với admin`];
    const text = rdm[Math.floor(Math.random() * rdm.length)]
    return api.sendMessage(`${text}`, threadID, async () => {
        await Currencies.increaseMoney(senderID, parseInt(coin));
        await Currencies.setData(event.senderID, { data });
        return;
    }, messageID);
      }