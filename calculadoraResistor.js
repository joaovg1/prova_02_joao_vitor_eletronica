function calculadoraResistor() { 
    let qtdFaixas = parseInt(prompt("Digite a quantidade de faixas que tem seu resistor (4 ou 5): "));
    let faixa = [];
    
    for (let contador = 0; contador < (qtdFaixas - 2); contador++) {
        faixa[contador] = parseInt(prompt("----CORES----\n1 - Preto\n2 - Marrom\n3 - Vermelho\n4 - Laranja\n5 - Amarelo\n6 - Verde\n7 - Azul\n8 - Violeta\n9 - Cinza\n10 - Branco\n11 - Dourado\n12 - Prata")) - 1;
        if (faixa[contador] > 9) {
            faixa[contador] = 0;
        }
    }
    let multiplicador = parseInt(prompt("----CORES---\n1 - Preto\n2 - Marrom\n3 - Vermelho\n4 - Laranja\n5 - Amarelo\n6 - Verde\n7 - Azul\n8 - Violeta\n9 - Cinza\n10 - Branco\n11 - Dourado\n12 - Prata"));
    if (multiplicador <= 10) {
        multiplicador = 10 ** (multiplicador - 1);
    } else if(multiplicador == 11) {
        multiplicador = 0.1;    
    } else if(multiplicador == 12) {
        multiplicador = 0.01;
    }
    let resultado = 0;
    let tolerancia = parseInt(prompt("----CORES----\n1 - Preto\n2 - Marrom\n3 - Vermelho\n4 - Laranja\n5 - Amarelo\n6 - Verde\n7 - Azul\n8 - Violeta\n9 - Cinza\n10 - Branco\n11 - Dourado\n12 - Prata"));
    let t = [0, 1, 2, 0, 0, 0.5, 0.25, 0.1, 0.05, 0, 5, 10][tolerancia - 1] || 0;
    let resultado1, resultado2;
    if (qtdFaixas == 4) {
        resultado = ((faixa[0] * 10) + faixa[1]) * multiplicador;
    } else if (qtdFaixas == 5) {
        resultado = (((faixa[0] * 100) + (faixa[1] * 10) + faixa[2]) * multiplicador);
        
    }
 
    
    console.log("----RESULTADO----");
    console.log("Valor Máximo: "+ resultado.toFixed(2)+" Ω");
    console.log("Tolerância: +-"+ t +"%");
}

