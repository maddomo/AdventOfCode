import * as fs from "fs";
const batteryBanks: string[] = fs.readFileSync("Day3/input.txt", "utf-8").split("\n").filter(line => line.trim() != "");
let sum = 0n;
for(const batteryBank of batteryBanks){
    let length = batteryBank.length;
    let batteryBankNew = batteryBank;
    while(length !== 12){
        let removed = false;
        for(let i = 0; i < length - 1; i++){
            if(Number(batteryBankNew[i]) < Number(batteryBankNew[i + 1])){
                batteryBankNew = batteryBankNew.slice(0, i) + batteryBankNew.slice(i + 1);
                removed = true;
                length--;
                break;
            }
        }
        if(!removed){
            batteryBankNew = batteryBankNew.slice(0, length - 1);
            length--;
        }
    }

    sum += BigInt(batteryBankNew);


}

console.log(sum.toString())
