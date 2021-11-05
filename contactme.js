
class Usuario{
    constructor( company, email, telefono, roleName, diasContrato ){

    
        this.company = company; 
        this.email = email;
        this.telefono = telefono;
        this.roleName = roleName;
        this.diasContrato = diasContrato;
        
    }

    
}


let ofertas = [];


function nuevosDatos(e) {
        
    e.preventDefault();
    
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
        
        

        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Oh oh! There was an issue on the data provided. Please, try again";
        titulo.appendChild(parrafo);

        parrafo.style.color = "red";
        parrafo.style.fontSize = "30px";
        parrafo.style. marginTop = "10px"
        parrafo.style.fontFamily = "Trebuchet MS";
        parrafo.style.fontWeight = "700px"
        parrafo.style.textAlign ="center";


        let foto = document.querySelector("img");
        foto.src = "Imagenes/error.png";
        foto.style.width = "100%"
        foto.style.height = "80%"
        foto.style.margin = "0px"

        

        
    }
    else if ((parseInt(contract.value) >= 700)) {

        let parrafo = document.createElement("p");
        parrafo.innerHTML = "I cannot commit to " + parseInt(contract.value) +  " days of contract. Nevertheless, I am willing to negotiate. I will be reaching out to you via email. Thanks!";
        titulo.appendChild(parrafo);

        parrafo.style.color = "red";
        parrafo.style.fontSize = "30px";
        parrafo.style. marginTop = "10px"
        parrafo.style.fontFamily = "Trebuchet MS";
        parrafo.style.fontWeight = "700px"
        parrafo.style.textAlign ="center";


        let foto = document.querySelector("img");
        foto.src = "Imagenes/negotiate.jpg";
        foto.style.width = "100%"
        foto.style.height = "80%"
        foto.style.margin = "0px"

       
    }
    else{
        
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Your application has been sent successfully";
        titulo.appendChild(parrafo);

        
        parrafo.style.color = "green";
        parrafo.style.fontSize = "30px";
        parrafo.style. marginTop = "10px"
        parrafo.style.fontFamily = "Trebuchet MS";
        parrafo.style.fontWeight = "700px"
        parrafo.style.textAlign ="center";
       

        let foto = document.querySelector("img");
        foto.src = "Imagenes/succesful.jpg";
        foto.style.width = "150%"
        foto.style.height = "100%"
        foto.style.margin = "0px"


        
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
