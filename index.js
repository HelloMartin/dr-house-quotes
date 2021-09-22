#! /usr/bin/env node
const { program } = require("commander");

const quote = require("./commands/quote");
const printImage = require("./commands/printImage");

program
  .command("quote")
  .description("print a random Dr. Gregory House quote")
  .action(quote);

program
  .command("image")
  .description("print a fancy ascii image")
  .option(
    "-s, --size <size...>",
    "choose size from small, medium to large. Entering no parameter results in the small image"
  )
  .action(printImage);

program.parse();
