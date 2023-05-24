console.log(" -: Clubbed Function In JS :- ");

function findTotalMarks(a,b,c){

    let marks1 = a + b + c;

    return marks1;
}

function findPercentage(d,e){

    let percent = d/e*100;

    return percent; 
}

console.log("Total Marks = 75 | 80 | 85 Out Of 300");
let totalMarks = findTotalMarks(75,80,85);

let percentage = findPercentage(totalMarks, 300);

console.log(totalMarks);
console.log("Therefore, Percentage Are : ");
console.log(percentage);