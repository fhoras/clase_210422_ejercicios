let usuario: string = "fabiola";
let clave: string = "nada.";
let pass: string = "";

for (let i = 0; i <= 3; i++) {
  pass = prompt("Ingrese la clave, usted intento " + i + " veces");
  if (pass == clave) {
    alert("Bienvenida " + usuario);
  } else {
    alert("Clave incorrecta. Intente de nuevo");
  }
}
