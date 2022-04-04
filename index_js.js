
const hideEveryting = (callback) => {
    $("#timekeep-gif").slideUp(() => {
        $("#timekeep-animation").slideUp("fast", () => {

            $("#mst-gif").slideUp("fast", () => {
                $("#mst-animation").slideUp("fast",
                    callback
                )
            })

        })
    })


}

const setupCanvas = () => {// set up canvas

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // function to generate random number

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function randomSpeed(minSpeed, maxSpeed) {
        const isPositive = Math.random() > 0.5 ? 1 : -1

        return isPositive * (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed);
    }

    // function to generate random RGB color value

    // function randomRGB() {
    //     return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
    // }

    class Ball {

        constructor(x, y, velX, velY, color, size) {
            this.x = x;
            this.y = y;
            this.velX = velX;
            this.velY = velY;
            this.color = color;
            this.size = size;
        }

        draw() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
        }

        update() {
            if ((this.x + this.size) >= width) {
                this.velX = -(this.velX);
            }

            if ((this.x - this.size) <= 0) {
                this.velX = -(this.velX);
            }

            if ((this.y + this.size) >= height) {
                this.velY = -(this.velY);
            }

            if ((this.y - this.size) <= 0) {
                this.velY = -(this.velY);
            }

            this.x += this.velX;
            this.y += this.velY;
        }

        // collisionDetect() {
        //     for (const ball of balls) {
        //         if (!(this === ball)) {
        //             const dx = this.x - ball.x;
        //             const dy = this.y - ball.y;
        //             const distance = Math.sqrt(dx * dx + dy * dy);

        //             if (distance < this.size + ball.size) {
        //                 ball.color = this.color = randomRGB();
        //             }
        //         }
        //     }
        // }

    }

    const balls = [];

    while (balls.length < 25) {
        const size = 3;
        const ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the edge of the canvas, to avoid drawing errors
            random(0 + size, width - size),
            random(0 + size, height - size),
            randomSpeed(3, 7),
            randomSpeed(3, 7),
            'rgb(255, 255, 255)',
            size
        );

        balls.push(ball);
    }

    function loop() {
        ctx.fillStyle = '#191919';
        ctx.fillRect(0, 0, width, height);

        for (const ball of balls) {
            ball.draw();
            ball.update();
            // ball.collisionDetect();
        }

        requestAnimationFrame(loop);
    }

    loop();
}

$(document).ready(() => {
    //code here
    console.log("should work");
    console.log("update");

    // setupCanvas();

    // Timekeep click animation
    $("#timekeep").click(() => {
        if (!$("#timekeep-animation").is(":visible")) {
            hideEveryting(() => {
                $("#timekeep-animation").slideDown("fast", () => {
                    $("#timekeep-gif").slideDown()
                })
            });
        }
        else {
            $("#timekeep-gif").slideUp(() => {
                $("#timekeep-animation").slideUp("fast")
            })

        }

    });

    // MST click animation
    $("#mst").click(() => {
        if (!$("#mst-animation").is(":visible")) {
            hideEveryting(() => {
                $("#mst-animation").slideDown("fast", () => {
                    $("#mst-gif").slideDown("fast")
                })
            })
        }
        else {
            $("#mst-gif").slideUp("fast", () => {
                $("#mst-animation").slideUp("fast")
            })

        }

    });

});
