module.exports.config = {
    name: "ngu",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Lรช ฤแปnh",
    description: "",
    commandCategory: "๐๐จ ๐๐ซ๐๐๐ข๐ฑ",
    usages: "",
    cooldowns: 10,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ngแปง.gif")) request("https://imgur.com/SU2EX41.gif").pipe(fs.createWriteStream(dirMaterial + "ngแปง.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `[ ๐๐จ๐จ๐ ๐๐ข๐ ๐ก๐ญ ]\n๐ธ๐๐๐ข๐ข ๐๐๐ข๐ข๐ข  ${name} ๐ค๐ค\n๐ฑ๐๐ก๐ฎฬ๐ ๐๐๐ข ${name} ๐๐ ๐ฎฬ ๐๐ ๐จ๐ง๐`,
                attachment: fs.createReadStream(__dirname + `/noprefix/ngแปง.gif`)
            }
    if (event.body.toLowerCase() == "ฤi ngแปง ฤรขy"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngแปง thรดi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngแปง"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ฤi ngแปง nha"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngแปง ฤi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngแปง ngon"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dรนng sai cรกch rแปi lรชu lรชu",event.threadID)
    }