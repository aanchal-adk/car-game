function CarCollision(elementId) {
  var element = document.getElementById(elementId);
  this.x1;
  this.x2;
  this.randomNo1;
  this.randomNo2;
  var that=this;
  
  this.init = function(){
    var road = new Container();
    road.create();
    var dividerL = [];
    var dividerR = [];
    var enemyL = [];
    var enemyM = [];
    var enemyR = [];
    var box;
    var seperation;
    var randomNo1, randomNo2;
    var enemies = [];
    var bullets = [];
    var t=0;
    
    for(var i=0; i<7;i++){
		box = new Divider(road.height,Math.floor(road.width/3)-7,50+(80+50)*i);
		box.create();
		dividerL.push(box)
		road.append(box.element);
	}
	
	for(var i=0; i<=6;i++){
		box = new Divider(road.height,Math.floor(road.width/3*2)-7,50+(80+50)*i);
		box.create();
		dividerR.push(box)
		road.append(box.element);
	}
	var player = new PlayerCar(road.width, road.height);
	player.create();
	road.append(player.element);
    
    
    
    var intervalId = setInterval(function(){
	  that.generateRandom(road);
	  if(that.randomNo1 == that.randomNo2){
        var enemy = new EnemyCars(that.x1,-200);
        enemy.create();
        enemies.push(enemy);
        var l=enemies.length;
        road.append(enemies[enemies.length-1].element);
      }
      else{
	    var enemy = new EnemyCars(that.x1,-200);
        enemy.create();
        enemies.push(enemy);
        var l=enemies.length;
        road.append(enemies[enemies.length-1].element);
        var enemy = new EnemyCars(that.x2,-200);
        enemy.create();
        enemies.push(enemy);
        road.append(enemies[enemies.length-1].element);
	  }
      console.log(enemies.length);
	},1500);
	
	
	  
    element.appendChild(road.element);
    
    animation = new Animate(road, dividerL, dividerR, player, enemies);
    animation.startAnimation(intervalId);
    document.addEventListener('keydown',function(e){
	  if(e.keyCode == '38'){
		
	    var bullet = new Bullet(player);
        bullet.create();
        road.append(bullet.element);
        bullets.push(bullet);
        console.log(bullets.length);
        animation.bulletHit(bullets[bullets.length-1]);
	  }
    });
  }
  
  this.generateRandom = function(road){
	  this.randomNo1 = Math.floor(Math.random()*3+1);
	  this.randomNo2 = Math.floor(Math.random()*3+1);
      if(this.randomNo1 == 1){
	    this.x1=20;
	  }
      else if(this.randomNo1 == 2){
		this.x1=road.width/2-(100/2);
	  }
      else if(this.randomNo1 == 3){
		this.x1=280;
	  }
	  
	  if(this.randomNo2 == 1){
	    this.x2=20;
	  }
      else if(this.randomNo2 == 2){
		this.x2=road.width/2-(100/2);
	  }
      else if(this.randomNo2 == 3){
		this.x2=280;
	  }
  }
  
}


var carCollision = new CarCollision('car-collision');
carCollision.init();
