// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {

//   return str.split(" ").map( str => {
//     const arrStr = str.split("")
//     arrStr[0] =  arrStr[0].toUpperCase()

//     return arrStr.join("")
//   }).join(" ")
// }

// // ALTERNATIVE SOLUTIONS

// // function capitalize(str) {
// //   return str.split(" ").map(word => {
// //     const firstLetter = word[0].toUpperCase()
// //     return  firstLetter + word.slice(1)
// //   }).join(" ")
// // }





function capitalize(params) {
    if (/^[a-z]/.test(params))  return params.charAt(0).toUpperCase() + params.slice(1);
    
    
    return params;
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('Look, it is working!'));

module.exports = capitalize;
