document.querySelectorAll('.boton_m').forEach((btn) => {
    btn.addEventListener('click', function() {

        // Encontrar el elemento de texto asociado
        const text_ocultar = btn.closest('.soft').nextElementSibling;
        
        // Alternar las clases del contenido
        text_ocultar.classList.toggle('oculto');
        text_ocultar.classList.toggle('no-oculto');
    });
});

/*
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.curso img').forEach((img) => {
        img.addEventListener('click', function() {
            
            const clase = img.closest('.curso').querySelector('.descrx, .descr1');
            
            if (clase.classList.contains('descrx')) {
                clase.classList.remove("descrx")
                clase.classList.add("descr1")

            } else if (clase.classList.contains('descr1')) 
                {
                clase.classList.add("descrx")
                clase.classList.remove("descr1")
            }
        });
    });
}); 

*/