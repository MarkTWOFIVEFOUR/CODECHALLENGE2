function swapCase(str) {
    // Check if input is a string
    if (typeof str!== 'string') {
      throw new Error('Input must be a string');
    }
  
    // Map over each character in the string
    const swappedCaseStr = str.split('').map(char => {
      // If character is uppercase, return lowercase version
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      }
      // If character is lowercase, return uppercase version
      else {
        return char.toUpperCase();
      }
    }).join('');
  
    return swappedCaseStr;
  }
  
  // Test the function
  console.log(swapCase('My Name Is Mark Wagacha')); // Output: 'mY nAME iS mARK wAGACHA'