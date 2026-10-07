const botao = document.getElementById("btnCalcular");
const soma = document.getElementById("soma");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const divisao = document.getElementById("divisao");

botao.addEventListener("click", () => {
    const num1 = Number (document.getElementById("num1").value);
    const num2 = Number (document.getElementById("num2").value);

    soma.textContent = num1 + num2;
    sub.textContent = num1 - num2;
    mult.textContent = num1 * num2;
    divisao.textContent = num1 / num2;
})