function calculator(num1, num2, symbol) {
    let result = 0;
    switch (symbol) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result =  num1 * num2;
            break;
        case "/":
            if (num2 != 0) {
                result =  num1 / num2;
            }
            else {
                result = "I cannot perform the division by zero";
            }
            break;
        default:
            result = "wrong operation!";
           
        }
        return(result);
}

let num1 = parseInt(prompt("Give me number 1"));
while(isNaN(num1)) {
    num1 = parseInt(prompt("Give me number 1"));
}


let symbol = prompt("Give me the operation");
while(symbol !== "+" && symbol !== "-" && symbol !== "*" && symbol !== "/")  {
    symbol = prompt("Give me the operation");
}


let num2 = parseInt(prompt("Give me number 2"));
while(isNaN(num2)) {
    num2 = parseInt(prompt("Give me number 2"));
}


let calculation = calculator(num1, num2, symbol);
console.log(calculation);