//Input Number circle v1

let counterValue = 0;

function updateCounter() {
  const counterElement = document.getElementById("counterValue");
  counterElement.textContent = counterValue.toString();
}

function increase() {
  counterValue++;
  updateCounter();
}

function decrease() {
  counterValue--;
  updateCounter();
}

updateCounter();

//Input Number circle v1 (disabled)

function disable() {
  let numb = document.getElementById("counterValue_0");
  numb.style.color = "grey";
  document.getElementById("disable").disabled = true;
}

//Toogle Label Highlight

function highlight() {
  let text_1 = document.getElementById("txt_1");
  let text_2 = document.getElementById("txt_2");
  let toogle_btn = document.getElementById("btn");
  if (toogle_btn.checked) {
    text_2.style.fontWeight = "700";
    text_1.style.fontWeight = "500";
  } else {
    text_1.style.fontWeight = "700";
    text_2.style.fontWeight = "500";
  }
}

function highlight_2() {
  let text_1 = document.getElementById("txt_3");
  let text_2 = document.getElementById("txt_4");
  let toogle_btn = document.getElementById("btn_2");
  if (toogle_btn.checked) {
    text_2.style.fontWeight = "700";
    text_1.style.fontWeight = "500";
  } else {
    text_1.style.fontWeight = "700";
    text_2.style.fontWeight = "500";
  }
}
