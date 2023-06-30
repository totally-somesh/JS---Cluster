// validate = (inputtxt) => {
//   var rule = /^(?=.*[0-9])(?=.*[@#$%&*])[a-zA-Z0-9@#$%&*]{5,10}$/;

//   if (inputtxt.value.match(rule)) {
//     document.getElementById("myDiv").innerHTML =
//       "Password Constraint Matched Succesfully, Boss ! ";
//   } else {
//     document.getElementById("myDiv").innerHTML =
//       "Password Constraint Dint Match, Boss ! ";
//   }
// };

validate = (inputtxt) => {
  var rule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
  if (inputtxt.value.match(rule)) {
    document.getElementById("myDiv").innerHTML = "Correct";
  } else {
    document.getElementById("myDiv").innerHTML = "incorrect";
  }
};
