display = () => {
  var radius = parseInt(document.getElementById("rad").value);

  var area = Math.round(3.14 * Math.pow(radius, 2));

  var circumference = Math.round(2 * 3.14 * radius);

  document.getElementById("myDiv").innerHTML =
    " | Area : " + area + " | Circumference : " + circumference;
};
