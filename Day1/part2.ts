import * as fs from "fs";
let pointing = 50;


let zeroCounter = 0;
const inputArray: string[] = fs.readFileSync("Day1/input.txt", "utf-8").split("\n").filter(line => line.trim() != "");

for(let i = 0; i < inputArray.length; i++){
    let input = inputArray[i];
    let number: number = 0;
    let end = 0;
    for(let i = 1; i < input.length; i++){
        number = number * 10 + Number(input[i])
    }

    if(input[0] === "R"){
        end = pointing + number;
        let plus = Math.floor(end/ 100) - Math.floor(pointing / 100)
        zeroCounter += plus;

        pointing = (pointing + number) % 100


    }else if(input[0] === "L"){

        end = pointing - number;

        let plus = Math.floor((pointing - 1) / 100) - Math.floor((end - 1) / 100)
        zeroCounter += plus;

        pointing = ((pointing - number) % 100 + 100) % 100;

    }

}

console.log(zeroCounter)
