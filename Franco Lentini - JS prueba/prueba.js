let votoUsuario;
let votosB = 0;
let votosR = 0;
let votoVacio = 0;
let muestra = 0;

do {
  votoUsuario = prompt("Que equipo es más grande: Boca(B) O River(R)");
  muestra = votosB + votosR + votoVacio

  if (votoUsuario == "B" || votoUsuario == "Boca") {
    alert("VOTO Boca");
    votosB = votosB + 1;
  } 
  
  else if (votoUsuario == "R" || votoUsuario == "River") {
    alert("VOTO River");
    votosR = votosR + 1;
  } 
  
  else {
    alert("VOTO EN BLANCO");
    votoVacio = votoVacio + 1
  }

} while (muestra <=10);



if (votosB < 5 || votosR < 5) {
  
  if (votosB > votosR) {
    console.log("VOTOS Boca: " + votosB);
    console.log("VOTOS River: " + votosR);
    console.log("Votos en Blanco: " + votoVacio);
    console.log("GANO Boca. " + "Cantidad de votos: " + muestra);
    
  } 
  
  else if (votosR > votosB) {
    console.log("VOTOS Boca: " + votosB);
    console.log("VOTOS River: " + votosR);
    console.log("Votos en Blanco: " + votoVacio);
    console.log("GANO River. " + "Cantidad de votos: " + muestra);
   
  } 
  
  else {
    console.log("VOTOS Boca: " + votosB);
    console.log("VOTOS River: " + votosR);
    console.log("Votos en Blanco: " + votoVacio);
    console.log("Empate. " + "Cantidad de votos: " + muestra);
    
  }
}
