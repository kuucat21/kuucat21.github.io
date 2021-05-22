let daytime = document.querySelector(".daytime");

addEventListener("keypress",function(x){
    if(x.which == 13){
    daytime.classList.toggle("moving");
    }

});


