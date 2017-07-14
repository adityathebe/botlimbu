const BOT		= require("../Template/templates");
const random 	= require("random-js")();
const jokes     = require("../data/jokes");
const facts     = require("../data/facts");

const sendQuickReply = (sender, message, title, payload) => {
	BOT.sendQuickReplies(sender, {
	    text : message,
	    element : [
	        {
	            "content_type" : "text",
	            "title" : title,
	            "payload" : payload
	        }
	    ]
    });
};

const sendJoke = (sender) => {
	let randomNumber = random.integer(0, jokes.length - 1);
    let message = jokes[randomNumber];
    sendQuickReply(sender, message, 'Another Joke', 'PL_joke');
};

const sendFact = (sender) => {
	let randomNumber = random.integer(0, facts.length - 1);
    let message = facts[randomNumber];
    sendQuickReply(sender, message, 'Another Fact', 'PL_fact');
};

module.exports = {
	sendJoke,
	sendFact
}