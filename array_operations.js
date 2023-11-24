
function getEvenNumbers(numbers) {
    const evenNumbers = [];
    for (const number of numbers) {
      if (number % 2 === 0) {
        evenNumbers.push(number);
      }
    }
    return evenNumbers;
  }
  

  const originalNumbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = getEvenNumbers(originalNumbers);
  console.log('Original Numbers:', originalNumbers);
  console.log('Even Numbers:', evenNumbers);
  
  // Function 2: doubleValues
  function doubleValues(numbers) {
    const doubledValues = [];
    for (const number of numbers) {
      doubledValues.push(number * 2);
    }
    return doubledValues;
  }
  

  const doubledNumbers = doubleValues(originalNumbers);
  console.log('Doubled Values:', doubledNumbers);
  
  // Function 3: capitalizeNames
  function capitalizeNames(names) {
    const capitalizedNames = [];
    for (const name of names) {
      const firstLetter = name.charAt(0).toUpperCase();
      const restOfName = name.substring(1).toLowerCase();
      capitalizedNames.push(firstLetter + restOfName);
    }
    return capitalizedNames;
  }
  

  const originalNames = ['john', 'mary', 'peter', 'jane'];
  const capitalizedNames = capitalizeNames(originalNames);
  console.log('Original Names:', originalNames);
  console.log('Capitalized Names:', capitalizedNames);
  

  function sortNumbers(numbers) {
    const sortedNumbers = numbers.slice(); // Make a copy of the array
    sortedNumbers.sort((a, b) => a - b); // Sort the copy in ascending order
    return sortedNumbers;
  }
  

  const sortedNumbers = sortNumbers(originalNumbers);
  console.log('Original Numbers:', originalNumbers);
  console.log('Sorted Numbers:', sortedNumbers);
  
  // Function 5: removeDuplicates
  function removeDuplicates(numbers) {
    const uniqueNumbers = [];
    for (const number of numbers) {
      if (!uniqueNumbers.includes(number)) {
        uniqueNumbers.push(number);
      }
    }
    return uniqueNumbers;
  }
  

  const numbersWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
  const uniqueNumbers = removeDuplicates(numbersWithDuplicates);
  console.log('Numbers with Duplicates:', numbersWithDuplicates);
  console.log('Unique Numbers:', uniqueNumbers);
  