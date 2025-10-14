let c = document.getElementById("c");
let ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
let matrix = "MIKHAELFILHÃODEPAIMIKHAELFILHÃODEPAIMIKHAELFILHÃODEPAI"
matrix = matrix.split("");
let font_size = 20;
let columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
let drops = [];
//x below is the x coordinate
//1 = y of the drop(same for every drop initially)
for (let x = 0; x < columns; x++) drops[x] = 50;

draw = () => {
    //Black BG for the canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0f0";
    ctx.font = font_size + "px arial";
    //looping over drops
    for (let i = 0; i < drops.length; i++) {

        //a drop is a number in the array
        let text = matrix[Math.floor(Math.random() * matrix.length)];

        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 50);