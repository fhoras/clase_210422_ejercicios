let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

//let base: number = Number(dato1.value);

let base: number = Number(
  btnDatos1.addEventListener("click", () => {
    console.log(dato1.value);
  })
);

//let altura: number = Number(dato2.value);

let altura: number = Number(
  btnDatos2.addEventListener("click", () => {
    console.log(dato2.value);
  })
);

let area: number = Number(base * altura);

if (isNaN(area)) {
  console.log("El valor ingresado no es número válido");
} else {
  resultado.addEventListener("click", () => {
    console.log("El área es: " + areas);
  });
}
