function myfunction()
{


var text="abcdefghijklmnopqrstuvwxyz";
var predictext=text.charAt(Math.floor(Math.random() * text.length));
var joie=predictext;
return joie;
count5.textContent = "";
}
var count2 = document.getElementById("count1");
var count3 = document.getElementById("win1");
var count4 = document.getElementById("loss1");
var count5 = document.getElementById("guess1");
var joie=myfunction();
var count=10;
var win=0;
var loss=0;

document.onkeyup=function (event)
{

var texo=event.key;
if(count5.textContent.match(texo))
{
alert("key already pressed");
}
else
{
count5.textContent += texo + ',';
if(count>1)
{
if(joie != texo)
{
count=count-1;


}
else
{
win++;
count=10;

joie=myfunction();
count5.textContent="";
}
}
else
{
loss++;
count=10;

joie=myfunction();
count5.textContent="";
}
count2.textContent = count;
count3.textContent = win;
count4.textContent = loss;

console.log(joie);
}
}