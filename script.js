var b=document.getElementById("btn");
var t=document.getElementById("addText");
var d=document.getElementById("display");
var e=document.getElementById("erase");

b.addEventListener('click',function(b){
    d.innerHTML="->"+t.value
})

e.addEventListener('click', function(e){
    t.value=null;
    d.innerHTML=null;
})