function preload() {


}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    tint_color= "";
}

function draw() {

    image(video, 0 ,0 , 640,400);
    tint(tint_color);

}


function apply_filter(){

    tint_color = document.getElementById("color_name").value;
}

function take_snapshot(){

    save("myfiltered_selfie.png");
}