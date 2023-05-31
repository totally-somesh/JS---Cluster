let fs = require("fs");

fs.exists("sample1.txt",function(flag){
    if(flag){
        fs.stat("sample1.txt",function(err,status){
            if(err){
                console.log("Error Occurred : " +err);
            }
            else{

                fs.open("sample1.txt","r",function(err,fd){

                    buf1 = Buffer.alloc(status.size);

                    fs.read(fd,buf1,0,27,null,function(err,bytesRead,buffer){

                        console.log(buffer.toString());
                        console.log("BytesRead : " +bytesRead);

                    });
                })
            }
        })
    }
})
