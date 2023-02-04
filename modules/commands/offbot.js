module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Des Bủh - Dựa trên demo của manhIT", /* vui lòng k sửa credit :) */
	description: "Tắt Bot",
	commandCategory: "Hệ thống",
	cooldowns: 0
        };
        
module.exports.run = async({event, api}) =>{

   const permission = ["100073862257362"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Xin cái tuổi để off?", event.threadID, event.messageID);

api.sendMessage("gút bai si diu ây ờ gen ! hẹn không gặp lại các bạn nhá ok 🐸",event.threadID, () =>process.exit(0))}