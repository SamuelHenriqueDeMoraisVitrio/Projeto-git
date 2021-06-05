let texto1 = document.getElementById('text1')
let texto2 = document.getElementById('text2')
let texto21 = document.getElementById('text21')
let textoP = document.getElementById('textoP2')
let texto3 = document.getElementById('text3')
let butao = document.getElementById('fim')

const cha1 = () => {
    let numMax = document.getElementById('num')
    numMax = Number(numMax.value)
    this.numMax1 = numMax
    texto1.style.opacity = '0'
    texto2.style.opacity = '1'
    texto21.innerHTML = numMax
}

let valoresDaSorte = []

const cha2 = () => {
    textoP.innerHTML = 'Escreva outro numero, ou finalizar: '
    butao.style.opacity = '1'
    let valorEscolhido = document.getElementById('sorte')
    valorEscolhido = Number(valorEscolhido.value)
    valoresDaSorte.push(valorEscolhido)
}