let texto1 = document.getElementById('text1')
let texto2 = document.getElementById('text2')
let texto21 = document.getElementById('text21')
let textoP = document.getElementById('textoP2')
let texto3 = document.getElementById('text3')
let butao = document.getElementById('fim')

const cha1 = () => {
    let numMax = document.getElementById('num')
    numMax = Number(numMax.value)
    if(numMax > 99999999 || numMax < 1){
        alert('Numero invalido')
    }else{
        this.numMax1 = numMax
        texto1.style.opacity = '0'
        texto2.style.opacity = '1'
        texto21.innerHTML = numMax
    }
}

let valoresDaSorte = []

const cha2 = () => {
    textoP.innerHTML = 'Escreva outro numero, ou finalizar: '
    butao.style.opacity = '1'
    let valorEscolhido = document.getElementById('sorte')
    valorEscolhido = Number(valorEscolhido.value)
    if(valorEscolhido > numMax1){
        alert('Valor invalido')
    }else{
    fora:{
        if(valoresDaSorte.length != 0){
            for (const i in valoresDaSorte) {
                if(valorEscolhido != valoresDaSorte[i]){
                    continue
                }else{
                    alert('Tente outro numero.')
                    break fora
                }
            }
        }
        valoresDaSorte.push(valorEscolhido)
    }
    }
}

const cha3 = () => {
    texto2.style.opacity = '0'
    let aleatorio = Math.floor(Math.random() * this.numMax1)
    let val = false
    for (let c = 0; c < valoresDaSorte; c++) {
        if(valoresDaSorte[c] == sorte){
            val = true
        }
    }
    if(val == true){
        texto3.innerHTML = `<h2>SORTE</h2><br/>`
    }else{
        texto3.innerHTML = `<h2>AZAR</h2><br/>`
    }
    for (let c = 0; c < valoresDaSorte.length; c++) {
        texto3.innerHTML += `Numero escolhido ${valoresDaSorte[c]}<br/>`
    }
    texto3.innerHTML += `Numero da sorte ${aleatorio}`
}