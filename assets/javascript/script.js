// User input variables
var passLength;
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;

// arrays of choices
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var toUpper = function(x) {
  return x.toUpperCase();
};

var alphaUp = alphaLow.map(toUpper);

var userChoices;

function generatePassword() {

  //asks user for password length
  passLength = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128."));
  
  // if the response is blank (null) alert user
  if (!passLength) {
    alert("You must choose a number between 8 and 128.");
    generatePassword();
  }

  // if they choose a number less than 8 or greater than 128 reprompt
  else if (passLength < 8 || passLength > 128) {
    alert("Please enter a number between 8 and 128.");
    generatePassword();
  }

  // once they choose a valid option ask for input variables
  else {
    if (passLength) {
      alert("Your password will be " + passLength + " characters long.")
    }

    confirmNum = confirm("Will your password include numbers?");
      if (confirmNum) {
        alert("Your password will include numbers!")
      }
      else {
        alert("Your password will NOT include numbers.")
      }
    confirmChar = confirm("Will your password include special characters?");
      if (confirmChar) {
        alert("Your password will include special characters!")
      }
      else {
        alert("Your password will NOT include special characters.")
      }
    confirmLower = confirm("Will your password include lowercase letters?");
      if (confirmLower) {
        alert("Your password will include lowercase letters!")
      }
      else {
        alert("Your password will NOT include lowercase letters.")
      }
    confirmUpper = confirm("Will your password include uppercase letters?");
      if (confirmUpper) {
        alert("Your password will include uppercase letters!")
      }
      else {
        alert("Your password will NOT include uppercase letters.")
      }
  };

  // if the user chooses "cancel" to all options, alert user, reprompt
  if (!confirmNum && !confirmChar && !confirmLower && !confirmUpper) {
    userChoices = alert("You must choose at least one option! Please start over.");
    generatePassword();
    // passLength = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128."));
  }

  // if the user chooses all 4 options
  else if (confirmNum && confirmChar && confirmLower && confirmUpper){
    userChoices = characters.concat(numbers, alphaLow, alphaUp);
  }

  // 3 positive options
  else if (confirmNum && confirmChar && confirmUpper) {
    userChoices = characters.concat(numbers, alphaUp);
  }
  else if (confirmNum && confirmChar && confirmLower) {
    userChoices = characters.concat(numbers, alphaLow);
  }
  else if (confirmNum && confirmLower && confirmUpper) {
    userChoices = characters.concat(alphaLow, alphaUp);
  }
  else if (confirmChar && confirmLower && confirmUpper) {
    userChoices = numbers.concat(alphaLow, alphaUp);
  }

  // Else if for 2 positive options 
  else if (confirmNum && confirmChar) {
    userChoices = characters.concat(numbers);
  } 
  else if (confirmChar && confirmLower) {
    userChoices = characters.concat(alphaLow);
  } 
  else if (confirmChar && confirmUpper) {
    userChoices = characters.concat(alphaUp);
  }
  else if (confirmLower && confirmNum) {
    userChoices = alphaLow.concat(number);
  } 
  else if (confirmLower && confirmUpper) {
    userChoices = alphaLow.concat(alphaUp);
  } 
  else if (confirmNum && confirmUpper) {
    userChoices = numbers.concat(alphaUp);
  }

  // Else if for 1 positive option
  else if (confirmChar) {
    userChoices = characters.concat();
  }
  else if (confirmNum) {
    userChoices = numbers.concat();
  }
  else if (confirmLower) {
    userChoices = alphaLow.concat();
  }
  else if (confirmUpper) {
    userChoices = alphaUp.concat();
  };

  // password variable will be an array with user generated length
  var passwordArray = [];

  //randomize variable selection
  for (var i = 0; i < passLength; i++) {
    var selectChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordArray.push(selectChoices);
  }

  //convert array into string
  var passStr = passwordArray.join("");
  return passStr;
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
