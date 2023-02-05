/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
    name: "bank",
    version: "2.0.5",
    hasPermssion: 0,
    credits: "MintDaL",
    description: "Ngân hàng Bot",
    commandCategory: "game",
    usages: "",
    cooldowns: 5
};


module.exports.run = async function ({ api, event, args, Currencies, Users }) {
    const { senderID, messageID, threadID } = event;
    const axios = require('axios');
  if (!args[0]) return api.sendMessage(`=== 「 BANK MIRAI 」 ===\nSau đây là cách sử dụng: \n\n»bank register: để đăng kí \n»bank info: để xem thông tin tài khoản bản thân\n»bank find: để tìm tài khoản ngân hàng \n»bank get: để rút tiền \n»bank pay: để chuyển tiền \n»bank send: nạp tiền vào tài khoản \n»bank pw: lấy lại pass hoặc đổi password tài khoản ngân hàng của bạn`, event.threadID);
    const checkBank = (await axios.get(`https://api.mintdal.repl.co/bank/check?ID=${senderID}`)).data  
    const { createReadStream } = require(`fs-extra`);
    switch(args[0]) {
        case 'register':
        case '-r':
        case 'r': {
            const res = (await axios.get(`https://api.mintdal.repl.co/bank/register?senderID=${senderID}&name=${encodeURI((await Users.getData(senderID)).name)}`)).data
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            api.sendMessage('Mật khẩu MDL Bank của bạn là: ' + res.message.password, senderID);
            return api.sendMessage(`=== [ ${res.message.noti} ] ===\n👤 Chủ sở hữu: ${res.message.name}\n💳 STK: ${res.message.STK}\n💰 Số dư: ${res.message.money}$\n🔐  Password: đã được gửi đến inbox (nếu không nhận được vui lòng addfr bot và đặt lại mật khẩu)`, threadID, messageID)
        }
         case "find":
        case "-f": {
            if (checkBank.status == false) api.sendMessage("Bạn chưa có tài khoản trên hệ thống!", threadID, messageID)
            if (args[1] != "stk" && args[1] != "id") {
                api.sendMessage("Vui lòng chọn đúng kiểu dữ kiện (stk/id)", threadID, messageID)
            }
            let { data } = (await axios.get(`https://api.mintdal.repl.co/bank/find?type=${args[1].toUpperCase()}&${args[1].toUpperCase()}=${args[2]}`))
            const name = data.message.name
            const stk = data.message.data.STK
            const soDu = data.message.data.money
            return api.sendMessage(`=== [ MDL BANK ] ===\n👤 Chủ sở hữu: ${name}\n💳 STK: ${stk}\n💰 Số dư: ${soDu}$`, threadID, messageID)
        }
      case 'info':
      case '-i':
      case 'check':
      case '-c': {
        var a = event.senderID;
        if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản MDL Bank!', threadID, messageID);
        const res = (await axios.get(`https://api.mintdal.repl.co/bank/find?type=ID&ID=${a}`)).data  
          return api.sendMessage(`=== [ MDL BANK ] ===\n👤 Chủ sỡ hữu: ${res.message.name}\n💳 STK: ${res.message.data.STK}\n💰 Số dư: ${res.message.data.money}$`, threadID, messageID)
      }
        case 'get':
        case 'rút': {
            if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản MDL Bank!', threadID, messageID);
            if(!args[1]) return api.sendMessage('Vui lòng nhập: get [số tiền]', threadID, messageID);
            api.sendMessage('Hoàn tất bước cuối cùng ở tin nhắn chờ', threadID, messageID);
            return api.sendMessage('Vui lòng reply tin nhắn này và nhập mật khẩu MDL Bank để rút tiền!', senderID, (error, info) => 
                global.client.handleReply.push({
                    name: this.config.name,
                    type: 'getMoney',
                    messageID: info.messageID,
                    author: event.senderID,
                    money: args[1],
                    threadID: threadID
                })
            );
        }
        case 'pay':
        case '-p': {
            if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản MDL Bank!', threadID, messageID);
            if(!args[1] || !args[2] || !args[3]) return api.sendMessage('Vui lòng nhập đúng kiểu dữ liệu: pay stk [stk người nhận] [số tiền]', threadID, messageID);
            if(args[1] == 'stk') {
                api.sendMessage('Hoàn tất bước cuối cùng ở tin nhắn chờ', threadID, messageID);
                return api.sendMessage('Vui lòng reply tin nhắn này và nhập mật khẩu MDL Bank để chuyển tiền!', senderID, (error, info) => 
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: 'paySTK',
                        messageID: info.messageID,
                        author: event.senderID,
                        STK: args[2],
                        money: args[3],
                        threadID: threadID
                    })
                );
            }
            if(args[1] == 'id') {
                if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản MDL Bank!', threadID, messageID);
                api.sendMessage('Hoàn tất bước cuối cùng ở tin nhắn chờ', threadID, messageID);
                return api.sendMessage('Vui lòng reply tin nhắn này và nhập mật khẩu MDL Bank để chuyển tiền!', senderID, (error, info) => 
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: 'payID',
                        messageID: info.messageID,
                        author: event.senderID,
                        ID: args[2],
                        money: args[3],
                        threadID: threadID
                    })
                );
            }
            break;
        }
        case 'send':
        case 'nạp': {
            if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản MDL Bank!', threadID, messageID);
            if(!args[1]) return api.sendMessage('Vui lòng nhập số tiền cần nạp vào!\nsend [số tiền cần nạp]', threadID, messageID);
            var check = await checkMoney(senderID, args[1])
            if (check == false) return api.sendMessage('Hmm, tiền đâu mà nạp vô đây?', threadID, messageID);
            await Currencies.decreaseMoney(senderID, parseInt(args[1]))
            const res = (await axios.get(`https://api.mintdal.repl.co/bank/send?senderID=${senderID}&money=${args[1]}`)).data  
            return api.sendMessage(`${res.message.noti} Số dư hiện tại của bạn trong MDL Bank: ${res.message.money}$`, threadID, messageID)
            break;
    }
        case 'password':
        case 'pw': {
            if(checkBank.status == false) return api.sendMessage('Bạn chưa có tài khoản MDL Bank!', threadID, messageID);
            var type = args[1];
            switch(type) {
                case 'get': {
                    const res = (await axios.get(`https://api.mintdal.repl.co/bank/password?bka=${type}&dka=${senderID}`)).data 
                    api.sendMessage('Mật khẩu của bạn được gửi đến tin nhắn chờ', threadID, messageID);
                    return api.sendMessage(`Mật khẩu của bạn là: ${res.message.password}`, senderID);
                }
                case 'recovery':
                case 'new': {
                    api.sendMessage('Hoàn tất bước cuối cùng ở tin nhắn chờ', threadID, messageID);
                    return api.sendMessage('Vui lòng reply tin nhắn này để nhập mật khẩu mới!', senderID, (error, info) => 
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: 'newPassword',
                            messageID: info.messageID,
                            author: event.senderID,
                            threadID: threadID
                        })
                    );
                }
                default: {
                    return api.sendMessage("Vui lòng sử dụng get (để lấy mật khẩu) hoặc new (để nhập mật khẩu mới)", threadID, messageID);
                }
            }
        }
        default: {
        return api.sendMessage({body:"=== 「 MDL BANK 」 === Đây là ngân hàng Bot được điều hành bởi MintDaL. Sau đây là cách sử dụng: \n\n» register: để đăng kí \n» info: để xem thông tin tài khoản bản thân\n» find: để tìm tài khoản ngân hàng \n» get: để rút tiền \n» pay: để chuyển tiền \n» send: nạp tiền vào tài khoản \n» pw: lấy lại pass hoặc đổi password tài khoản ngân hàng của bạn", attachment: createReadStream(__dirname + `/cache/bank.png`)}, threadID, messageID);
        }
    }
async function checkMoney(senderID, maxMoney) {
    var i, w;
    i = (await Currencies.getData(senderID)) || {};
    w = i.money || 0
    if (w < parseInt(maxMoney)) return false;
    else return true;
  }
}
module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const axios = require('axios')
    const { senderID, messageID, threadID , body } = event;
    switch(handleReply.type) {
        case 'paySTK': {
            const res = (await axios.get(`https://api.mintdal.repl.co/bank/pay?type=STK&senderID=${senderID}&STK=${handleReply.STK}&money=${handleReply.money}&password=${body}`)).data 
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            api.sendMessage(`${res.message.noti} ${res.message.data.message}`, threadID, messageID);
            return api.sendMessage(`${res.message.noti}\n\n${res.message.data.message}`, handleReply.threadID);
        }
        case 'payID': {
            const res = (await axios.get(`https://api.mintdal.repl.co/bank/pay?type=ID&senderID=${senderID}&userID=${handleReply.ID}&money=${handleReply.money}&password=${body}`)).data 
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            api.sendMessage(`${res.message.noti} ${res.message.data.message}`, threadID, messageID);
            return api.sendMessage(`${res.message.noti}\n\n${res.message.data.message}`, handleReply.threadID);
        }
        case 'getMoney': {
            const res = (await axios.get(`https://api.mintdal.repl.co/bank/get?ID=${senderID}&money=${handleReply.money}&password=${body}`)).data  
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            await Currencies.increaseMoney(senderID, parseInt(handleReply.money))
            api.sendMessage(`${res.message.noti}\n👤 Chủ tài khoản: ${res.message.name}\n💰 Số dư còn lại: ${res.message.money}`, threadID, messageID);
            return api.sendMessage(`${res.message.noti}\n👤 Chủ tài khoản: ${res.message.name}\n💰 Số dư còn lại: ${res.message.money}`, handleReply.threadID);
        }
        case 'newPassword': {
            const res = (await axios.get(`https://api.mintdal.repl.co/bank/password?bka=recovery&dka=${senderID}&fka=${body}`)).data  
            if(res.status == false) return api.sendMessage(res.message, threadID, messageID);
            api.sendMessage(`${res.message.noti}\nChủ tài khoản: ${res.message.name}`, handleReply.threadID);
            return api.sendMessage(`Thay đổi mật khẩu thành công!\nMật khẩu hiện tại: ${res.message.password}`, threadID, messageID)
        }
    }
}