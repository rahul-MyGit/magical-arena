// input | dice functions
import * as readline from "readline";

export function rollDice() {
    const min = 1;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createReadLineInterface(){
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

export function InputNameFromUser(props : string) {
    const rl = createReadLineInterface();

    return new Promise<string>((resolve, reject)=>{
        rl.question(props, (inputString)=>{
            rl.close();
            resolve(inputString);
        });
    });
}

export async function InputNumberFromUser(props: string) {
    let userInput : number;

    while(true){
        const rl = createReadLineInterface();

        userInput = await new Promise<number>((resolve, reject)=>{
            rl.question(props, (inputString)=>{
                rl.close();
                const inputValue = parseInt(inputString.trim(), 10);
                resolve(inputValue);
            });
        });

        if(!isNaN(userInput)) {
            break;
        } else{
            console.log("Invalid input. Please enter a valid integer number");
        }
    }

    return userInput;
}
