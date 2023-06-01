const fs = require("fs");
const http = require("http");
const url = require("url");
const f1 = require("./function");

const server = http.createServer(function(req, resp){

var q = url.parse(req.url, true);

var PRC = parseInt(q.query.prc); 

resp.writeHeader(200, {"content-type" : "text/html"})

switch(q.pathname){

    case "/":

    var rs = fs.createReadStream("./TaxStructure.html");

    rs.pipe(resp);
    break;

    case "/submit-data":

    if(q.query.btn === "BT1"){
    var tax = f1.taxCalculator(PRC);
    resp.write("<h3> | Taxable Amount : " +tax+ "</h3>");
    }
    resp.end();
    break;

    default :
    resp.write("Default Page ! ");
    resp.end();

    break;

} // switch
}) // createServer()

server.listen(3007, function(){
    
    console.log(" -: Started & Running Server : 3007 :- ");
})
