    
    function myFunction(val) {
        if(val=="")
        {
            document.getElementById("ok").innerHTML = " ";
        }
        else
        {
        var vall= parseInt(val);
        
        if (val<0) {
        document.getElementById("ok").innerHTML = "enter a positive value";

        }
        else 
        {
        var x = vall +2;
      var y = vall + 4;
      var z = vall +6;
      if(val%2==0){
        
            document.getElementById("ok").innerHTML = +x+ ", "+y+",  "+z ;
        }
        else{
            document.getElementById("ok").innerHTML = +x+", "+y+", "+z;

        }
    } 
    }

}