//-----------
//EJERCICIO 1
//-----------
function ejercicio1(text){
    var abril=0;
    var cerral=0;
    for (let i = 0; i < text.length; i++) {
        if (text[i]=='(') {
            abril+=1;
        }
        if (text[i]==')'&&cerral<abril){
            cerral+=1;
        }
        else if (text[i]==')'&&cerral>=abril) {
            return false
        }
        
    }
    if(abril!=cerral){
        return false;
    }
    return true;
}
//-----------
//EJERCICIO 2
//-----------
function ejercicio2(arrayFechas, fechaInicio, fechaFin){
    var fechasComprendidas=[];
    var fecha1=cambiarFecha(fechaInicio);
    var fecha2=cambiarFecha(fechaFin);
    arrayFechas.forEach(element => {
        if((cambiarFecha(element)-fecha1>0)&&(cambiarFecha(element)-fecha2<0))
        fechasComprendidas.push((element));
    });
    return fechasComprendidas;
}

function cambiarFecha(fecha){
    var partes=fecha.split('/');
    var resultado= new Date(partes[2],(partes[1]-1),(partes[0]));
    return resultado;
}
//-----------
//EJERCICIO 3
//-----------
function ejercicio3(arr){
    let prod = 1;
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            prod *= ejercicio3(arr[i]);
        }else{
            prod *= arr[i] || 1;
        };
    };
    return prod;
}
//-----------
//EJERCICIO 4
//-----------
function ejercicio4(filas,columnas,color,elementoDOM){
    var arrayTablas=[];
    arrayTablas.push({filas,columnas,color,elementoDOM})
    var tabla=document.createElement('table');
    for (let i = 0; i < filas; i++) {
        var fila=document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            var columna=document.createElement('td');
            columna.innerText='Examen';
            //borrar contenido celda
            columna.addEventListener('click', (e)=>{
                borrarCelda(i,j)});
            if (i%2==0) {
                fila.style.background=color;                
            }
            fila.appendChild(columna);            
        }
        tabla.appendChild(fila);
        
    }
    elementoDOM.appendChild(tabla);
    
    guardarTabla(arrayTablas);
    
    
    

}
window.onload = function() {
    cargarTabla();
};
function borrarCelda(i,j) {
    var miCelda=document.getElementsByTagName('table')[0].childNodes[i].childNodes[j];
    miCelda.innerText='';
}
function guardarTabla(arrTabla) {
    localStorage.tabla = JSON.stringify(arrTabla);
}

function cargarTabla(){
    if (localStorage.tabla) {
        for(let tabla of JSON.parse(localStorage.tabla))
            ejercicio4(tabla.filas,tabla.columnas,tabla.color,document.body);
        
    }
}


//ejercicio4(5,4,'red',document.body);

//-----------
//EJERCICIO 5
//-----------
function ejercicio5(){
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Anno', 'Poblacion', { role: 'style' }],
    ['2017', 14252, 'opacity:0.2;color:green' ],
    ['2018', 23360, 'opacity:0.4;color:green'  ],
    ['2019', 40421, 'opacity:0.5;color:green'  ],
    ['2020', 43500, 'opacity:0.8;color:green'  ]
 ]);

var options = {'title':'Evolucion de la poblacion de Navalcarnero',
                'width':700,
                'height':300,                
                'backgroundColor':'lightblue',
                animation:{
                    duration: 5000,
                    startup:true,
                    easing: 'out',
                  }
            };

var table = new google.visualization.ColumnChart(document.getElementById('eje'));

table.draw(data, options);
}
}