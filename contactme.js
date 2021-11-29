// Tener en cuenta que el dies;o no esta terminado. Quiero tener bien las funciones y despues ver como armarlos bien :


class Usuario{
    constructor( company, email, telefono, roleName, contract, description ){

    
        this.company = company; 
        this.email = email;
        this.telefono = telefono;
        this.roleName = roleName;
        this.contract = contract;
        this.description = description
    }

    
}

class Reservas{
    constructor( usuario, fecha ){

    
        this.usuario = usuario; 
        this.fecha = fecha;

    }

    
}


let ofertas = [];


function guardar(e) {

    e.preventDefault();

    

    let company = document.getElementById("company");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let role = document.getElementById("role");
    let contract = document.getElementById("contract");
    let description = document.getElementById("floatingTextarea2");

    let usuario1 = new Usuario ( company.value, email.value , phone.value , role.value , parseInt(contract.value), description.value);
    
        


    ofertas.push(usuario1);

    localStorage.setItem ("Nuevas Ofertas", JSON.stringify(ofertas));

    
};




function nuevosDatos(e) {
        
    e.preventDefault()
    
    let company = document.getElementById("company");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let role = document.getElementById("role");
    let contract = document.getElementById("contract");
    let description = document.getElementById("floatingTextarea2");
    
    
    if ((parseInt(contract.value) >= 700)){

        Swal.fire({
            title: 'Lets negotiate!',
            text: 'I cannot commit to ' + parseInt(contract.value) +  ' days of contract. Nevertheless, I am willing to negotiate. I will be reaching out to you via email. Thanks!',
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
    else{



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
    nuevoUsuario.addEventListener("submit" , guardar);
    nuevoUsuario.addEventListener("submit" , nuevosDatos);
   


    //Reservas

    let listaReservas = [];

    function guardarReservas(e) {

        e.preventDefault();
    
        
        let usuario = document.getElementById("usuario");
        let fecha = document.getElementById("fecha")
        
    
        let datosReserva = new Reservas ( usuario.value, fecha.value );
    
    
        listaReservas.push(datosReserva);
    
        localStorage.setItem ("Nuevas Reservas", JSON.stringify(listaReservas));
    
        
    };

    // problema se submite 3 veces y no se guarda la fecha que se elige

    $("#check").on("click", function(e){

        e.preventDefault();
        
        let hoy = new Date().toISOString();
        let fecha = document.getElementById("fecha");
        let usuario = document.getElementById("usuario");





        if (( fecha.value <= hoy)){

            usuario.value = "";
            fecha.value = "";
    
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'It´s not possible to select that date. Please, select another date and time. Apologies for the inconvenience ',
                
              })
        }
        else{

            

            Swal.fire({
                title: 'Time locked successfully!',
                text: 'Thanks! Your reservation has been placed successfully on ' + fecha.value +' . I´m looking forward to speak with you!',
                imageUrl: 'Imagenes/ok.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            
            });
    
            usuario.value = "";
            fecha.value = "";
        }
    
    });

    let nuevaReserva = document.getElementById("nuevaReserva");
    nuevaReserva.addEventListener("submit" , guardarReservas);

    // Armar cambio de lenguaje


    // Animacion con Jquery
    
    $('#proposal').click(function() {
        $('#bg').show('slow', function() {
            window.scrollTo(0,document.body.scrollHeight) ;
        });
        
      });


      // mi kriptonita: diseno. Pedir consejos a la profe para mejorar el diseno de la pag