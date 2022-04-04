// Hide all ongoing feature demos to prevent lag
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

let width = 0
let height = 0

// Canvas animation
const setupCanvas = () => {
    // set up canvas

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const distanceNeededToConnect = 200;

    width = canvas.width = window.innerWidth;
    height = canvas.height = document.body.scrollHeight;

    // function to generate random number
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Gets two speeds and returns either a number between the two speeds or a number between the negative of the two speeds
    function randomSpeed(minSpeed, maxSpeed) {
        const isPositive = Math.random() > 0.5 ? 1 : -1

        return isPositive * (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed);
    }

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

        distance(x, y) {
            return Math.sqrt(x * x + y * y);
        }

        // Sees if balls in range and if so, connects them
        connectBalls() {
            for (const ball of balls) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = this.distance(dx, dy)
                if (distance <= this.size + ball.size + distanceNeededToConnect) {
                    ctx.beginPath();
                    ctx.strokeStyle = this.color;
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(ball.x, ball.y);
                    ctx.stroke();
                }
            }

        }

    }

    const balls = [];

    while (balls.length < 25) {
        const size = 2;
        const ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the edge of the canvas, to avoid drawing errors
            random(0 + size, width - size),
            random(0 + size, height - size),
            randomSpeed(2, 4),
            randomSpeed(2, 4),
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
            ball.connectBalls();
        }

        requestAnimationFrame(loop);
    }

    loop();

    return canvas
}


// Updating height and width to support window resizing

const updateHeight = (canvas) => {
    const newHeight = document.body.scrollHeight

    console.log(document.body.scrollHeight)
    canvas.height = newHeight
    height = newHeight
}


const updateWidth = (canvas) => {
    const newWidth = window.innerWidth
    console.log("changed")

    canvas.width = newWidth
    width = newWidth
}


// Animation displaying each one of the about-me items one at a time
const descriptionAnimation = (aboutMeArray, currentIndex, speed, canvas) => {
    updateHeight(canvas)
    if (currentIndex < aboutMeArray.length) {
        $(aboutMeArray[currentIndex]).slideDown(speed, () => { descriptionAnimation(aboutMeArray, currentIndex + 1, speed, canvas) });
    }
}

$(document).ready(() => {
    const canvas = setupCanvas();
    descriptionAnimation($("li.about-me"), 0, 500, canvas);

    // On resize - update width
    $(window).resize(() => { updateWidth(canvas) })

    // Timekeep click animation
    $("#timekeep").click(() => {
        if (!$("#timekeep-animation").is(":visible")) {
            hideEveryting(() => {
                $("#timekeep-animation").slideDown("fast", () => {
                    $("#timekeep-gif").slideDown("fast", () => {
                        updateHeight(canvas)
                    })
                })
            });
        }
        else {
            $("#timekeep-gif").slideUp(() => {
                $("#timekeep-animation").slideUp("fast", () => {
                    updateHeight(canvas)
                })
            })

        }


    });

    // MST click animation
    $("#mst").click(() => {
        if (!$("#mst-animation").is(":visible")) {
            hideEveryting(() => {
                $("#mst-animation").slideDown("fast", () => {
                    $("#mst-gif").slideDown("fast", () => {
                        updateHeight(canvas)
                    })
                })
            })
        }
        else {
            $("#mst-gif").slideUp("fast", () => {
                $("#mst-animation").slideUp("fast", () => {
                    updateHeight(canvas)
                })
            })

        }

    });

});
