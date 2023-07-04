console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

console.log(69+3.5);
console.log(2023-1969);
console.log(65/240);
console.log(0.2708*100);


//prop
console.log('Teaching the world how to code'.length);

//builtinobj
console.log(Math.random());

console.log(Math.floor(Math.random()*100));

//Use the .ceil() method to calculate the smallest integer greater than or equal to 43.8.
console.log(Math.ceil(43.8));

//Use the .isInteger() method from the Number object to check if 2017 is an integer.
console.log(Number.isInteger(2017));

//variabe
var favoriteFood ='pizza';
console.log(favoriteFood);

var numOfSlices=8;
console.log(numOfSlices);

//let
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal);
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); 

//eg
let changeMe = true;

changeMe=false;
console.log(changeMe);


//Mathematical Assignment Operators
//Let’s consider how we can use variables and math operators to calculate new values and assign them to a variable. 
let w = 4;
w = w + 1;

console.log(w);
//or
let z= 4;
z+=1;

console.log(z);


let levelUp = 10;
levelUp+=5;
console.log(levelUp);

//inc and dec
let a = 10;
a++;
console.log(a);


//stringcontac
let favoriteAnimal = 'bhaaloo';
console.log('My favorite animal:'+favoriteAnimal);

//interpol
let myName = 'aditya';
let myCity = 'Ajmer';

console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//type of op
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

//cond'
let saale = true;
if (saale){
  console.log('Time to buy!');
}


//if esle
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
else {
  console.log('Time to wait for a sale.');
}

//compar oper
let hungerLevel = 7;

if (hungerLevel>7){
  console.log('Time to eat!');
}
else{
  console.log('We can eat');
}

//eg
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}


//egof truthly and falsy
let wordCount = 9;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//tenary ? :
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.'): console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!'): console.log('Incorrect!');


let favoristePhrase = 'Love That!';

favoristePhrase === 'Love That!' ? console.log('I love that!'): console.log("I don't love that!");


// else if
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if(season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}
else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
}
else if(season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}


//switch
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
