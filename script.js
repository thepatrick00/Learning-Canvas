function draw() {
    draw1();
    draw2();
    draw3();
}
function draw1() {
    const canvas = document.getElementById("tutorial");
    // now have canvas node to access the drawing context using getContext()
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = 'hsl(220 50% 50%)'; 
    // Draws a filled rectangle
    ctx.fillRect(10, 10, 50 , 50);
    
    ctx.strokeStyle = 'hsl(30 50% 20%)'; 
    // Draws an outlined rectangle
    ctx.strokeRect(30, 30, 50 , 50);

    // Clears a specific rectangular area
    ctx.clearRect(20, -30, 50, 50);

    // Start a path
    ctx.beginPath();
    // Change the starting point from 0,0
    ctx.moveTo(150, 50);
    ctx.lineTo(200, 100);
    ctx.lineTo(150, 100);
    ctx.fill();
}

function draw2() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = 'grey';

       // Filled triangle
       ctx.beginPath();
       ctx.moveTo(25, 25);
       ctx.lineTo(105, 25);
       ctx.lineTo(25, 105);
       // Fills and closes the triangle
       ctx.fill();
   
       // Stroked triangle
       ctx.beginPath();
       ctx.moveTo(125, 125);
       ctx.lineTo(125, 45);
       ctx.lineTo(45, 125);
       // Manually close the path for stroke outline
       ctx.closePath();
       ctx.stroke();
}

function draw3() {
    const canvas = document.getElementById("canvas3");
    const ctx = canvas.getContext("2d");

    ctx.arc(50, 50, )
}

// fill, stroke, clear ex(strokeRect, strokeStyle)
// x offset, y offset, width, height for shapes

/*
    moveTo(x, y) like moving on a page
    lineTo(x, y) draws a line
*/