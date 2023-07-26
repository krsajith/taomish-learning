
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
