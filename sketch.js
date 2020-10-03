var dog , happyDog ;
var database;
var foodS , foodStock ;

function preload()
{
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");

}

function setup() {
  canvas = createCanvas(500,500);

  dog = new dog(200,100,50,50);
  dog.addImage(Dog);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  
  textSize(15);
  fill("white");
  stroke(2);
  text("Note : Press UP_ARROW Key To Feed Drago Milk",650,350);

}

// Function to read values from DB
function readStock(data){
  foodS = data.val();

}

// Function to write values in DB
function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  } 

   database.ref('/').update({
     food:x
   })
}



