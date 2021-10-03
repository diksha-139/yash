var Ball, database;

var ballPosition

function setup(){
  createCanvas(500,500);
database = firebase.database();

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";

  database.ref('ball/position').on("value",readPosition,showError)

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(a,b)
{
database.ref('ball/position').set(
  {
    'x': ballPosition.x + a,
    'y': ballPosition.y + b,
    'yash': 500,
  }
)
 
}

function readPosition(data){
  ballPosition = data.val()

 Ball.x = ballPosition.x;
 Ball.y= ballPosition.y;

}

function showError(){
alert("error occured!!!!!!")
}
