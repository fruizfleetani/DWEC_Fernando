const coordenadas = [];
const UltimasCoordenadas = [];
function initial(e) {
    let id = e.target.getAttribute("id");
    coordenadas[id][0] = e.screenX - UltimasCoordenadas[id][0];
    coordenadas[id][1] = e.screenY - UltimasCoordenadas[id][1];
}

function move(e) {
    if(e.screenX != 0 || e.screenY != 0) {
        let id = e.target.getAttribute("id");
        let x = (e.screenX - coordenadas[id][0]);
        let y = (e.screenY - coordenadas[id][1]);
        e.target.style = `transform: translate(${x}px,${y}px)`;
        UltimasCoordenadas[id][0] = x;
        UltimasCoordenadas[id][1] = y;
    }
    return true;
}

function afterLoad() {
    let imgs = document.getElementsByTagName("img");
    for (const img of imgs) {
        let id = img.getAttribute("id");
        coordenadas[id] = [0, 0];
        UltimasCoordenadas[id] = [0, 0];
        img.ondragstart = initial;
        img.ondrag = move; 
    }
}

window.onload = afterLoad;