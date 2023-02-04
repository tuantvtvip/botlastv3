module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "tuantvt cấm thay credits", /* vui lòng k sửa credit :) */
	description: "Bật Bot",
	commandCategory: "Hệ thống",
	cooldowns: 0
        };
        
module.exports.run = async({event, api}) =>{

   const permission = ["100073862257362"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Xin cái tuổi để off?", event.threadID, event.messageID);

api.sendMessage("gút bai si diu ây ờ gen ! hẹn không gặp lại các bạn nhá ok 🐸",event.threadID, () =>process.enter(1))}

