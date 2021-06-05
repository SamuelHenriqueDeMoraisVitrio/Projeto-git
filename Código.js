let texto = document.getElementById('text1')

function cha1() {
    let numMax = document.getElementById('num')
    numMax = Number(numMax.value)
    texto.innerHTML = (`<p>Escolha um numero da sorte, menor que ${numMax}, e maior que 0: <input type='number' id='sorte'/><input type='button' value='Calc' onclick='cha2()'/></p>`)
    function cha2(params) {
        
    }
}