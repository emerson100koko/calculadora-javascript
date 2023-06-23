const btnClear = document.getElementById("btn-clear");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector("#result-box");
const inputClass = document.querySelectorAll(".form-input");
const btnPlus = document.getElementById("btn-plus");
const btnTimes = document.getElementById("btn-times");

console.log(result.textContent);
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function handleInputError(n1, n2){
    if (isNumber(n1) && isNumber(n2)){
        inputClass[0].classList.remove("input-error");
        inputClass[1].classList.remove("input-error");
        console.log(n1, n2);
        return true;
    } else if (!isNumber(n1) && isNumber(n2)){
        inputClass[0].classList.add("input-error");
    } else if (isNumber(n1) &&  !isNumber(n2)){
        inputClass[1].classList.add("input-error");
    } else{
        inputClass[0].classList.add("input-error");
        inputClass[1].classList.add("input-error");
    }
}

btnPlus.addEventListener("click", function() { 
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);
    if (handleInputError(n1, n2) ){
        result.textContent = n1 + n2;
    }
});

btnTimes.addEventListener("click", function() { 
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);
    if (handleInputError(n1, n2) ){
        result.textContent = n1 * n2;
    }
});
