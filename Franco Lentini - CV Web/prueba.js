
class autos{
    constructor( modelo , ID , precio, stock){

        this.modelo = modelo;
        this.ID = ID;
        this.precio = precio;
        this.stock = stock;


    }

}



let modelo = [ "Chevrolet" ,"Ford", "Peugot" , "Audi" ];
let ID = [ 000 , 001 , 002, 003 ];
let precio =[750000, 1200000 , 3000000 ,6000000  ];
let stock = [ 15 , 10 , 7, 5 ];

modelo.push("BMW");
ID.push(004);
precio.push(5000000);
stock.push(3);

let totalPrecio = 0;
let totalStock = 0;

for (let i = 0; i < precio.length; i++) {
    totalPrecio += precio[i];
}


for (let i = 0; i < stock.length; i++) {
    totalStock += stock[i];
}

function Inventario (totalPrecio, totalStock) {
    return totalPrecio * totalStock
}

let inventarioFinal = Inventario(totalPrecio, totalStock)





console.log(

    "La concecionaria cuenta con un total de " + totalStock + " autos. Entre ellos encontramos: " + modelo +  ". Donde todos juntos estan valuados en: $" + totalPrecio + ". Por lo que la compañía cuenta con un total de activos de: $" + inventarioFinal + " pesos."

)

let dineroDisponible = prompt("Ingrese su dinero disponible (sin comas y espacios). Nota: Nuestra cartera posee autos de $700,000 a $10,000,000 pesos.")

if(dineroDisponible <= 2000000){
 
 console.log("Con $" + dineroDisponible + "Puede acceder a nuesta gama Baja de vehiculos! Entre ellos se encuentran " + modelo[0] + ", " + modelo[1] + ". Contactese con nuestros vendedores! ")
}

else if(dineroDisponible > 2000000 && dineroDisponible <= 3000000){
    console.log("Con $" + dineroDisponible + "Puede acceder a nuesta gama Media de vehiculos! Entre ellos se encuentran " + modelo[2] + ", " + modelo[4] + ". Contactese con nuestros vendedores! ")

}
else{
    console.log("Con $" + dineroDisponible + ". Puede acceder a nuesta gama Alta de vehiculos! Entre ellos se encuentran " + modelo[3] + ". Contactese con nuestros vendedores!")
}