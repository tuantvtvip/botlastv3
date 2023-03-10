const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "tb",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "TruongMini mod by Ryo",
    description: "",
    commandCategory: "Tiα»n Γ­ch",
    usages: "",
    cooldowns: 5,
}

let atmDir = [];

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
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `===γ π½πππππππππππ πππππ’ γ===\nβ’ ππππ: ${name}\nβ’ π±ππ‘: ${(await Threads.getInfo(threadID)).threadName || "Unknow"};\n==============\n\nγ π½πππ γ${body}\n\n==============\nγ ππππ γ${gio}\n====== γ π½πππ γ======\nπππ π½ππΜΜπ ππΜ πΏππΜπ π·πΜΜπ ππΜΜπ ππππ π½πΜΜπ π±πΜ£π πππππ’ !!`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `===γ π½πππππππππππ πππππ’ γ===\nβ’ ππππ: ${name}\nβ’ π±ππ‘: ${(await Threads.getInfo(threadID)).threadName || "Unknow"};\n==============\n\nγ π½πππ γ${body}\n\n==============\nγ ππππ γ${gio}\n====== γ π½πππ γ======\nπππ π½ππΜΜπ ππΜ πΏππΜπ π·πΜΜπ ππΜΜπ ππππ π½πΜΜπ π±πΜ£π πππππ’ !!`);
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
            let text = `===γ π°ππππ πππππ’ γ===\nγ π°ππππ γ${name}\n==============\n\nγ π½πππ γ${body}\n\n==============\nγ ππππ γ ${gio}\n====== γ π½πππ γ======\nπππ π½ππΜΜπ ππΜ πΏππΜπ π·πΜΜπ ππΜΜπ π°ππππ π½πΜΜπ π±πΜ£π πππππ’ !!`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}===γ π°ππππ πππππ’ γ===\nγ π°ππππ γ${name}\n==============\n\nγ π½πππ γ${body}\n\n==============\nγ ππππ γ ${gio}\n====== γ π½πππ γ======\nπππ π½ππΜΜπ ππΜ πΏππΜπ π·πΜΜπ ππΜΜπ π°ππππ π½πΜΜπ π±πΜ£π πππππ’ !!`);
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

module.exports.run = async ({ api, event, args, getText, Users }) => {
  const permission = ["100073862257362"," ","","","",""]; //nαΊΏu muα»n thΓͺm uid thΓ¬ thΓͺm ,"uid" sau mα»i hΓ ng
             if (!permission.includes(event.senderID))
             return api.sendMessage("πΌππ πΆπΜπ πΏπππ π²ππΜπ π³π£ππ", event.threadID, event.messageID); // get tn
  const name = await Users.getNameUser(event.senderID)
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `===γ π½πππππππππππ γ===\n=============\nγ π°ππππ γ ${await Users.getNameUser(senderID)}\n=============\n\nγ π½πππ γ${args.join(" ")}\n\n=============\nγ ππππ γ${gio}\n====== γ π½πππ γ======\nπππ π½ππΜΜπ ππΜ πΏππΜπ π·πΜΜπ ππΜΜπ π°ππππ π½πΜΜπ π±πΜ£π πππππ’ !!!`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `===γ π½πππππππππππ γ===\n=============\nγ π°ππππ γ ${await Users.getNameUser(senderID)}\n=============\n\nγ π½πππ γ${args.join(" ")}\n\n=============\nγ ππππ γ${gio}\n====== γ π½πππ γ======\nπππ π½ππΜΜπ ππΜ πΏππΜπ π·πΜΜπ ππΜΜπ π°ππππ π½πΜΜπ π±πΜ£π πππππ’ !!!`);
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
    api.sendMessage(`ππ¬πΎπ½π?π ππΜΜπ ππππ’πΜΜπ πππ ππΜΜπ π²ππ π°ππ π±ππ‘ \nγ ππΜππ πππΜ£ππ γβ’ πππΜΜ£π πππ π»πΜ£Μππ πππΜππ π²πΜππ πΈ`, threadID);
} 
// Kem Deptryy :3