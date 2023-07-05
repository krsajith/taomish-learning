const movie={
    title: 'Doctor',
    part: 1,
    director: 'abc',
    rating: 4.5

};

ShowProperties(movie);

function ShowProperties(obj){
    for(let key in obj)
    if( typeof obj[key] === 'string')
    console.log(obj[key]);
}