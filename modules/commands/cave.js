const fs = require("fs");
module.exports.config = {
    name: "cave",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Trankhuong dz",
    description: "LΓ m cave random quα»c gia",
    commandCategory: "KiαΊΏm money",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 60
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cave.jpg")) request("https://i.imgur.com/bSFfTQR.jpg").pipe(fs.createWriteStream(dirMaterial + "cave.jpg"));
}
module.exports.handleReply = async ({
    event:e,
    api,
    handleReply,
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID)
return api.sendMessage("β‘π¨π πππΜ£π ππΜπ ππππ πππΜ πππΜπΜΜπ ΔπΜ ππΜΜ£ πΜΜπ ππΜπ πππ!", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 100) + 90;
var b = Math.floor(Math.random() * 100) + 80;
var c = Math.floor(Math.random() * 100) + 70;
var x = Math.floor(Math.random() * 100) + 60;
var y = Math.floor(Math.random() * 100) + 50;
var f = Math.floor(Math.random() * 100) + 40;

  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("") - Date.parse(new Date()),
            m = Math.floor( (t/00/60) % 60 ),
            h = Math.floor( (t/(00*60*60)) % 24 ),
            d = Math.floor( t/(00*60*60*24) );
          
            switch(e.body) {
                case "1": msg = `π»π³ π©πΜ£π ππΜΜπ ππΜπ ππππ πΜΜ π½ππΜ£Μπ π΅ππ ππΜ ΔπΜπΜΜ£π πππ ΔπΜ£π ππππ πππΜ ${a}.π½π΅π«`;
                await Currencies.increaseMoney(e.senderID, parseInt(a));
                break;            
                case "2": msg = `π¨π³ π©πΜ£π ππΜΜπ ππΜπ ππππ πΜΜ ππΜπΜΜπ π»ππππ πΈππΜΜπ ππΜ ΔπΜπΜΜ£π ππΜΜπ ππ πππΜ£π ππΜπΜΜπ πππΜ ${b}.π»πΜ£Μ`;
                await Currencies.increaseMoney(e.senderID, parseInt(b));
                break;
                case "3": msg = `π―π΅ π©πΜ£π ππΜΜπ ππΜπ ππππ πΜΜ ππΜπΜΜπ π΅ππΜ£Μπ ππΜ ΔπΜπΜΜ£π ππΜΜπ ππΜ ππΜπ ππΜΜπ ππΜΜπ πππΜ ${c}.ππΜπ`;
                await Currencies.increaseMoney(e.senderID, parseInt(c));
                break;
                case "4": msg = `πΉπ­ π©πΜ£π ππΜΜπ ππΜπ ππππ πΜΜ ππΜπΜΜπ π»ππΜπ π³ππ ππΜ ΔπΜπΜΜ£π ππΜΜπ πππ ππΜΔπΜ πππΜ ${x}.π©πΜ£π`;
                await Currencies.increaseMoney(e.senderID, parseInt(x));
                break;
                case "5": msg = `πΊπΈ π©πΜ£π ππΜΜπ ππΜπ ππππ πΜΜ ππΜπΜΜπ π΄πΜ ππΜ ΔπΜπΜΜ£π ππΜΜπ πππ πππ ππ ππ Δππ πππΜ ${y}.ΔπΜ`;
                await Currencies.increaseMoney(e.senderID, parseInt(y));
                break;
                case "6": msg = `π°π­ π©πΜ£π ππΜΜπ ππΜπ ππππ πΜΜ ππΜπΜΜπ πͺππππππππ ππΜ ΔπΜπΜΜ£π ππΜΜπ πΜππ ππΜ£Μπ πππΜ ${f}.πΉπππ`;
                await Currencies.increaseMoney(e.senderID, parseInt(f));
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body))
            return api.sendMessage("β‘π©πΜ£π πππΜΜπ ππΜπ ππππ πΜΜ πππΜΜπ πππ ππΜπ πππΜ πππΜ£π ππππ ππΜΜ πΜΜ πππΜΜπ πππ ΔπΜ!", e.threadID, e.messageID);
            if (choose > 6 || choose < 1)
            return api.sendMessage("β‘πΈππΜΜπ πππ ππΜ ππΜ£π πππΜ£π πππΜ£Μπ ππΜ£π πππΜππ ππΜ πππππ ππππ ππΜππ ππππ!", e.threadID, e.messageID);
            api.unsendMessage(handleReply.messageID);
            if (msg == "...") {
                msg = "...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
           
        });

    };
}
}


module.exports.run = async ({ 
    event:e,
    api,
    handleReply,
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("") - Date.parse(new Date()),
    d = Math.floor( t/(10*60*00) ),
    h = Math.floor( (t/(10*60*00)) % 00 ),
    m = Math.floor( (t/10/60) % 00 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (10* 60 ))/00),
            minutes = Math.floor(time / 10),
            seconds = ((time % 30) / 00).toFixed(0);
        return api.sendMessage(`β‘π©πΜ£π ππΜΜπ ππΜπ ππππ ππππ ππππΜ πππΜπ ππΜπΜΜππ ππΜΜπ Δπ!`, e.threadID, e.messageID);
    }
    else {   
        var msg = {
            body: "========== πͺππ½π =========="+`\n`+
                "\n1 β» π»π³ π½ππΜ£Μπ π΅ππ" +
                "\n2 β» π¨π³ π»ππππ πΈππΜΜπ" +
                "\n3 β» π―π΅ π΅ππΜ£Μπ π©πΜπ" +
                "\n4 β» πΉπ­ π»ππΜπ π³ππ" +
                "\n5 β» πΊπΈ π΄πΜ" +
                "\n6 β» π°π­ πͺππππππππ" +
                `\n\nππΉππππ πππ πππΜΜπ ππΜπ ππππ ππΜΜ ΔπΜΜ πππΜ£π πππΜΜπ πππ ππΜπ ππππ!`,
                attachment: fs.createReadStream(__dirname + `/cache/cave.jpg`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          }) 
        })
    }
} 