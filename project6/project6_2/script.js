class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    getDistanceToPoint(point) {
        return Math.sqrt(Math.pow(this.x + point.x, 2) + Math.pow(this.y + point.y, 2))
    }

    // getCoordX()
    // {
    //     return this.x;
    // }
    get x() {
        return this._x;
    }
    getCoordY() {
        return this.y;
    }
}


class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    getPointFirst() {
        return this.point1;
    }

    getPointLast() {
        return this.point2;
    }

    getLength(point) {
        return this.point1.getDistanceToPoint(point2)
    }

    getCenter() {
        return Point((this.point1.x + this.point2.x) / 2, (this.point1.y + this.point2.y) / 2)
    }

    getLength() {
        return this.point1.getDistanceToPoint(this.point2);
    }
    getDistanceToLine(line) {
        return this.getCenter().getDistanceToPoint(line.getCenter())
    }
    getDistanceToPoint(point){
        return this.getCenter().getDistanceToPoint(point)
    }
}

class Ellipse {
    constructor(horSemiaxis, verSemiaxis) {
        this.horSemiaxis = horSemiaxis;
        this.verSemiaxis = verSemiaxis;

        if (horSemiaxis.point1 == verSemiaxis.point1 || horSemiaxis.point1 == verSemiaxis.point2)
            this.center = horSemiaxis.point1;
        else
            this.center = horSemiaxis.point2;
    }

    getVerSemiaxis() {
        return this.verSemiaxis;
    }

    getHorSemiaxis() {
        return this.horSemiaxis;
    }

    getCenter() {
        return this.center;
    }

    getPerimeter() {
        return 2 * 3.14 * Math.sqrt((Math.pow(horSemiaxis.getLength(), 2) + Math.pow(verSemiaxis.getLength(), 2)) / 2)
    }

    getSquare() {
        return 3.14 * horSemiaxis.getLength() * verSemiaxis.getLength();
    }
    getDistanceToCenter(ellipse) {
        return this.center.getDistanceToPoint(ellipse.center);
    }
}

class Circle extends Ellipse {
    constructor(radius, center) {
        super(radius, radius)
        this.radius = this.verSemiaxis = this.horSemiaxis = radius;
        this.center = center;
    }
}