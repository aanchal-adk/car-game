function Animate(road, dividerL, dividerR, player, enemies) {
  this.road = road;
  this.dividerL = dividerL;
  this.dividerR = dividerR;
  this.player = player;
  this.enemies = enemies;
  var that = this;
  var intervalId;
  
  this.startAnimation = function(id1){
    intervalId2 = setInterval(function(){
	  for(var i = 0; i< that.dividerL.length; i++){
	    that.move(dividerL[i]);
	    that.move(dividerR[i]);
	  }
	  for(var j = 0;j < that.enemies.length;j++ ){
	    that.move(that.enemies[j]);
	    
	    that.collide(that.enemies[j],j,id1);
	  }
	  that.enemyRemove();
	  },1000/30);

  }
  
  this.move = function(ele){
    ele.move();
  }
  this.enemyRemove = function(){
	if(this.enemies.length > 0){
      if(parseInt(this.enemies[0].element.style.top)>=600){
	    console.log(this.enemies[0].element.style.top);
	    road.element.removeChild(this.enemies[0].element);
	    this.enemies.splice(0,1);
	  }
	}
  }
  
  this.collide = function(enemy,j,id1){
    if(parseInt(this.player.element.style.top) < (parseInt(enemy.element.style.top)+140) &&
       (parseInt(this.player.element.style.top) +140) > parseInt(enemy.element.style.top) &&
       (parseInt(this.player.element.style.left) + 100) > parseInt(enemy.element.style.left) &&
       parseInt(this.player.element.style.left) < (parseInt(enemy.element.style.left)+100)
        ){
	  clearInterval(intervalId2);
	  clearInterval(id1);
	}
  }
  this.bulletHit = function(bullet) {
	console.log(bullet.element.style.width);
    bullet.move();
  }
}
