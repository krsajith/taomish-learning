const numbers=[1,2,3,4,5];

result = moveElement(numbers, 1, 6);
console.log(result); 


function moveElement(array, index, offset){
    let output= [...array];
    if( offset <= array.length && offset > -1 ){
    
    const element = output.splice(index, 1)[0];
    output.splice(offset-1, 0, element);
    return output;
    }
    console.error('invalid');
}