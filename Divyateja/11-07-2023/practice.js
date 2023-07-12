//Do While loop

let i = 10;
do {
    console.log("Hi");
    i++

} while(i<=5)


//while loop 

let n = 10;
while (n<=15){
    console.log("Hello")
    n++
}

//for loop 

let t = 10;
for (;t<=15;){
    console.log("Hi")
    t++
}

//for loop simplified 
for (let j = 1; j<=100; j++){
    if (j%3===0){
        console.log(j)
    }
}

//for in loop 

let object = {
    name : "Teja",
    age : 25,
    City : "Kakinada"
}

for (c in object){
    console.log(c,object[c])
}

//for of loop 

let habbits = ["singing", "Coding","Dancing"]
for(w of habbits){
    console.log(w)
}


// set datastructure 

let nam = new Set("Hyderabad");
nam.add("Teja")
nam.add(3)
console.log(nam)


//Map Datastructure 

let details = new Map();
details.set("Teja","Singampalli");
details.set("Roja","Singampalli");

details.set(3,2);

for (let[k,v] of details ){
    console.log(k,v)
}






