let numInput: number = Number(prompt("Ingrese número 1:"));
let mayor: number = numInput;
while (numInput != 0) {
  numInput = Number(prompt("Ingrese número:"));
  if (numInput > mayor) {
    mayor = numInput;
  }
}
alert("El número mayor es " + mayor);
