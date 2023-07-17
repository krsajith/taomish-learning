
let counterContent= document.getElementById('counter');
let counter= parseInt(counterContent.textContent);
let startWatch;

document.getElementById('start-btn').addEventListener("click", () => {
    startWatch= setInterval(() => {
    counter += 1;
    counterContent.textContent= counter;
    },500);
});

document.getElementById('stop-btn').addEventListener("click", () => {
    clearInterval(startWatch);
});

document.getElementById('reset-btn').addEventListener("click", () =>{
    clearInterval(startWatch);
    counter=0;
    counterContent.textContent= counter;
});