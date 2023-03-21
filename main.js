noseX = 0
noseY = 0
difference = 0
rightWristX = 0
leftWristY = 0
function setup() {
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 550);
canvas.position(560,150);
poseNet = ml5.poseNet(video);
poseNet.on('pose', gotPoses);
}
function gotPoses(results) 
{
if(results.length > 0)
{
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
}
}
function draw() {
background('#969A97');
document.getElementById("square_side").innerHTML = "Largura e altura serão = " + difference +"px";
fill('#F90093');
stroke('#F90093');
square(noseX, noseY, difference);
}