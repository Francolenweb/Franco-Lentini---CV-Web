
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
    
// rompi la matrix no funciona mas el array. Se sobrescriben los datos

function nuevosDatos(e) {
        
    e.preventDefault();
    
    let company = document.getElementById("company");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let role = document.getElementById("role");
    let contract = document.getElementById("contract");


    
    let usuario1 = new Usuario ( company.value, email.value , phone.value , role.value , parseInt(contract.value));
    console.log(usuario1)

    ofertas.push(usuario1)

    localStorage.setItem ("Nuevas Ofertas", JSON.stringify(ofertas))

    
    // no lee el primer IF
    
    if ((company.value == "Accenture") ||  (company.value == "accenture")) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Thanks for the offer! However, I am currently working at Accenture and want to migrate to an another company. Nevertheless, I appreciate your interest in me. Thanks!',
          })
    }
    else if (company.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, insert the name of the company',
            
          })
    } 
    else{
        
        Swal.fire({
            icon: 'success',
            title: 'Offer submited successfully!',
            text: 'Thanks!. I will analyse the offer, and be reaching out to you via email at: ' + email.value + ' or via phone: '+ phone.value + ' for a final decision. Thanks for your time!',
        
        })
    };


    if (parseInt(contract.value) >= 700) {
        
        Swal.fire({
            title: 'Let´s talk about it!',
            text: 'I cannot commit to ' + parseInt(contract.value) + ' days of contract. Nevertheless, I am willing to negotiate. I will be reaching out to you via email. Thanks!',
            imageUrl: 'Imagenes/negotiate.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    else{
        Swal.fire({
            title: 'Sweet!',
            text: 'The contract days adjust to my expectations!',
            imageUrl: 'Imagenes/ok.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }

    

    return usuario1;

    
}


    let nuevoUsuario = document.getElementById("nuevoUsuario");
    nuevoUsuario.addEventListener("click" , nuevosDatos);
   






function enviado(e) {
    e.preventDefault();

    let avisoMail = document.getElementById("fotoEnvio");
    
    

    if (avisoMail.value != "") {
        
        

        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Email has been sent successfully!";
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
    else{
        

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

}


    let check = document.getElementById("check");
    check.addEventListener("click" , enviado);
