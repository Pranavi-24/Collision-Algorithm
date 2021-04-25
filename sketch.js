var m1,m2;

function setup() {
  createCanvas(1200,800);
 m1= createSprite(400, 200, 50, 50);
 m1.shapeColor = "red";
 m2= createSprite(800,200,30,30);
 m2.shapeColor = "red";
}

function draw() {
  background(0);
  m2.x = mouseX;
  m2.y = mouseY;
   if (m1.x - m2.x < m1.width/2+m2.width/2 && m2.x-m1.x < m1.width/2+m2.width/2 && m1.y- m2.y < m1.height/2+m2.height/2 && m2.y - m1.y < m1.height/2 +m2.height/2){
     m1.shapeColor= "green";
     m2.shapeColor="green";
   }
   else{
    m1.shapeColor= "red";
    m2.shapeColor="red";
   }
  drawSprites();

}