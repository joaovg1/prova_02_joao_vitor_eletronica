function serieParalelo() {
    let opcao = parseInt(prompt("----OPÇÕES----\n1 - Em Série\n2 - Paralelo"));
    let qtdComponentes = 0, resistenciaTotal = 0, resultado= 0;
    qtdComponentes = parseInt(prompt("Digite a quantidade de Resistores: "));
    let componentes = [qtdComponentes];
        for (let contador = 0; contador < qtdComponentes; contador++) { 
            componentes[contador] = parseFloat(prompt("Digite a resistência do "+ (contador + 1) +" resistor: "));
            
            if(opcao == 1) {
                resistenciaTotal += componentes[contador];
                resultado = resistenciaTotal
            } else if(opcao == 2) {
                resistenciaTotal += 1 / componentes[contador];
                resultado = 1 / resistenciaTotal ;
            }
        }
        
    
    console.log("O resultado é: "+resultado+" ohms.");
}
