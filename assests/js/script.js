// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
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

  if (pswrdLength <= 7 || pswrdLength >= 129) {
    window.alert("between 8-128 plz :)");
    return;
  } else {

    var lCase = window.confirm("Lowercase Characters?")
      if (lCase === true ) {
        
      }
    var uCase = window.confirm("Uppercase Characters?");
      if (uCase === true) {

      }
    var num = window.confirm("Numbers?");
      if (num === true) {

      }
    var specialChar = window.confirm("Special Characters?");
      if (specialChar === true) {

      }
  }



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);