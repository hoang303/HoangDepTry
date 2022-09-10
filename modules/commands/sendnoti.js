const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "TruongMini",
    description: "",
    commandCategory: "Group",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];
const moment = require('moment-timezone');
 const gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s"); 
const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const { threadID, messageID, senderID, body } = event;

    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `=== [ sᴇɴᴅɴᴏᴛɪ ]  ===\n--------------------\nᴛɪᴍᴇ: ${gio}\n--------------------\n𝙏𝙪̛̀: ${name}\n--------------------\n𝘽𝙊𝙓: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂:${body}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `=== [ sᴇɴᴅɴᴏᴛɪ ]  ===\n--------------------\nᴛɪᴍᴇ: ${gio}\n--------------------\n𝙏𝙪̛̀: ${name}\n--------------------\n𝘽𝙊𝙓: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂:${body}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `=== sᴇɴᴅɴᴏᴛɪ ===\n--------------------\nᴛɪᴍᴇ: ${gio}\n--------------------\n𝙁𝙧𝙤𝙢 ${name} 𝙒𝙞𝙩𝙝 𝙇𝙤𝙫𝙚!\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂: ${body}\n--------------------\n𝙧𝙚𝙥𝙡𝙮 𝙩𝙞𝙣 𝙣𝙝𝙖̆́𝙣 𝙣𝙖̀𝙮 𝙙𝙚̂̉ 𝙗𝙖́𝙤 𝙫𝙚̂̀ 𝙖𝙙𝙢𝙞𝙣`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `=== ᴛʜᴏ̂ɴɢ ʙᴀ́ᴏ ===\n--------------------\nᴛɪᴍᴇ: ${gio}\n--------------------\n ${body}\n--------------------\n𝙁𝙧𝙤𝙢 ${name} 𝙒𝙞𝙩𝙝 𝙇𝙤𝙫𝙚!\n--------------------\n𝙧𝙚𝙥𝙡𝙮 𝙩𝙞𝙣 𝙣𝙝𝙖̆́𝙣 𝙣𝙖̀𝙮 𝙙𝙚̂̉ 𝙗𝙖́𝙤 𝙫𝙚̂̀ 𝙖𝙙𝙢𝙞𝙣`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `=== 𝓣𝓱ô𝓷𝓰 𝓑á𝓸 ===\n--------------------\n𝓣𝓲𝓶𝓮 : ${gio}\n--------------------\n『𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐭𝐮̛̀ 𝐋𝐮𝐜𝐢𝐟𝐞𝐫 𝐭𝐞𝐚𝐦 𝐰𝐨𝐫𝐤𝐢𝐧𝐠  𝓷𝓖𝓲😘😘』: ${args.join(" ")}\n--------------------\n『 𝐓𝐮̛̀ 𝐚𝐝𝐦𝐢𝐧』:${await Users.getNameUser(senderID)} \n--------------------\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐛𝐚́𝐨 𝐦𝐨̣̂𝐧𝐠 𝐜𝐡𝐨 𝐭𝐡𝐚̆̀𝐧𝐠 𝐚𝐝𝐦𝐢𝐧🥰🥰🥰 \n ❤__________𝑳𝒖𝒄𝒊𝒇𝒆𝒓'𝒔__________❤` ;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `=== sᴇɴᴅɴᴏᴛɪ ===\n--------------------\nᴛɪᴍᴇ: ${gio}\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂: ${args.join(" ")}\n\n𝙏𝙪̛̀ ${await Users.getNameUser(senderID)}\n--------------------\𝓡𝓮𝓹𝓵𝔂 𝓣𝓲𝓷 𝓝𝓱ắ𝓷 𝓝à𝔂 Để 𝓑á𝓸 𝓜ộ𝓷𝓰 𝓥ề 𝓒𝓱𝓸 𝓣𝓱ằ𝓷𝓰 𝓐𝓭𝓶𝓲𝓷`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`[ 𝗧𝗛𝗔́𝗡𝗛 𝗖𝗛𝗜̉ ] → Gửi thánh chỉ thành công ${can} nhóm, không thành công ${canNot} nhóm`, threadID);
}