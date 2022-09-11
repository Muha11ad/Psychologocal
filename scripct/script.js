const elColor = document.querySelector(".color")
const elAnimal = document.querySelector(".animal")
const elRoom = document.querySelector(".room")
const elForm = document.getElementsByTagName("form")
const nextBtn = document.getElementById("next")
const nextEl = document.getElementById("nextSec")
const finishBtn = document.getElementById("finish")
const elWrap = document.getElementById("wrapper")

let userName = prompt('Can you write your name ')

nextBtn.addEventListener("click", function(evt){
    evt.preventDefault() 
    document.querySelector(".label__color").classList.toggle("display")
    elColor.classList.toggle("display")
    elAnimal.classList.toggle("diplay")
    document.querySelector(".label__animal").classList.remove("display")  
     nextEl.classList.remove("display")
    nextBtn.classList.toggle("display")

});

nextEl.addEventListener("click", function(evt){
    evt.preventDefault()
    elAnimal.classList.remove("diplay")
    elRoom.classList.toggle("diplay")
    document.querySelector(".label__animal").classList.toggle("display")
    document.querySelector(".label__room").classList.remove("display")
    finishBtn.classList.remove("display")
    nextEl.classList.toggle("display")
}); 
finishBtn.addEventListener("click",function(evt){
    evt.preventDefault();
    let color = elColor.value
    let animal = elAnimal.value
    let room = elRoom.value
   
 elWrap.innerHTML =`<ul class="finish__list"> 
 <h2>Dear ${userName}</h2>
 <li> You see/consider your self: ${color}</li>, 
 <li> You see/consider others: ${animal}</li>,
 <li>When you thinking about "die" you feel: ${room}</li> </ul>`
 localStorage.setItem("Name", `${userName}`)
 localStorage.setItem("self", `${color}`)
 localStorage.setItem("suround", `${animal}`)
 localStorage.setItem("die", `${room}`)
 document.querySelector(".display").classList.toggle("diplay")
 finishBtn.classList.toggle("display")
})


