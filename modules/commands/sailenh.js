module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "ManhG",
	description: "baΜi thΖ‘",
	commandCategory: "Horoscope",
	usages: "thathinh",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const res = await axios.get(`https://manhkhac.github.io/data/json/cadaovn.json`);
    var dataCadao = res.data.data;
	const values = Object.values(dataCadao)
	const rdCadao = values[Math.floor(Math.random() * values.length)]

    axios.get('https://api.vinhbeat.ga/gai.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `Δπ¨ΜΜ π§π π¨ΜΜπ !! πππ’ π₯πΜ£Μπ§π‘ π«π¨ΜΜπ’ π§πΜ <π
πΈβββπΊπ³ππππππ'ππΊβββπΈ
β€Nguyα»n TrΖ°α»ng Giang β€ βΎ${rdCadao}β½`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}