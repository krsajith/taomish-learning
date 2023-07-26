
// Drop Down Single Select
let selectText= document.getElementById("select-text");
let options= document.getElementsByClassName("options");
let selectBox= document.getElementById("selectid");
let listElements= document.getElementById("list");
let selectArrow=  document.getElementById("select-arrow");


selectBox.onclick =  function(){
   listElements.classList.toggle("hide");
   selectArrow.classList.toggle("rotate");
}


for(option of options) {
   option.onclick = function(){
        selectText.innerHTML= this.textContent;
        listElements.classList.toggle("hide");
        selectText.classList.remove("select-content");
        selectArrow.classList.toggle("rotate");
   }
}

// Radio Option

let radioBtnOne= document.getElementById("radio-btn-one");
let radioBtnTwo= document.getElementById("radio-btn-two");
let labelOne= document.getElementById("label-one");
let labelTwo= document.getElementById("label-two");


labelOne.onclick= function(){
   radioBtnOne.classList.add("radio-select");
   radioBtnTwo.classList.remove("radio-select");
}

labelTwo.onclick= function(){
   radioBtnTwo.classList.add("radio-select");
   radioBtnOne.classList.toggle("radio-select");
}

// Content Switch

let cashBtn= document.getElementById("cash-id");
let forwardBtn= document.getElementById("forward-id");

cashBtn.onclick= function(){
   cashBtn.classList.add("switch-style");
   forwardBtn.classList.remove("switch-style");
}
forwardBtn.onclick= function(){
   forwardBtn.classList.add("switch-style");
   cashBtn.classList.remove("switch-style");
}






