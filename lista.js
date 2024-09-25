let numeros = []

function adicionarNumero(){

    let novoNumero = Number(document.getElementById('novoNumero').value)
    numeros.push(novoNumero)
    atualizarLista()

}

function removerUltimoNumero(){
    numeros.pop()
    atualizarLista()
}

function atualizarLista(){
    let lista = document.getElementById('listaNumeros')
    lista.innerHTML = ''
    for(let i =0; i < numeros.length; i++){
        let item = document.createElement('li')
        item.textContent = numeros[i]
        lista.appendChild(item)
    }
}