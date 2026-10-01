let card;

function preload(){
    card=loadImage("res/joecard.jpg");
    
}

function setup() {
    createCanvas(500,600);
    background("lightblue")
}

function draw() {
    image(card,100,40,300,400);
}

function mouseClicked(){
   
}

function save(){
    let saveCambus=get(100,40,300,400);
    saveCambus.save('test','png');
}

document.oncontextmenu = () => {
    event.preventDefault(); // 右クリックメニューの無効化
}