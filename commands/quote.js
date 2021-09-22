const quotes = require("../data");
const chalk = require("chalk");

const quote = () => {
  let { character, quote } = quotes[Math.floor(Math.random() * quotes.length)];

  console.log(`
        ${chalk.blueBright.bold(character)}
    `);

  for (let line in quote) {
    console.log(`
        "${line % 2 ? chalk.bold(quote[line]) : chalk(quote[line])}"
        `);
  }
};

module.exports = quote;
