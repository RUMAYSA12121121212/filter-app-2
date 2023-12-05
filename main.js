function preload() {

}
function setup() {
    canvas= createCanvas(300,300);
    canvas.center();

}
function draw() {
    
}
function take_snapshot() {
    save('myFilterImage.png');
}

noseX=0;
noseY=0;
function preload() {
    clown_nose = loadImage('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yNF9jdXJseV9ibGFja19tdXN0YWNoZV9pc29sYXRlZF9vbl93aGl0ZV9kMTBmZmM1Yi1kMmRhLTRlZjMtYjJlNi01ZDMyYmM0NjQzNzdfMS5wbmc.png');

}
function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}


function take_snapshot() {
    save('myFilterImage.png');
}