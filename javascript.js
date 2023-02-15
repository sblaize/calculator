const add = function(x, y) {
    let adder = x + y
    return adder
    };
    
const subtract = function(x, y) {
    if (x > y) {
      x = x
    } else if (x < y) {
    x = y
    }
    let minus = x - y
    return minus
    };
    
const divide = function(x, y) {
    let dividend = x/y;
    return dividend
    };
    
const multiply = function(x, y) {
      let product = x * y;
      return product
    };
    
    const operators = [
      add,
      subtract,
      divide,
      multiply
    ]
