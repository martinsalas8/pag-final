var mostrado = false;

function clickIcono() {
    if (mostrado) {
        $("#nav_contenedor").removeClass("expandido")
        mostrado = false
        //document.getElementById('nav_contenedor').class = ''
    } else {
        $("#nav_contenedor").addClass("expandido")
        mostrado = true
        
        //document.getElementById('nav_contenedor').classList.add('expandido')
    }
}


$('#menu-icon').click(clickIcono);



$(".row").hover(
    function() {
        $( this ).addClass( "hover" );
    },
    function() {
        $( this ).removeClass( "hover" );
    }
)