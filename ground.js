class Ground {
    constructor(x, y, width, height) {
        var options = {
            'friction': 0.7,
            'isStatic': true,
            'density': 2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
};