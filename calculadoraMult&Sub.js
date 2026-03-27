function calculadoraMultiSub() {
    let unidade = prompt("Digite a unidade do valor que deseja converter (A, V, W, Ohm");
    let medidaAtual = parseInt(prompt("---OPÇÕES---\n1 - G\n2 - MG\n3 - K\n4 - BS\n5 - ML\n 6 - MC\n7 - NN\n8 - PC\nDigite qual a medida atual: ")) - 1;
    let converter = parseInt(prompt("---OPÇÕES---\n1 - G\n2 - MG\n3 - K\n4 - BS\n5 - ML\n 6 - MC\n7 - NN\n8 - PC\nDigite qual a medida atual: ")) - 1;
    let valor = parseFloat(prompt("Digite o valor: "));
    
    const escalas = [10**9, 10**6, 10**3, 1, 10**-3, 10**-6, 10**-9, 10**-12];
    const nomes = ["G", "MG", "K", "BS", "ML", "MC", "NN", "PC"];

    let resultadoFinal = valor * (escalas[medidaAtual] / escalas[converter]);
    console.log("O resultado é: "+ resultadoFinal);
}