/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    cargarTabla();

});

$(document).on('click', '#btn-Editar', function () {
    var boton = document.getElementById('btnenviar');
    boton.innerHTML = 'Editar';

    var fila = $(this).closest("tr");
    var ida = fila.find("td:eq(0)").text();
    var dorsal = fila.find("td:eq(2)").text();
    var edad = fila.find("td:eq(3)").text();
    var nombre = fila.find("td:eq(4)").text();
    
    $('#txtDorsal').val(dorsal);
    $('#txtNombre').val(nombre);
    $('#txtEdad').val(edad);



    alert("  Id  "+ida +"  Dorsal  "+ dorsal +"  Edad  "+ edad +"  Nombre  "+ nombre);
    
    alert("JUGADORES ACTUALIZADOS");
});


$(document).on('click', '#btn-Eliminar', function () {

    var repuesta = confirm("¿Realmente desea eliminar?");
    if (repuesta) {
        var fila = $(this).closest("tr");
        var idv = fila.find("td:eq(0)").text();
        $.post('NewServlet2?menu=players', {accion: "eliminar", id: idv},
                function (response) {
                    cargarTabla();
                    alert(response);
                });
    } else {
        alert("No elimino Jugador");
    }
});

$(document).on('click', '#btn-Actulizar', function () {
    var boton = document.getElementById('btnenviar');
    var respuesta =  confirm("¿deseas acatualizar datos");
    if (repuesta){
    var fila = $(this).closest("tr");
    var idv = fila.find("td:eq(0)").text();
    $.post('NewServlet2?menu= players',{accion:"eliminar",id:idv},
    function (response){
        cargarTabla();
        alert(response);
        alert("JUGADOR ACTUALIZADO");
    });
    }
    else{
        alert("jugador no actualizado");
    boton.innerHTML = 'Editar';

    var fila = $(this).closest("tr");
    var ida = fila.find("td:eq(0)").text();
    var dorsal = fila.find("td:eq(2)").text();
    var edad = fila.find("td:eq(3)").text();
    var nombre = fila.find("td:eq(4)").text();
    $('#txtNombre').val(nombre);
    $('#txtDorsal').val(dorsal);
    $('#txtEdad').val(edad);
    }
    });









function limpiar() {


}
function cargarTabla() {
    $.post('NewServlet2?menu=players', {accion: "listar"},
            function (response) {
                var tabla = "";
                // console.log(Object.values(response).map(({ value}) => value));
                //console.log(response);
                var i = 1;
                response.forEach(function (pl) {
                    tabla += '<tr>';
                    tabla += '<td hidden="true">' + pl.id + '</td>';
                    tabla += '<td>' + i + '</td>';
                    tabla += '<td>' + pl.dorsal + '</td>';
                    tabla += '<td>' + pl.edad + '</td>';
                    tabla += '<td>' + pl.Nombre + '</td>';
                    tabla += '<td>' + '<a class="btn btn-danger"  id="btn-Eliminar">Eliminar</a>' + '</td>';
                    tabla += '<td>' + '<a class="btn btn-warning"  id="btn-Editar">Editar</a>' + '</td>';
                    tabla += '</tr>';
                    i = i + 1;
                });
                $('#tb-players').html(tabla);
            });
}






function guardar_editar() {
//alert("Hola me estoy enviando a la vista");
    var boton = document.getElementById('btnenviar');
    if (boton.innerHTML === 'Enviar') {
        var equipo = {}; //declarando un objeto
        var jugadores = [];
        equipo.jugadores = jugadores;
        //console.log(nuncamis +" es la camisera");

        //console.log('hola estoy enviando a la consola'); para ver desde el controlador

        var dorsal = document.getElementById("txtDorsal").value;
        //console.log(nuncamis +" es la camisera");
        var nombre = document.getElementById("txtNombre").value;
        var edad = document.getElementById("txtEdad").value;
        //document.getElementById("txtDorsal").value = "5";
        //document.getElementById("txtNombre").value = "Iniesta";
        //document.getElementById("txtEdad").value="30";
        var jugador = {
            "dorsal": dorsal,
            "nombre": nombre,
            "edad": edad
        };
        equipo.jugadores.push(jugador);
        // var tecnico= "Reinaldo";
        //equipo.jugadores[0].tecnico=tecnico;
//console.log(jugador);
        var jsonString = JSON.stringify(equipo);
        //console.log(jsonString);
        $.post('NewServlet2?menu=players',
                {json2: jsonString,
                    accion: "guardar"},
                function (response) {
                    //console.log(response);
                    alert(response);
                    /* document.getElementById("txtNombre").value =response;
                     document.getElementById("txtDorsal").value ="";
                     document.getElementById("txtEdad").value ="";*/
                });
        //console.log(jsonString);
//alert(jsonString);
        cargarTabla();
        cargarTabla();
    } else {

        var boton = document.getElementById('btnenviar');
        boton.innerHTML = 'Enviar';
        //IMPLEMENTAR LA ACTALIZACION
        var dorsal = document.getElementById("txtDorsal").value;
        //console.log(nuncamis +" es la camisera");
        var nombre = document.getElementById("txtNombre").value;
        var edad = document.getElementById("txtEdad").value;

        $('#txtNombre').val("");
        $('#txtDorsal').val("");
        $('#txtEdad').val("");
        
        
        cargarTabla();
    }
}



function actualizar() {
//alert("Hola me estoy enviando a la vista");
    var boton = document.getElementById('btnenviar');
    if (boton.innerHTML === 'Enviar') {
        var equipo = {}; //declarando un objeto
        var jugadores = [];
        equipo.jugadores = jugadores;
        //console.log(nuncamis +" es la camisera");

        //console.log('hola estoy enviando a la consola'); para ver desde el controlador

        var dorsal = document.getElementById("txtDorsal").value;
        //console.log(nuncamis +" es la camisera");
        var nombre = document.getElementById("txtNombre").value;
        var edad = document.getElementById("txtEdad").value;
        //document.getElementById("txtDorsal").value = "5";
        //document.getElementById("txtNombre").value = "Iniesta";
        //document.getElementById("txtEdad").value="30";
        var jugador = {
            "dorsal": dorsal,
            "nombre": nombre,
            "edad": edad
        };
        equipo.jugadores.push(jugador);
        // var tecnico= "Reinaldo";
        //equipo.jugadores[0].tecnico=tecnico;
//console.log(jugador);
        var jsonString = JSON.stringify(equipo);
        //console.log(jsonString);
        $.post('NewServlet2?menu=players',
                {json2: jsonString,
                    accion: "actualizar"},
                function (response) {
                    //console.log(response);
                    alert(response);
                    /* document.getElementById("txtNombre").value =response;
                     document.getElementById("txtDorsal").value ="";
                     document.getElementById("txtEdad").value ="";*/
                });
        //console.log(jsonString);
//alert(jsonString);
        cargarTabla();
        cargarTabla();
    } else {

        var boton = document.getElementById('btnenviar');
        boton.innerHTML = 'Enviar';
        //IMPLEMENTAR LA ACTALIZACION
        var dorsal = document.getElementById("txtDorsal").value;
        //console.log(nuncamis +" es la camisera");
        var nombre = document.getElementById("txtNombre").value;
        var edad = document.getElementById("txtEdad").value;

        $('#txtNombre').val("");
        $('#txtDorsal').val("");
        $('#txtEdad').val("");
        
        
        cargarTabla();
    }
}



