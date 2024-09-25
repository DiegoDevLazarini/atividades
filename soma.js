
function somar(){

    const num1 = Number(document.getElementById('um').value)
    const num2 = Number(document.getElementById('dois').value)
    const num3 = Number(document.getElementById('tres').value)
    var result = document.getElementById('result')

    result = num1 + num2 + num3
    alert('Soma: ' + result)

}