const numbers=[2,4,7,8];

result = include(numbers, 8);
console.log(result);

function include(array, searchElement){
    for (let element of array) 
        if(searchElement === element) 
         return true;
    return false;
    
}