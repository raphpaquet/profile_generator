const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let fullAnswers = [];

rl.question('What\'s your\'re name Nicknames are also acceptable? ', (answer1) => {
  fullAnswers.push(answer1);

  rl.question('What\'s an activity you like doing? ', (answer2) => {
    fullAnswers.push(answer2);
  
    rl.question('What do you listen to while doing that? ', (answer3) => {
      fullAnswers.push(answer3);

      rl.question('Which meal is your favourite? ', (answer4) => {
        fullAnswers.push(answer4);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          fullAnswers.push(answer5);

          rl.question('Which sport is your absolute favourite?? ', (answer6) => {
            fullAnswers.push(answer6);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              fullAnswers.push(answer7);
              
              console.log(`hi my name is ${answer1}, what I love most doing is ${answer2} while listening to ${answer3}.\n My favorite meal of the day is ${answer4} and it makes it way better when I can eat ${answer5}. I'm a huge fan of ${answer6}. \n My superpower is ${answer7}`)
              rl.close();
              
            });
          });
        });
      });
    });
  });
});