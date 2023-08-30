//Obtendo os elementos de botões da calculadora e o display
const buttons = document.querySelectorAll('.calculator button');
const display = document.querySelector('.calculator #display');
//let currentInput = ''; // Armazena o numero atual no display

function handleClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === '=') {
        // Mostrar o resultado
        const result = calculateResult(currentInput);  // Implemente a função calculateResult
        display.textContent = result;

    } else if (buttonValue === 'C') {
        // Limpar a tela
        currentInput = '';
        display.textContent = '';

    } else {
        // adicionar valor do botão na tela
        currentInput += buttonValue;
        display.textContent = currentInput;
 
    }
}

// Adicionando o evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// Calculos

function soma(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

function div(a, b) {
    return a / b;
};

function mult(a, b) {
    return a * b;
};

function perc(a) {
    return perc
}

function CE(){
    return clearInterval
}

function calculateResult(expression){
    // Analise a expressão para obter os operandos e a operação
    // Chame a função apropriada com os operandos para realizar o cálculo
    // Retorne o resultado

    const expressionParts = expression.split('+');
    const operand1 = parseFloat(expressionParts[0]);
    const operand2 = parseFloat(expressionParts[1]);
    const operator = expression.includes('+') ? '+': ('-') ? '-': ('/') ? '/': ('*') ? '*':
    
    let result;

    if (operator === '+'){
        result = soma(operand1, operand2);
    } else if (operator === '-'){
        result = sub(operand1, operand2);
    } else if (operator === '/'){
        result = div(operand1, operand2);
    } else if (operator === '*'){
        result = mult(operand1, operand2);
    } else if (operator === '%'){
        result = perc(operand1);
    }

    }

}