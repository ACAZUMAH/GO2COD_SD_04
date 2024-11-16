"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const read = async (question) => {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};
const upperCasePassword = async (len) => {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = upperCase.length;
    let password = '';
    for (let i = 0; i < len; i++) {
        password += upperCase.charAt(Math.floor(Math.random() * length));
    }
    return password;
};
const lowwerCasePassword = async (len) => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const length = lowerCase.length;
    let password = '';
    for (let i = 0; i < len; i++) {
        password += lowerCase.charAt(Math.floor(Math.random() * length));
    }
    return password;
};
const numberPassword = async (len) => {
    const numbers = '0123456789';
    const length = numbers.length;
    let password = '';
    for (let i = 0; i < len; i++) {
        password += numbers.charAt(Math.floor(Math.random() * length));
    }
    return password;
};
const specialCharacterPassword = async (len) => {
    const specialCharacters = '!@#$%^&*()_+';
    const length = specialCharacters.length;
    let password = '';
    for (let i = 0; i < len; i++) {
        password += specialCharacters.charAt(Math.floor(Math.random() * length));
    }
    return password;
};
const main = async () => {
    while (true) {
        console.log('1. Upper case password');
        console.log('2. Lower case password');
        console.log('3. Number password');
        console.log('4. Special character password');
        console.log('5. Exit');
        const passwordType = await read('Enter password type: ');
        if (passwordType === '5') {
            break;
        }
        if (passwordType === '1') {
            const len = parseInt(await read('Enter password length: '));
            console.log(await upperCasePassword(len));
        }
        else if (passwordType === '2') {
            const len = parseInt(await read('Enter password length: '));
            console.log(await lowwerCasePassword(len));
        }
        else if (passwordType === '3') {
            const len = parseInt(await read('Enter password length: '));
            console.log(await numberPassword(len));
        }
        else if (passwordType === '4') {
            const len = parseInt(await read('Enter password length: '));
            console.log(await specialCharacterPassword(len));
        }
        else {
            console.log('Invalid option');
        }
        ;
    }
    ;
};