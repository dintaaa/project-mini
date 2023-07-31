const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight condition")

function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value

    const bmiValue = weightValue / (heightValue * heightValue)

    console.log(heightValue, weightValue)
    console.log(bmiValue)
    bmiInputEl.value = bmiValue.toFixed(2);

    if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Under weight"
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = "Normal weight"
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText = "Over weight"
    } else if (bmiValue > 29.9) {
        weightConditionEl.innerText = "Obesity"
    }
}


btnEl.addEventListener("click", calculateBMI)