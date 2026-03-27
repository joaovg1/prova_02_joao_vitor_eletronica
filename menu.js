let opcao = parseInt(prompt("----OPÇÕES----\n1 - Calculadora de Consumo\n2 - CalculadoraMult&Sub\n3 - Calculadora de Resistor (4 ou 5 faixas)\n4 - Calculadora de Resistor Em série/Paralelo\n5 - Lei de Ohm"));

switch (opcao) {
    case 1: 
        consumo();
        break;
    case 2: 
        calculadoraMultiSub();
        break;
    case 3:
        calculadoraResistor();
        break;
    case 4:
        serieParalelo();
        break;
    case 5:
        leiDeOhm();
        break;
    
}
