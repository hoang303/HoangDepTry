module.exports.config = {
    name: "datauser",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "MintDaL",
    description: "Set dữ liệu mới của các user vào data",
    commandCategory: "admin",
    hide: true,
    usages: "",
    cooldowns: 5,
};


module.exports.run = async function ({ Users, event, args, api, Threads }) { 
    const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var inbox = await api.getThreadList(1000, null, ['INBOX']);
    let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
    for (var groupInfo of list) {
        var { participantIDs } = await Threads.getInfo(groupInfo.threadID) || await api.getThreadInfo(groupInfo.threadID);
        for (var id of participantIDs) {
            let data = await api.getUserInfo(id);
            data.name
            let userName = data[id].name
            await Users.setData(id, { name: userName, data: {} });
            console.log(`Update UID: ${id}`)
        }
    }
    console.log(`Successfully updated all user data!`)
    return api.sendMessage(`Done!`, threadID)
}