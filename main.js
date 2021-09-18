var _n1 = document.getElementById("n1");
var _n2 = document.getElementById("n2");
var _operation = document.getElementById("operation");
var _result = document.getElementById("result");
var _calculate = document.getElementById("calculate");

function doOperation(n1, n2, operation){
  var result = 0;
  switch(operation){
    case '+': result = n1 + n2; break;
    case '-': result = n1 - n2; break;
    case '/': result = n1 / n2; break;
    case '*': result = n1 * n2; break;
  }
  return result;
}

function printResult(msg){
  _result.innerHTML = "<h2>" + msg + "</h2>"
}

function calculate(){
  var operationValue = _operation.options[_operation.selectedIndex].value;
  var n1Value = parseFloat(_n1.value);
  var n2Value = parseFloat(_n2.value);
  var result = doOperation(n1Value, n2Value, operationValue)
  printResult(result)
}

function bindCalculate(){
  _calculate.onclick = function(){
    calculate();
  }
}

bindCalculate();
printResult("Teste")