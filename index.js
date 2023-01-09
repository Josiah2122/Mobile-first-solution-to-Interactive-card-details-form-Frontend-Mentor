// Displaying the name on the card
function printName(){   
 let txt = document.getElementById('name')
 let txtValue = txt.value
 let result = document.getElementById('user-name')
 let nameError = document.querySelector('.nameerror') 
 if(txtValue.length === 0){
  result.textContent = "JANE APPLESEED"
 }else{
  nameError.classList.add('hide')
  result.textContent = txtValue
 }
}
// Displaying the credit card number on the card
function printNumber(){   
 let txt = document.getElementById('card-number')
 let txtValue = txt.value
 let result = document.getElementById('credit-card-number')
 let cardError = document.querySelector('.carderror')
 if(txtValue.length === 0){
  result.textContent = "0000 0000 0000 0000"
 }else{
  cardError.classList.add('hide')
  result.textContent = txtValue
 }
}
//Displaying the Month on the card
function printMonth(){   
 let txt = document.getElementById('month-input')
 let txtValue = txt.value
 let result = document.getElementById('month')
 let dateError = document.querySelector('.dateerror')
 if(txtValue.length === 0){
  result.textContent = "00"
 }else{
  result.textContent = txtValue
  dateError.classList.add('hide')
 }
}
//Displaying the Year on the card
function printYear(){   
 let txt = document.getElementById('year-input')
 let txtValue = txt.value
 let result = document.getElementById('year')
 let dateError = document.querySelector('.dateerror')
 if(txtValue.length === 0){
  result.textContent = "00"
 }else{
  result.textContent = txtValue
  dateError.classList.add('hide')
 }
}
//Displaying the cvc on the card
function printCvc(){   
 let txt = document.getElementById('cvc')
 let txtValue = txt.value
 let result = document.getElementById('cvcdisplay')
 if(txtValue.length === 0){
  result.textContent = "000"
 }else{
  result.textContent = txtValue
 }
}
//Button function that checks
function verifyform(){
 const form = document.querySelector('.form')
 const completed = document.querySelector('.completed')

 // The inputs
 const username = document.getElementById('name')
 const number = document.getElementById('card-number')
 const month = document.getElementById('month-input')
 const year = document.getElementById('year-input')
 const cvc = document.getElementById('cvc')

 //The errors
 let nameError = document.querySelector('.nameerror') 
 let cardError = document.querySelector('.carderror')
 let dateError = document.querySelector('.dateerror')
 let cvcError = document.querySelector('.cvcerror')

 if(username.value === "" || number.value === "" || month.value === "" || year.value === "" || cvc.value === ""){
  if(username.value === ""){
   nameError.classList.remove('hide')
  }
  else if(Number(username.value)){
   nameError.textContent = "Wrong format, name required"
   nameError.classList.remove('hide')
  }
  else if(number.value === ""){
   cardError.classList.remove('hide')
  }
  else if(number.value.length < 16 || number.value.length > 19){
   cardError.textContent = "16 digit number required"
   cardError.classList.remove('hide')
  }
  else if(!Number(removeSpace())){
   cardError.textContent = "Wrong format, number only"
   cardError.classList.remove('hide')
  }
  else if(month.value === "" || year.value === ""){
   dateError.classList.remove('hide')
  }
  else if(month.value > 12 || month.value <= 0){
   dateError.textContent = "Invalid month"
   dateError.classList.remove('hide')
  }
  else if(year.value <= 1900 || year.value >= 2023){
   dateError.textContent = "Invalid year"
   dateError.classList.remove('hide')
  }
  else if(cvc.value === ""){
   cvcError.classList.remove('hide')
  }
 }
 else{
  form.classList.add('hide')
  completed.classList.remove('hide')
 }
}
//Continue button
function cont(){
 const form = document.querySelector('.form')
 const completed = document.querySelector('.completed')

 form.classList.remove('hide')
 completed.classList.add('hide')

 const username = document.getElementById('name')
 let usernameDisplay = document.getElementById('user-name')
 const number = document.getElementById('card-number')
 let numberDisplay = document.getElementById('credit-card-number')
 const month = document.getElementById('month-input')
 let monthDisplay = document.getElementById('month')
 const year = document.getElementById('year-input')
 let yearDisplay = document.getElementById('year')
 const cvc = document.getElementById('cvc')
 let cvcDisplay = document.getElementById('cvcdisplay')

 //The errors
 let nameError = document.querySelector('.nameerror') 
 let cardError = document.querySelector('.carderror')
 let dateError = document.querySelector('.dateerror')
 let cvcError = document.querySelector('.cvcerror')

 username.value = ""
 usernameDisplay.textContent = "JANE APPLESEED"
 number.value = ""
 numberDisplay.textContent = "0000 0000 0000 0000"
 month.value = ""
 monthDisplay.textContent = "00"
 year.value = ""
 yearDisplay.textContent = "00"
 cvc.value = ""
 cvcDisplay.textContent = "000"

 nameError.classList.add('hide')
 cardError.classList.add('hide')
 dateError.classList.add('hide')
 cvcError.classList.add('hide')
}

function removeSpace(){
 let str = document.getElementById('card-number')
 let myArr = str.value.split("")
 let newArr = []
 for(let i = 0; i< myArr.length; i++){
  if(myArr[i] != " "){
   newArr.push(myArr[i])
  }
 }
 return newArr.join("")
}
