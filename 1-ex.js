// Exercício 1: Passagem por Referência
function saudacao(){
    console.log("Olá! Bem-vindo ao Back-End com Node.js!") 
}

function exercutar (callback){
    console.log("Iniciando processo...")
    callback()
}
exercutar(saudacao);

