var inicio = document.getElementById('inicio')
var iniciopage = document.getElementById('iniciopage')
var icone = document.getElementById('iconecentral')

inicio.addEventListener('click', function(){
    iniciopage.scrollIntoView({behavior: 'smooth'})
})

icone.addEventListener('click', function(){
    iniciopage.scrollIntoView({behavior: 'smooth'})
})

var sobre = document.getElementById('sobre')
var sobrepage = document.getElementById('sobrepage')

sobre.addEventListener('click', function(){
    sobrepage.scrollIntoView({behavior: 'smooth'})
})

var cardapio = document.getElementById('cardapio')
var cardapiopage = document.getElementById('cardapiopage')
cardapio.addEventListener('click', function(){
    cardapiopage.scrollIntoView({behavior: 'smooth'})
})

var produtos = document.getElementById('produtos')
var produtospage = document.getElementById('produtospage')
produtos.addEventListener('click', function(){
    produtospage.scrollIntoView({behavior: 'smooth'})
})

var endereco = document.getElementById('endereco')
var enderecopage = document.getElementById('enderecopage')

var contato = document.getElementById('contato')

endereco.addEventListener('click', function(){
    enderecopage.scrollIntoView({behavior: 'smooth'})
})
contato.addEventListener('click', function(){
    enderecopage.scrollIntoView({behavior: 'smooth'})
})
