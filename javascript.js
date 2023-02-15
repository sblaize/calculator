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
    
const sum = function(n) {
      let amount = n.reduce((x,y) => {
      return x + y;
    }, 0)
    return amount
    };
    
const multiply = function(n) {
      let amount = n.reduce((x,y) => {
        return x * y;
      }, 1)
      return amount
    };
    
const operators = [
  add,
  subtract,
  sum,
  multiply
]

    function operate() {

    }