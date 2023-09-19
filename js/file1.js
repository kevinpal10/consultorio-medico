console.log("Toy ejecutando...");

window.onload = function(){
var imagenes = ["./css/img/medicos.jpg","./css/img/especialidades.jpg",
    "./css/img/cita.jpg","./css/img/ubicacion.jpeg",
    "./css/img/contactanos.jpg"
];
cont=0;

function carrousel(contenedor){
    contenedor.addEventListener('click', e =>{
        console.log(imagenes)
        let atras = contenedor.querySelector('atras');
        let adelante = contenedor.querySelector('adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;
    });

    if(tgt == atras){
        if(cont > 0){
            img.src = imagenes[cont - 1];
            cont--;
        }else{
            img.src = imagenes[imagenes.length - 1];
            cont = imagenes.length - 1;
        }
    }else if(tgt == adelante){
        if(cont < imagenes.length - 1){
            img.src = imagenes[cont + 1];
            cont++;
        }else{
            img.src = imagenes[0];
            cont = 0;
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor = document.querySelector(".caja-header");
    console.log("caja")
    carrousel(contenedor);
})



}


