fechaHoy = new Date();

document.write(`${fechaHoy} <br>`);

fecha85 = new Date(fechaHoy.setDate(fechaHoy.getDate() + 85));

document.write(`${fecha85} <br>`);

fecha187 = new Date(fechaHoy.setDate(fechaHoy.getDate() - 187));

document.write(`${fecha187} <br>`);

document.write(`${new Date(fecha85.setFullYear(fecha85.getFullYear() + 2))} <br>`);

document.write(`${new Date(fecha187.setHours(fecha85.getHours() - 24))} <br>`);

fechaResto = new Date(fecha85 - fecha187);

document.write(fechaResto);

