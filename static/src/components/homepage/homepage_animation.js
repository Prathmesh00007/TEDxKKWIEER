export const canvasDots = function() {
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        colorDot = '#e62b1e',
        color = '#e62b1e';

    // Set canvas size
    ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.fillStyle = colorDot;
    ctx.lineWidth = .25;
    ctx.strokeStyle = color;

    // Mouse position tracking
    var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
    };

    var dots = {
        nb: 400,
        distance: 70,
        d_radius: 100,
        array: []
    };

    function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = 2 * Math.random();
    }

    Dot.prototype = {
        create: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },

        animate: function() {
            for (var i = 0; i < dots.nb; i++) {

                var dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = +dot.vx;
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                    dot.vy = +dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function() {
            for (var i = 0; i < dots.nb; i++) {
                for (var j = 0; j < dots.nb; j++) {
                    var i_dot = dots.array[i];
                    var j_dot = dots.array[j];

                    if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
                        if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < dots.nb; i++) {
            dots.array.push(new Dot());
            var dot = dots.array[i];

            dot.create();
        }

        dot.line();
        dot.animate();
    }

    // Update mouse position for mobile touch events
    window.addEventListener("touchmove", function(event) {
        mousePosition.x = event.touches[0].pageX;
        mousePosition.y = event.touches[0].pageY;
    });

    window.onmousemove = function(parameter) {
        mousePosition.x = parameter.pageX;
        mousePosition.y = parameter.pageY;
    }

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    // Redraw dots on window resize for responsiveness
    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    setInterval(createDots, 1000 / 30);
};
