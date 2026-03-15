import * as fs from "fs"

//gibt tupel der jeweiligen range zurück
const idRanges = fs.readFileSync("Day5/input1.txt", "utf-8").split("\n").filter(line => line.trim() != "").map(line => {
    const [min, max] = line.split("-").map(Number);
    return [min, max] as [number, number]
});

//number array der ids
const availableIds = fs.readFileSync("Day5/input2.txt", "utf-8").split("\n").filter(line => line.trim() != "").map(Number);

//geht für jede id jede range durch und guckt ob sie drinne ist, wenn ja dann ist sie in results
const result = availableIds.filter(id => idRanges.some(([ min, max ]) => id >= min && id <= max))

console.log(result.length)