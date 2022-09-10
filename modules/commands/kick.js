module.exports.config = {
    name: "kick",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "D-Jukie",
    description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag hoặc reply",
    commandCategory: "Tiện ích",
    usages: "[tag/reply/all]",
    cooldowns: 0
};

module.exports.run = async function ({
    args,
    api,
    event,
    Threads
}) {
    var {
        participantIDs
    } = (await Threads.getData(event.threadID)).threadInfo;
    const botID = api.getCurrentUserID();
    try {
        if (args.join().indexOf('@') !== -1) {
            var mention = Object.keys(event.mentions);
            for (let o in mention) {
                setTimeout(() => {
                    return api.removeUserFromGroup(mention[o], event.threadID)
                }, 1000)
            }
        } else {
        if (event.type == "message_reply") {
                uid = event.messageReply.senderID
                return api.removeUserFromGroup(uid, event.threadID)
            } else {
                if (!args[0]) return api.sendMessage(`𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐚𝐠 𝐡𝐨𝐚̣̆𝐜 𝐫𝐞𝐩𝐥𝐲 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐚̂̀𝐧 𝐤𝐢𝐜𝐤`, event.threadID, event.messageID)
                else {
                    if (args[0] == "all") {
                        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
                        for (let idUser in listUserID) {
                            setTimeout(() => {
                                return api.removeUserFromGroup(idUser, event.threadID)
                            }, 1000)
                        }
                    }
                }
            }
        }
    } catch {
        return api.sendMessage('Đ𝐚̃ 𝐱𝐚̉𝐲 𝐫𝐚 𝐥𝐨̂̃𝐢', event.threadID, event.messageID);
    }
}