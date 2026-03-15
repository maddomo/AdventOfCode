import * as fs from "fs"

//gibt tupel der jeweiligen range zurück
const idRanges = fs.readFileSync("Day5/input1.txt", "utf-8").split("\n").filter(line => line.trim() != "").map(line => {
    const [min, max] = line.split("-").map(Number);
    return [min, max] as [number, number]
});

//sortiere nach dem min
idRanges.sort((a, b) => a[0] - b[0])

const merged: [number, number][] = []

for(const [min, max] of idRanges){
    //holt letztes element was in merged gepusht wurde
    const last = merged[merged.length - 1]
    
    //überprüft, wenn jetziges min größer als letztes max plus 1 ist dann kann gepusht werden, sonst mergen
    if(merged.length === 0 || min > last[1] + 1){
        merged.push([min, max])
    }else {
        last[1] = Math.max(last[1], max)
    }
}

const total = merged.reduce((sum, [min, max]) => sum + (max - min + 1), 0);

console.log(total)