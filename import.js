
var opciones={
    matematicas:{demand:true, alias:"m"},
ingles:{demand:true,alias:"i"},
programacion:{demand:true,alias:"p"}};

const argv=require("yargs")
//con esto estoy diciendo que al decir el comando promedio, las variables que se ingresen, se van a referir a la definidad en la lista opciones que se tuvo que haber creado anteriormente
.command("promedio","calcular el promedio",opciones)
.argv;

//creo la función flecha
let obtenerpromedio=(nota_1,nota_2,nota_3)=>(nota_1+nota_2+nota_3)/3;

//creo la exportación de estas dos cosas, los yargs y la funcion
module.exports={obtenerpromedio,
argv};

