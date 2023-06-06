const myString = "hello there from lighthouse labs";


const animateSentence = (string) => {
  let waitFor = 0;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, waitFor);
    waitFor += 100;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, waitFor);
};

animateSentence(myString);