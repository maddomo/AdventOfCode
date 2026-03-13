import * as fs from "fs";
const batteryBanks: string[] = fs.readFileSync("Day3/input.txt", "utf-8").split("\n").filter(line => line.trim() != "");
let sum = 0;
for(const batteryBank of batteryBanks){
    let highestNum = 0;
    let secondHighestNum = 0;
    let highestNumIndex = 0;
    let secondHighestNumIndex =  0;
    for(let i = 0; i < batteryBank.length - 1; i++){
        if(Number(batteryBank[i]) > highestNum){
            highestNum = Number(batteryBank[i]);
            highestNumIndex = i;
        }
    }
    for(let i = highestNumIndex; i < batteryBank.length; i++){
        if(Number(batteryBank[i]) > secondHighestNum && i !== highestNumIndex){
            secondHighestNum = Number(batteryBank[i]);
            secondHighestNumIndex = i;
        }
    }

    if(highestNumIndex < secondHighestNumIndex){
        sum += Number(batteryBank[highestNumIndex] + batteryBank[secondHighestNumIndex])
    }else{
        sum += Number(batteryBank[secondHighestNumIndex] + batteryBank[highestNumIndex])
    }


}

console.log(sum)
