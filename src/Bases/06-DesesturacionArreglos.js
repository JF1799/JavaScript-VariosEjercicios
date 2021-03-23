//Desestructuración de Arreglos

const personajes = ["bataman", "Vegeta", "iroman"];

const [, , p2] = personajes;

console.log(p2);

const retormnarArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retormnarArreglo();
console.log(letras, numeros);
