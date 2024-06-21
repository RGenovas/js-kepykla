


//skaiciavimai su patikrinimuu

let calculateButton = document.getElementById('calculate')
let img = document.getElementById('image_1')
img.classList.add('imgHide')
calculateButton.addEventListener('click', function(){  
let employeeCount = document.getElementById('employee-count').valueAsNumber
let loavesPerEmployee = document.getElementById('loaves-per-employee').valueAsNumber
let orderCount = document.getElementById('order-count').valueAsNumber
if (employeeCount <= 0 || loavesPerEmployee <= 0 || orderCount <=0 ) {
     document.getElementById('results').innerHTML = 'Skaičiavimams pasirinkite reikšmes didesnias už 0'
     document.getElementById('results').classList.add('error')
     alert("Įveskite duomenis skaičiavimui!")
} else {

let kepyklaTotal = employeeCount * loavesPerEmployee
let arPavyks = kepyklaTotal >= orderCount 
// PotentialProfit skaiciavimas
let kePaloKaina = document.getElementById('potential-price').valueAsNumber

let potentialProfit = kepyklaTotal * kePaloKaina

document.getElementById('potential-profit').valueAsNumber = potentialProfit

let results = document.getElementById('results')
results.innerHTML = `<p><strong>Kepykla per diena spes pagaminti:</strong> ${kepyklaTotal}</p>`
results.innerHTML +=  `<p><strong>Reikia pagaminti:</strong> ${orderCount}</p>`
results.innerHTML +=  `<p><strong>Ar spes pagaminti?:</strong> ${arPavyks ? 'Taip' : 'Ne'}</p>`
// document.getElementById('results').classList.remove('error')
// document.getElementById('image_1').classList.remove('imgHide');TypeError: Cannot read properties of null (reading 'classList')at HTMLButtonElement.<anonymous> 
img.classList.remove('imgHide') //kazkodel nesuveikia
// img.classList.add('imgShow')
console.log(img.classList);

}})


//darbuotoju tikrinimas
document.getElementById('employee-count').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    }else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')

    }
})
//duonos tikrinimas
document.getElementById('loaves-per-employee').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    }else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')

    }
})





//uzsakymu tikrinimas
document.getElementById('order-count').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    }else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')

    }
})


// kainos tikrinimas 

document.getElementById('potential-price').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    }else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')

    }
})

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('employee-count').valueAsNumber = 0
    document.getElementById('loaves-per-employee').valueAsNumber = 0
    document.getElementById('order-count').valueAsNumber = 0
    document.getElementById('potential-price').valueAsNumber = 0
    document.getElementById('potential-profit').valueAsNumber = 0
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nera.</p>'
    document.getElementById('results').classList.remove('error')

    
})

// console.log(document.getElementById('image_1').classList);