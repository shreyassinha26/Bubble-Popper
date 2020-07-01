var player , bubbleGrp , bulletGrp;
var framecount =0;
var bullet=null;
var obstacle=null;
var bulletArr = [];
var bubbleArr = [];
var count = 0;
function setup(){
    createCanvas(800 , 800);
    bubbleGrp = new Group();
    bulletGrp = new Group();
    player = createSprite(400 , 400 , 40 , 40);
    player.shapeColor = "red";
}

function draw(){
    background("skyBlue");
    //ballPosition.on('value' , readPosition , showError); 
   
        if(bulletGrp.isTouching(bubbleGrp)){
            console.log(bubbleArr.length);
            for(var i = 0;i<bubbleArr.length;i++){
                
                for(var j=0;j<bulletArr.length;j++){
                    if(bubbleArr[i].isTouching(bulletArr[j])){
                        bubbleArr[i].destroy();
                        bulletArr[j].destroy();
                        bubbleArr[i].remove();
                        bulletArr[j].remove();
                        count++;
                    }
                }
            }
        
        
    }
    
        if(keyCode===37&& player.x>=24){
            player.rotation-=4;
    
        }
        if(keyCode===39&& player.x<=776){
            player.rotation+=4;
        }
    if(keyCode===32){
        bullets();
    }
    if(frameCount%15===0){
        
        obstacles();
    }
    frameCount++;
    if(frameCount%100===0){
        frameCount===0
    }
    
    drawSprites();
    fill(255);
    text("Count : " + count , 10 , 10);
}
function obstacles(){
    obstacle = createSprite(Math.round(random(-20 , 820)) ,Math.round(random(-20 , 820)) ,Math.round(random(10,20)),Math.round(random(10,20)));
    obstacle.shapeColor = "black";
    obstacle.velocityY = Math.round(random(-5,5));
    obstacle.velocityX = Math.round(random(-5,5));
    obstacle.lifetime = 200;
    bubbleArr.push(obstacle);
    bubbleGrp.add(obstacle);
}
function bullets(){
    bullet = createSprite(400 , 400 , 5,5);
    bullet.setSpeed(5);
    bullet.setSpeedAndDirection(5 , player.rotation);
    bullet.lifeTime = 150;
    bulletArr.push(bullet);
    bulletGrp.add(bullet);
}
