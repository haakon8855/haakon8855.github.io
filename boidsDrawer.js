// Haakon8855

class BoidsDrawer {
    constructor(fps = 60, numBoids = 250) {
        this.fps = fps;
        this.numBoids = numBoids;
        this.size = [window.innerWidth, window.innerHeight];
        this.spriteSize = [15, 8];

        this.running = true;
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");

        this.bgColor = "#1e1e1e";
        this.fgColor = "#6464aa";

        this.boids = null;
        this.initialize();
    }

    clearCanvas() {
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    initialize() {
        addEventListener("resize", (_event) => {
            let canvas = document.getElementById("canvas");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        this.boids = new BoidCollection(this.numBoids);
        self.running = true;
    }

    iteration() {
        this.boids.move();
    }

    render() {
        this.clearCanvas();
        let angles = this.boids.getAngles();
        let positions = this.boids.getPositions();
        this.ctx.fillStyle = this.fgColor;
        for (let i = 0; i < positions.length; i++) {
            // Rotate drawing
            this.ctx.translate(positions[i][0], positions[i][1]);
            this.ctx.rotate(angles[i]);
            this.ctx.translate(-positions[i][0], -positions[i][1]);

            // Triangle
            this.ctx.beginPath();
            this.ctx.moveTo(positions[i][0], positions[i][1]);
            this.ctx.lineTo(
                positions[i][0] + this.spriteSize[0],
                positions[i][1] + this.spriteSize[1] / 2
            );
            this.ctx.lineTo(
                positions[i][0],
                positions[i][1] + this.spriteSize[1]
            );
            this.ctx.lineTo(
                positions[i][0] + this.spriteSize[0] / 4,
                positions[i][1] + this.spriteSize[1] / 2
            );
            this.ctx.lineTo(positions[i][0], positions[i][1]);
            this.ctx.fill();

            // Reset transformation matrix to the identity matrix
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
    }

    loop() {
        this.iteration();
        this.render();
    }

    run() {
        this.initialize();
        setInterval(() => {
            this.loop();
        }, 1000 / this.fps);
    }
}

let drawer = new BoidsDrawer();
drawer.run();
