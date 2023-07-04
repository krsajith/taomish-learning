let statusvalue = islandscape(1080, 1920);
console.log(statusvalue);

function islandscape(width, height){
   return (width < height) ? 'landscape' : 'portrait';
}