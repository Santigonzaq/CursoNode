//con esto traigo desde el archivo import, los module.export allá definidos
const {obtenerpromedio,argv}=require("./import");

if (argv._[0]=="promedio"){
    console.log("El promedio es: "+obtenerpromedio(argv.m,argv.p,argv.i))
}
else{
    console.log("Promedio no calculado")
}

console.log("hola")