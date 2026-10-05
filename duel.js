let card,zenaku,taid,maxi;
let cardX,cardY,cardSize;
let img;//画像読み込み

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
    angleMode(DEGREES);
    let fileInput = createFileInput(handleFile);//ファイル入力
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
    if(img!=null){
        image(img,cardX+16*cardSize,cardY+16*cardSize,269*cardSize,250*cardSize,0,0,1000,1000);//カード画像読み込み
    }
    strokeWeight(3*cardSize);
    fill("#261817");
    rect(cardX+50*cardSize,cardY+24*cardSize,241*cardSize,33*cardSize);//種族欄
    triangle(cardX+47*cardSize,cardY+52*cardSize,cardX+47*cardSize,cardY+24*cardSize,cardX+35*cardSize,cardY+24*cardSize);
    rect(cardX+15*cardSize,cardY+363*cardSize,58*cardSize,33*cardSize,1);//パワー欄
    triangle(cardX+75*cardSize,cardY+368*cardSize,cardX+70*cardSize,cardY+395*cardSize,cardX+86*cardSize,cardY+390*cardSize);
    fill("#EEE2E2");
    stroke("#EEE2E2");
    rect(cardX+50*cardSize,cardY+16*cardSize,233*cardSize,30*cardSize);//クリーチャー名前欄
    triangle(cardX+47*cardSize,cardY+41*cardSize,cardX+47*cardSize,cardY+24*cardSize,cardX+40*cardSize,cardY+24*cardSize);
    colorSelect();
    //image(maxi,300,0,300,400);
}

function colorSelect(){
    stroke("red");
    fill("red");
    rect(cardX+84*cardSize,cardY+388*cardSize,215*cardSize,1*cardSize);
    rect(cardX+2*cardSize,cardY+365*cardSize,68*cardSize,1*cardSize);
    push();
    rectMode(CENTER);
    translate(cardX+75*cardSize,cardY+374*cardSize);
    rotate(64);
    rect(3*cardSize,0,26*cardSize,1*cardSize,1*cardSize);
    pop();
    stroke("#261817");
    rect(cardX+10*cardSize,cardY+250*cardSize,cardSize*70,cardSize*15,cardSize*10);//カードタイプ枠
    circle(cardX+29*cardSize,cardY+26*cardSize,40*cardSize);//左上マナコスト枠
    circle(cardX+150*cardSize,cardY+373*cardSize,40*cardSize);//下部マナコスト枠
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

function handleFile(file){
    if(file.type='image'){
    img=loadImage(file.data);
    }else{
        img = null;
        alert("画像ファイルを選択してください");
    }

}