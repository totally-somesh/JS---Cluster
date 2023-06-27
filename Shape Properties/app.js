const http = require("http");
const url = require("url");
const fs = require("fs");
const circle = require("./circle");

const server = http.createServer(function (request, response) {
  var q = url.parse(request.url, true);

  response.writeHeader(200, { "content-type": "text/html" });

  switch (q.pathname) {
    case "/shape":
      var rs = fs.createReadStream("./views/index.html");
      rs.pipe(response);
      break;

    case "/chosenshape":
      if (q.query.btn === "circle") {
        var rsc = fs.createReadStream("./views/circle.html");
        rsc.pipe(response);
      }
      if (q.query.btn === "triangle") {
        var rsc = fs.createReadStream("./views/triangle.html");
        rsc.pipe(response);
      }
      if (q.query.btn === "rectangle") {
        var rsc = fs.createReadStream("./views/rectangle.html");
        rsc.pipe(response);
      }
      break;

    case "/circ":
      if (q.query.btn === "area") {
        var radius = q.query.radius;
        var area = circle.area(radius);
        response.write("<h3>Area : </h3>" + area);
        response.end();
      } else if (q.query.btn === "circumference") {
        var radius = q.query.radius;
        var circumference = circle.circumference(radius);
        response.write("<h3>circumference : </h3>" + circumference);
        response.end();
      } else {
        var radius = q.query.radius;
        var diameter = circle.diameter(radius);
        response.write("<h3>Diameter : </h3>" + diameter);
        response.end();
      }
      break;

    default:
      response.write("<h3>At Default : <a href='/shape'>Go To Login</a></h3>");
      response.end();
      break;
  } //end of switch
});

server.listen(3007, function () {
  console.log(" -----< Ahad Bhai Ka Server Mastt Chall Raha Hai ! >----- ");
});
