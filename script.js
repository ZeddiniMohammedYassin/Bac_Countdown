var countDownDate= new Date("June 5, 2024 08:00:00");
var j=4 ;
var i=0 ;
var x =setInterval(function(){
    var now=new Date().getTime() ;
    var distance = countDownDate - now ;
    if(distance<0){
        i=i+1;
        countDownDate.setFullYear(countDownDate.getFullYear()+i);
        var distance = countDownDate.getTime() - now ;
        document.getElementById("hh").innerHTML=i+j;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(days<10){days="0"+days.toString()}
    if(hours<10){hours="0"+hours.toString()}
    if(minutes<10){minutes="0"+minutes.toString()}
    if(seconds<10){seconds="0"+seconds.toString()}
    document.getElementById("d").innerHTML=days ;
    document.getElementById("h").innerHTML=hours ;
    document.getElementById("m").innerHTML=minutes ;
    document.getElementById("s").innerHTML=seconds ;
    
},1000);
