import Ball from "./Ball.js";  

const ball = new Ball(document.getElementById("ball"))

let lastTym
function update(time){
    let delta
    if(lastTym != null){
        delta = time - lastTym
        ball.update(delta)
    }
    lastTym = time
    // console.log(delta);

    window.requestAnimationFrame(update)
}


window.requestAnimationFrame(update)