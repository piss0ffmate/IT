function robb(){
list=[0,21,0,100,10,0, 0]

rng  = Math.floor(Math.random() * list.length)

document.getElementById("rng").innerHTML = list[rng];
console.log(rng)
console.log(list[rng])
}