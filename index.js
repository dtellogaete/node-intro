/* Importar los modulos  */
const { registrar, leer } = require('./operaciones');

/* Captura de registros desde la consola */
const operacion = process.argv.slice(2)[0];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
    
} else if(operacion === "leer"){
    leer()
} else {
    console.log('Solo se permiten dos operaciones "registrar" y "leer" ');
}