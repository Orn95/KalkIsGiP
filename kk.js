let input = document.querySelector(".input");
let power = "";

function insert(num) {
  if (input.textContent == 0) {
    input.textContent = "";
    input.textContent += num;
  } else if (input.textContent == ",") {
    input.textContent = "";
    input.textContent += num;
  } else input.textContent += num;
}

function clean() {
  input.textContent = "0";
  power = "";
}

function equal() {
  let exp = input.textContent;
  if (input.textContent.includes("^")) {
    let tmp = input.textContent.split("^");
    let num = eval(power);
    let pow = +tmp[1];
    input.textContent = Math.pow(num, pow);
    power = "";
    return;
  }
  if (exp) {
    input.textContent = eval(exp);
  }
}

function operation(name) {
  if (name == "sqrt") {
    input.textContent = Math.sqrt(eval(input.textContent));
  }
  if (name == "^") {
    power = input.textContent;
    input.textContent += "^";
  }
}
function abs() {
  input.textContent = Math.abs(eval.textContent);
}
