$(document).ready(function(){
    
    //Alto del marco actual
    var ventana_alto = window.innerHeight;
    document.getElementById("dPresentacionPrincipal").style.height = ventana_alto+"px";
    console.log(ventana_alto);

    //animacion de botón
    var click = 0;
    $(".botonMenu").click(function(){
        if(click == 0){ 
            click = 1;
            $("#linea1").css({
                    transform: "rotate(45deg) translate(14px, 17px)"
            });
            $("#linea2").css({
                    opacity: "0"
            });
            $("#linea3").css({
                    transform: "rotate(-45deg) translate(7px, -9px)"
            });
        } else {
                click = 0;
                $("#linea1").css({
                        transform: "rotate(0deg) translate(0, 0)"
                });
                $("#linea2").css({
                        opacity: "1"
                });
                $("#linea3").css({
                        transform: "rotate(0) translate(0, 0)"
                });
            }
    });
    

    //ANIMACION BOTON 2
    var anchor = document.querySelectorAll('button');
    [].forEach.call(anchor, function(anchor){
        var open = false;
        anchor.onclick = function(event){
            event.preventDefault();
            if(!open){
                this.classList.add('open');
                open = true;
            }else{
                this.classList.remove('open');
                open = false;
            }
        }
});
    
});