function imprimir(valor) {
    console.log(`O valor do cálculo foi ${valor}`)
}




function somar (a, b, callbackImprimir) {
    callbackImprimir(a + b);
}

function subtarir (a, b, callbackImprimir) {
    callbackImprimir(a - b);
}



somar(5, 4, imprimir)