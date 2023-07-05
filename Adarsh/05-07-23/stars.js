showStar(6);

function showStar(row){

    for ( let i = 1; i <= row; i++ ){
        let patern='';
        for ( let j = 1; j <= i; j++ )
            patern += '*';
            console.log(patern); 
        }

}