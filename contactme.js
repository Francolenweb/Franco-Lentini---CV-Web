
class Usuario {
    constructor(company, email, telefono, roleName, contract, description) {


        this.company = company;
        this.email = email;
        this.telefono = telefono;
        this.roleName = roleName;
        this.contract = contract;
        this.description = description
    }


}

class Reservas {
    constructor(usuario, fecha) {


        this.usuario = usuario;
        this.fecha = fecha;

    }


}


// Usar "francolen@gmail.com" para entrar como admin y visualizar el Dashboard

async function login() {

    const { value: loginEmail } = await Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
    })

    if (loginEmail == 'francolen@gmail.com') {
        Swal.fire({
            title: '<strong>Admin Access Granted! </strong>',
            icon: 'info',
            html:
                'Use this link to see further information, ' +
                '<a href="dashboard.html" target="_blank">Dashboard</a> ',

        });
    }
    else {
        Swal.fire(`Login successfull!`, '', 'success')
    };
};


let entrar = document.getElementById("adminstrador");
entrar.addEventListener("click", login);







let ofertas = [];


// Propuestas
function guardar(e) {

    e.preventDefault();



    let company = document.getElementById("company");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let role = document.getElementById("role");
    let contract = document.getElementById("contract");
    let description = document.getElementById("floatingTextarea2");

    let usuario1 = new Usuario(company.value, email.value, phone.value, role.value, parseInt(contract.value), description.value);




    ofertas.push(usuario1);

    
    guardarL("Nuevas Ofertas", ofertas)

};

function guardarL(key,value) {
    localStorage.setItem(key,JSON.stringify(value))
}


function nuevosDatos(e) {

    e.preventDefault()

    let company = document.getElementById("company");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let role = document.getElementById("role");
    let contract = document.getElementById("contract");
    let description = document.getElementById("floatingTextarea2");


    if ((parseInt(contract.value) >= 700)) {

        Swal.fire({
            title: 'Lets negotiate!',
            text: 'I cannot commit to ' + parseInt(contract.value) + ' days of contract. Nevertheless, I am willing to negotiate. I will be reaching out to you via email. Thanks!',
            imageUrl: 'Imagenes/negotiate 2.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });

        company.value = "";
        email.value = "";
        phone.value = "";
        role.value = "";
        contract.value = "";
        description.value = "";



        $("#foto").attr("src", "Imagenes/negotiate.jpg");
        $("#foto").css({
            "height": "75%",
            "width": "100%",
            "margin-top": "10px",

        });





    }
    else {



        company.value = "";
        email.value = "";
        phone.value = "";
        role.value = "";
        contract.value = "";
        description.value = "";

        $("#foto").attr("src", "Imagenes/succesful.jpg");
        $("#foto").css({
            "height": "80%",
            "width": "100%",
            "margin-top": "10px",
            "background-position": "cover",

        });


        Swal.fire({
            icon: 'success',
            title: 'Your application has been sent successfully',
            showConfirmButton: false,
            timer: 1500
        });




    }



};

let nuevoUsuario = document.getElementById("nuevoUsuario");
nuevoUsuario.addEventListener("submit", guardar);
nuevoUsuario.addEventListener("submit", nuevosDatos);



//Reservas





function confirmarReserva(e) {

    e.preventDefault();

    let hoy = new Date().toISOString();
    let fecha = document.getElementById("fecha");
    let usuario = document.getElementById("usuario");





    if ((fecha.value <= hoy)) {

        usuario.value = "";
        fecha.value = "";

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'It´s not possible to select that date. Please, select another date and time. Apologies for the inconvenience ',

        })
    }
    else {



        Swal.fire({
            title: 'Time locked successfully!',
            text: 'Thanks! Your reservation has been placed successfully on ' + fecha.value + ' . I´m looking forward to speak with you!',
            imageUrl: 'Imagenes/ok.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',

        });

        let datosReserva = new Reservas(usuario.value, fecha.value);

        let local = JSON.parse(localStorage.getItem("Nuevas Reservas"))

        if (local) {
            local.push(datosReserva)

            localStorage.setItem("Nuevas Reservas", JSON.stringify(local));
        }
        else {
            let listaReservas = [];
            listaReservas.push(datosReserva);
            localStorage.setItem("Nuevas Reservas", JSON.stringify(listaReservas));
        }

        usuario.value = "";
        fecha.value = "";


    }

    return fecha.value

};

let nuevaReserva = document.getElementById("nuevaReserva");
nuevaReserva.addEventListener("submit", confirmarReserva);

// Cambio de Lenguaje

function lenEspanol() {

    $("#parrafo").html("Ingresa tu email y reserva una fecha!")
    $("#titulo").html("<h1 >Reserva tiempo para hablar conmigo!</h1><h3 >Usa como referencia el calendario de abajo</h3>")
    $("#bt1").html("Reservar Fecha")
    $("#proposal").html("Enviar una propuesta")
    $("#cn").html("Empresa")
    $("#telefono").html("Telefono")
    $("#np").html("Nombre de Puesto")
    $("#cd").html("Días de Contrato")
    $("#rd").html("Descripcíon del Puesto")
    $("#ss").html("Enviar")
    $("#txt").html("Envia tu Propuesta!")

}

let cambiarEspanol = document.getElementById("cambiarEspanol");
cambiarEspanol.addEventListener("click", lenEspanol)



function lenIngles() {

    $("#parrafo").html("Enter your Email and save a date!")
    $("#titulo").html("<h1 >Reserve time to speak with me!</h1><h3 >Please, use as reference the calendar below.</h3>")
    $("#bt1").html("Set Date")
    $("#proposal").html("Send a proposal")
    $("#cn").html("Company Name")
    $("#telefono").html("Phone")
    $("#np").html("Role Name")
    $("#cd").html("Contract Days")
    $("#rd").html("Role Description")
    $("#ss").html("Submit")
    $("#txt").html("Send a Job Offer!")
}

let cambiarIngles = document.getElementById("cambiarIngles");
cambiarIngles.addEventListener("click", lenIngles)


// Animacion con Jquery

$('#proposal').click(function () {
    $('#bg').show('slow', function () {
        window.scrollTo(0, document.body.scrollHeight);
    });

});
