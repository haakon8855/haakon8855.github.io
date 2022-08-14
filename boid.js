// Haakon8855

class Boid {
    constructor(positionX, positionY) {
        this.position = [positionX, positionY];
        this.heading = [Math.random() * 2 - 1, Math.random() * 2 - 1];
        this.attributes = {};
        this.initialize();
    }

    initialize() {
        // Velocity of boids
        this.attributes["velocity"] = 2;
        // Distance when boid will try to avoid other boids
        this.attributes["viewDist"] = 65;
        // View distance of each boid
        this.attributes["tooCloseDist"] = 20;
        // How hard boids will turn when reaching the edge
        this.attributes["edgeAvoidance"] = 0.01;
        // How hard boids will turn when avoiding other boids
        this.attributes["avoidance"] = 0.06;
        // How much boid will try to be in middle of its group
        this.attributes["coherence"] = 0.006;
        // How much boid will try to follow direction of nearby boids
        this.attributes["conformity"] = 0.024;
        // When will edge avoidance kick in
        this.attributes["edgeOffset"] = 0.2;
    }

    getPosition() {
        return this.position;
    }

    getAngle() {
        let angle = Math.acos(this.heading[0]);
        return this.heading[1] < 0 ? -angle : angle;
    }

    getAttribute(attribute) {
        return this.attributes[attribute];
    }

    getEdgeAvoidanceVector() {
        let offsetX = window.innerWidth * this.attributes["edgeOffset"];
        let offsetY = window.innerHeight * this.attributes["edgeOffset"];
        let edgeAvoidanceVector = [0, 0];
        // X component
        this.avoidsEdge = false;
        if (this.position[0] < offsetX) {
            edgeAvoidanceVector[0] = offsetX - this.position[0];
            this.avoidsEdge = true;
        } else if (this.position[0] > window.innerWidth - offsetX) {
            edgeAvoidanceVector[0] =
                window.innerWidth - offsetX - this.position[0];
            this.avoidsEdge = true;
        }
        // Y component
        if (this.position[1] < offsetY) {
            edgeAvoidanceVector[1] = offsetY - this.position[1];
            this.avoidsEdge = true;
        } else if (this.position[1] > window.innerHeight - offsetY) {
            edgeAvoidanceVector[1] =
                window.innerHeight - offsetY - this.position[1];
            this.avoidsEdge = true;
        }
        return edgeAvoidanceVector;
    }

    getAvoidVector(positions) {
        let avoidVector = [0, 0];
        let tooCloseBoids = [];
        let diff = [];
        positions.forEach((position) => {
            if (
                this.distanceBetween(this.position, position) <
                this.attributes["tooCloseDist"]
            ) {
                tooCloseBoids.push(position);
            }
        });
        tooCloseBoids.forEach((position) => {
            diff = [
                position[0] - this.position[0],
                position[1] - this.position[1],
            ];
            avoidVector[0] = avoidVector[0] - diff[0];
            avoidVector[1] = avoidVector[1] - diff[1];
        });
        return avoidVector;
    }

    getCenterVector(positions) {
        return [
            positions
                .map((point) => {
                    return point[0];
                })
                .reduce((a, b) => {
                    return a + b;
                }) /
                positions.length -
                this.position[0],
            positions
                .map((point) => {
                    return point[1];
                })
                .reduce((a, b) => {
                    return a + b;
                }) /
                positions.length -
                this.position[1],
        ];
    }

    getPercievedHeadingVector(headings) {
        let percievedHeadingVector = [0.0, 0.0];
        headings.forEach((otherHeading) => {
            for (let i = 0; i < percievedHeadingVector.length; i++) {
                percievedHeadingVector[i] += otherHeading[i];
            }
        });
        for (let i = 0; i < percievedHeadingVector.length; i++) {
            percievedHeadingVector[i] /= headings.length;
            percievedHeadingVector[i] -= this.heading[i];
            percievedHeadingVector[i] *= this.attributes["conformity"];
        }
        return percievedHeadingVector;
    }

    updateHeading(positions, headings) {
        let edgeAvoidanceVector = Boid.normalize(
            this.getEdgeAvoidanceVector(),
            this.attributes["edgeAvoidance"]
        );
        let avoidVector = Boid.normalize(
            this.getAvoidVector(positions),
            this.attributes["avoidance"]
        );
        let centerVector = Boid.normalize(
            this.getCenterVector(positions),
            this.attributes["coherence"]
        );
        let percievedHeadingVector = this.getPercievedHeadingVector(headings);
        for (let i = 0; i < this.heading.length; i++) {
            this.heading[i] =
                this.heading[i] +
                edgeAvoidanceVector[i] +
                avoidVector[i] +
                centerVector[i] +
                percievedHeadingVector[i];
        }
        this.heading = Boid.normalize(this.heading, 1.0);
    }

    move(positions, headings) {
        this.updateHeading(positions, headings);
        for (let i = 0; i < this.position.length; i++) {
            this.position[i] += parseFloat(
                this.heading[i] * this.attributes["velocity"]
            );
        }
    }

    static normalize(vector, scale) {
        if (vector[0] == 0 && vector[1] == 0) {
            return vector;
        }
        let length = Math.sqrt(vector[0] ** 2 + vector[1] ** 2);
        vector[0] = (vector[0] / length) * scale;
        vector[1] = (vector[1] / length) * scale;
        return vector;
    }

    distanceTo(boid) {
        let other = boid.position;
        return this.distanceBetween(this.position, other);
    }

    distanceBetween(pos1, pos2) {
        return Math.sqrt(
            Math.pow(pos2[0] - pos1[0], 2) + Math.pow(pos2[1] - pos1[1], 2)
        );
    }
}
