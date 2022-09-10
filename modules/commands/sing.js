const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 48 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.config = {
    name: "sing",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ACERS ANGELERS",
    description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "Phương tiện",
    usages: "[searchMusic]",
    cooldowns: 0
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐠𝐮̛̉𝐢 𝐟𝐢𝐥𝐞 𝐯𝐢̀ 𝐝𝐮𝐧𝐠 𝐥𝐮̛𝐨̛̣𝐧𝐠 𝐥𝐨̛́𝐧 𝐡𝐨̛𝐧 𝟐𝟓𝐌𝐁', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
            body: `[🎼] ➠ 𝗧𝗜𝗧𝗟𝗘: ${data.title}\n[📺] ➠ 𝗖𝗛𝗔𝗡𝗡𝗘𝗟: ${data.author}\n[👀] ➠ 𝗩𝗜𝗘𝗪: ${data.viewCount}\n[👍] ➠ 𝗟𝗜𝗞𝗘: ${data.likes}\n[⏰] ➠ 𝗧𝗜𝗠𝗘: ${this.convertHMS(data.dur)}\n[⏳] ➠ 𝗣𝗥𝗢𝗖𝗘𝗦𝗦𝗜𝗡𝗚 𝗧𝗜𝗠𝗘: ${Math.floor((Date.now()- data.timestart)/1000)} giây\n💿===𝐀𝐂𝐄𝐑𝐒 𝐀𝐍𝐆𝐄𝐋𝐄𝐑𝐒===💿`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }
    catch (e) { return console.log(e) }
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.run = async function ({ api, event, args }) {
    if (args.length == 0 || !args) return api.sendMessage('» 𝐏𝐡𝐚̂̀𝐧 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 đ𝐞̂̉ 𝐭𝐫𝐨̂́𝐧𝐠!', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐠𝐮̛̉𝐢 𝐟𝐢𝐥𝐞 𝐯𝐢̀ 𝐝𝐮𝐧𝐠 𝐥𝐮̛𝐨̛̣𝐧𝐠 𝐥𝐨̛́𝐧 𝐡𝐨̛𝐧 𝟐𝟓𝐌𝐁', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `[🎼] ➠ 𝗧𝗜𝗧𝗟𝗘: ${data.title}\n[📺] ➠ 𝗖𝗛𝗔𝗡𝗡𝗘𝗟: ${data.author}\n[👀] ➠ 𝗩𝗜𝗘𝗪: ${data.viewCount}\n[👍] ➠ 𝗟𝗜𝗞𝗘: ${data.likes}\n[⏰] ➠ 𝗧𝗜𝗠𝗘: ${this.convertHMS(data.dur)}\n[⏳] ➠ 𝗣𝗥𝗢𝗖𝗘𝗦𝗦𝗜𝗡𝗚 𝗧𝗜𝗠𝗘: ${Math.floor((Date.now()- data.timestart)/1000)} giây\n💿===𝐀𝐂𝐄𝐑𝐒 𝐀𝐍𝐆𝐄𝐋𝐄𝐑𝐒===💿`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)
            
        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0
            const Youtube = require('youtube-search-api');
            var data = (await Youtube.GetListByKeyword(keywordSearch, false,6)).items;
            for (let value of data) {
              link.push(value.id);
              num = num+=1
              msg += (`${num} - ${value.title} (${value.length.simpleText})\n\n`);
            }
            var body = `»🔎 𝐂𝐨́ ${link.length} 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐭𝐫𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐭𝐮̛̀ 𝐤𝐡𝐨𝐚́ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧:\n\n${msg}» 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐜𝐡𝐨̣𝐧 𝐦𝐨̣̂𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐮̛̃𝐧𝐠 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐭𝐫𝐞̂𝐧`
            return api.sendMessage({
              body: body
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('Đ𝐚̃ 𝐱𝐚̉𝐲 𝐫𝐚 𝐥𝐨̂̃𝐢, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢 𝐭𝐫𝐨𝐧𝐠 𝐠𝐢𝐚̂𝐲 𝐥𝐚́𝐭!!\n' + e, event.threadID, event.messageID);
        }
    }
}