// variable declaration 

let a = 15;
console.log(a) // It will gives output as 15 


let b = 19;
console.log(b) // it will shows undefined 

// conditonal statements 

if (a>b){
    console.log("a is greater than b")
}

else if(a<b){
    console.log("a is lessthan b")
}

else{
    console.log("NOt a number ")
}



//Data structures 



// Creating an array

let n = [5, "six", 2, 8.2,9];

console.log(n);  
console.log(typeof(n))


//accessing an array item 

console.log(n[0])
console.log(n[3])


// type checking 
console.log(typeof(n[3]))


//modifying an array item 

n[0] = 56;
console.log(n)

//finding length of an array 

console.log((n.length))


//adding elements to array 

n.push("true")
console.log(n)

//removing itens from an array 

n.pop("true")
console.log(n)


//Functions Declaration 

function greeting () {
    console.log("Hi, Good morning..");
}
greeting();


function greater() {
    let j = 35;
    if (j<25){
        console.log("j is lessthan 25");
    }

    else{
        console.log("j is greater than 25")
    }

}

greater();


//Function Expression 
//There is another syntax for creating a function which is called Function Expression.

let greeting_message = function(){
    console.log("Hello, I'm Teja...")
}
greeting_message()


//Creating an object 

let person ={
    first_name:"Teja",last_name:"singampalli",age:"23"
};
console.log(person)
//accessing items (Dot Notation)
console.log(person.first_name) //Teja

//accessing items(Bracket Notation)
console.log(person["last_name"])  //singampalli


//Modifying items in a object 
person.first_name = "Akash"

console.log(person.first_name) //Akash

person.first_name = "Teja"


//Adding Properties to the object 

person.gender = "Male"

console.log(person) 


//using array as a value to the key or identifier 


person.car = ["Audi","Benz","rangerover"]
console.log(person)

//using oject as a value to the key or identfier 

person.carspecs = { car: "Rangerover", color:"White", model:"2"

}

console.log(person)


//Object Destructuring 

let {first_name,last_name} = person;

console.log(first_name)
console.log(last_name) 

console.log(person)








