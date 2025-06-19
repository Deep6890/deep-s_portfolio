// Global variables for wave properties and tank dimensions
let amplitude = 15;   // Height of the wave
let frequency = 0.06; // How compressed or stretched the wave is
let offset = 0;       // Controls the horizontal movement of the wave
let waterLevel;       // Y-coordinate of the base water level, dynamically calculated
let waveLayer;        // p5.Graphics buffer to draw the wave onto
let cx, cy, radius;   // Center x, y and radius of the circular tank

/**
 * p5.js setup function: Runs once when the sketch starts.
 * Initializes canvas, graphics buffer, and dynamic dimensions.
 */
function setup() {
    // Determine canvas size: responsive, takes 80% of the smaller window dimension, max 500px
    let dim = Math.min(windowWidth * 0.8, windowHeight * 0.8, 500);
    // Create the canvas. In a full HTML setup, you'd parent this to a div.
    createCanvas(dim, dim);
    pixelDensity(1); // Ensures consistent rendering across different screen densities

    // Initialize the graphics buffer with the same dimensions as the main canvas
    waveLayer = createGraphics(width, height);

    // Calculate initial tank parameters based on the current canvas size
    cx = width / 2;             // Center X of the canvas
    cy = height / 2;            // Center Y of the canvas
    radius = width * 0.4;       // Radius of the circular tank (40% of canvas width)
    // Initial water level: slightly below the center of the circle, adjusted for aesthetics
    waterLevel = cy + radius * 0.2;
}

/**
 * p5.js draw function: Runs continuously (default 60 times per second).
 * Handles drawing the background, wave, tank, and updating the wave animation.
 */
function draw() {
    background(10, 20, 40); // Dark blue background for the overall scene

    // --- Draw the water wave onto the 'waveLayer' graphics buffer ---
    waveLayer.clear(); // Clear the previous frame's content from the buffer
    waveLayer.noStroke();
    // A translucent blue color for the water
    waveLayer.fill(60, 160, 220, 200); // R, G, B, Alpha (transparency)

    waveLayer.beginShape();
    // Start the shape from the bottom-left corner of the circle's bounding box
    waveLayer.vertex(cx - radius, cy + radius);

    // Loop to draw the sine wave across the width of the circle
    for (let x = cx - radius; x <= cx + radius; x += 1) {
        // Calculate the y-coordinate for each x, based on sine wave and offset
        // The wave is horizontally centered relative to the circle's width
        let y = sin((x - (cx - radius)) * frequency + offset) * amplitude;
        waveLayer.vertex(x, waterLevel + y);
    }

    // Connect the shape to the bottom-right corner of the circle's bounding box
    waveLayer.vertex(cx + radius, cy + radius);
    waveLayer.endShape(CLOSE); // Close the shape to form a solid polygon

    // --- Apply circular clipping on the main canvas and draw the waveLayer ---
    drawingContext.save(); // Save the current state of the drawing context

    // Define the circular path that will act as the clipping mask
    drawingContext.beginPath();
    // Draw a circle (ellipse) that matches the tank's outer shape
    drawingContext.ellipse(cx, cy, radius * 2, radius * 2);
    drawingContext.clip(); // Apply this path as the clipping area: only drawing inside it will be visible

    // Draw the pre-rendered waveLayer image onto the main canvas.
    // Due to the clip, only the part of waveLayer inside the circle will be shown.
    image(waveLayer, 0, 0);

    drawingContext.restore(); // Restore the drawing context to its state before clipping (removes the clip)

    // --- Draw the outer border of the circular tank ---
    noFill(); // Don't fill the shape
    stroke(0, 180, 255); // A vibrant blue for the tank border
    strokeWeight(3); // A slightly thicker border for better visibility
    // Draw the circle that defines the tank's shape
    ellipse(cx, cy, radius * 2, radius * 2);

    // --- Animate the wave ---
    offset += 0.05; // Increment the offset to make the wave move horizontally

    // --- Optional: Add a title text ---
    fill(240); // Light color for the text
    noStroke();
    textAlign(CENTER, TOP); // Align text to center horizontally, top vertically
    textSize(18); // Set font size
    text("Liquid Tank Simulation", cx, cy - radius - 35); // Position text above the tank
}

/**
 * p5.js windowResized function: Called automatically when the browser window is resized.
 * Adjusts the canvas and all dependent dimensions to maintain responsiveness.
 */
function windowResized() {
    // Recalculate canvas size based on current window dimensions
    let dim = Math.min(windowWidth * 0.8, windowHeight * 0.8, 500);
    resizeCanvas(dim, dim); // Resize the main canvas

    // Recalculate tank parameters based on the new canvas size
    cx = width / 2;
    cy = height / 2;
    radius = width * 0.4;
    waterLevel = cy + radius * 0.2; // Adjust water level proportionally

    // Recreate the waveLayer graphics buffer with the new canvas dimensions
    waveLayer = createGraphics(width, height);
}
