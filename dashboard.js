
function llenarReserva(params) {


    let reservas = JSON.parse(localStorage.getItem("Nuevas Reservas"))
    console.log(reservas)

    if (!reservas) {
        $("#lista").append(`<h2>No hay nuevas reservas</h2>`)
        $("#lista").css({
            "font-size": "95%",
            "text-align": "start",
            "padding": "25px",
            

        });

        
    }
    else{

        for (let index = 0; index < reservas.length; index++) {

            const element = reservas;
        
            $("#lista").append(`<tr>
                <th scope="row">-</th>
                <td id="usuarioR">${reservas[index].usuario}</td>
                <td id="diaR">${reservas[index].fecha}</td>
              </tr>`);

              $("#lista").css({
                "font-family": "PT Sans Narrow",
                "font-weight": "300",});
              
        }

        $("#numeroR").append(`<h1" >${reservas.length}</h1>`);
        $("#numeroR").css({
            "font-family": "Oswald",
            "font-weight": "800",
            "font-size": "3rem",
            "text-align": "center",
            

        });
    }
    



};


llenarReserva();

function llenarOfertas() {


    let ofertas = JSON.parse(localStorage.getItem("Nuevas Ofertas"))
    console.log(ofertas)

    

    if (!ofertas) {
        $("#listaO").append(`<h2>No hay nuevas ofertas</h2>`)
        $("#listaO").css({
            "font-size": "95%",
            "text-align": "start",
            "padding": "25px",
            

        });

        
    }
    else{

        for (let index = 0; index < ofertas.length; index++) {

            const element = ofertas;
        
            $("#listaO").append(` <tr>
                <th>-</th>
                <th>${ofertas[index].company}</th>
                <th>${ofertas[index].contract}</th>
                <th>${ofertas[index].email}</th>
                <th>${ofertas[index].telefono}</th>
                <th>${ofertas[index].roleName}</th>
                <th>${ofertas[index].description}</th>
          </tr>`);

          $("#listaO").css({
            "font-family": "PT Sans Narrow",
            "font-weight": "500",});

        }

        $("#numeroO").append(`<h1" >${ofertas.length}</h1>`);
        $("#numeroO").css({
            "font-family": "Oswald",
            "font-weight": "800",
            "font-size": "3rem",
            "text-align": "center",
            

        });
    }
    



};


llenarOfertas();


