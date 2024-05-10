#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagentaBright('WELLCOME TO CURRENCY CONVERTER APP'));
let message1 = (chalk.green('select a currency convert from'));
let message2 = (chalk.green('select a currency convert to'));
let message3 = (chalk.magentaBright('enter amount to convert'));
const currency = {
    USD: 1,
    PKR: 278.41,
    JPY: 166.67,
    BGN: 1.95,
    CZK: 25,
    DKK: 7.45,
    GBP: 0.86,
    HUF: 384.62,
    PLN: 4.28,
    RON: 4.98,
    SEK: 11.69,
    CHF: 0.98,
    ISK: 149.25,
    NOK: 11.69,
    TRY: 34.48,
    AUD: 0.61,
    BRL: 5.51,
    CAD: 1.47,
    CNY: 7.73,
    HKD: 8.35,
    IDR: 17241.38,
    ILS: 4.03,
    INR: 88.93,
    KRW: 1470.59,
    MXN: 18.23,
    MYR: 5.09,
    NZD: 1.79,
    PHP: 61.63,
    SGD: 1.46,
    THB: 39.39,
    ZAR: 19.57,
};
let question = await inquirer.prompt([
    {
        name: 'from',
        type: "list",
        message: message1,
        choices: ['USD', 'PKR', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'TRY', 'AUD', 'BRL', 'CAD', 'CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MXN', 'MYR', 'NZD', 'PHP', 'SGD', 'THB', 'ZAR',]
    },
    {
        name: 'to',
        type: 'list',
        message: message2,
        choices: ['USD', 'PKR', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'TRY', 'AUD', 'BRL', 'CAD', 'CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MXN', 'MYR', 'NZD', 'PHP', 'SGD', 'THB', 'ZAR',]
    },
    {
        name: 'amount',
        type: 'number',
        message: message3,
    }
]);
let fromAmount = currency[question.from];
let toAmount = currency[question.to];
let Amount = question.amount;
let baseAmount = Amount / fromAmount;
let totalAmount = baseAmount * toAmount;
console.log(`${totalAmount}`);
