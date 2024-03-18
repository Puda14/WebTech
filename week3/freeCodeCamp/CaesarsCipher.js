function rot13(encodedString) {
    const decodedChars = [];
  
    for (let i = 0; i < encodedString.length; i++) {
      const charCode = encodedString.charCodeAt(i);
  
      if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        decodedChars.push(encodedString[i]);
        continue;
      }
  
      let decodedCharCode = charCode - 13;
      if ((charCode >= 65 && charCode <= 90 && decodedCharCode < 65) || 
          (charCode >= 97 && charCode <= 122 && decodedCharCode < 97)) {
        decodedCharCode += 26;
      }
      decodedChars.push(String.fromCharCode(decodedCharCode));
    }
  
    return decodedChars.join('');
  }
  
  const encodedMessage = "EBG13 rknzcyr.";
  console.log(rot13(encodedMessage)); // Output: ROT13 example.