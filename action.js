document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
  });
  var character = document.getElementById("character");
  function moveLeft(){
      let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      left -= 300;
      if(left>=0){
          character.style.left = left + "px";
      }
  }
  function moveRight(){
      let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      left += 300;
      if(left<900){
          character.style.left = left + "px";
      }
  }
  var block = document.getElementById("block");
  var counter = 0;
  block.style.animationDuration = "3s";
  block.addEventListener('animationiteration', () => {
      var random = Math.floor(Math.random() * 3);
      left = random * 300;
      block.style.left = left + "px";
      counter++;
  });
  var block2 = document.getElementById("block2");
  block2.style.animationDuration = "3s";
  block2.addEventListener('animationiteration', () => {
      var random2 = Math.floor(Math.random() * 3);
      left = random2 * 300;
      block2.style.left = left + "px";
      counter++;
  });

  var block3 = document.getElementById("block3");
  block3.style.animationDuration = "3s";
  block3.addEventListener('animationiteration', () => {
      var random3 = Math.floor(Math.random() * 3);
      left = random3 * 300;
      block3.style.left = left + "px";
      counter++;
  });

  var block4 = document.getElementById("block4");
  block4.style.animationDuration = "3s";
  block4.addEventListener('animationiteration', () => {
      var random4 = Math.floor(Math.random() * 3);
      left = random4 * 300;
      block4.style.left = left + "px";
      counter++;
  });


  setInterval(function(){
      var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
      if(characterLeft==blockLeft && blockTop<1800 && blockTop>1200){
          alert("Game over. Score: " + counter);
          block.style.animation = "none";
      }
  },1);
  
    setInterval(function(){
      var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      var blockLeft2 = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
      var blockTop2 = parseInt(window.getComputedStyle(block2).getPropertyValue("top"));
      if(characterLeft==blockLeft2 && blockTop2<1200 && blockTop2>600){
          alert("Game over. Score: " + counter);
          block2.style.animation = "none";
      }
  },1);

  setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft3 = parseInt(window.getComputedStyle(block3).getPropertyValue("left"));
    var blockTop3 = parseInt(window.getComputedStyle(block3).getPropertyValue("top"));
    if(characterLeft==blockLeft3 && blockTop3<900 && blockTop3>300){
        alert("Game over. Score: " + counter);
        block3.style.animation = "none";
    }
},1);

setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft4 = parseInt(window.getComputedStyle(block4).getPropertyValue("left"));
    var blockTop4 = parseInt(window.getComputedStyle(block4).getPropertyValue("top"));
    if(characterLeft==blockLeft4 && blockTop4<600 && blockTop4>0){
        alert("Game over. Score: " + counter);
        block4.style.animation = "none";
    }
},1);
  
  
  document.getElementById("right").addEventListener("touchstart", moveRight);
  document.getElementById("left").addEventListener("touchstart", moveLeft);