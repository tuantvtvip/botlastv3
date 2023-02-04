module.exports.config = {
	name: "help",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "tuantvt",
	description: "Hướng dẫn cho người mới",
	commandCategory: "𝐓𝐢𝐞̣̂𝐧 𝐈́𝐜𝐡",
	usages: "[Tên module]",
	cooldowns: 5,
  	envConfig: {
		autoUnsend: true,
		unsendMessageAfter: 5000000
	}
};

module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	if (!event.body) return;
	const { threadID, messageID, body } = event;
	if (body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);

	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`「 ${command.config.name} 」\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
}

module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	
	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		group.forEach(commandGroup => msg += `「 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} 」\n${commandGroup.cmds.join(', ')}\n\n`);

    const moduleName = this.config.name;
		return api.sendMessage(msg + ` 𝐏𝐫𝐞𝐟𝐢𝐱 𝐂𝐮̉𝐚 𝐁𝐨𝐭 𝐋𝐚̀ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX}\n𝐃𝐮̀𝐧𝐠 /𝐡𝐞𝐥𝐩 + 𝐓𝐞̂𝐧 𝐋𝐞̣̂𝐧𝐡 𝐍𝐞̂́𝐮 𝐌𝐮𝐨̂́𝐧 𝐗𝐞𝐦 𝐂𝐚́𝐜𝐡 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠\n𝐒𝐨̂́ 𝐋𝐞̣̂𝐧𝐡 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐂𝐨́ 𝐓𝐫𝐞̂𝐧 𝐁𝐨𝐭 𝐋𝐚̀ ${commands.size}\n 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 /𝐜𝐚𝐥𝐥 𝐍𝐞̂́𝐮 𝐁𝐚̣𝐧 𝐌𝐮𝐨̂́𝐧 𝐋𝐢𝐞̂𝐧 𝐋𝐚̣𝐜 𝐕𝐨̛́𝐢 𝐀𝐝𝐦𝐢𝐧`, threadID,
    async function (error, info){
			if (global.configModule[moduleName].autoUnsend) {
				console.log(global.configModule[moduleName].autoUnsend);
				await new Promise(resolve => setTimeout(resolve, global.configModule[moduleName].unsendMessageAfter * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});

	}

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`「 ${command.config.name} 」\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
}