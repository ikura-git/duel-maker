let card,zenaku,taid,maxi;
let cardX,cardY,cardSize;

function preload(){
    card=loadImage("res/joecard.jpg");
    zenaku=loadImage("res/RP3S6.jpg");
    taid=loadImage("res/24EX1_41.jpg");
    maxi=loadImage("res/maxi2.jpg");
    
}

function setup() {
    createCanvas(620,600);
    background("lightblue");
    cardX=300,cardY=40;
    cardSize=1;
}

function draw() {
    //image(card,100,40,300,400);
    cardDraw();
   
}

function cardDraw(){
    image(maxi,0,40,300,400);
    strokeWeight(16*cardSize);
    stroke("#261817");
    fill("#EEE2E2");
    rect(cardX+8*cardSize,cardY+8*cardSize,cardSize*300-15,cardSize*400-15,cardSize*10);//カード枠
    strokeWeight(3*cardSize);
    rect(cardX+10*cardSize,cardY+250*cardSize,cardSize*70,cardSize*15,cardSize*10);//カードタイプ枠
    circle(cardX+29*cardSize,cardY+26*cardSize,40*cardSize);//左上マナコスト枠
    circle(cardX+150*cardSize,cardY+373*cardSize,40*cardSize);//下部マナコスト枠
    //image(zenaku,300,10,300,400);
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