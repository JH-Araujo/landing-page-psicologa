var elementosDuvida = document.querySelectorAll('.specialties')

elementosDuvida.forEach(function(specialties){
    specialties.addEventListener('click', function (){
        specialties.classList.toggle('ativa')
    })
})
