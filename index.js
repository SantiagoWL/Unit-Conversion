/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
THANKS SCRIMBA
*/

const convertBtn = document.getElementById("convert-btn")
let numInput = document.getElementById("num-input")
let lP = document.getElementById("l-p")
let vP = document.getElementById("v-p")
let mP = document.getElementById("m-p")
let resultMeter = 0
let resultFeet = 0
let resultLiter = 0
let resultGallon = 0
let resultKilo = 0
let resultPound = 0

convertBtn.addEventListener("click", function() {
    //length results
    resultFeet = Math.floor((numInput.value * 3.281) * 1000) / 1000
    resultMeter = Math.floor((numInput.value / 3.281) * 1000) / 1000
    lP.innerHTML = `${numInput.value} meters = ${resultFeet} feet | ${numInput.value} feet = ${resultMeter} meters`
    
    //volume results
    resultGallon = Math.floor((numInput.value * 0.264) * 1000) / 1000
    resultLiter = Math.floor((numInput.value / 0.264) * 1000) / 1000
    vP.innerHTML = `${numInput.value} liters = ${resultGallon} gallons | ${numInput.value} gallons = ${resultLiter} liters`
    
    //mass results
    resultPound = Math.floor((numInput.value * 2.204) * 1000) / 1000
    resultKilo = Math.floor((numInput.value / 2.204) * 1000) / 1000
    mP.innerHTML = `${numInput.value} kilograms = ${resultPound} pounds | ${numInput.value} pounds = ${resultKilo} kilograms`
    
})