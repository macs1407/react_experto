
// el operador ternario nos permite hacer un condicional corto
const activo = true;

let mensaje = activo ? 'Esta activo' : 'No esta activo';

console.log('mensaje: ', mensaje);

// si el activo es igual a true retorna 'Esta activo', es una manera rapida
// Si es falso no se ejecuta nada
let mensajeDos = (activo) && 'Esta activo';

console.log('mensajeDos: ', mensajeDos);