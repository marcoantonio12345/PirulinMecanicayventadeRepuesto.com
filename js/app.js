const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a'); 
const fecha = document.querySelector('.fecha');
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        // navegacion.classList.toggle('ocultar');

        if(navegacion.classList.contains('ocultar')){
            navegacion.classList.remove('ocultar');
        }else{
            navegacion.classList.add('ocultar');
        }
    });
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{

            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}


function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}