// Promesa

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    // console.log("2 segundos despues");
  }, 2000);
});

promesa.then(() => {
  console.log("Then de la promesa");
});
