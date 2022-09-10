const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "gear2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LÊ ĐỊNH mod",
  description: "gear Người Bạn Muốn",
  commandCategory: "Tag",
  usages: "@tag",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
          "https://c.tenor.com/2vfA2krGkrEAAAAM/luffy-gear-second.gif",
             ];
   var callback = () => api.sendMessage({body: `𝙂𝙚𝙖𝙧 𝙨𝙚𝙘𝙤𝙣𝙙 ${tag} 💨` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/gear2.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gear2.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gear2.gif")).on("close",() => callback());
   };