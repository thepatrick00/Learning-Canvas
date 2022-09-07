function draw() {
  drawLargeCanvas();
    // draw1();
    // draw2();
    // draw3();
    // draw4();
    // draw5();
}
function drawLargeCanvas() {
  const canvas = document.getElementById("largeCanvas");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = "hsl(190, 70%, 50%)";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.setLineDash([0, 50]);
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(500, 20);
  ctx.lineTo(500, 200);
  ctx.stroke();

  // Everytime the window resizes we make sure so does the canvas
  // And re-draw the rectangle otherwise it disappears
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;  
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 150, 50);
  })

  ctx.setLineDash([]);
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(500, 500, 50, 0, Math.PI * 2);
  ctx.stroke();

}

// function draw1() {
//     const canvas = document.getElementById("tutorial");
//     // now have canvas node to access the drawing context using getContext()
//     const ctx = canvas.getContext("2d");

//     ctx.fillStyle = 'hsl(220 50% 50%)'; 
//     // Draws a filled rectangle
//     ctx.fillRect(10, 10, 50 , 50);
    
//     ctx.strokeStyle = 'hsl(30 50% 20%)'; 
//     // Draws an outlined rectangle
//     ctx.strokeRect(30, 30, 50 , 50);

//     // Clears a specific rectangular area
//     ctx.clearRect(20, -30, 50, 50);

//     // Start a path
//     ctx.beginPath();
//     // Change the starting point from 0,0
//     ctx.moveTo(150, 50);
//     ctx.lineTo(200, 100);
//     ctx.lineTo(150, 100);
//     ctx.fill();
// }

// function draw2() {
//     const canvas = document.getElementById("canvas2");
//     const ctx = canvas.getContext("2d");

//     ctx.fillStyle = 'grey';

//        // Filled triangle
//        ctx.beginPath();
//        ctx.moveTo(25, 25);
//        ctx.lineTo(105, 25);
//        ctx.lineTo(25, 105);
//        // Fills and closes the triangle
//        ctx.fill();
   
//        // Stroked triangle
//        ctx.beginPath();
//        ctx.moveTo(125, 125);
//        ctx.lineTo(125, 45);
//        ctx.lineTo(45, 125);
//        // Manually close the path for stroke outline
//        ctx.closePath();
//        ctx.stroke();
// }

// function draw3() {
//     const canvas = document.getElementById("canvas3");
//     const ctx = canvas.getContext("2d");

//     ctx.strokeStyle = "red" ;
//     ctx.fillStyle = "grey" ;


//     ctx.beginPath();
//     ctx.moveTo(20, 150);
//     ctx.lineTo(20, 20);
//     ctx.lineTo(150, 20);
//     ctx.stroke();

//     let pacman = new Path2D();
//     // pacman.beginPath();
//     pacman.arc(60, 60, 30,(Math.PI/180)*30, (Math.PI/180)*330, false);
//     pacman.lineTo(60, 60);
//     pacman.closePath();

//     ctx.strokeStyle = "green";
//     ctx.stroke(pacman);
    
//     function makePacman(x, y) {
//       let pacman2 = new Path2D(pacman);
//       pacman.arc(x, y, (x/2),(Math.PI/180)*30, (Math.PI/180)*330, false);
//       pacman.lineTo(x, y);
//       ctx.fill(pacman2);
//     }

//     // makePacman(100, 100);
    
// }

// function draw4() {
//     const canvas = document.getElementById("canvas4");
//     const ctx = canvas.getContext("2d");

//     roundedRect(ctx, 12, 12, 150, 150, 15);
//     roundedRect(ctx, 19, 19, 150, 150, 9);
//     roundedRect(ctx, 53, 53, 49, 33, 10);
//     roundedRect(ctx, 53, 119, 49, 16, 6);
//     roundedRect(ctx, 135, 53, 49, 33, 10);
//     roundedRect(ctx, 135, 119, 25, 49, 10);

//     ctx.beginPath();
//     ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
//     ctx.lineTo(31, 37);
//     ctx.closePath();
//     ctx.stroke();

//     for (let i = 0; i < 8; i++) {
//       ctx.fillRect(51 + i * 16, 35, 4, 4);
//     }

//     for (i = 0; i < 6; i++) {
//       ctx.fillRect(115, 51 + i * 16, 4, 4);
//     }

//     for (i = 0; i < 8; i++) {
//       ctx.fillRect(51 + i * 16, 99, 4, 4);
//     }

//     ctx.beginPath();
//     ctx.moveTo(83, 116);
//     ctx.lineTo(83, 102);
//     ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
//     ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
//     ctx.lineTo(111, 116);
//     ctx.lineTo(106.333, 111.333);
//     ctx.lineTo(101.666, 116);
//     ctx.lineTo(97, 111.333);
//     ctx.lineTo(92.333, 116);
//     ctx.lineTo(87.666, 111.333);
//     ctx.lineTo(83, 116);
//     ctx.fill();

//     ctx.fillStyle = 'white';
//     ctx.beginPath();
//     ctx.moveTo(91, 96);
//     ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
//     ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
//     ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
//     ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
//     ctx.moveTo(103, 96);
//     ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
//     ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
//     ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
//     ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
//     ctx.fill();

//     ctx.fillStyle = 'black';
//     ctx.beginPath();
//     ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
//     ctx.fill();

//     // Utility function to draw rounded rectangles
//     function roundedRect(ctx, x, y, width, height, radius) {
//         ctx.beginPath();
//         ctx.moveTo(x, y + radius);
//         ctx.arcTo(x, y + height, x + radius, y + height, radius);
//         ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
//         ctx.arcTo(x + width, y, x + width - radius, y, radius);
//         ctx.arcTo(x, y, x, y + radius, radius);
//         ctx.stroke();
//       }
// }

// function draw5() {
//   const ctx = document.getElementById('canvas5').getContext('2d');
//   // draw background
//   ctx.fillStyle = '#FD0';
//   ctx.fillRect(0, 0, 75, 75);
//   ctx.fillStyle = '#6C0';
//   ctx.fillRect(75, 0, 75, 75);
//   ctx.fillStyle = '#09F';
//   ctx.fillRect(0, 75, 75, 75);
//   ctx.fillStyle = '#F30';
//   ctx.fillRect(75, 75, 75, 75);
//   ctx.fillStyle = '#FFF';

//   // set transparency value
//   ctx.globalAlpha = 0.2;

//   // Draw semi transparent circles
//   for (let i = 0; i < 7; i++) {
//     ctx.beginPath();
//     ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
//     ctx.fill();
//   }
// }
