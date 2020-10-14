var pw = [];
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pwLen = prompt(
  "How long would you like your password to be? Add a number of symbols."
);

var isUpLetters = confirm(
  "Would you like to have uppercase characters in your password? "
);
var isSymbols = confirm(
  "Would you like to have special characters in your password "
);
var isNumbers = confirm("Would you like to have numbers in your password?");

createPassword();
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* defined function */

function cleanPassword() {
  window.location.reload();
}
function createPassword() {
  for (i = 0; i < pwLen; i++) {
    /*with UpCase*/
    if (isUpLetters === true && i === 0) {
      var randomSym = Math.floor(Math.random() * upLetters.length);

      /* inject a symbol in the string */
      pw.push(upLetters[randomSym]);
      pwLen--;
    }
    /*with symbols*/
    if (isSymbols === true && i === 0) {
      var randomSym = Math.floor(Math.random() * symbols.length);

      /* inject a symbol in the string */
      pw.push(symbols[randomSym]);
      pwLen--;
    }
    /*with numbers*/
    if (isNumbers === true && i === 0) {
      var randomSym = Math.floor(Math.random() * numbers.length);
      /* inject a symbol in the string */
      pw.push(numbers[randomSym]);
      /*letters only*/
    } else {
      /* inject a letter into the string */
      var randomSym = Math.floor(Math.random() * letters.length);
      pw.push(letters[randomSym]);
    }
  }
  /* randomize array */
  pwShuffle = shuffle(pw);
  /*cinvert arrey to string*/
  pwBox.innerHTML = pwShuffle.join("");
}

/* first event - Click new password Btn */
genBtn.addEventListener("click", cleanPassword);

// change this pw into a dynamic random pw
// document.write(pw);

/*copy button DOES NOT WORK*/

function copyText() {
  // Get the text field
  var copyPassword = document.getElementById("pwBox").ixternalHTML;

  // Select the text field

  copyPassword.select();

  //  Copy the text inside the text field
  document.execCommand("copy");

  //  Alert the copied text
  alert("Copied password: " + copyText.value);
}
copyBtn.addEventListener("click", copyText);

// var $body = document.getElementsByTagName("body")[0];
// var $copyBtn = document.getElementById("copyBtn");
// var pwB = document.getElementById("pwBox").ixternalHTML;
// var copyToClipboard = function (pwB) {
//   var $tempInput = document.createElement("INPUT");
//   $body.appendChild($tempInput);
//   $tempInput.setAttribute("value", pwB);
//   $tempInput.select();
//   document.execCommand("copy");
//   $body.removeChild($tempInput);
// };
// $copyBtn.addEventListener("click", function (ev) {
//   copyToClipboard(pwB);
//   alert("Password " + tempInput + " copied to clipboard");
// });
