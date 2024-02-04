

// function binarySearch(id, array) {
//   let min = 0;
//   let max = array.length - 1;
//   let index;
//   let element;

//   while (min <= max) {
//     index = Math.floor((min + max) / 2);
//     element = array[index];

//     if (element.id < id) {
//       min = index + 1;
//     } else if (element.id > id) {
//       max = index - 1;
//     } else {
//       return element;
//     }
//   }

//   return false;
// }




function binarySearch(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return  array[i];
        }
    }
    return false;
}


const userArray = [
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 5, name: 'Charlie' },
    { id: 7, name: 'David' },
    { id: 9, name: 'Emma' },
    { id: 11, name: 'Frank' },
   
  ];

console.log( binarySearch (3,userArray )  )


module.exports = binarySearch;
