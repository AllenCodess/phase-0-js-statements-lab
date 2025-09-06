const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature > 80) {
    console.log("Watering on")
}
else {
    console.log("Water off")
}

if (timeOfDay === "evening") {
    console.log("Lights on")
} else if (timeOfDay === "night") {
    console.log("Lights on")
} else {
    console.log("Lights off")
}

while (soilMoisture != 45) {
    console.log(soilMoisture)
    soilMoisture +=5
}