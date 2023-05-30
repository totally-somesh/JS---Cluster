// ID --> n1  /  n2

function validateNumber(n,error){

    let a = document.getElementById(n).value;

    if (a === "" || isNaN(a))
    {
        document.getElementById(error).innerHTML = "Please Enter A Valid Number !";
        return false;
    }
    return true;
}

function getPower(){

    let flag1 = validateNumber('n1', 'error1');
    let flag2 = validateNumber('n2', 'error2');
    
    if(flag1 && flag2){

        let x = parseInt(document.getElementById('n1').value);
        let y = parseInt(document.getElementById('n2').value);

        let power = x;
        let i = 1;
        
        while(y != i)
        {
            power = power * x;
            i = i + 1;     
        }
        document.getElementById('r').value = power; 
}
}