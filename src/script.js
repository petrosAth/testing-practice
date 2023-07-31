const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  let reversedString = '';
  for (let index = str.length - 1; index >= 0; index--) {
    reversedString += str[index];
  }
  return reversedString;
};

const calculator = () => {
  const add = (numA, numB) => {
    return numA + numB;
  };
  const substract = (numA, numB) => {
    return numA - numB;
  };
  const divide = (numA, numB) => {
    return Math.round((numA / numB) * 100) / 100;
  };
  const multiply = (numA, numB) => {
    return numA * numB;
  };
  return { add, substract, divide, multiply };
};

const ceasarCipher = (shiftFactor, str) => {
  const charToCode = (character) => {
    let charCode = character.codePointAt(0);

    if (charCode > 64 && charCode < 91) {
      return charCode;
    }

    if (charCode > 96 && charCode < 123) {
      return charCode;
    }

    return character;
  };

  const shiftCode = (shiftFactor, charCode) => {
    if (!Number.isInteger(charCode)) {
      return charCode;
    }

    shiftFactor = Math.abs(shiftFactor) > 26 ? shiftFactor % 26 : shiftFactor;
    const charShifted = charCode + shiftFactor;

    if (charCode > 64 && charCode < 91) {
      if (charShifted < 65) {
        return 91 - 65 + charShifted;
      }

      if (charShifted > 90) {
        return 65 + charShifted - 91;
      }

      return charShifted;
    }

    if (charCode > 96 && charCode < 123) {
      if (charShifted < 97) {
        return 123 - 97 + charShifted;
      }

      if (charShifted > 122) {
        return 97 + charShifted - 123;
      }

      return charShifted;
    }

    return charCode + shiftFactor;
  };

  const codeToChar = (charCode) => {
    if (charCode > 64 && charCode < 91) {
      return String.fromCodePoint(charCode);
    }

    if (charCode > 96 && charCode < 123) {
      return String.fromCodePoint(charCode);
    }

    return charCode;
  };

  const strCiphered = [];

  for (let index = 0; index < str.length; index++) {
    const charCode = charToCode(str[index]);
    const charShifted = shiftCode(shiftFactor, charCode);
    const newChar = codeToChar(charShifted);

    strCiphered.push(newChar);
  }

  return strCiphered.join('');
};

const analyzeArray = (arrayOfNumbers) => {
  return {
    average: arrayOfNumbers.reduce((sum, value) => (sum += value)) / arrayOfNumbers.length,
    min: arrayOfNumbers.reduce((min, value) => (min = value < min ? value : min)),
    max: arrayOfNumbers.reduce((max, value) => (max = value > max ? value : max)),
    length: arrayOfNumbers.length,
  };
};

export { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };
