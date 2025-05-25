/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function humbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    let index = arr.length - 1, value = arr[index]; 
    sorted = true;
    while (index > 0) {
      let cmpIndex = index - 1; 
      let cmpValue = arr[cmpIndex];
      if (cmpValue > value) {
        arr.splice(cmpIndex, 1); 
        arr.push(cmpValue);
        sorted = false;
      } 
      value = cmpValue;
      index--;
    }
  }
  return arr;
}

/* Test */
function getRandomIntArray(n, min, max) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randInt);
    }
    return arr;
}

function testHumbleSort() {
  let repeat = 10;
  let count = 1000; 
  let min = 0;
  let max = 99;
  for (i = 0; i < repeat; i++) {
    let tc = getRandomIntArray(count, min, max);
    let sorted = humbleSort([...tc]);
    let expected = [...tc].sort((a, b) => a - b);
    let cond = JSON.stringify(sorted) === JSON.stringify(expected);
    if (cond) {
      console.log(`TestCase ${i}: success`);
    } else {
      console.log(`TestCase ${i}: false`);
      console.log(`Original: ${JSON.stringify(tc)}`)
      console.log(`Expected: ${JSON.stringify(expected)}`);
      console.log(`Received: ${JSON.stringify(sorted)}`);
      break;
    }
  }
}

testHumbleSort();
