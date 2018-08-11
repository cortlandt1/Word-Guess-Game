var compWordChoice = ['eraser', 'pumping iron', 'last action hero', 'predator', 'jingle all the way', 
'the terminator', 'commando', 'total recall', 'conan the barbarian', 'stay hungry', 'twins', 
'kindergarten cop', 'the running man', 'end of days', 'collateral damage']

//Selecting a random word
var randomSelection = function(compWordChoice){
    return compWordChoice[Math.floor(Math.random() * compWordChoice.length)]
}

//Returning selected word to console
var chosenWord = randomSelection(compWordChoice); 
console.log(chosenWord)

