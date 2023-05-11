const fs = require('fs');

/* Función de Registrar */
const registrar = (nombre, edad, tipo, color, enfermedad) =>{
    const data ={
        "nombre": nombre,    
        "edad": edad,    
        "tipo": tipo,    
        "color": color,    
        "enfermedad": enfermedad
    }
    try {        
        const citasJson = fs.readFileSync('citas.json', 'utf-8');       

        if (citasJson !== '') {
            // En caso de tener registros existentes los captura y agrega el registrado en data, 
            const citas = JSON.parse(citasJson);
            citas.push(data);
            fs.writeFileSync('citas.json', JSON.stringify(citas));
            console.log("registro exitoso");
        } else {
            // Si el archivo citas.json esta vacío escribe un registro
            fs.writeFileSync('citas.json', JSON.stringify([data]));
            console.log("registro exitoso");
        }
    } catch (error) {
        // Crea el archivo citas.json en caso de no exitir
        fs.writeFileSync('citas.json', JSON.stringify([data]));
        console.log("registro exitoso");
    }   
}

/* Función de Leer */
const leer = () => {
    try {
      const read = fs.readFileSync('./citas.json', 'utf-8');
      const readJson = JSON.parse(read);
        readJson.forEach((cita) => {
        console.log(`
            Nombre: ${cita.nombre}
            Edad: ${cita.edad}
            Tipo: ${cita.tipo}
            Color: ${cita.color}
            Enfermedad: ${cita.enfermedad}
        `);
        });
    } catch {
      console.log('No hay citas registradas');
    }
  };  

/* Exporta los modulos */
module.exports = { leer, registrar };