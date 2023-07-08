const numbers=[8,1,4,3,0,9];

output = except(numbers, [4,0]);
console.log(output);

function except(array, excluded){
    let newArray=[];
    for (let element of array) 
            if( !excluded.includes(element))
                newArray.push(element);
    return newArray;
            
}