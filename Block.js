class Block {
    constructor(canv, ctx) {
        this.canv = canv;
        this.ctx = ctx
        this.x = canv.width * .1;
        this.y = canv.height
        this.width = 30;
        this.height = 30;
        this.vel = 8;
        this.jumping = false;
        this.score = 0;
        this.highScore = 0;
    }

    move() {

        addEventListener("keydown", (event) => {
            if (event.key == ' ' && this.y == this.canv.height) {
                this.jumping = true;
            }
        })
        window.addEventListener('touchstart', function () {
            if (this.y == this.canv.height) {
                this.jumping = true;
            }
        })
        // Add jumping code here
        if (this.jumping) {
            this.y -= this.vel;
            if (this.y <= this.canv.height - 120) {
                this.jumping = false;
            }
        } else if (this.y != this.canv.height) {
            this.y += 4;
        }
    }
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y - this.height, this.width, this.height);
    }
    main() // Will run all methods in the class.
    {
        this.move();
        this.draw();
    }
}