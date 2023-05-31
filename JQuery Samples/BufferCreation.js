buf1 = Buffer.alloc(800); //Creation of an empty buffer with size of 800 bytes

var len = buf1.write("I Love India."); //Writing into the buffer

console.log(len); //Printing Length of the buffer

console.log(buf1.toString()); //Printing the actual buffer

buf2 = new Buffer("I Love India Again."); //Depricated method of Creating Buffer in nodeJS

console.log(buf2.length); //Printing Length of the buffer

console.log(buf2.toString()); //Printing the actual buffer

buf3 =  Buffer.alloc(buf2.length);

buf2.copy(buf3);

console.log(buf3.toString());
