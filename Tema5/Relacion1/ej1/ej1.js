var enlaces = document.querySelectorAll('a');
console.log(enlaces.length);
console.log(enlaces[enlaces.length - 2].href);

let contEnlacesGoogle = 0;
for(let i = 0 ; i < enlaces.length ; i++){
    if(enlaces[i].href == 'https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwjxlMH_yqv0AhUch_0HHYV2DQcQPAgI')
    contEnlacesGoogle++;    
}

console.log(contEnlacesGoogle);

console.log(document.querySelectorAll('p:nth-child(3) a').length);


