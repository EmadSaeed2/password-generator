var passwordOptions = {
  passLength: 0,
  numeric: false,
  specialChars: false,
  lowerCase: false,
  upperCase: false,
}

var selectedChractersArr = [];

/* FUNCTION TO PROMPT USER FOR PASSWORD OPTIONS */
function getPasswordOptions() {

  /* GET PASSWORD LENGTH */
  var passwordLength = prompt('How many characters would you like your password to contain?\nPlease choose a number of at least 10 characters but no more than 64.')

  if (passwordLength !== null) { // run if user not cancel
    // validate passwordLength input
    if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
      alert('Please choose a number of at least 10 characters but no more than 64.');
      // repeat getPasswordOptions if invalid input
      getPasswordOptions();
    } else {
      // asign value to passwordOptions object
      passwordOptions.passLength = passwordLength;
    }

    /* GET CHARACTERS TYPE */
    function getCharactersTypes() {

      /* INCLUDE NUMERIC */
      var includeNumeric = confirm('Click OK, if you want the password to include Numbers.');
      // asign value to passwordOptions object
      if (includeNumeric) passwordOptions.numeric = true;

      /* INCLUDE SPECIAL CHARACTERS */
      var includeSpecialCharacters = confirm('Click OK, if you want the password to include Special Characters.');
      // asign value to passwordOptions object
      if (includeSpecialCharacters) passwordOptions.specialChars = true;

      /* INCLUDE LOWERCASE */
      var includeLowercase = confirm('Click OK, if you want the password to include Lowercase Characters.');
      // asign value to passwordOptions object
      if (includeLowercase) passwordOptions.lowerCase = true;

      /* INCLUDE UPPERCASE */
      var includeUppercase = confirm('Click OK, if you want the password to include Uppercase Characters.');
      // asign value to passwordOptions object
      if (includeUppercase) passwordOptions.upperCase = true;
    }
    getCharactersTypes();

    /* VALIDATE CHARACTERS TYPE CHOICES */
    if (!passwordOptions.numeric && !passwordOptions.specialChars && !passwordOptions.lowerCase && !passwordOptions.upperCase) {
      alert("Oops! You need to choose at least one type for the password characters!")
      // Repeat getCharactersTypes if user did not select any characters option
      getCharactersTypes();
    }

    console.log('Password Options Object:', passwordOptions);
    return passwordOptions;
  }
}

/* FILL SELECTED CHRACTERS ARRAY WITH USER CHOICES */
function fillSelectedChractersArr() {
  if (passwordOptions.numeric) selectedChractersArr = numericCharacters.concat(selectedChractersArr);
  if (passwordOptions.specialChars) selectedChractersArr = specialCharacters.concat(selectedChractersArr);
  if (passwordOptions.lowerCase) selectedChractersArr = lowerCasedCharacters.concat(selectedChractersArr);
  if (passwordOptions.upperCase) selectedChractersArr = upperCasedCharacters.concat(selectedChractersArr);

  return selectedChractersArr;
}

/* FUNCTION FOR GETTING A RANDOM ELEMENT FROM AN ARRAY */
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* FUNCTION TO GENERATE PASSWORD WITH USER INPUT */
function generatePassword() {

  getPasswordOptions();

  var selectedChractersArrData = fillSelectedChractersArr();
  console.log('Selected Chracters Array Data:', selectedChractersArrData);

  var generatedPassword = '';

  for (var i = 0; i < passwordOptions.passLength; i++) {
    generatedPassword += getRandom(selectedChractersArrData);
  }

  /* RESET DATA FOR ANOTHER GO */
  selectedChractersArr = [];
  passwordOptions.passLength = 0;
  passwordOptions.numeric = false;
  passwordOptions.specialChars = false;
  passwordOptions.lowerCase = false;
  passwordOptions.upperCase = false;

  return generatedPassword;
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