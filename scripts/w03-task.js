/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1 , number2){
    return number1 + number2;
}

function addNumbers(){
    let addnumber1 = Number(document.querySelector('#add1').value);
    let addnumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addnumber1, addnumber2);
}   
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1 , number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractnumber1 = Number(document.querySelector('#subtract1').value);
    let subtractnumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractnumber1, subtractnumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divisor1 = Number(document.querySelector('#dividend').value);
    let divisor2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divisor1, divisor2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', getTotalDue)

function getTotalDue(){
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let applyDiscount = document.getElementById('member').checked;

    if (applyDiscount) {
      subtotal *= 0.8;
    }

    let formattedTotal = `Total Due: $${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = formattedTotal;
}
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray
/* Output Odds Only Array */
let oddsArray = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').innerHTML = oddsArray;
/* Output Evens Only Array */
let evensArray = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evensArray;
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').innerHTML = sumOfArray
/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multipliedArray;
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;