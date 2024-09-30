function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function suppLastDisplay() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const expression = display.value.replace(/,/g, "."); 
        
        const percentageExpression = expression.replace(/(\d+(\.\d+)?)(%)/g, "($1 / 100)");
        
        let result = eval(percentageExpression);
        
        if (!isNaN(result)) {
            display.value = result.toString().replace(".", ",");
        } else {
            display.value = "Erreur";
        }
    } catch (error) {
        display.value = "Erreur";
    }
}
