//adding days using external package 


const addDays = require('date-fns/addDays');
const result = addDays(new Date(2021,0,20),3);
const localDate = result.toLocaleDateString();
console.log(localDate);


