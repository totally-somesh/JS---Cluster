const fs = require("fs");

fs.exists("sample1.txt",function(flag){

    if(flag){

       fs.stat("sample1.txt",function(err,status){
            if(err){
                console.log(err);
            }else{
                //console.log(status);
            } //if-else of err
        })
    }else{
        console.log("File Does Not Exists ! ");
    } //if-else of flag
}) //end of exists
