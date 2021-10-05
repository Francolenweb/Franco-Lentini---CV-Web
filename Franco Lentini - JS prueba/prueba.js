let promedioFinal = 0;
let suma = 0;
let mayores = 0;
let menores = 0;

function promedio(){
    for (let i = 1; i <=5; i++){
        let edad = parseInt(prompt("Muestra: Ingrese Edad del candidato"));
        suma = suma + edad


        if(edad >=18){
            mayores = mayores + 1
           }
    
           else{
               menores = menores + 1
           }        
       }


       

       promedioFinal = suma / 5
       console.log(promedioFinal)
       return promedioFinal
 }

 alert("La edad promedio de los candidatos ingresados son de: " + promedio() + ". Donde contamos con " + mayores + " mayores y " + menores + " menores.");
