// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // encode is set to true but if set to false then function will decode
  // if shift isn't there, = 0, < -25, > 25, then should return false
  // spaces and non-alphabetic characters should remain in message after decoding/encoding
  // .toLowerCase all inputs and outputs
  function caesar(input, shift, encode = true) {
    // your solution code here
    // if shift doesn't meet the standard then the function returns false
    if(typeof(shift) === 'string'){
      shift = parseInt(shift);
    }
    if(shift == 0 || shift < -25 || shift > 25 ){
      return false;
    }
    if(!input || !shift){
      return false;
    }
    if(encode === false){
      shift = shift * -1;
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // create shifted alphabet
    // create the start and midpoint for the shifted string 
    const startPoint = alphabet.slice(shift, alphabet.length)
    // create the mid to ending of shifted string
    const ending = alphabet.slice(0, alphabet.indexOf(startPoint[0]));
    // store the new shifted string
    const shifted = startPoint + ending;
    // find matching letters index in the alphabet string
    // match that alphabet's index with the cooresponding shifted index
    // add that index's letter to the output
    const trueInput = input.toLowerCase();
    let output = "";

    for(let i = 0; i < trueInput.length; i++){
      let letter = trueInput[i].charCodeAt(0);
      if (letter < 97 || letter > 122){
        output += trueInput[i];
      }
      else {
        let spot = alphabet.indexOf(trueInput[i]);
        output += shifted[spot];
      }
    }
    return output;
  }
  return {
    caesar,
  };
})();
caesarModule.caesar("BPQA qa I amkzmb umaaiom!");
module.exports = caesarModule.caesar;
