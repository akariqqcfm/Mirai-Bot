const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Create by AkariM - HerokuGithub!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
        
client.on('message', message => {
    if (message.content === 'UwU') {
    	message.reply('OwO');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

