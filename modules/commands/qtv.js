module.exports.config = {
    name: "qtv",
    version: "1.0",
    hasPermssion: 1,
    credits: "D-Jukie fix Kadeer",
    description: "Quแบฃn lรฝ admin bot",
    commandCategory: "Admin",
    usages: "qtvonly",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args }) {
const { threadID, messageID, mentions } = event;

        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("ยป ๐๐ฬฬ๐ญ ๐ญ๐ก๐ฬ๐ง๐ก ๐๐จฬ๐ง๐  ๐๐ก๐ฬฬ ฤ๐จฬฃฬ ๐ช๐ฎ๐ฬ๐ง ๐ญ๐ซ๐ขฬฃ ๐ฏ๐ข๐ฬ๐ง (๐ฆ๐จฬฃ๐ข ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ฤ๐ฬฬ๐ฎ ๐๐จฬ ๐ญ๐ก๐ฬฬ ๐ฌ๐ฎฬฬ ๐๐ฎฬฃ๐ง๐  ๐๐จ๐ญ)", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("ยป ๐๐ฬฃฬ๐ญ ๐๐ก๐ฬฬ ฤ๐จฬฃฬ ๐๐ก๐ขฬ ๐ช๐ฎ๐ฬ๐ง ๐ญ๐ซ๐ขฬฃ ๐ฏ๐ข๐ฬ๐ง ๐ญ๐ก๐ฬ๐ง๐ก ๐๐จฬ๐ง๐  (๐๐ก๐ขฬ ๐๐จฬ ๐๐๐ฆ๐ข๐ง ๐๐จ๐ญ ๐ฏ๐ฬ ๐ช๐ฎ๐ฬ๐ง ๐ญ๐ซ๐ขฬฃ ๐ฏ๐ข๐ฬ๐ง ๐ ๐ซ๐จ๐ฎ๐ฉ ๐ฆ๐จฬฬ๐ข ๐๐จฬ ๐ญ๐ก๐ฬฬ ๐ฌ๐ฎฬฬ ๐๐ฎฬฃ๐ง๐  ๐๐จ๐ญ)", threadID, messageID);
        }
}