const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "tb",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "TruongMini mod by Ryo",
    description: "",
    commandCategory: "Tiện ích",
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
            let text = `===『 𝙽𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗 𝚁𝚎𝚙𝚕𝚢 』===\n• 𝚄𝚜𝚎𝚛: ${name}\n• 𝙱𝚘𝚡: ${(await Threads.getInfo(threadID)).threadName || "Unknow"};\n==============\n\n『 𝙽𝚘𝚝𝚎 』${body}\n\n==============\n『 𝚃𝚒𝚖𝚎 』${gio}\n====== 『 𝙽𝚘𝚝𝚎 』======\n𝚃𝚒𝚗 𝙽𝚑𝚊̆́𝚗 𝚂𝚎̃ 𝙿𝚑𝚊̉𝚗 𝙷𝚘̂̀𝚒 𝚃𝚘̛́𝚒 𝚄𝚜𝚎𝚛 𝙽𝚎̂́𝚞 𝙱𝚊̣𝚗 𝚁𝚎𝚙𝚕𝚢 !!`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `===『 𝙽𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗 𝚁𝚎𝚙𝚕𝚢 』===\n• 𝚄𝚜𝚎𝚛: ${name}\n• 𝙱𝚘𝚡: ${(await Threads.getInfo(threadID)).threadName || "Unknow"};\n==============\n\n『 𝙽𝚘𝚝𝚎 』${body}\n\n==============\n『 𝚃𝚒𝚖𝚎 』${gio}\n====== 『 𝙽𝚘𝚝𝚎 』======\n𝚃𝚒𝚗 𝙽𝚑𝚊̆́𝚗 𝚂𝚎̃ 𝙿𝚑𝚊̉𝚗 𝙷𝚘̂̀𝚒 𝚃𝚘̛́𝚒 𝚄𝚜𝚎𝚛 𝙽𝚎̂́𝚞 𝙱𝚊̣𝚗 𝚁𝚎𝚙𝚕𝚢 !!`);
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
            let text = `===『 𝙰𝚍𝚖𝚒𝚗 𝚁𝚎𝚙𝚕𝚢 』===\n『 𝙰𝚍𝚖𝚒𝚗 』${name}\n==============\n\n『 𝙽𝚘𝚝𝚎 』${body}\n\n==============\n『 𝚃𝚒𝚖𝚎 』 ${gio}\n====== 『 𝙽𝚘𝚝𝚎 』======\n𝚃𝚒𝚗 𝙽𝚑𝚊̆́𝚗 𝚂𝚎̃ 𝙿𝚑𝚊̉𝚗 𝙷𝚘̂̀𝚒 𝚃𝚘̛́𝚒 𝙰𝚍𝚖𝚒𝚗 𝙽𝚎̂́𝚞 𝙱𝚊̣𝚗 𝚁𝚎𝚙𝚕𝚢 !!`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}===『 𝙰𝚍𝚖𝚒𝚗 𝚁𝚎𝚙𝚕𝚢 』===\n『 𝙰𝚍𝚖𝚒𝚗 』${name}\n==============\n\n『 𝙽𝚘𝚝𝚎 』${body}\n\n==============\n『 𝚃𝚒𝚖𝚎 』 ${gio}\n====== 『 𝙽𝚘𝚝𝚎 』======\n𝚃𝚒𝚗 𝙽𝚑𝚊̆́𝚗 𝚂𝚎̃ 𝙿𝚑𝚊̉𝚗 𝙷𝚘̂̀𝚒 𝚃𝚘̛́𝚒 𝙰𝚍𝚖𝚒𝚗 𝙽𝚎̂́𝚞 𝙱𝚊̣𝚗 𝚁𝚎𝚙𝚕𝚢 !!`);
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
  const permission = ["100073862257362"," ","","","",""]; //nếu muốn thêm uid thì thêm ,"uid" sau mỗi hàng
             if (!permission.includes(event.senderID))
             return api.sendMessage("𝙼𝚞𝚊 𝙶𝚘́𝚒 𝙿𝚕𝚊𝚗 𝙲𝚑𝚞̛𝚊 𝙳𝚣𝚊𝚊", event.threadID, event.messageID); // get tn
  const name = await Users.getNameUser(event.senderID)
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `===『 𝙽𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗 』===\n=============\n『 𝙰𝚍𝚖𝚒𝚗 』 ${await Users.getNameUser(senderID)}\n=============\n\n『 𝙽𝚘𝚝𝚎 』${args.join(" ")}\n\n=============\n『 𝚃𝚒𝚖𝚎 』${gio}\n====== 『 𝙽𝚘𝚝𝚎 』======\n𝚃𝚒𝚗 𝙽𝚑𝚊̆́𝚗 𝚂𝚎̃ 𝙿𝚑𝚊̉𝚗 𝙷𝚘̂̀𝚒 𝚃𝚘̛́𝚒 𝙰𝚍𝚖𝚒𝚗 𝙽𝚎̂́𝚞 𝙱𝚊̣𝚗 𝚁𝚎𝚙𝚕𝚢 !!!`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `===『 𝙽𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗 』===\n=============\n『 𝙰𝚍𝚖𝚒𝚗 』 ${await Users.getNameUser(senderID)}\n=============\n\n『 𝙽𝚘𝚝𝚎 』${args.join(" ")}\n\n=============\n『 𝚃𝚒𝚖𝚎 』${gio}\n====== 『 𝙽𝚘𝚝𝚎 』======\n𝚃𝚒𝚗 𝙽𝚑𝚊̆́𝚗 𝚂𝚎̃ 𝙿𝚑𝚊̉𝚗 𝙷𝚘̂̀𝚒 𝚃𝚘̛́𝚒 𝙰𝚍𝚖𝚒𝚗 𝙽𝚎̂́𝚞 𝙱𝚊̣𝚗 𝚁𝚎𝚙𝚕𝚢 !!!`);
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
    api.sendMessage(`💗𝓬𝓾𝓽𝓮💗 𝚅𝚞̛̀𝚊 𝚃𝚛𝚞𝚢𝚎̂̀𝚗 𝚃𝚒𝚗 𝚃𝚞̛́𝚌 𝙲𝚑𝚘 𝙰𝚕𝚕 𝙱𝚘𝚡 \n『 𝚃𝚒̀𝚗𝚑 𝚃𝚛𝚊̣𝚗𝚐 』• 𝚃𝚑𝚞̛̣𝚌 𝚃𝚑𝚒 𝙻𝚎̣̂𝚗𝚑 𝚃𝚑𝚊̀𝚗𝚑 𝙲𝚘̂𝚗𝚐 🌸`, threadID);
} 
// Kem Deptryy :3