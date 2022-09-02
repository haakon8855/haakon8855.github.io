import BoidCollection from "./boidCollection.js";

class BoidsDrawer {
  constructor(fps = 60, numBoids = 250, width, height, canvas) {
    this.fps = fps;
    this.numBoids = numBoids;
    this.size = [window.innerWidth, window.innerHeight];
    this.spriteSize = [15, 8];

    this.running = true;
    if (canvas != null) {
      this.canvas = canvas;
      if (width && height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
      } else {
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
      }
      this.canvas.width = this.canvasWidth;
      this.canvas.height = this.canvasHeight;
      this.ctx = this.canvas.getContext("2d");
    } else {
      this.canvas = document.getElementsByName("canvas")[0];
    }

    this.bgColor = "#1e1e1e";
    this.fgColor = "#6464aa";

    this.boids = null;
    this.initialize();
  }

  setCanvasRef(canvas) {
    if (canvas == null) {
      return;
    }
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }

  setCanvasDims(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  clearCanvas() {
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  initialize() {
    this.boids = new BoidCollection(this.numBoids);
    self.running = true;
  }

  iteration() {
    this.boids.move();
  }

  render() {
    this.running = true;
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
      this.ctx.lineTo(positions[i][0], positions[i][1] + this.spriteSize[1]);
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
    if (this.canvas != null && !this.running) {
      this.running = true;
      this.interval = setInterval(() => {
        this.loop();
      }, 1000 / this.fps);
    }
  }
  stop() {
    this.running = false;
    return clearInterval(this.interval);
  }
}

export default BoidsDrawer;
