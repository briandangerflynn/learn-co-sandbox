// Here we are selecting the HTML elements that the user will be interacting with and saving them as variables.

// The first HTML elements we're saving are the inputs where a user will enter the values they want to do math with.
const firstInput = document.getElementById("first-input")
const secondInput = document.getElementById("second-input")

// The second HTML elements we're saving are the buttons the user will click on to execute the math they want to do.
const addButton = document.getElementById("add")
const subtractButton = document.getElementById("subtract")
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")

// the third HTML element we're saving is the h3 element that will be showing answers to finished math problems
const answerText = document.getElementById("answer")


// Here, we're CREATING our first function. Remember, creating a function is not the same thing as executing the function. We're just making it to use later. This new function "addNums" takes two values and adds them together and stores the solution as the variable "answer". Then, it takes that answer and fills the inner HTML of our answerText element.
const addNums = function(num1, num2){
  let answer = num1 + num2
  answerText.innerHTML = answer
}


// Here, we're creating a "click event", meaning that when a user clicks on this element, it will execute a function. Unlike our "addNums" function, this function doesn't have a name. It's just a general function that we can tell what to do right here.
addButton.onclick = function(){
  // The first part of this function is that it will check the two input fields and save their values to the variables "num1" and "num2". The value is assumed to be string of text by default, so the "parseFloat" part takes that value and turns it into a "float" which is just a javascript way of saying it turns it into a number.
  let num1 = parseFloat(firstInput.value)
  let num2 = parseFloat(secondInput.value)
  // Now that we have the value of our two inputs stored as variables, we're going to use a conditional if/else statement to check whether or not the values in those inputs are actually numbers. The code that says "isNaN()" checks to see whether a value is "Not a Number". The vertical bars between them mean "or". So, basically this is saying "If num1 or num 2 is not a number, then alert the user to 'please enter numbers'."
  if(isNaN(num1) || isNaN(num2)){
    alert("Please enter numbers")
  } else {
    // If both values are numbers, then we run our addNums(num1,num2) function from earlier
    addNums(num1,num2)
  }
}


// Following the same pattern from the addNum function and click event, we can do the same thing with subtraction.
const subtractNums = function(num1,num2){
  let answer = num1 - num2
  answerText.innerHTML = answer
}

subtractButton.onclick = function(){
  let num1 = parseFloat(firstInput.value)
  let num2 = parseFloat(secondInput.value)
  if(isNaN(num1) || isNaN(num2)){
    alert("Please enter numbers")
  } else {
    subtractNums(num1,num2)
  }
}

// Try to do the same below for multiplying and dividing numbers.



