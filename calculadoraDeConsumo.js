function consumo() {
    let aparelho = prompt("Digite o nome do aparelho eletrodoméstico: ");
    let horasUsadas = parseFloat(prompt("Digite a quantidade de horas usadas diária: "));
    let opcao = parseInt(prompt("----OPÇÕES----\n1 - Watt\n2 - kWh\nDigite em qual unidade de medida passará o valor da potência: "));
    let potencia = parseFloat(prompt("Digite a potência: "));
    let taxaKwh = parseFloat(prompt("Digite a taxa por kWh: "))

    let totalDiario;
    let custoDiario;
    let custoMensal;

    if (opcao == 1) {
        totalDiario = (potencia * horasUsadas) / 1000;
    } else if (opcao == 2) {
        totalDiario = potencia * horasUsadas;
    }
    custoDiario = totalDiario * taxaKwh;
    custoMensal = custoDiario * 30;

    console.log("----RESULTADO----");
    console.log("Eletrodoméstico: "+ aparelho);
    console.log("kWh diário: "+ totalDiario.toFixed(2))
    console.log("Custo diário: R$"+ custoDiario.toFixed(2));
    console.log("Custo mensal: R$"+ custoMensal.toFixed(2));
}