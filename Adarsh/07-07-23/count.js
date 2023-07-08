const numbers=[1,3,7,2,1,7,1,9,2];

output = countOccourrence(numbers, 4);
console.log(output);

function countOccourrence(array, searchElement){
    let count = 0;
    for (let element of array) 
        if( element === searchElement)
            count++;
    if(count > 0) 
        return count;
    return 'Entered Element is not available in Array';
}