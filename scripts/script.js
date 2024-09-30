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
        
        // Gérer les pourcentages en transformant "X%" en "X / 100"
        const percentageExpression = expression.replace(/(\d+(\.\d+)?)(%)/g, "($1 / 100)");
        
        // Évalue l'expression modifiée
        let result = eval(percentageExpression);
        
        // Vérifie si le résultat est un nombre et remplace le point par une virgule
        if (!isNaN(result)) {
            display.value = result.toString().replace(".", ","); // Remplace le point par une virgule
        } else {
            display.value = "Erreur"; // Affiche une erreur si le résultat n'est pas un nombre
        }
    } catch (error) {
        display.value = "Erreur"; // Affiche une erreur si l'évaluation échoue
    }
}
