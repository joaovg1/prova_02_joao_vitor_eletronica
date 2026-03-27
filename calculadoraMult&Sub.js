function calculadoraMultiSub() {
    let unidade = prompt("Digite a unidade do valor que deseja converter (A, V, W, Ohm)");
    let medidaAtual = parseInt(prompt("---OPÇÕES---\n1 - G\n2 - M\n3 - K\n4 - Base\n5 - m\n6 - µ\n7 - n\n8 - P\nDigite qual a medida atual: ")) - 1;
    let converter = parseInt(prompt("---OPÇÕES---\n1 - G\n2 - M\n3 - K\n4 - Base\n5 - m\n 6 - µ\n7 - n\n8 - P\nDigite qual a medida atual: ")) - 1;
    let valor = parseFloat(prompt("Digite o valor: "));
    
    const escalas = [10**9, 10**6, 10**3, 1, 10**-3, 10**-6, 10**-9, 10**-12];
    const nomes = ["G", "M", "k", "Base", "m", "µ", "n", "P"];

    let resultadoFinal = valor * (escalas[medidaAtual] / escalas[converter]);
    console.log("O resultado é: "+ resultadoFinal + " "+ nomes[converter]);
}
