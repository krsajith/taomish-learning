
let counter= 0;
console.log(counter);
function increment(){
    counter  += 1;
    document.getElementById('initial-text').innerHTML= counter;
}

function decrement(){
    counter  -= 1;
    document.getElementById('initial-text').innerHTML= counter;
}

function reset(){
    counter = 0;
    document.getElementById('initial-text').innerHTML= counter;
}