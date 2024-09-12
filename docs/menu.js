var menuAbrir = document.getElementById('menuAbrir')
var menu = document.getElementById('menu')
var embacar = document.getElementById('embacar')

menuAbrir.addEventListener('click', function(){


    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        embacar.classList.remove('hidden')
        menuAbrir.classList.add('hidden')

    }

    else{
        menu.classList.add('hidden')
        menuAbrir.classList.remove('hidden')
    }

})

var listaMenu = document.getElementById('listaMenu')

listaMenu.addEventListener('click', function(){

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        embacar.classList.remove('hidden')
        menuAbrir.classList.add('hidden')

    }

    else{
        menu.classList.add('hidden')
        embacar.classList.add('hidden')
        menuAbrir.classList.remove('hidden')
    }
})

embacar.addEventListener('click', function(){

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        embacar.classList.remove('hidden')
        menuAbrir.classList.add('hidden')

    }

    else{
        menu.classList.add('hidden')
        embacar.classList.add('hidden')
        menuAbrir.classList.remove('hidden')
    }
})


