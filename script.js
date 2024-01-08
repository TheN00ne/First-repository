let message = document.getElementById("message");

let count = 0;

message.addEventListener("click", (e) => {
    count += 1;
    alert(`${e.target.innerHTML} ${count}`);
});

let canvas = document.getElementsByTagName("canvas")[0];

canvas.width = 700;
canvas.height = 450;

let ctx = canvas.getContext("2d");

ctx.fillStyle = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
ctx.lineWidth = "10px";

function draw(){

    let x = Math.round(Math.random() * 700);
    let y = Math.round(Math.random() * 450);
    
    let xDirection = Math.round(Math.random());
    let yDirection = Math.round(Math.random());
    
    ctx.moveTo(x, y);
 
    return () => {

        if(x == canvas.width){
            xDirection = false;
        }
        else if(x == 0){
            xDirection = true;
        }

        if(xDirection){
            x += 1;
        }
        else{
            x -= 1;
        }

        if(y == canvas.height){
            yDirection = true;
        }
        else if(y == 0){
            yDirection = false;
        }

        if(yDirection){
            y -= 1;
        }
        else{
            y += 1;
        }

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2*Math.PI)
        ctx.fill();
    }
}

let fst = draw();
let snd = draw();
let trd = draw();
let fth = draw();
let ffth = draw();
let sxth = draw();
let svnth = draw();
let egth = draw();
let nth = draw();
let tth = draw();
let elvth = draw();
let twlth = draw();
let thrt = draw();
let frt = draw();
let fftn = draw();
let sxtn = draw();
let svntn = draw();
let ghtn = draw();
let nntn = draw();
let twnt = draw();
let twnt1 = draw();
let twnt2 = draw();
let twnt3 = draw();
let twnt4 = draw();
let twnt5 = draw();

let arr = [fst, snd, trd, fth, ffth, sxth, svnth, egth, nth, tth, elvth, twlth, thrt, frt, fftn, sxtn, svntn, ghtn, nntn, twnt, twnt1, twnt2, twnt3, twnt4, twnt5];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    arr.map((f) => {
        f();
    })
}

setInterval(animate, 0.5);