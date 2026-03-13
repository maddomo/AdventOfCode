import * as fs from "fs";

//INVALID IDS: keine gleiche Sequenz 55 oder 123123, 111111, 123123123

const inputArray: string[] = fs.readFileSync("Day2/input.txt", "utf-8").split(",").filter(line => line.trim() != "");
let sum: number = 0;
for(let i = 0; i < inputArray.length; i++){
    let pair = inputArray[i].split("-");
    
    let minNumber = Number(pair[0]);
    let maxNumber = Number(pair[1]);

    for(let j = minNumber; j <= maxNumber; j++){
        let inputString = j.toString();
        let n = inputString.length;
        let isInvalid = false;
        for(let k = 1; k <= n / 2; k++){
            if(n % k === 0){
                let sequenz = inputString.slice(0,k)
                if(sequenz.repeat(n / k) === inputString){
                    isInvalid = true;
                    break;
                }
            }
        }
        if(isInvalid){
            sum += j
        }

    }
}

console.log(sum)
