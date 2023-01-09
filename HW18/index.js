'use strict'

// Task 1

function averageNumber(array) {
    const averageArray = array.reduce(function(result, elem) {
        if(!isNaN(elem) && elem !== null) {
            result.push(Number(elem));
        }
        
        return result;
    }, []);

    const sumElement = averageArray.reduce(function(a, b) { 
        return a + b; 
    });

    return sumElement / averageArray.length;
}

const array = [18, 'ndncsx', '6', 6, [4, 5, 8], {name: 'Alesia'}, null, undefined, NaN, function sum(x, y) {return x + y}];

console.log(`Average of array: ${averageNumber(array)}`);

// Task 2

function inputNumber(name) {
    let number = Number(prompt(`Please, input ${name} number`));

    while(isNaN(number)) {
        number = Number(prompt(`Error, please, input ${name} number again`));
    }

    return number;
}

function inputOperation() {
    const operationsArray = ['+', '-', '*', '/', '%', '^'];
    let operation = prompt(`Please, input operation`);

    while(!operationsArray.includes(operation)) {
        operation = prompt(`Error: please, input operation of [+, -, *, /, %, ^]`);
    }

    return operation;
}

function doMath(x, znak, y) {
    switch(znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if(y === 0) {
                return 'Error'
            }
            return x / y;
        case '%':
            return x % y;
        default:
            return x ** y;
    }
}

const firstNumber = inputNumber('first');
const secondNumber = inputNumber('second');
const operation = inputOperation();

alert(`${firstNumber} ${operation} ${secondNumber} = ${doMath(firstNumber, operation, secondNumber)}`);

// Task 3

function inputArrayBy (operant) {
    let array = prompt(`Input array separated by a '${operant}'`)?.split(operant);
    console.log(array);
    while(!array?.length || array[0] === '') {
        array = prompt(`Error: please repeat. Input array separated by a '${operant}'`)?.split(operant);
    }

    return array;
}

function inputPositiveNumber() {
    let number = inputNumber('length of array');

    while(number < 1) {
        alert(`Error, length of array number need to be > 0`);
        number = inputNumber('length of array');
    }

    return number;
}

function fillArray(array) {
    for(let i = 0; i < array.length; ++i) {
        array[i] = inputArrayBy(' ');
    }
}

function getArray(array) {
    for(let i = 0; i < array.length; ++i) {
        array[i] = array[i].join(' ');
    }

    return array.join('\n');
}

const arrayGeneralLength = inputPositiveNumber();
const arrCustomer = new Array(arrayGeneralLength);

fillArray(arrCustomer);

alert(getArray(arrCustomer));

// Task 4

function inputString(question) {
    let answer = prompt(`Input your ${question}`);

    while(answer === null || !answer.length) {
        answer = prompt(`Error: Input your ${question}`);
    }

    return answer;
}

function removeElement(string, array) {
    for(const elem of array) {
        string = string.split(elem).join('');
    }

    return string;
}

const customerString = inputString('string');
const characters = inputArrayBy(',');

alert(removeElement(customerString, characters));