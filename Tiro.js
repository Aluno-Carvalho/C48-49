class Tiro{
    constructor(x){
        this.image = loadImage("images/tiro.png");
        this.x = x;
        this.y = 420;
        this.velocityY;
        this.scale = 0.1;
    }

    show(){
        image(this.image, this.x, this.y, 15, 30);
    }
}