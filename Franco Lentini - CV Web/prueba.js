class Usuario{
    constructor( company, email, telefono, roleName, diasContrato ){

    
        this.company = company;
        this.email = email;
        this.telefono = telefono;
        this.roleName = roleName;
        this.diasContrato = diasContrato;
        
    }

    
}


    for( let i = 0 ; i < nuevosDatos.length ; i++){

        let usuarioNuevo = [ usuarioNuevo.value]

        console.log(usuarioNuevo)
    }

    


function nuevosDatos() {

    

    let usuario1 = new Usuario( company = prompt("Ingrese su compañía"), email = prompt("Ingrese su email"), telefono = prompt("Ingrese su numero de telefono"), roleName = prompt("Ingrese el nombre del puesto"), diasContrato = parseInt(prompt("Ingrese los dias que se necesita cubrir el rol")));



    localStorage.setItem ("Nuevas Ofertas", JSON.stringify(usuario1))

    
    
    if ((this.company == "Accenture") ||  (this.company == "accenture")) {
        alert("Gracias por la oferta! Sin embargo, actualmente trabajo para Accenture y estoy interesado de cambiar de empresa. De todas maneras, agradezco el contacto. Gracias!");
    }
    else if (this.company == "") {
        alert("No he podido registrar tu compañia. Por favor vuelva a ingresar sus datos. Gracias");
    } 
    else{
        alert("Gracias!. Estaré procesando la oferta y te contactare a " + this.email + " o a este telefono "+ this.telefono + " en caso de que la oferta me interese. Gracias por tu tiempo!");
    };


    if (this.diasContrato >= 700) {
        alert("Actualmente, no me puedo comprometer a " + this.diasContrato + " dias de contrato. Sin embargo, estoy dispuesto a negociar. Te estare contactando a " + this.email + ". Gracias!")
    }
    else{
        alert("Los dias de la oferta se ajustan a mi busqueda!")
    }

    

    return usuario1;

    
}


function validar(){

    let nombreUsuario = document.getElementById("nombreUsuario");
    

   
    if( nombreUsuario.value != "" ){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Bienvenido/a, " + nombreUsuario.value + "!";

        parrafo.style.color = "white";
        parrafo.style.backgroundColor = "black";
        parrafo.style.fontSize = "30px";
        parrafo.style. marginTop = "10px"
        parrafo.style.fontFamily = "Trebuchet MS";
        parrafo.style.fontWeight = "700px"
        parrafo.style.textAlign ="center";
        console.log( parrafo);
        let mensaje = document.getElementById("mensaje");
        mensaje.appendChild( parrafo );
        



    }
    else{
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "No pudimos registrar su nombre. Vuelva a ingresar su nombre";

        parrafo.style.color = "white";
        parrafo.style.backgroundColor = "black";
        parrafo.style.fontSize = "30px";
        parrafo.style. marginTop = "10px"
        parrafo.style.fontFamily = "Trebuchet MS";
        parrafo.style.fontWeight = "700px"
        parrafo.style.textAlign ="center";
        console.log( parrafo);
        let mensaje = document.getElementById("mensaje");
        mensaje.appendChild( parrafo );
    }


   

}
