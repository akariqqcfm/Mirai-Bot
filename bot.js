const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'con bot bi gay') {
    	message.reply('j ko gay :(');
  	}
    if (message.content === 'UwU') {
    	message.reply('OwO');
  	}
    if (message.content === 'Địt mẹ mày Tú') {
    	message.reply('Sai rồi, phải là quan hệ mẫu thân nhà Tú');
  	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

