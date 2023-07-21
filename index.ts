function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  function sub(n1: number, n2: number) {
    return n1 - n2;
  }
  
  function multiply(n1: number, n2: number) {
    return n1 * n2;
  }
  
  function divide(n1: number, n2: number) {
    return n1 / n2;
  }
  
  function calculate(n1: number, n2: number, operator: (n1: number, n2: number) => number) {
    return operator(n1, n2);
  }
  
  console.log(calculate(4, 5, multiply));