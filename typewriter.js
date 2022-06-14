const sentence = "hello there from Lighthouse Labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    //print character here
    process.stdout.write(char);
  }, delay)
  //correct the delay so there is none
  delay += 50;
  //delay each character individually
}