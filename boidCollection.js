// Haakon8855

class BoidCollection {
    constructor(numBoids) {
        this.numBoids = numBoids;
        this.boids = [];

        for (let i = 0; i < this.numBoids; i++) {
            this.boids.push(
                new Boid(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                )
            );
        }
    }

    move() {
        let viewDist = this.boids[0].getAttribute("viewDist");
        let positions = [];
        let headings = [];
        for (const boid of this.boids) {
            positions.push(boid.position);
            headings.push(boid.heading);
        }

        let visiblePositions = [];
        let visibleHeadings = [];
        for (const boid of this.boids) {
            visiblePositions = [];
            visibleHeadings = [];
            for (let j = 0; j < this.boids.length; j++) {
                if (boid.distanceTo(this.boids[j]) < viewDist) {
                    visiblePositions.push(positions[j]);
                    visibleHeadings.push(headings[j]);
                }
            }
            boid.move(visiblePositions, visibleHeadings);
        }
    }

    getPositions() {
        let positions = [];
        for (const boid of this.boids) {
            positions.push(boid.position);
        }
        return positions;
    }

    getAngles() {
        let angles = [];
        for (const boid of this.boids) {
            angles.push(boid.getAngle());
        }
        return angles;
    }
}
