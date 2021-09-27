let votosB = parseInt(0);
let votosR = parseInt(0);

for( let i = 0 ; i < 10 ; i++){

    let votoUsuario = prompt("Que equipo es más grande: Boca(B) O River(R)");
    
    if(( votoUsuario == "B") || (votoUsuario == "Boca")){

        alert("VOTO Boca");
        votosB = votosB + 1;
    }

    else if(( votoUsuario == "R") || (votoUsuario == "River")){​
        alert("VOTO River");
        votosR = votosR + 1;

    }
    else{
        alert("VOTO EN BLANCO");
    }
}

if( votosB > votosR){
        console.log("VOTOS Boca: " + votosB);
        console.log("VOTOS River: " + votosR);
        console.log("GANO Boca ");
    }
    
    else if( votosR > votosB){
    
        console.log("VOTOS Boca: " + votosB);
        console.log("VOTOS River: " + votosR);
        console.log("GANO River ");

    }
    else{

        console.log("VOTOS Boca: " + votosB);
        console.log("VOTOS River: " + votosR);
        console.log("EMPATE");
    }
