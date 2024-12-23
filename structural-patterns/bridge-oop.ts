// Implementor interface
interface DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void;
}

// Concrete Implementors
class SVGDrawingAPI implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`SVG: Drawing a circle at (${x}, ${y}) with radius ${radius}`);
    }
}

class CanvasDrawingAPI implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`Canvas: Drawing a circle at (${x}, ${y}) with radius ${radius}`);
    }
}

// Abstraction
abstract class Shape {
    protected drawingAPI: DrawingAPI;

    constructor(drawingAPI: DrawingAPI) {
        this.drawingAPI = drawingAPI;
    }

    abstract draw(): void;
    abstract resizeByPercentage(percentage: number): void;
}

// Refined Abstraction
class CircleShape extends Shape {
    private x: number;
    private y: number;
    private radius: number;

    constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
        super(drawingAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(): void {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }

    resizeByPercentage(percentage: number): void {
        this.radius *= percentage / 100;
    }
}

// Usage
const svgCircle = new CircleShape(10, 20, 15, new SVGDrawingAPI());
svgCircle.draw();
svgCircle.resizeByPercentage(200);
svgCircle.draw();

const canvasCircle = new CircleShape(10, 20, 15, new CanvasDrawingAPI());
canvasCircle.draw();