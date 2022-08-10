class Ground {
    constructor(x,y,w,h)
    {
        this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        World.add(world,this.body)
    }
    Display()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill(255,255,0)
        rect(0,0,this.w,this.h)
        pop()
        
    }
}