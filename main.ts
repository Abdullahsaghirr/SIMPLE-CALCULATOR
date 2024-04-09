#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your firstNumber", type: "number", name:"firstNumber" },
  { message: "Enter your secondNumber", type: "number", name:"SecondNumber" },
  {
    message: "select one of operators to perform action ",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);
// CONDITIONAL STATEMENT
if (answer.operator === "ADDITION"){
  console.log(answer.firstNumber + answer.SecondNumber) ;
} else if (answer.operator === "SUBTRACTION"){
  console.log(answer.firstNumber - answer.SecondNumber) ;
} else if (answer.operator === "MULTIPLICATION"){
  console.log(answer.firstNumber * answer.SecondNumber) ;
} else if (answer.operator === "DIVISION"){
  console.log(answer.firstNumber / answer.SecondNumber) ;
} 
else{"Please select correct operator"};