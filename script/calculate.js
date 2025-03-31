const calculate = (equation) => {
    let PostfixNotation = toPostfixNotation(equation);
    let stack = [];

    PostfixNotation.forEach(i => {
        if (!isNaN(i)) {
            stack.push(i)
        }
        else {
            let b = parseInt(stack.pop());
            let a = parseInt(stack.pop());
            switch(i) {
                case "+" : {
                    stack.push(a + b);
                    break;
                }
                case "-" : {
                    stack.push(a - b);
                    break;
                }
                case "×" : {
                    stack.push(a * b);
                    break;
                }
                case "÷" : {
                    stack.push(a / b);
                    break;
                }
            }
        }
    })
    console.log(stack);
    return stack[0];
}

// 후위표기식으로 변환하는 함수
const toPostfixNotation = (stringEquation) => {
    let listEquation = stringEquation.split(' ');
    let operatorStack = [];
    let postfixNotation = [];

    for (let i of listEquation) {
        if (!isNaN(i)) {
            postfixNotation.push(i);
        }
        else {
            if (!operatorStack.length) {
                operatorStack.push(i);
            }
            else {
                while (operatorStack.length && getPriority(operatorStack[operatorStack.length - 1]) <= getPriority(i)) {
                    postfixNotation.push(operatorStack.pop());
                }
                operatorStack.push(i);
            }
        }
    }
    while (operatorStack.length > 0) {
        postfixNotation.push(operatorStack.pop());
    }

    return postfixNotation;
}

const getPriority = (operator) => {
    return operator === "×" || operator === "÷" ? 1 : 2;
}