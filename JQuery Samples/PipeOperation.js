let fs = require("fs");

let rs = fs.createReadStream("sample1.txt");

let ws = fs.createWriteStream("sample2.txt");

rs.pipe(ws);

