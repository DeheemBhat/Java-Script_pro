var n1 = Math.floor(Math.random()*6)+1;
var n2 = Math.floor(Math.random()*6)+1;

var image_random1 ="dice"+n1+".png";
var image_random2 ="dice"+n2+".png";

var image_source1 ="images/"+image_random1;
var image_source2 ="images/"+image_random2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",image_source1);

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",image_source2);

if(n1>n2){
  document.querySelector("h1").innerHTML="Player 1 Wins #&#x270C;"
}
else if(n1<n2){
  document.querySelector("h1").innerHTML="Player 2 Wins #&#x270C;"
}
else{
  document.querySelector("h1").innerHTML="It's a Draw!"
}
