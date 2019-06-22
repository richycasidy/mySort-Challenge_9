function mySort(numbers) {
  let evenArray = [], oddArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      if ((numbers[i] % 2) === 1)
        oddArray.push(parseInt(numbers[i]));
      else
        evenArray.push(parseInt(numbers[i]));
    }
  }

  let result = oddArray.sort((a,b) => a - b).concat(evenArray.sort((a,b) => a - b));
  return result;
}
