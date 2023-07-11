
const circle= {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

const circleOne= circle;
console.log(circleOne);
console.log(circle.draw);
circle.draw();

function Circle(radius) {
    this.radius= radius,
    this.draw= function(){
        console.log('draw');
    }
};

const circleTwo= new Circle(5);


console.log(circleTwo);
console.log(circleTwo.radius);



