let val = '';
const display = document.getElementById('number');
const equalSign = document.getElementById('equal');

function disNum(val) {

  if (display.value == '0') {
    display.value=val;
  } else {
    display.value+=val;
  }
  console.log(display.value);
}

function clearALL (){
  display.value='0';
}

function Adding(number1,number2,number3,res) {
  number1 = parseInt(display.value);
  clearALL();
  number2 = parseInt(display.value);

  equalSign.addEventListener('click', function(e) {
    number3 = parseInt(display.value) + number2;
    res = number1+number3;
    e = eval(res);
    display.value=e;
  })
}

function Subtracting(number1,number2) {
  number1 = parseInt(display.value);
  clearALL();
  number2 = parseInt(display.value);

  equalSign.addEventListener('click', function(e) {
    number3 = parseInt(display.value) + number2;
    res = number1-number3;
    e = eval(res);
    display.value=e;
  })
}

function Multiply(number1,number2) {
  number1 = parseInt(display.value);
  clearALL();
  number2 = parseInt(display.value);

  equalSign.addEventListener('click', function(e) {
    number3 = parseInt(display.value) + number2;
    res = number1*number3;
    e = eval(res);
    display.value=e;
  })
}

function Division(number1,number2) {
  number1 = parseInt(display.value);
  clearALL();
  number2 = parseInt(display.value);

  equalSign.addEventListener('click', function(e) {
    number3 = parseInt(display.value) + number2;
    res = number1/number3;
    e = eval(res);
    display.value=e;
  })
}
