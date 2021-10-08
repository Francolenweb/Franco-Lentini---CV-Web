
class autos{
    constructor( modelo , ID , precio, stock){

        this.modelo = modelo;
        this.ID = ID;
        this.precio = precio;
        this.stock = stock;


    }

}



let modelo = [ "Agile" ,"Fiesta" , "TT" ];
let ID = [ 000 , 001 , 002 ];
let precio =[750000, 1200000 , 5000000  ];
let stock = [ 15 , 10 , 5 ];

modelo.push("BMW");
ID.push(003);
precio.push(3000000);
stock.push(3);





    console.log("El modelo de auto: " +  modelo[3])
    console.log("Esta disponible a solamente un precio de $" +  precio[3] + "!");
    console.log("No desaproveches esta oferta! Solamente quedan: " +  stock[3] + " autos.")
