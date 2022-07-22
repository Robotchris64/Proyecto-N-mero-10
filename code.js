var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0efafc60-cb34-4c71-b85b-40d4f9b2c1c7","eadb6df9-01d9-4e9f-9c9c-33ce1c22b526","3082eb49-6426-4abe-b188-0ab0ad93ca14","30c404f7-75c2-4add-8614-994e8ef74b72","aef40c08-b6be-4771-bd1c-d65c8d6dade2","a5bfcf34-fa5d-4434-8ebe-8206ab6a4099","67130c7c-47b9-42ce-9687-098a16b120c1","c3b3c360-3f74-4655-90dc-bb2f74decdff"],"propsByKey":{"0efafc60-cb34-4c71-b85b-40d4f9b2c1c7":{"name":"chick 2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"dy1N_pieKNTxAuFHMqbwigLtej533uEi","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0efafc60-cb34-4c71-b85b-40d4f9b2c1c7.png"},"eadb6df9-01d9-4e9f-9c9c-33ce1c22b526":{"name":"car1","sourceUrl":null,"frameSize":{"x":36,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"YtJnL03rw_P1nWT.EWKcLeyryQ0..1o2","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":56},"rootRelativePath":"assets/eadb6df9-01d9-4e9f-9c9c-33ce1c22b526.png"},"3082eb49-6426-4abe-b188-0ab0ad93ca14":{"name":"chick","sourceUrl":null,"frameSize":{"x":42,"y":54},"frameCount":1,"looping":true,"frameDelay":12,"version":"8sgA6vGwqo4kxOm2Ur2ppfFhyG4CZbM1","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":54},"rootRelativePath":"assets/3082eb49-6426-4abe-b188-0ab0ad93ca14.png"},"30c404f7-75c2-4add-8614-994e8ef74b72":{"name":"car2","sourceUrl":null,"frameSize":{"x":40,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"4XGvT.QXIu7jlrP4eNQ.XOR7K2xbhzh5","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":56},"rootRelativePath":"assets/30c404f7-75c2-4add-8614-994e8ef74b72.png"},"aef40c08-b6be-4771-bd1c-d65c8d6dade2":{"name":"car3","sourceUrl":null,"frameSize":{"x":36,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"3TqS6M1Fb77eOIuOGsK5Y0dqRbvMZG3H","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":56},"rootRelativePath":"assets/aef40c08-b6be-4771-bd1c-d65c8d6dade2.png"},"a5bfcf34-fa5d-4434-8ebe-8206ab6a4099":{"name":"nest of eggs","sourceUrl":null,"frameSize":{"x":62,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"pJuKuiNAMZrBYJQCr_XMBfqT0SV9HFWF","loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":50},"rootRelativePath":"assets/a5bfcf34-fa5d-4434-8ebe-8206ab6a4099.png"},"67130c7c-47b9-42ce-9687-098a16b120c1":{"name":"CHICK","sourceUrl":null,"frameSize":{"x":28,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"yNubgg.6jPMzWnQD30yLAYrvZFAVcnrN","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":36},"rootRelativePath":"assets/67130c7c-47b9-42ce-9687-098a16b120c1.png"},"c3b3c360-3f74-4655-90dc-bb2f74decdff":{"name":"CAR1","sourceUrl":null,"frameSize":{"x":18,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"z7yJHycBFlDk4OtMawlksgrExlAlShwI","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":28},"rootRelativePath":"assets/c3b3c360-3f74-4655-90dc-bb2f74decdff.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState ="serve";
 var grass1 = createSprite(20, 200,100,400);
grass1.shapeColor = "green"
var grass2 = createSprite(380, 200,100,400);
grass2.shapeColor = "green"

var chick = createSprite(30, 200,-5,-5);
  chick.setAnimation("chick")
var car1 = createSprite(105, 200,-5,-5);
car1.setAnimation("car1")
car1.velocityY = 7
var car2 = createSprite(205, 200,25,25);
car2.setAnimation("car2")
 car2.velocityY -= 7
var car3 = createSprite(305, 370,25,25);
car3.setAnimation("car3")
car3.velocityY -= 7
var eggs = createSprite(375, 200,-10,-10);
eggs.setAnimation("nest of eggs")
function draw() {
background ("black")
if(gameState == "serve"){
    textSize(17)
    stroke("red")
    text("Ayuda a el pollito a cruzar la calle",75,200)
    textSize(17)
    stroke("blue")
    text("Pulsa (d) para comenzar",75, 240)
     if (keyDown("d")){
      gameState = "play"
    }
  }
  
  
  if(gameState == "play")
  {
  car1.bounceOff(edges)
  car2.bounceOff(edges)
  car3.bounceOff(edges)
  chick.bounceOff(edges)

   
  
   if(keyDown("d")){
    chick.x +=4
   }
    if(keyDown("a")){
    chick.x -=4
  }
  if(keyDown("w")){
    chick.y -=4
  }
  if(keyDown("s")){
    chick.y +=4
  }

  
  if (chick.isTouching(car1)){
chick.x = 30
chick.y = 200
car1.x = 105
car1.y = 200
car2.x = 205
car2.y = 200
car3.x = 305
car3.y = 370
 car1.velocityY = 7; 
 car2.velocityY = 7;
 car3.velocityY = 7;
 playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  
  if (chick.isTouching(car2)){
chick.x = 30
chick.y = 200
car1.x = 105
car1.y = 200
car2.x = 205
car2.y = 200
car3.x = 305
car3.y = 370
 car1.velocityY = 7; 
 car2.velocityY = 7;
 car3.velocityY = 7;
  }
  if (chick.isTouching(car3)){
chick.x = 30
chick.y = 200
car1.x = 105
car1.y = 200
car2.x = 205
car2.y = 200
car3.x = 305
car3.y = 370
 car1.velocityY = 7; 
 car2.velocityY = 7;
 car3.velocityY = 7;
}
}
}
  
  if (chick.isTouching(car2)){
chick.x = 30
chick.y = 200
car1.x = 105
car1.y = 200
car2.x = 205
car2.y = 200
car3.x = 305
car3.y = 370
 car1.velocityY = 7; 
 car2.velocityY = 7;
 car3.velocityY = 7;
 playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  }
  if (chick.isTouching(car3)){
chick.x = 30
chick.y = 200
car1.x = 105
car1.y = 200
car2.x = 205
car2.y = 200
car3.x = 305
car3.y = 370
 car1.velocityY = 7; 
 car2.velocityY = 7;
 car3.velocityY = 7;
playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  }
  if (chick.isTouching(eggs)){
chick.x = 30
chick.y = 200
car1.x = 105
car1.y = 200
car2.x = 205
car2.y = 200
car3.x = 305
car3.y = 370

playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
textSize (18)
stroke ("red")
text ("has gansado1!!!", 160,200)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  createEdgeSprites()
  car1.bounceOff(edges)
  car2.bounceOff(edges)
  car3.bounceOff(edges)
  chick.bounceOff(edges)
   chick.bounceOff(eggs)
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
