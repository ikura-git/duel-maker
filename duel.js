let zenaku,taid,maxi;
let cardX,cardY,cardSize;
let img;//画像読み込み
let colorPie=['光','水','闇','火','自然'];//文明
let bunmei,culture=[],iro=[],trueCount;//文明セレクトに使用
let cardType,cardSelect;
let cardContent=[],textSup=['カード名','種族','マナコスト','カードタイプ','パワー'];

function preload(){
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
    for(let i=0;i<colorPie.length;i++){//チェックボックス入力
        bunmei=createCheckbox(colorPie[i],false);
        bunmei.position(300+50*i,620);
        culture.push(bunmei)
    }
    cardTypeSelect();
    for(i=0;i<textSup.length;i++){
    let cards=createInput('');
    cards.position(20,700+40*i);//カードの内容の入力欄
    cards.attribute('placeholder', textSup[i]);
    cardContent.push(cards);
    }
}

function draw() {
    background("lightblue");
    //image(card,100,40,300,400);
    cardDraw();
    trueCount=0;
    for (let i = 0; i < culture.length; i++) {//選択中の文明を記録
        if (culture[i].checked()) {
        iro[i]=true;
        trueCount+=1;
        }else{
            iro[i]=false;
        }
    }
    cardContentDraw();
}

function cardDraw(){
    cardType=cardSelect.value();//カードタイプを計測
    //image(maxi,0,40,300,400);
    strokeWeight(16*cardSize);
    stroke("#261817");
    fill("#EEE2E2");
    rect(cardX+8*cardSize,cardY+8*cardSize,cardSize*300-15*cardSize,cardSize*400-15*cardSize,cardSize*10);//カード枠
    if(img!=null){
        image(img,cardX+16*cardSize,cardY+16*cardSize,269*cardSize,250*cardSize,0,0,1000,1000);//カード画像読み込み
    }
    strokeWeight(3*cardSize);
    fill("#261817");
    rect(cardX+50*cardSize,cardY+24*cardSize,241*cardSize,33*cardSize);//種族欄
    triangle(cardX+47*cardSize,cardY+52*cardSize,cardX+47*cardSize,cardY+24*cardSize,cardX+35*cardSize,cardY+24*cardSize);
    if(cardType=='クリーチャー'||cardType=='進化クリーチャー'){
        rect(cardX+15*cardSize,cardY+363*cardSize,58*cardSize,33*cardSize,1);//パワー欄
        triangle(cardX+75*cardSize,cardY+368*cardSize,cardX+70*cardSize,cardY+395*cardSize,cardX+86*cardSize,cardY+390*cardSize);
    }
    fill("#EEE2E2");
    stroke("#EEE2E2");
    rect(cardX+50*cardSize,cardY+16*cardSize,233*cardSize,30*cardSize);//クリーチャー名前欄
    triangle(cardX+47*cardSize,cardY+41*cardSize,cardX+47*cardSize,cardY+24*cardSize,cardX+40*cardSize,cardY+24*cardSize);
    colorSelect();
    fill("#261817");
    rect(cardX+2*cardSize,cardY+245*cardSize,13*cardSize,17*cardSize);

    //image(maxi,300,0,300,400);
}

function colorSelect(){//色によって異なるもの
    if(trueCount==0||trueCount==1){
        if(iro[0]==true){
            stroke("#F5EA5C");
            fill("#F5EA5C");
        }else if(iro[1]==true){
            stroke("#3DAFF6");
            fill("#3DAFF6");
        }else if(iro[2]==true){
            stroke("#8D8787");
            fill("#8D8787");
        }else if(iro[3]==true){
            stroke("#CA252F");
            fill("#CA252F");
        }else if(iro[4]==true){
            stroke("#2BB53C");
            fill("#2BB53C");
        }else{
            stroke("#E9F7FF");
            fill("#E9F7FF");
        }
        if(cardType=='クリーチャー'||cardType=='進化クリーチャー'){
            rect(cardX+84*cardSize,cardY+388*cardSize,215*cardSize,1*cardSize);//下部の文明の線
            rect(cardX+2*cardSize,cardY+365*cardSize,68*cardSize,1*cardSize);
            push();
            rectMode(CENTER);
            translate(cardX+75*cardSize,cardY+374*cardSize);
            rotate(64);
            rect(3*cardSize,0,26*cardSize,1*cardSize,1*cardSize);
            pop();
        }else{
            rect(cardX+2*cardSize,cardY+388*cardSize,297*cardSize,1*cardSize);
        }
        stroke("#261817");
        rect(cardX+10*cardSize,cardY+250*cardSize,cardSize*70,cardSize*15,cardSize*10);//カードタイプ枠
        circle(cardX+29*cardSize,cardY+26*cardSize,40*cardSize);//左上マナコスト枠
        circle(cardX+150*cardSize,cardY+373*cardSize,40*cardSize);//下部マナコスト枠
        } 
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

function cardTypeSelect(){
    cardSelect = createSelect();
    cardSelect.position(10, 650); 
    cardSelect.option('クリーチャー');
    cardSelect.option('進化クリーチャー');
    cardSelect.option('呪文');
    cardSelect.option('タマシード');
    cardSelect.option('その他');
    cardSelect.selected('クリーチャー');
}

function cardContentDraw(){
    strokeWeight(1);
    stroke("black");
    fill("black");
    textSize(16);
    textAlign(CENTER);
    text(cardContent[0].value(),465,83);//クリーチャー欄
    textSize(8);
    textAlign(LEFT);
    text(cardContent[3].value(),322,300);//カードタイプ欄
    textSize(20);
    strokeWeight(3);
    fill("white");
    textAlign(CENTER);
    text(cardContent[2].value(),329,73);//マナコスト欄
    textSize(7);
    strokeWeight(0);
    stroke("white");
    textAlign(CENTER);
    text(cardContent[1].value(),465,96);//種族欄
    textSize(18);
    fill("white");
    textAlign(CENTER);
    text(cardContent[4].value(),340,430);//パワー欄
    push();
    textSize(20);
    strokeWeight(3);
    fill("white");
    stroke("black");
    textAlign(CENTER,CENTER);//マナ埋め時コスト
    translate(450,414);
    rotate(180)
    text("1",0,0);
    rotate(180);
    pop();
}