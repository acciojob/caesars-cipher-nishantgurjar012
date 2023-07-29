// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

// Function to decode a ROT13 encoded string
function rot13(encodedString) {
  // Helper function to shift the letter by 13 places
  function shiftLetter(letter) {
    const charCode = letter.charCodeAt(0);
    let shiftedCharCode = charCode + 13;

    if (shiftedCharCode > 90) { // 90 is the ASCII code for 'Z'
      shiftedCharCode = shiftedCharCode - 26;
    }

    return String.fromCharCode(shiftedCharCode);
  }

  // Regular expression to match uppercase alphabetic letters
  const uppercaseLettersRegex = /[A-Z]/g;

  // Replace each uppercase letter in the encoded string with its decoded counterpart
  const decodedString = encodedString.replace(uppercaseLettersRegex, (match) => shiftLetter(match));

  return decodedString;
}

// Test the function
const encodedString = "EBG13 rknzcyr!";
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: "ROT13 example!"


// Do not change this line
window.rot13 = rot13;
