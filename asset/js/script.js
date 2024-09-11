const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "/", "*", "+", "-", "=",];

let output = "";

const calculate = (btnValue) => {   
    display.focus();
    if (btnValue === "=" && output !== "") {
        // Handle percentage as special case
        output = eval(output.replace(/%/g, "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        // Prevent adding operators at the start except minus (for negative numbers)
        if (output === "" && specialChars.includes(btnValue) && btnValue !== "-") return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
