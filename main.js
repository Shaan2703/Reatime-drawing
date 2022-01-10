NoseX = 0;
NoseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {

    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(700,100);


    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses); 



}


function modelLoaded() {
    console.log('Posenet is Intialized');
}

function gotPoses(results) {
    if (results.length > 0 ) {
        console.log(results);

        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log(" NoseX = "+NoseX+ " NoseY = "+NoseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor( leftWristX - rightWristX );
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference  );
    }
}

function draw() {
    background('#D3D3D3')
document.getElementById("square_side").innerHTML = "width and height of sqaure will be = "+difference+" px";
    fill("#0000FF");
    stroke("#0000FF");

    square(NoseX,NoseY,difference);
}
