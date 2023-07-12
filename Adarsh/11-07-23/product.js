


function calculator(){
    const inputElement = document.querySelector("#amount");
    let Cost= Number(inputElement.value);
    console.log(Cost);
    if(Cost < 40 & Cost >0 ) {
        Cost = Cost + 10;
        document.querySelector(".result").innerHTML= `Total Cost is $ ${Cost} `;
    }
    else if (Cost >= 40)
        document.querySelector(".result").innerHTML= `Total Cost is $ ${Cost} FREE!!! shiping`;   
     else
        document.querySelector(".result").innerHTML= `Enter the cost greater than ZERO`;
}

