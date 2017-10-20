const Discord = require('discord.js');
const client = new Discord.Client();
var secrets = require ('./secrets');

var quotes = require ('./sunTzuQuotes.json');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!suntzu help') {
    message.reply("Commands: !suntzu help for this help page. !suntzu for a random sun tzu quote.");
  }
  else if (message.content === '!suntzu') {
    message.reply(randomSunTzu());
  }
  
});

function randomSunTzu(){
	return quotes[Math.floor(Math.random()*quotes.length)];
}

client.login(secrets.client);