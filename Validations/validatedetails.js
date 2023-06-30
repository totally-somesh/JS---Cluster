validate = (nm, lnumber) => {
  var namerule = /^(?=.*[a-zA-Z])[a-zA-Z]{1,10}$/;

  var luckynumberrule = /^(?=.*[0-9])[0-9]{4,4}$/;

  var genderarr = document.getElementsByName("gender");

  var selectedgender = 0;
  for (i = 0; i < genderarr.length; i++) {
    if (genderarr[i].checked) {
      selectedgender = genderarr[i].value;
    }
  }

  var foodarr = document.getElementsByName("food");
  var selectedfoodarr = [];
  for (i = 0; i < foodarr.length; i++) {
    if (foodarr[i].checked) {
      selectedfoodarr.push(foodarr[i].value);
    }
  }
  //   alert(document.getElementById("nm").value);
  //   alert(document.getElementById("dt").value);

  //   alert(document.getElementById("email").value);
  //   alert(document.getElementById("lnumber").value);

  if (nm.value.match(namerule) && lnumber.value.match(luckynumberrule)) {
    // alert("inside final method of displaying");
    document.getElementById("myDiv").innerHTML =
      " | Name : " +
      document.getElementById("nm").value +
      " | Birth Date : " +
      document.getElementById("dt").value +
      " | Email ID : " +
      document.getElementById("email").value +
      " | Gender : " +
      selectedgender +
      " | Lucky Number : " +
      document.getElementById("lnumber").value +
      " | Favourite Food : " +
      selectedfoodarr;
  } else {
    document.getElementById("myDiv").innerHTML = "Invalid Details !";
  }
};
