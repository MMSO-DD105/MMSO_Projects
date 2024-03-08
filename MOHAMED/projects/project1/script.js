/* ACCESS TO ELEMENTS */

const billTotalInput = document.getElementById("billTotalInput")
const tipInput= document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")

/* VARIABLES DECLARATION */
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    let bill = Number(billTotalInput.value)

    let tipPercentage = Number(tipInput.value) / 100
    
    let tipAmount = tipPercentage * bill 

    let Total = tipAmount + bill
    
    let perPersonTotal = Total / numberOfPeople
    console.log(perPersonTotal)

    perPersonTotalDiv.innerText = '$'+(perPersonTotal.toFixed(2))
}
const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}
const decreasePeople = () => {
    if (numberOfPeople > 1) {
        numberOfPeople -= 1
        numberOfPeopleDiv.innerText = numberOfPeople
    }
    else
        throw 'can not be less than 1 '
}
