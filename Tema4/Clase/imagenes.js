num = 1


const dcha = document.getElementById('dcha');
const izq = document.getElementById('izq');
const contador = document.getElementById("contador")

function siguienteimagen(){
    if (num == 25) {
        alert('Esta es la última imagen')
    }
    else{
        num += 1;
        document.getElementById("miimagen").src=`${num}.jpg`;
        contador.innerHTML=`${num}/25`
    }
}
function anteriorimagen(){
    if (num == 1) {
        alert('Esta es la primera imagen')
    }
    else{
        num -= 1;
        document.getElementById("miimagen").src=`${num}.jpg`;
        contador.innerHTML=`${num}/25`
    }
}
dcha.onclick = siguienteimagen;
izq.onclick = anteriorimagen;



// document.getElementById("miimagen").src=`${num}.jpg`;
// document.getElementById("miimagen").src=`${num}.jpg`;