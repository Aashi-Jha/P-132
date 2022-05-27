Status = "";
desk_image = "";

function preload(){
    desk_image = loadImage("resize.avif");
}

function setup(){
    canvas = createCanvas(700,500);
    canvas.position(390,250);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(bottle_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(desk_image,0,0,700,500);
}