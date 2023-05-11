# Desafío Veterinaria

El código del programa `operaciones` cuenta con dos funciones: 
* `registrar`: en donde se registran las citas de la veterinaria, ingresando cinco argumentos: nombre, edad, tipo, color y enfermedad. Se utiliza el método `writeFileSync` para guardar las citas en el archivo `citas.json`.
* `leer`: lee los registros de las citas de la veterinaria. Se utiliza el método `readFileSync`.

Finalmente, se exportan los módulos de `registrar` y `leer`.

El código del archivo `index.js` importa las funciones de `registrar` y `leer`, y permite interactuar con el usuario a través de la terminal:

* Para leer las citas registradas, se escribe en la terminal `node index.js leer`.
* Para registrar una cita, se escribe en la terminal `node index.js registrar nombre edad tipo color enfermedad`. Por ejemplo, para registrar una cita para un perro llamado Max que tiene 5 años, es de color marrón y tiene una enfermedad desconocida, se debe escribir lo siguiente:

  ```
  node index.js registrar Max 5 perro marrón desconocida
  ```

  Luego, presionar Enter para ejecutar el comando.

Si todo ha salido bien, el programa mostrará un mensaje "registro exitoso".