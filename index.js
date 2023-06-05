var randonNumber1=Math.floor(Math.random()*6+1);
var image="/dice"+randonNumber1+".png";
var image1="./images"+image;
document.querySelector(".img1").setAttribute("src",image1);

var randonNumber2=Math.floor(Math.random()*6+1);
var image2="./images/dice"+randonNumber2+".png";
document.querySelector(".img2").setAttribute("src",image2);


if(randonNumber1 > randonNumber2){

    document.querySelector("h1").innerHTML="😎 Player 1 win !🎁";
}
else if(randonNumber1 < randonNumber2){

    document.querySelector("h1").innerHTML="🎁Player 2 win ! 😎";

}
else{

    document.querySelector("h1").innerHTML="✌Match Draw👏";
}