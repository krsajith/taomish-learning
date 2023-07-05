
const address={
    street: 'K R Puram',
    city:'Bangalore',
    pincode: 560016
};

showAddress(address);

function showAddress(){
    for( let key in address)
    console.log(key, address[key]);
}
