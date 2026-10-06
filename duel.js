let cardX,cardY,cardSize;
let img;//画像読み込み
let colorPie=['光','水','闇','火','自然'];//文明
let bunmei,culture=[],iro=[],trueCount;//文明セレクトに使用
let cardType,cardSelect,cards,textlong;
let cardContent=[],textSup=['カード名','種族','マナコスト','カードタイプ','パワー'];
let saveButton;
let cardTextarea;
let cardText=[],keyword=['S・トリガー','G・ストライク','W・ブレイカー','スピードアタッカー','ジャストダイバー','マッハファイター','スレイヤー','ブロッカー'];
let colorSelected=[false,false,false,false,false];

function setup() {
    createCanvas(620,600);
    background("lightblue");
    cardX=0,cardY=0;
    cardSize=1.5;
    angleMode(DEGREES);
    HTMLyouso();
}

function draw() {
    
    background("lightblue");
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
    if(cardType=='クリーチャー'||cardType=='進化クリーチャー'){
        cards.show();//クリーチャーならパワー欄の表示
    }else{
        cards.hide();
    }
    updateText();
    
}

function cardDraw(){
    cardType=cardSelect.value();//カードタイプを計測
    if(cardType!='その他'){
        cardContent[3].value(cardType);
    }
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
    stroke("#261817");
    rect(cardX+2*cardSize,cardY+245*cardSize,12*cardSize,19*cardSize);
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
        if(textlong<=(50*cardSize)){
            rect(cardX+10*cardSize,cardY+250*cardSize,cardSize*70,cardSize*15,cardSize*10);//カードタイプ枠
        }else{
            rect(cardX+10*cardSize,cardY+250*cardSize,cardSize*(70+textlong/2),cardSize*15,cardSize*10);//カードタイプ枠
        }
        circle(cardX+29*cardSize,cardY+26*cardSize,40*cardSize);//左上マナコスト枠
        circle(cardX+150*cardSize,cardY+373*cardSize,40*cardSize);//下部マナコスト枠
        }else{
            stroke("#261817");
            if(textlong<=(50*cardSize)){
                rect(cardX+10*cardSize,cardY+250*cardSize,cardSize*70,cardSize*15,cardSize*10);//カードタイプ枠
            }else{
                rect(cardX+10*cardSize,cardY+250*cardSize,cardSize*(70+textlong/2),cardSize*15,cardSize*10);//カードタイプ枠
            }
            circle(cardX+29*cardSize,cardY+26*cardSize,40*cardSize);//左上マナコスト枠
            circle(cardX+150*cardSize,cardY+373*cardSize,40*cardSize);//下部マナコスト枠
            strokeWeight(0);
            for(let i=0;i<trueCount;i++){
                if(trueCount==2){
                    multiColorSelect();
                    let arc1=45+i*180;
                    if(arc1>360)arc1-=360;
                    let arc2=225+i*180;
                    if(arc2<0)arc2+=360;
                    arc(cardX+29*cardSize,cardY+26*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                    arc(cardX+150*cardSize,cardY+373*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                    if(i==0){
                        push();
                        strokeWeight(3*cardSize);
                        stroke("#261817");
                        rect(cardX+10*cardSize,cardY+250*cardSize,cardSize*70,cardSize*15,cardSize*10);
                        pop()
                    }else{
                        rect(cardX+45*cardSize,cardY+251*cardSize,cardSize*34,cardSize*13,cardSize*10);
                        quad(cardX+38*cardSize,cardY+251*cardSize,cardX+58*cardSize,cardY+251*cardSize,cardX+58*cardSize,cardY+264*cardSize,cardX+48*cardSize,cardY+264*cardSize);
                    }
                    fill("#261817");
                    rect(cardX+4*cardSize,cardY+245*cardSize,12*cardSize,19*cardSize);
                }else if(trueCount==3){
                    multiColorSelect();
                    let arc1=150+i*120;
                    if(arc1>360)arc1-=360;
                    let arc2=270+i*120;
                    if(arc2<0)arc2+=360;
                    arc(cardX+29*cardSize,cardY+26*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                    arc(cardX+150*cardSize,cardY+373*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                }else if(trueCount==4){
                    multiColorSelect();
                    let arc1=135+i*90;
                    if(arc1>360)arc1-=360;
                    let arc2=225+i*90;
                    if(arc2<0)arc2+=360;
                    arc(cardX+29*cardSize,cardY+26*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                    arc(cardX+150*cardSize,cardY+373*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                }else if(trueCount==4){
                    multiColorSelect();
                    let arc1=135+i*90;
                    if(arc1>360)arc1-=360;
                    let arc2=225+i*90;
                    if(arc2<0)arc2+=360;
                    arc(cardX+29*cardSize,cardY+26*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                    arc(cardX+150*cardSize,cardY+373*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                }else if(trueCount==5){
                    multiColorSelect();
                    let arc1=198+i*72;
                    if(arc1>360)arc1-=360;
                    let arc2=270+i*72;
                    if(arc2<0)arc2+=360;
                    arc(cardX+29*cardSize,cardY+26*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                    arc(cardX+150*cardSize,cardY+373*cardSize,37*cardSize,37*cardSize,arc1,arc2,PIE);
                }
            }
        } 
}

function multiColorSelect(){
    if(iro[0]==true){
            stroke("#F5EA5C");
            fill("#F5EA5C");
            iro[0]=false;
        }else if(iro[1]==true){
            stroke("#3DAFF6");
            fill("#3DAFF6");
            iro[1]=false;
        }else if(iro[2]==true){
            stroke("#8D8787");
            fill("#8D8787");
            iro[2]=false;
        }else if(iro[3]==true){
            stroke("#CA252F");
            fill("#CA252F");
            iro[3]=false;
        }else if(iro[4]==true){
            stroke("#2BB53C");
            fill("#2BB53C");
            iro[4]=false;
        }
}

function cardSave(){
    let saveCambus=get(cardX,cardY,300*cardSize,400*cardSize);
    saveCambus.save(cardContent[0].value(),'png');
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
    strokeWeight(1*cardSize);
    stroke("black");
    fill("black");
    textSize(16*cardSize);
    textAlign(CENTER);
    text(cardContent[0].value(),cardX+165*cardSize,cardY+43*cardSize);//クリーチャー欄
    textSize(8*cardSize);
    textlong=textWidth(cardContent[3].value());
    if(textlong<=(50*cardSize)){
        textAlign(CENTER);
        text(cardContent[3].value(),cardX+46*cardSize,cardY+260*cardSize);//カードタイプ欄
    }else{
        textAlign(LEFT);
        text(cardContent[3].value(),cardX+25*cardSize,cardY+260*cardSize);//カードタイプ欄
    }
    textSize(20*cardSize);
    strokeWeight(3*cardSize);
    fill("white");
    textAlign(CENTER);
    text(cardContent[2].value(),cardX+29*cardSize,cardY+33*cardSize);//マナコスト欄
    textSize(7*cardSize);
    strokeWeight(0);
    stroke("white");
    textAlign(CENTER);
    text(cardContent[1].value(),cardX+165*cardSize,cardY+56*cardSize);//種族欄
    textSize(18*cardSize);
    fill("white");
    textAlign(CENTER);
    text(cardContent[4].value(),cardX+40*cardSize,cardY+390*cardSize);//パワー欄
    push();
    textSize(20*cardSize);
    strokeWeight(3*cardSize);
    fill("white");
    stroke("black");
    textAlign(CENTER,CENTER);//マナ埋め時コスト
    translate(cardX+150*cardSize,cardY+374*cardSize);
    rotate(180)
    text("1",0,0);
    rotate(180);
    pop();
}

function HTMLyouso(){
    let fileInput = createFileInput(handleFile);//ファイル入力
    for(let i=0;i<colorPie.length;i++){//チェックボックス入力
        bunmei=createCheckbox(colorPie[i],false);
        bunmei.position(300+50*i,620);
        culture.push(bunmei)
    }
    cardTypeSelect();
    for(i=0;i<textSup.length;i++){
    cards=createInput('');
    cards.position(20,700+30*i);//カードの内容の入力欄
    cards.attribute('placeholder', textSup[i]);
    cardContent.push(cards);
    }
    saveButton=createButton('保存');
    saveButton.position(580,620);//保存ボタンの設定
    saveButton.mousePressed(cardSave);
    cardTextarea = createElement('textarea', '');
    cardTextarea.attribute('placeholder', '効果を入力');//カードの効果欄の設定
    cardTextarea.position(300, 750);
    cardTextarea.size(300, 150);
    cardeffect();
}

function cardeffect(){
    for(let i=0;i<keyword.length;i++){//チェックボックス入力
        let cards=createCheckbox(keyword[i],false);
        cards.position(300+200*(i%2),650+20*int((i)/2));
        cardText.push(cards)
    }
}

function updateText(){
    let textup=cardTextarea.value();
    let lines = textup.split('。\n');
    for (let i = 0; i < lines.length; i++) {
        // 行が空行（未入力）でない場合のみ■をつける
        if (lines[i].length > 0) {
        lines[i] = '■ ' + lines[i];
        } else {
          lines[i] = '■'; 
        }
    }
    textup=lines.join('。\n');
    for(let i=0;i<keyword.length;i++){
        if(cardText[keyword.length-i-1].checked()){
            textup='■'+keyword[keyword.length-i-1]+'\n'+textup;
        }
        
    }
    textSize(8*cardSize);
    fill("black");
    textAlign(LEFT);
    text(textup,cardX+20*cardSize,cardY+280*cardSize);
}