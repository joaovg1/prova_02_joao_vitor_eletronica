function leiDeOhm() {
    let resultado;
    let corrente;
    let tensao;
    let resistencia;
    
    let opcao = parseInt(prompt("----OPÇÕES----\nDescobrir:\n1 - Resistência\n2 - Tensão\n3 - Corrente\nEscolha: "))
    if (opcao != 3) {
        corrente = parseFloat(prompt("Digite qual a corrente: "));
    } 
    if (opcao != 2) {
        tensao = parseFloat(prompt("Digite qual a tensão: "));
    }
    if (opcao != 1) {
        resistencia = parseFloat(prompt("Digite qual a resistência: "))
    }

    switch(opcao) {
        case 1:
            resultado = tensao / corrente;
            break;
        case 2:
            resultado = resistencia * corrente
            break;
        case 3:
            resultado = tensao / resistencia;
            break;
    }
    let nomes = ["Ω", "V", "A"];
    console.log("O resultado é: "+ resultado +" "+ nomes[opcao]);
}