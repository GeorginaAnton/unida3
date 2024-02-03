$(document).ready(function(){

    mostrarDestacadosJSON();

  /*  $("#botonCerrar").click(function(){

        $("#aparrafo").hide("slow");
    })

    $("#botonBuscar").click(function(){

        $("#aparrafo").show("slow");
    });

    $("#botonCambiarTexto").click(function(){

        var parrafo1 = $("aparrafo");
        $("#aparrafo").empty();
        $("#aparrafo").append("Estos productos se basan en tus gustos");
    });

    $("#botonCambiarDiseno").click(function(){
       
        $("#aparrafo").addClass("parrafo1");
})*/
})

function mostrarDestacadosJSON(){
    $.ajax({
        type: 'GET',
        url: 'data/data1.json',
        dataType: "json",
        async: true,
        success: function(data){

            mostrarDestacados(data);
        }
    });
}

function mostrarDestacados(data){
    limpiar();

    for(let i=0; i<data.ProductosDestacados.length; i++){
        var desta = data.ProductosDestacados[i];
        crearProducto(desta);

    }
}

function crearProducto(desta){
    
    let div1 = $("<div></div>");
    div1.addClass("destacados");

    let nombre = $("<h3></h3>");
    nombre.append(desta.nombre);
    nombre.addClass("nombre");
    div1.append(nombre);

    let img = $("<img></img>");
    img.attr("src", desta.img);
    img.addClass("destacados-img");

    div1.append(img);

    let info = $('<p></p>');
    info.append(desta.info);
    info.addClass("info");

    div1.append(info);


    $("#PD").append(div1);
}



