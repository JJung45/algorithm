const uniqueMorseRepresentations = (words) => {
  //["gin", "zen", "gig", "msg"]
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let alphabet = [];
  for (let i = 97; i < 123; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  let morseArray = [];
  for (let i = 0; i < words.length; i++) {
    let morseWord = "";
    for (let j = 0; j < words[i].length; j++) {
      let alphabetIndex = alphabet.indexOf(words[i][j]);
      morseWord += morse[alphabetIndex];
    }
    morseArray.push(morseWord);
  }
  let resultArray = [];
  for (let i = 0; i < morseArray.length; i++) {
    if (!resultArray.includes(morseArray[i])) {
      resultArray.push(morseArray[i]);
    }
  }
  return resultArray.length; //2
};
