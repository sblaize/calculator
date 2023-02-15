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
      let amount = n.reduce((a,b) => {
      return a + b;
    }, 0)
    return amount
    };
    
    const multiply = function(n) {
      let amount = n.reduce((a,b) => {
        return a * b;
      }, 1)
      return amount
    };
    