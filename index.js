//Module package FILE

//hisobla example

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija", natija);
// console.log("****************");

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natija", natija2);
// console.log("****************");

// const natija3 = calculate.ayirish(80, 20);
// console.log("Natija", natija3);
// console.log("****************");

//account example
const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("**********************");

const myAccount = new Account("Jack", 200000, 9384784743223);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

//Bugatti 2,5 mln usd
myAccount.withdrawMoney(25000000);






// Module package CORE

// setTimeout(function () {
//     console.log("ishga tushdi");
// }, 5000);



// let number = 0;
// setInterval(function() {
//     console.log("hisob", number);
//     number++;
// }, 1000);


// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log("==================================");

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Kozimov Jushkin`);
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);








//Module package EXTERNAL

// moment package

// const moment = require("moment");

// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000);

// const inquirer = require('inquirer');
// inquirer
//     .prompt([{ type: "input", name: "raqam", message: "raqam kiriting?"}])
//     .then((answer) => {
//        console.log("man kiritgan raqam qiymati:", answer.raqam);
//     })
//     .catch((err) => console.log(err));


//validator

// const validator = require('validator');
// //const test = validator.isEmail("foo@bar.com");

// const test = validator.isIP("114.200.3");
// console.log("test:", test);

//UUID

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);


// const chalk = require("chalk");
// const log = console.log;

// log(chalk.blue(`uuid creates ${random}`));

