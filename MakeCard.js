
var ClozeCard = require('./ClozeCard.js');

var BasicCard = require('./BasicCard.js');

var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front); 

console.log(firstPresident.back); 

var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze); 

console.log(firstPresidentCloze.partial()); 

console.log(firstPresidentCloze.fullText()); 

var brokenCloze = ClozeCard("This doesn't work", "oops");