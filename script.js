// Assignment code here

// User input variables
var userInput;
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;

// arrays of choices
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var toUpper = function(x) {
  return x.toUpperCase();
};

alphaUp = alphaLow.map(toUpper);

var userChoices;

function generatePassword() {

  //asks user for password length
  userInput = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128."));
  
  // if the response is blank (null) alert user
  if (!userInput) {
    alert("You must choose a number between 8 and 128.");
    generatePassword();
  }

  // if they choose a number less than 8 or greater than 128 reprompt
  else if (userInput < 8 || userInput > 128) {
    alert("Please enter a number between 8 and 128.");
    generatePassword();
  }

  // once they choose a valid option ask for input variables
  else {
    confirmNum = confirm("Will your password include numbers?");
    confirmChar = confirm("Will your password include special characters?");
    confirmLower = confirm("Will your password include lowercase letters?");
    confirmUpper = confirm("Will your password include uppercase letters?");
  };

  // if the user chooses "cancel" to all options, alert user, reprompt
  if (!confirmNum && !confirmChar && !confirmLower && !confirmUpper) {
    userChoices = alert("You must choose at least one option!");
    userInput = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128."));
  }

  // if the user chooses all 4 options
  else if (confirmNum && confirmChar && confirmLower && confirmUpper){
    userChoices = characters.concat(numbers, alphaLow, alphaUp);
  }

  // 3 positive options
  else if (confirmChar && confirmNum && confirmUpper) {
    userChoices = characters.concat(numbers, alphaUp);
  }
  else if (confirmChar && confirmNum && confirmLow) {
    userChoices = characters.concat(numbers, alphaLow);
  }
  else if (confirmChar && confirmLow && confirmUp) {
    userChoices = characters.concat(alphaLow, alphaUp);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    userChoices = numbers.concat(alphaLow, alphaUp);
  }

  // Else if for 2 positive options 
  else if (confirmChar && confirmNum) {
    userChoices = characters.concat(numbers);

} else if (confirmCharacter && confirmLowercase) {
    userChoices = characters.concat(alphaLow);

} else if (confirmCharacter && confirmUppercase) {
    userChoices = characters.concat(alphaUp);
}
else if (confirmLowercase && confirmNumber) {
    userChoices = alphaLow.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    userChoices = alphaLow.concat(alphaUp);

} else if (confirmNumber && confirmUppercase) {
    userChoices = numbers.concat(alphaUp);
}

// Else if for 1 positive option
else if (confirmCharacter) {
  userChoices = characters;
}
else if (confirmNumber) {
  userChoices = numbers;
}
else if (confirmLowercase) {
  userChoices = alphaLow;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
  userChoices = space.concat(alphaUp);
};

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
