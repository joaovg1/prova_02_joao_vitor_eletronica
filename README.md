# prova_02_joao_vitor_eletronica
# ⚡ Projeto: Calculadoras de Eletrônica Aplicada

Este projeto consiste em um sistema de ferramentas utilitárias para cálculos de eletrônica e elétrica, desenvolvido em **JavaScript**. O sistema é modular, onde cada funcionalidade reside em seu próprio arquivo `.js`, facilitando a organização e o estudo das fórmulas.

---

## 🚀 Funcionalidades Incluídas

### 1. 🌈 Leitor de Código de Cores (Resistores)
* Suporta resistores de **4 e 5 faixas**.
* Identifica o multiplicador correto (incluindo Ouro e Prata).
* Exibe a **Resistência Nominal** e a **Tolerância** (ex: +-5%).

### 2. 🔌 Lei de Ohm
* Calcula **Tensão (V)**, **Corrente (A)** ou **Resistência (Ω)**.
* Utiliza lógica de exclusão para solicitar apenas os dados necessários ao usuário.

### 3. 🔋 Calculadora de Consumo Elétrico
* Calcula o consumo de aparelhos em **Watts** e converte para **kWh**.
* Informa o custo estimado em Reais (R$) baseado no tempo de uso diário e mensal.

### 4. 📈 Conversor de Unidades (Múltiplos e Submúltiplos)
* Facilita a conversão entre escalas: de **Giga ($10^9$)** até **Pico ($10^{-12}$)**.
* Ideal para converter de $mA$ para $A$ ou $k\Omega$ para $\Omega$.

### 5. 🧮 Associação de Resistores
* Calcula a resistência equivalente ($R_{eq}$) para circuitos em **Série** e **Paralelo**.
* Suporta a inserção de múltiplos resistores para cálculos precisos.

---

## 📂 Estrutura de Arquivos

* `index.html`: Ponto de entrada que carrega todos os scripts.
* `menu.js`: Gerencia a navegação entre as ferramentas.
* `calculadoraResistor.js`: Lógica de faixas e cores.
* `calculadoraLeiDeOhm.js`: Fórmulas da Lei de Ohm ($V = R \cdot I$).
* `calculadoraDeConsumo.js`: Cálculos de potência e energia.
* `calculadoraMult&Sub.js`: Lógica de potências de dez.
* `calculadoraSerieParalelo.js`: Lógica de associação de componentes.

---

## 🛠️ Como Executar

1. Baixe todos os arquivos para uma mesma pasta.
2. Abra o arquivo `index.html` em qualquer navegador web.
3. Use as teclas **F12** ou `Ctrl + Shift + I` para abrir o **Console do Desenvolvedor**.
4. Siga as instruções nos `prompts` que aparecerão na tela.
5. Os resultados serão exibidos de forma organizada no console.

---

**Desenvolvido por:** João Vitor  
**Ano:** 2026 | Disciplina de Eletrônica
