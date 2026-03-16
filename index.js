console.log("JavaScript connected successfully");

var i = 0;

setInterval(function(){

    if(i==0)
    {
        document.getElementById("img1").style.display="none";
        document.getElementById("img2").style.display="block";

        document.getElementById("text1").style.display="none";
        document.querySelector(".box").style.display="block";

        i = 1;
    }
    else
    {
        document.getElementById("img1").style.display="block";
        document.getElementById("img2").style.display="none";

        document.getElementById("text1").style.display="block";
        document.querySelector(".box").style.display="none";

        i = 0;
    }

},2000);
