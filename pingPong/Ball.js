export default class Ball{

    constructor(ballElem){
        this.ball = ballElem
    }

    get x(){
        return parseFloat(getComputedStyle(this.ball).getPropertyValue("--x"))
    }
    set x(value){
        this.ball.style.setProperty("--x",value)
    }
    get y(){
        return parseFloat(getComputedStyle(this.ball).getPropertyValue("--y"))
    }
    set y(value){
        this.ball.style.setProperty("--y",value)
    }

    update(delta){
        this.x = Math.random()*100
        this.y = Math.random()*100

        // this.x = 4
        // console.log(this.x)
        // console.log(this.y)
    }

}


