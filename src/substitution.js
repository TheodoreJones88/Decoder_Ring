// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // input is the text that needs to be encoded/decoded
  // alphabet is the substitution alphabet
  // encode is set to true and if false then decode
  // spaces should stay
  // input and output toLowerCase
  // the alphabet parameter should be a string and 26 characters everything included
  // every character in the alphabet parameter needs to be unique
  function uniqueStr(str) {
    const obj = {};
    for(let i = 0; i < str.length; i++) {
      let ch = str[i];
      if(obj[ch]){return false} else {obj[ch] = true;}
    }
    return true;
  }
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // check for encode/decode
    if(encode){
      // check if alphabet's letters are unique, the length is 26, and if its a string
      if(alphabet && uniqueStr(alphabet) && alphabet.length === 26 && typeof alphabet === 'string'){
        // create string to hold the real alphabet
        const realAl = "abcdefghijklmnopqrstuvwxyz";
        // turn input into lower case
        const trueInput = input.toLowerCase();
        // turn alphabet into lower case
        const lowCode = alphabet.toLowerCase();
        // create an empty string
        let bugged = "";
        // created loops to compare the input letters to the alph letters to give coded output
        for(i = 0; i < trueInput.length; i++){
          let letter = trueInput[i];
          let charCode = trueInput[i].charCodeAt(0);
          if(charCode === 32){
            bugged += trueInput[i];
          }
          for(x = 0; x < realAl.length; x++){
            let really = realAl[x];
            let idx = realAl.indexOf(really);
            if(letter === really){
              bugged += lowCode[idx];
            }
          }
        }
        return bugged;  
      }
      else{
        return false;
      }
    }
    else{
      if(alphabet && uniqueStr(alphabet) && alphabet.length === 26 && typeof alphabet === 'string'){
       // create string to hold the real alphabet
       const realAl = "abcdefghijklmnopqrstuvwxyz";
       // turn input into lower case
       const trueInput = input.toLowerCase();
       // turn alphabet into lower case
       const lowCode = alphabet.toLowerCase();
       // create an empty string
       let debugged = "";
       // created loops to compare the input letters to the alph letters to give coded output
        for(i = 0; i < trueInput.length; i++){
          let character = trueInput[i];
          let charCode = trueInput[i].charCodeAt(0);
          if(charCode === 32){
            debugged += trueInput[i];
          }
          for(x = 0; x < lowCode.length; x++){
            let code = lowCode[x];
            let idx = lowCode.indexOf(code);
            if(character === code){
              debugged += realAl[idx];
            }
          }
        }
        return debugged;
      }
      else{
        return false;
      } 
    }  
  }

  return {
    substitution,
  };
})();console.log("log:", substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false))
substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
module.exports = substitutionModule.substitution;
