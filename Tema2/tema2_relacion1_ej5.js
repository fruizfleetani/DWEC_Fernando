


function clock() {
    let hora = new Date();
    document.body.innerHTML = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`;
    setTimeout(clock,1000);
}


setTimeout(clock,1000);