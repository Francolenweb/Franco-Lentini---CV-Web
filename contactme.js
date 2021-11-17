
class Usuario{
    constructor( company, email, telefono, roleName, contract ){

    
        this.company = company; 
        this.email = email;
        this.telefono = telefono;
        this.roleName = roleName;
        this.contract = contract;
        
    }

    
}


let ofertas = [];


function nuevosDatos(e) {
        
    e.preventDefault()
    
    let company = document.getElementById("company");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let role = document.getElementById("role");
    let contract = document.getElementById("contract");


    
    let usuario1 = new Usuario ( company.value, email.value , phone.value , role.value , parseInt(contract.value));
    console.log(usuario1);

    ofertas.push(usuario1);

    localStorage.setItem ("Nuevas Ofertas", JSON.stringify(ofertas));

    
    
    if ((ofertas.length == 0) ||(email.value == "") || (company.value == "") || (phone.value == "")) {
        
        let company = document.getElementById("company");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let role = document.getElementById("role");
        let contract = document.getElementById("contract");

        company.value = "";
        email.value = "";
        phone.value = "";
        role.value = "";
        contract.value = "";


        $("#foto").attr("src", "Imagenes/error.png");
        $("#foto").css({
            "height": "80%", 
            "width": "100%", 
            "margin": "0px", 
        
        });       

        $("p#txt").html('Oh oh! There was an issue on the data provided. Please, try again ');
        $("p#txt").css({
            "color": "red", 
            "font-size": "40px", 
            "margin-top": "10px", 
            "font-family": "Trebuchet MS", 
            "font-weight": "700px", 
            "text-align": "center",
        
        });
        
    }
    else if ((parseInt(contract.value) >= 700)) {

        let company = document.getElementById("company");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let role = document.getElementById("role");
        let contract = document.getElementById("contract");

        company.value = "";
        email.value = "";
        phone.value = "";
        role.value = "";
        contract.value = "";

        $("#foto").attr("src", "Imagenes/negotiate.jpg");
        $("#foto").css({
            "height": "80%", 
            "width": "100%", 
            "margin": "0px", 
        
        });       


        $("p#txt").html(' I cannot commit to ' + parseInt(contract.value) +  ' days of contract. Nevertheless, I am willing to negotiate. I will be reaching out to you via email. Thanks!');
        $("p#txt").css({
            "color": "red", 
            "font-size": "40px", 
            "margintop": "10px", 
            "font-family": "Trebuchet MS", 
            "font-weight": "700px", 
            "text-align": "center"
        });

       
    }
    else{

        let company = document.getElementById("company");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let role = document.getElementById("role");
        let contract = document.getElementById("contract");

        company.value = "";
        email.value = "";
        phone.value = "";
        role.value = "";
        contract.value = "";
        
        $("#foto").attr("src", "Imagenes/succesful.jpg");
        $("#foto").css({
            "height": "80%", 
            "width": "100%", 
            "margin": "0px", 
            "background-position": "cover",
        
        });       

    
        
        $("p#txt").html('Your application has been sent successfully');
        $("p#txt").css({
            "color": "green", 
            "font-size": "50px", 
            "margintop": "10px", 
            "font-family": "Trebuchet MS", 
            "font-weight": "700px", 
            "text-align": "center"
        });
        


    

    }
 

    return usuario1;
    
    
}


    let nuevoUsuario = document.getElementById("nuevoUsuario");
    nuevoUsuario.addEventListener("click" , nuevosDatos);
   





    $("#check").on("click", function(e){

        let hoy = new Date().toISOString();
        let dias = document.getElementById("dias");

        console.log(hoy);
        console.log(dias.value);



        if (( dias.value <= hoy)){
    
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'It´s not possible to select that date. Please, select another date and time. Apologies for the inconvenience ',
                
              })
        }
        else{
            Swal.fire({
                title: 'Time locked successfully!',
                text: 'Thanks! Your reservation has been placed successfully on ' + dias.value +' . I´m looking forward to speak with you!',
                imageUrl: 'Imagenes/ok.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            
            });
    
        }
    
    })
