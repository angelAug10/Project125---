noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;



function draw()
{
background('#969A97');
textSize(diffrence);
fill("#F90093");
text("Angel",50,400);

}
function setup(){
video=createCapture(VIDEO);
video.size(500,550);
canvas=createCanvas(550,550);
canvas.position(550,550);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
  

function modelLoaded(){
console.log('PoseNet Is Intialized!');
}
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
diffrence=floor(leftWristX-rightWristX);
}
}
