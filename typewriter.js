const sentence = 'Hello there from Lighthouse Labs.';
let delay = 500;
for (const char of sentence) {
  setTimeout (()=> {process.stdout.write(char);}, delay)
  delay += 50;
}
setTimeout (() => {console.log('')}, delay);