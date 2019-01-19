for(var i=0;i<4;i++) {
    var output="";
        for(var j=0;j<4-i;j++) {
            output+=" ";
        }
        for(var k=0;k<=i;k++) {    
           output += "* ";
        }
        console.log(output);  
    } 