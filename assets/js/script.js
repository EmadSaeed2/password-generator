var passwordOptions = {
  passLength: 0,
  numeric: false,
  specialChars: false,
  lowerCase: false,
  upperCase: false,
}

// Function to prompt user for password options
function getPasswordOptions() {

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

var choicesArr = [];

/* CREATEING ARRAY FOR USER CHARACTERS CHOICES */
function createChoicesArr() {
  if (passwordOptions.numeric) choicesArr = numericCharacters.concat(choicesArr);
  if (passwordOptions.specialChars) choicesArr = specialCharacters.concat(choicesArr);
  if (passwordOptions.lowerCase) choicesArr = lowerCasedCharacters.concat(choicesArr);
  if (passwordOptions.upperCase) choicesArr = upperCasedCharacters.concat(choicesArr);

  return choicesArr;
}

/* FUNCTION FOR GETTING A RANDOM ELEMENT FROM AN ARRAY */
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  console.log(createChoicesArr());

  // Reset data for another go
  choicesArr.length = [];
  passwordOptions.numeric = false;
  passwordOptions.specialChars = false;
  passwordOptions.lowerCase = false;
  passwordOptions.upperCase = false;
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