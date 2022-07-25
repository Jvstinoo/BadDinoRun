class EnemyBlock {
    constructor(canv, ctx) {
        this.ctx = ctx
        this.x = canv.width;
        this.y = canv.height
        this.width = 30;
        this.height = 30;
        this.vel = 0;
    }

    move() {
        this.x -= this.vel;
        if (this.x < 0) {
            this.x = canvas.width;
            this.vel *= 1.01;
        }
    }

    draw(ctx = this.ctx) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(this.x, this.y - this.height, this.width, this.height);

    }
    main() // Will run all methods in the class.
    {
        this.move();
        this.draw();
    }
}