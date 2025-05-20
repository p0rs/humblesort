/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
function humbleSort(arr) {
  let swapped = 0, iter = 0, sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i - 1] > arr[i]) {
        arr.push(...arr.splice(i - 1, 1));
        sorted = false;
      }
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
