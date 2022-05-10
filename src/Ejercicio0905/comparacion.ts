let numInput: number = Number(
  prompt("Ingrese número. Para finalizar ingrese 0")
);
let mayor: number = numInput;
while (numInput != 0) {
  numInput = Number(prompt("Ingrese números.Para finalizar ingrese 0."));
  if (numInput > mayor && numInput != 0) {
    mayor = numInput;
  }
}
alert("El número mayor es " + mayor);
