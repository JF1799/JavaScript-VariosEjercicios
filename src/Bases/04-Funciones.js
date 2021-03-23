// Funciones en JS

// const saludar = function saludar(nombre) {
//   return `Hola, ${nombre}`;
// };

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar2("Jeff"));
console.log(saludar3("Molina"));
// Funcion de Flechas!
const getUser = () => ({
  uid: "ABC123",
  usermane: "",
});

console.log(getUser());
// funcion
// function getUsuerioActivo(nombre){
// return{
//   id: 'ABD568',
//   usermane: nombre

// }
// };

// Funcion de Flecha
const getUsuerioActivo = (nombre) => ({
  id: "ABD568",
  usermane: nombre,
});
console.log(getUsuerioActivo("Jeff"));
