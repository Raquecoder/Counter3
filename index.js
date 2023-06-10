let show = 0;
let showPart = document.getElementById("show")
let decreaseBtn= document.getElementById("decrease-btn")
let resetBtn = document.getElementById("reset-btn")
let increaseBtn = document.getElementById("increase-btn")

function decrease(){
show-= 1;
showPart.textContent = show;
showPart.style.color= 'red';
decreaseBtn.style.color='red';
}

function reset(){
show = 0;
showPart.textContent =show;
showPart.style.color= 'black';
decreaseBtn.style.color='black';
increaseBtn.style.color='black';
}

function increase(){
show += 1;
showPart.textContent= show;
showPart.style.color= 'green';
increaseBtn.style.color='green';
}