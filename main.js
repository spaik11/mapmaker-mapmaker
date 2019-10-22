function doubleAll(arr) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

function absoluteValues(arr) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      newArr.push(arr[i] * -1 || arr[i] === 0)
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

function yelledGreetings(arr) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i]}!`)
  }
  return newArr;
}

function changeToInitials(arr) {
  const initials = [];

  for(let i = 0; i < arr.length; i++) {
    initials.push(arr[i][0] + arr[i][arr[i].indexOf(' ') + 1])
  }
  return initials;
}

function doubleOdd(arr) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 1 || arr[i] % 2 === -1) {
      newArr.push(arr[i] * 2);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function upperCaseFirstLetters(arr) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  return newArr;
}

function add1ToLeft(arr) {
  const newArr = [];

}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}