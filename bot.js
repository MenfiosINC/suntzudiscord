const Discord = require('discord.js');
const client = new Discord.Client();
var secrets = require ('./secrets');

var quotes = [
	"never allow your enemy to defeat your armies. when your army is defeated, then you have truly lost war",
	"you must be smarter than the enemy and do more lethal moves. this causes him to appear stupid, and become defeated",
	"when your sword is sharp and your enemy is not paying attention, and he has no armor on, then it is time to strike",
	"If your enemy is strong, do not attack him. Instead cut off your own head, hand it to him, and say, ‘here you go.’",
	"If your enemy has 400 swords... you must bring at least... uh... 401 swords to the battle in order to defeat him.",
	"When fighting war, it is vital to never allow your enemy to cut your neck very much. but instead, allow yourself to cut his neck",
	"i talk a lot of shit about Sun Tzu but the reality is if he were alive today he would probably be able to defeat me pretty easily in a war",
	"The art of war is conducted thusly... when you aim your cannons, attempt to hit your enemies' nuts. this will take them out fully.",
	"what is war? its a lot of battles, and a battle is just a lot of fights. so if you win every fight, you win the war",
	"War. It's really more of an art than a science.",
	"Your enemy may say things like 'Stop stabbing me dude' or 'Leave me alone bitch' but you must not fall for his tricks",
	"If the enemy proclaims he is not mad, and that this is funny to him, know that he is incredibly mad.",
	"Sun Tzu's friend: any advice for the war? / Sun Tzu: get your army behind theirs... to surprise them / Sun Tzu's friend: you should write a book",
	"When the head is cut from the snake, the snake will perish. the same is true of your enemy. cut all their heads off and you win",
	"When you take away your enemy's weapons, they don't have a way to do damage to you. you win once again my friend",
	"the perfect battle for me would be if i lost no troops, but my enemy was completely defeated and his troops joined my army.",
	"if you wage war by night, the enemy will find it hard to see your weapons and shit since its darker, and you can get their ass",
	"you must be as quiet as a million feathers, but yet as powerful as one million pounds of dynamite.",
	"you must fight like the wild tiger, biting your foe, but retreating if they are too strong and beating your army at war",
	"to kill one hundred soldiers is simple. is it not better to instead kill one hundred... kings?",
	"always leave a single foe alive to tell his tale, and plus one single guy cant have sex and make more guys; theres no girl",
	"when your enemy's defenses are at their weakest, and you have snuck up on them, it then that it is the ultimate time to attack",
	"Though a scope will allow you to 'zoom in' and make the enemy seem closer, i personally can get them pretty easily with no scope",
	"when your defenses are impregnable, and your attacks are powerful, then you are uh... covering both bases, as far as war goes.",
	"ancient warlord: ah fuck... i've once again been defeated by Sun Tzu... his technique of having extremely good yet secret plans is very good",
	"never stop your enemy from killing his own army with stupid maneuvers... for then you will beat him in the war",
	"you must be smarter than the enemy and do more lethal moves. this causes him to appear stupid, and become defeated"
];

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