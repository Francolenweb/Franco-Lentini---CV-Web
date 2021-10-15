class Usuario{
    constructor( company, email, telefono, roleName, diasContrato ){

        this.company = company;
        this.email = email;
        this.telefono = telefono;
        this.roleName = roleName;
        this.diasContrato = diasContrato;
        


    }
}

function nuevosDatos() {


    new Usuario( prompt("Ingrese su compañía"), prompt("Ingrese su email"), prompt("Ingrese su numero de telefono"), prompt("Ingrese el nombre del puesto"), parseInt(prompt("Ingrese los dias que se necesita cubrir el rol")));

    localStorage.setItem ("Nuevas Ofertas", JSON.stringify(Usuario))


    if (this.company == "Accenture") {
        alert("Hola, actualmente trabajo para Accenture y estoy interesado de cambiar de empresa. De todas maneras, agradezco el contacto. Gracias!");
    }
    else if (this.company == "") {
        alert("No he podido registrar tu compañia. Por favor vuelva a ingresar sus datos. Gracias");
    } 
    else{
        alert("Excelente! Estaré procesando la oferta y te contactare a " + this.email + "o a este telefono "+ this.telefono + ". En caso, de que la oferta me interese. Gracias por tu tiempo!");
    };


    if (this.diasContrato >= 700) {
        console.log("Actualmente, no me puedo comprometer a " + this.diasContrato + " dias de contrato. Sin embargo, estoy dispuesto a negociar. Te estare contactando a " + this.email + ". Gracias!")
    }
    else{
        console.log("Los dias de la oferta se ajustan a mi busqueda!")
    }
}



