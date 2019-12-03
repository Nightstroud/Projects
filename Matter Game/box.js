function Box(x,y,w,h) {
    let options = {
        friction: 0.3,
        restitution: 0.5,
    };

    this.body = bodies.rectangle(x, y, w, h, options);
    this.y = w;
    this.h = h;
    this.color = random(122, 190);
    World.add(world, this.body);

    this.show = function() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(this.color);
        rect(0, 0, this.w, this.h);
        pop();
    }
}