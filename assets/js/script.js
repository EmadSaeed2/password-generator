// Function to prompt user for password options
function getPasswordOptions() {

  var passwordOptions = {
    passLength: 0,
    numeric: false,
    specialChars: false,
    lowerCase: false,
    upperCase: false,
  }

  /* GET PASSWORD LENGTH */
  function getPasswordLength() {
    var passwordLength = prompt('How many characters would you like your password to contain?\nPlease choose a number of at least 10 characters but no more than 64.')
    console.log(passwordLength);

    // validate passwordLength
    if (passwordLength !== null) {
      if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
        alert('Please choose a number of at least 10 characters but no more than 64.');
        getPasswordLength();
      } else {
        passwordOptions.passLength = passwordLength;
      }
    }
  }

  getPasswordLength();

  /* GET CHARACTERS TYPE */

  function getCharactersType() {

    /* INCLUDE NUMERIC */
    var includeNumeric = confirm('Click OK, if you want the password to include Numbers.');
    if (includeNumeric) passwordOptions.numeric = true;

    /* INCLUDE SPECIAL CHARACTERS */
    var includeSpecialCharacters = confirm('Click OK, if you want the password to include Special Characters.');
    if (includeSpecialCharacters) passwordOptions.specialChars = true;

    /* INCLUDE LOWERCASE */
    var includeLowercase = confirm('Click OK, if you want the password to include Lowercase Characters.');
    if (includeLowercase) passwordOptions.lowerCase = true;

    /* INCLUDE UPPERCASE */
    var includeUppercase = confirm('Click OK, if you want the password to include Uppercase Characters.');
    if (includeUppercase) passwordOptions.upperCase = true;
  }

  getCharactersType();

  /* VALIDATE CHARACTERS TYPE CHOICES */
  if (!passwordOptions.numeric && !passwordOptions.specialChars && !passwordOptions.lowerCase && !passwordOptions.upperCase) {
    alert("Oops! You need to choose at least one type for the password characters!")
    getCharactersType();
  }


  console.log(passwordOptions);
  return passwordOptions;
}




// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);