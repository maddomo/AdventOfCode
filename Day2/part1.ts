import * as fs from "fs";

//INVALID IDS: keine gleiche Sequenz 55 oder 123123,

const inputArray: string[] = fs.readFileSync("Day2/input.txt", "utf-8").split(",").filter(line => line.trim() != "");
let sum: number = 0;
for(let i = 0; i < inputArray.length; i++){
    let pair = inputArray[i].split("-");
    
    let minNumber = Number(pair[0]);
    let maxNumber = Number(pair[1]);

    for(let j = minNumber; j <= maxNumber; j++){
        let inputString = j.toString();

        if((inputString.length % 2) === 0){
           let half = inputString.length / 2
           let left = inputString.slice(0, half);
           let right = inputString.slice(half);

           if(left === right){
                sum += j
           }
        }
    }
}

console.log(sum)
