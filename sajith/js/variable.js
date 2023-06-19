let sum = 0;

const start = 1;
const end = 5;

for (let index = start; index <= end; index++){
    sum = sum + index;   
}

console.log(sum);


function large(n1,n2) {
    let large = n1;
    if (n2>large) {
        large = n2;
    }
    return large;
}

console.log('Large is ', large(10,25));