// "Implementor" functions
const svgDrawingAPI = (x: number, y: number, radius: number) =>
    console.log(`SVG: Drawing a circle at (${x}, ${y}) with radius ${radius}`);

const canvasDrawingAPI = (x: number, y: number, radius: number) =>
    console.log(`Canvas: Drawing a circle at (${x}, ${y}) with radius ${radius}`);

// Higher-order function for "Abstraction"
const createCircle = (
    x: number,
    y: number,
    radius: number,
    drawAPI: (x: number, y: number, radius: number) => void
) => ({
    draw: () => drawAPI(x, y, radius),
    resizeByPercentage: (percentage: number) => createCircle(x, y, radius * (percentage / 100), drawAPI),
});

// Usage
const svgCircle = createCircle(10, 20, 15, svgDrawingAPI);
svgCircle.draw();

const resizedSvgCircle = svgCircle.resizeByPercentage(200);
resizedSvgCircle.draw();

const canvasCircle = createCircle(10, 20, 15, canvasDrawingAPI);
canvasCircle.draw();