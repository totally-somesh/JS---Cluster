validate = () => {
  var cname = document.getElementById("cname").value;
  var bdate = document.getElementById("bdate").value;
  var sdate = document.getElementById("sdate").value;

  bdate1 = new Date(bdate);

  sdate1 = new Date(sdate);

  var datedifferenceindays = (sdate1 - bdate1) / (1000 * 60 * 60 * 24);

  var length = cname.length;

  var id = document.getElementById("id").value;

  var ototal = document.getElementById("ototal").value;

  if (length < 6 || datedifferenceindays > 180 || datedifferenceindays < 0) {
    document.getElementById("myDiv").innerHTML = "Invalid Order Details ! ";
  } else {
    document.getElementById("myDiv").innerHTML =
      " | Order ID : " +
      id +
      " | Customer Name : " +
      cname +
      " | Billing Date : " +
      bdate +
      " | Shipping Date : " +
      sdate +
      " | Order Total : " +
      ototal;
  }
};
