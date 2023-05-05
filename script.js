// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specailCharacters = "!@#$%^&?'*=+-/_(){}<>[];:";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {
  var pswrdLength = window.prompt("How long do you want your password? *needs to be between 8-128*", length);
  var genPassword = "";

  if (pswrdLength < 8 || pswrdLength > 128) {
    window.alert("Password length must be between 8 and 128 characters.");
    return;
  }

  var includeLower = window.confirm("Lowercase characters?");
  var includeUpper= window.confirm("Uppercase characters?");
  var includeNumbers = window.confirm("Numbers?");
  var includeSpecial = window.confirm("Special characters?");

  if (!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
    window.alert("You must select at least one type of character to include in the password.");
    return;
  }
  var selectedCharacters = "";

  if (includeLower) {
    selectedCharacters += lowerCase;
  }

  if (includeUpper) {
    selectedCharacters += upperCase;
  }

  if (includeNumbers) {
    selectedCharacters += numbers;
  }

  if (includeSpecial) {
    selectedCharacters += includeSpecial;
  }

  var password = "";

  for (var i = 0; i < pswrdLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    password += selectedCharacters[randomIndex]
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);