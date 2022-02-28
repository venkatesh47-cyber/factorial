function myFunction(){
    var x=document.getElementById("demo").value;
    var n=x;
   
        if(n==0)
        {
            document.getElementById("demo1").innerHTML= 1;
        }

        else{
        for(i=1;i<n;i++){
           x=x*i;
        }
        document.getElementById("demo1").innerHTML= x ;
    }
}