function add(a,b,c){
    return a*b*c;
} console.log(add(23,56,456));

// ternary operators 
let speed = 80;
let message = speed>=60? "Too High":"Okay";
console.log(message)

let a = 20;
let b = 25;
let minimum = a<b? a :b;
console.log(minimum) 


//switch conditions 

let day = 1;
switch (day){
    case 0:
        console.log("Sunday")
             break;

    case 1:
        console.log("Monday");
             break;  
            
    case 2:
        console.log("Tuesday");   
             break;
                
    case 3 :
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday"); 
        break;
    case 5:
        console.log("Friday"); 
        break;  
    case 4:
        console.log("Thursday"); 
         break;  
    default:
        console.log("Invalid");

}

//Arrow Functions 
let sum = (a,b)=> a+b;
console.log(sum(4,3))


let equal = (a,b) => a===b;
console.log(equal(3,3))

//single arguments 

let square = n => n*n;
console.log(square(4));


//ternary operator 

let number = 12;
let number_2 = 4;

let check = (12%5==0)?"True":"False";
console.log(check)

//factory functions 

function createCar(brand, color){
    return {
        brand :brand,
        color: color,
        start: function(){
            console.log("Started")
        }
    }



}


let car1 = createCar("BMW","Blue");
let car2 = createCar("Tata","Red");
let car3 = createCar("WV","Black");

console.log(car1);
console.log(car2);
console.log(car3);

//simplified way 

function createCar(brand, color){
    return {
        brand,
        color,
        start(){
            console.log("Started")
        }
    }



}


let car4 = createCar("BMW","Blue");
let car5 = createCar("Tata","Red");
let car6 = createCar("WV","Black");

console.log(car4);
console.log(car5);
console.log(car6);


//Built-in Constructor Functions 

//Ternary operator using 3 variables 
let d = new Date();
console.log(d)

let num_1 = 20;
let num_2 = 35;
let num_3 = 17;

let small = num_1 < num_2 ? (num_1 < num_3 ? num_1 : num_3) : (num_2 < num_3 ? num_2 : num_3);

console.log(small);


//byusing if-else

let numb_1 = 20;
let numb_2 = 5;
let numb_3 = 17;

if ( (numb_1<numb_2)&&(numb_1<numb_3)){
    console.log(numb_1)
}
else if (numb_2< numb_3){
    console.log(numb_2)
}
else{
    console.log(numb_3)
}


function myFunc(a,b){
    return a-b;
}
console.log(myFunc(24,12))