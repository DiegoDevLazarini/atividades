
function Verificar(){

    const velocidade = Number(document.getElementById('velocidade').value)
    console.log(velocidade)
    const multa = document.getElementById('multa')

    if(velocidade <= 80){
        multa.innerHTML = 'sem Inflação'

    }else if(velocidade <= 120){
        multa.innerHTML = 'Inflação média'

    }else if(velocidade > 120){
        multa.innerHTML = 'Inflação grave'
    }

}