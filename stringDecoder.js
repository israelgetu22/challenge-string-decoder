function stringDecoder(str) {
  let solutionArray = [];
  let strArray = str.split("");

  let i = 0;
  while (i < strArray.length) {
    let nextVal = Number(strArray[i]);
    i += nextVal + 1;
    solutionArray.push(strArray[i]);
    i++;
  }

  let solution = solutionArray.join("");
  return solution;
}

const decodeString = (string) => {
  let tempArray = string.split("");
  let answer = "";

  if (isNaN(tempArray[0]) || !isNaN(tempArray[tempArray.length - 1]))
    return "Cannot decode string";

  for (let i = 0; i < tempArray.length; i++) {
    if (+tempArray[i] >= 0) {
      tempPos = +tempArray[i] + i + 1;
      answer += tempArray[tempPos];
    }
  }
  return answer;
};

console.log(decodeString("2bna0p1mp2osl0e"));

const decoder = (code) => {
  let splitCode = code.split("");

  let decoded = "";

  for (let i = 0; i < splitCode.length; i++) {
    if (+splitCode[i] || splitCode[i] === "0") {
      i += +splitCode[i];
    } else {
      decoded += splitCode[i];
    }
  }

  return decoded;
};

console.log(decoder("2bna0p1mp2osl0e"));

const decoder = (code) => {
  let splitStr = code.split("");
  let result = "";

  for (let i = 0; i < splitStr.length; i++) {
    if (!isNaN(+splitStr[i])) {
      i += +splitStr[i];
    } else {
      result += splitStr[i];
    }
  }

  return result;
};

// decoder('0y4akjfe0s')
// decoder('0h2xce5ngbrdy')
// decoder('2bna0p1mp2osl0e')
