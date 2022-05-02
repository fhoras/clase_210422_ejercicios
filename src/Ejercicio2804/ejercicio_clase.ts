let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

//let base: number = Number(dato1.value);

btnDatos1.addEventListener("click", () => {
  console.log("El base ingresa es: " + dato1.value);
});

//let altura: number = Number(dato2.value);

btnDatos2.addEventListener("click", () => {
  console.log("La altura ingresa es: " + dato2.value);
});

//let area: number = Number(base * altura);

resultado.addEventListener("click", () => {
  console.log("El área es: " + dato2.value * dato1.value);
});
