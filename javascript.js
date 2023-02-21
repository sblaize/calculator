function add(x, y) {
    let adder = x + y
    return adder
    };
    
function subtract(x, y) {
    let minus = x - y
    return minus
    };
    
function divide(x, y) {
    let dividend = x/y;
    return dividend
    };
    
function multiply(x,y) {
      let product = x * y;
      return product
    };
    
    const operators = [
add,
subtract,
divide,
multiply
    ]

        
    const numbers = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]



  function operate(operator,x,y) {
    switch(operator) {
      case add:
        return operators[0](x,y);
      case subtract:
        return operators[1](x,y);
      case divide:
        return operators[2](x,y);
      case multiply:
        return operators[3](x,y);
    }};

const container = document.getElementById('container');
const display = document.createElement('div');
const btnrow1 = document.createElement('div'); 
