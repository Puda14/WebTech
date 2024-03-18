function strip(str) {
    let copy = "";
    for (let i = 0; i < str.length; i++) {
      if ((str.charAt(i) >= "A" && str.charAt(i) <= "Z") || (str.charAt(i) >= "a" && str.charAt(i) <= "z") || (str.charAt(i) >= "0" && str.charAt(i) <= "9"))
        copy += str.charAt(i);
    }
    return copy;
  }
  
  function palindrome(str) {
    let copy = "";
    copy = strip(str.toLowerCase());
    for (let i = 0; i < Math.floor(copy.length / 2); i++) {
      if (copy[i] !== copy[copy.length - i - 1]) return false;
    }
    return true;
  }
  
  console.log(palindrome("eye"));  