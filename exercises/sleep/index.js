// Create a sleep function that takes one parameter (time) and
// will wait "time" ms

/*
    async function run() {
        await sleep(500);
        console.log('hello');
        await sleep(500);
        console.log('world');
    }
*/

function sleep(delay){
  return new Promise( (resolve) => {
    return setTimeout( () => {
      resolve()
    }, delay)
  } )
}