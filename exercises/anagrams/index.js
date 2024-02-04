// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function removeNonAlphabeticCharacters(str) {
    return str.toLowerCase().replace(/[^a-z]/g, '');
}

function countCharacterFrequency(str) {
    const charFrequency = {};
    for (const char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    return charFrequency;
}

function anagrams(str1, str2) {
    const cleanedStr1 = removeNonAlphabeticCharacters(str1);
    const cleanedStr2 = removeNonAlphabeticCharacters(str2);

    if (cleanedStr1.length !== cleanedStr2.length) {
        return false;
    }

    const frequency1 = countCharacterFrequency(cleanedStr1);
   
   
    const frequency2 = countCharacterFrequency(cleanedStr2);
  
    

   
    for (const char in frequency1) {
        if (frequency1[char] !== frequency2[char]) {
            return false;
        }
    }

    return true;
}


console.log(anagrams('rail safety', 'fairy tales'));  // Should print: true
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));  // Should print: true
console.log(anagrams('Hi there', 'Bye there'));  // Should print: false


// const parseStringToCompare = (string) => {
//   return string.toLowerCase().replace(/[^a-z]/g, '');
// }

// function anagrams(stringA, stringB) {

//   const parsedStringA = parseStringToCompare(stringA)
//   const parsedStringB = parseStringToCompare(stringB)

//   const mapA = {}

//   const mapB = {}


//   if(parsedStringA.length !== parsedStringB.length){
//     return false
//   }

//   for(let i = 0 ; i < parsedStringA.length; i ++) {
//     const charA = parsedStringA[i]
//     const charB = parsedStringB[i]

//     mapA[charA] = mapA[charA] ?  mapA[charA] + 1 : 1
//     mapB[charB] = mapB[charB] ?  mapB[charB] + 1 : 1

//   }

//   return Object.entries(mapA).every( el => el[1] === mapB[el[0]])
// }



// ALTERNATIVE SOLUTIONS


// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

module.exports = anagrams;
