
//using queryselctor and getElement

function subscribe() {
    let buttonElement = document.querySelector(".js-subscribe-btn");
    let bttn= document.getElementById("btn");
    if( buttonElement.innerText === "subscribe"){
        buttonElement.innerHTML = "subscribed";
        bttn.style.backgroundColor = "grey";
    }
    else {
        buttonElement.innerHTML = "subscribe";
        bttn.style.backgroundColor = "red";
    }
} 