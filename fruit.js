Status = "";
fruit_image = "";

function preload(){
    fruit_image = loadImage("fruit.jpeg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(470,250);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fruit_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fruit_image,0,0,500,500);
}