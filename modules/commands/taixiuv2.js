module.exports.config = {
    name: "taixiu1",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dũngkon", 
    description: "Tài - xỉu",
    commandCategory: "Game",
    usages: "[tag]",
    cooldowns: 0,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args, Currencies,Users,Threads }) {
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
          var data = await Currencies.getData(event.senderID);
          var money = data.money           
    if(!args[0]) {
        outMsg("🎲Vui lòng nhập 'tài' hoặc 'xỉu'")
    }
    else{
    var turnbot = ["tài","xỉu"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          const userturn = args[0];
          const coins = args.join(" ").replace(userturn, ""); 
          if(coins < 20)
          api.sendMessage(`🎲Số đặt cược của bạn phải lớn hơn 20$`,event.threadID,event.messageID)
          else{
          if(money < coins)  
          api.sendMessage(`Số dư bạn không đủ ${coins}$ để có thể chơi`,event.threadID,event.messageID)
          else {           
          if (userturn == "tài"||userturn == "xỉu") {
            if (userturn == turnbot) {
             
          } else if (userturn == "tài") {
            if (botturn == "tài") {
             Currencies.increaseMoney(event.senderID, parseInt(money * 2))
              return outMsg(`🎲BẠN ĐÃ THẮNG\n\nUser : ${userturn}\nkết quả : ${botturn}\n\nBạn đã thắng và được ${money}$ `)
           
          }
        } else if (userturn == "tài") {
          if (botturn == "xỉu") {
            Currencies.increaseMoney(event.senderID, parseInt(money * 2))
            return outMsg(`🎲BẠN ĐÃ THUA\n\nUser : ${userturn}\nkết quả : ${botturn}\n\nBạn đã thua và mất ${money}$ `)
         

          }
        } else if (userturn == "xỉu") {
          if (botturn == "tài") {
            Currencies.increaseMoney(event.senderID, parseInt(money * 2))
            return outMsg(`🎲BẠN ĐÃ THUA\n\nUser : ${userturn}\nkết quả : ${botturn}\n\nBạn đã thua và mất ${money}$ `)
              

          }
        } else if (userturn == "xỉu") {
          if (botturn == "xỉu") {
            Currencies.increaseMoney(event.senderID, parseInt(money * 2))
            return outMsg(`🎲BẠN ĐÃ THẮNG\n\nUser : ${userturn}\nkết quả : ${botturn}\n\nBạn đã thắng và được ${money}$ `)
         
        }
      }
    }
        } 
      }
    }
}