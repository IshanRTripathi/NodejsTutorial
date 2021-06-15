// import { open } from 'fs/promises';
const fs = require('fs');
const readline = require('readline');

const writeGreetingToFile = (name) => {
    fs.writeFile("greeting.txt", `Hello ${name} !`, err => {
        if (err)
            console.log("Error !");
    });
}

//writeGreetingToFile("Ishu bhai");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What is your greeting name ?: ', (name) => {
    writeGreetingToFile(name);
    rl.close();
});