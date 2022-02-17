S1= "";
S2= "";
function preload(){
S1= loadSound("Harry Potter.mp3");
S2= loadSound("Speechless.mp3");
}

function setup(){
canvas= createCanvas(400,300);
canvas.center();
video= createCapture(VIDEO);
video.hide();
posenet= ml5.poseNet(video, modelLoaded);
posenet.on("pose", gotPoses);

}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log("Model has been loaded");
}
function draw(){
image(video, 0,0,400,300);
}

function play(){
    song.play();
    song.setVolume(1);
    song.setRate(1);
}