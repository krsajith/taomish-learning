//ES6 Exports

//default exports (which means we can export one function at a time)

const add = function(a,b){
    return a+b;
};

export default add;

//Named exports (which means we can export multiple functions)
export const sub = function(a,b){
    return a-b;
};

export const mul = function(a,b){
    return a*b;
}; 



