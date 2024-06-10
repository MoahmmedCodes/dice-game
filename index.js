
//dice1
let diceValue1 = Math.floor(Math.random()*6)+1
let diceImg1 = "dice" + diceValue1 + ".png"
let diceImgSource1 = "images/" + diceImg1
let img1= document.querySelectorAll("img")[0]
img1.setAttribute("src",diceImgSource1)


//dice2
let diceValue2 = Math.floor(Math.random()*6)+1
let diceImg2 = "dice" + diceValue2 + ".png"
let diceImgSource2 = "images/" + diceImg2
let img2= document.querySelectorAll("img")[1]
img2.setAttribute("src",diceImgSource2)

if (diceValue1>diceValue2){
    document.querySelector("h1").innerHTML = "Player1 wins"
}else if (diceValue1<diceValue2){
    document.querySelector("h1").innerHTML = "Player2 wins"
}else if (diceValue1===diceValue2) {
    document.querySelector("h1").innerHTML = "ITS A DRAW"
}


