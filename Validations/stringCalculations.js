display = () => {
  var fstring = document.getElementById("string").value;
  var fsubstring = document.getElementById("substring").value;
  var freplacestring = document.getElementById("replacestring").value;

  var arr = document.getElementsByName("operation");

  var operation = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      operation = arr[i].value;
    }
  }

  switch (operation) {
    case "searchsubstring":
      if (fstring.includes(fsubstring)) {
        document.getElementById("myDiv").innerHTML =
          "Sub String Found In Main String";
      } else {
        document.getElementById("myDiv").innerHTML =
          "Sub String Not Found In Main String";
      }

      break;

    case "touppercase":
      document.getElementById("myDiv").innerHTML =
        "After Upper Casing : " + fstring.toUpperCase();

      break;

    case "tolowercase":
      document.getElementById("myDiv").innerHTML =
        "After Upper Casing : " + fstring.toLowerCase();
      break;

    case "trim":
      document.getElementById("myDiv").innerHTML =
        "After Upper Casing : " + fstring.trim();
      break;

    case "concatenate":
      document.getElementById("myDiv").innerHTML =
        "After Upper Casing : " + fstring.concat(fsubstring);
      break;

    case "replace":
      alert("Inside Raplace Switch CAse ");
      //   alert(fstring.replace("substring", "replacesubstring"));
      //   document.getElementById("myDiv").innerHTML =
      //     "After Upper Casing : " + fstring.reaplce(fsubstring, freplacestring);

      text = fstring;
      alert(text);
      ans = text.replace(fsubstring, freplacestring);
      alert(ans);
      document.getElementById("myDiv").innerHTML = ans;

      break;
  }
};
