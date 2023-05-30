function validateNumber(n, error) {
    let a = document.getElementById(n).value;

    if (a === "" || isNaN(a) || a <= 0) {
      document.getElementById(error).innerHTML =
        "Please Enter A Valid Number ! ";
      return false;
    }
    return true;
  }


function getCompoundInterest(){

    let flag1 = validateNumber('PAmt', 'error1');
    let flag2 = validateNumber('ROI', 'error2');
    let flag3 = validateNumber('period', 'error3');

    if(flag1 && flag2 && flag3)
    {

        let p = parseInt(document.getElementById('PAmt').value);
        let r = parseInt(document.getElementById('ROI').value);
        let n = parseInt(document.getElementById('period').value);


        // r / 100
        // 1 + r /100
        // raised to the power n 
        // multiplied by p
        // minus p

        let R = r / 100; //
        //alert("Inside CI Method : " +R);
        let R1 = 1 + R;

        let M = Math.pow(R1, n);
        alert("Inside CI Method : " +M);
        let P = M * p;
        alert("Inside CI Method : " +P);
        let CI = P - p;
        alert("Inside CI Method : " +P);

        document.getElementById('r').value = CI;
    }
}