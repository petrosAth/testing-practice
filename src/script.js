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

export { capitalize, reverseString, calculator };
