const toLowerCase = (str) => {
  //"Hello"
  console.log("A".charCodeAt(0));
  console.log("Z".charCodeAt(0));
  console.log("a".charCodeAt(0));
  console.log("z".charCodeAt(0));
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      str[i] = String.fromCharCode(str[i].charCodeAt(0) + 32);
    }
  }
  str = str.join("");
  return str; //'hello'
};
