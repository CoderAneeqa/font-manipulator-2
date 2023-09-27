leftWristx= 0;
rightWristx = 0;
difference = 0;

function setup(){

    canvas = createCanvas(600,450);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    
}

function modelLoaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
    if(results.length>0){

        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);

        console.log("leftWristx = " + leftWristx + "rightWristx = " + rightWristx + "Difference = " + difference);

        document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px";
        
    }
}

function draw(){
    background('#43d969');
    fill('#ff903b');
    textSize(difference);
    text('Aneeqa', 70, 250);
}