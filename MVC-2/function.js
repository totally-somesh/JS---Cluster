exports.taxCalculator = function(a)
{
    var tax = 0;

    if(a > 100000 && a < 500000){
        tax = a * 5 / 100;
    }
    else if(a > 500000 && a < 1000000){
        tax = a * 8 / 100;
    }
    else {
        tax = a * 10 / 100;
    }
    
    return tax;
};