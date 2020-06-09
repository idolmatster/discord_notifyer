const cfg = require('./cfg.json')
const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: true });

bot.on('ready', async () => {

    (await bot.fetchUser(cfg.user)).send(cfg.msg).then(() => { process.exit(); });

});

bot.login(cfg.token);
