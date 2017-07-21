function PlayerCar(roadw,roadh){
  this.width = 100;
  this.height = 140;
  this.x = roadw/2-(this.width/2);
  this.y = roadh/3*2;
  this.velocityX = 0;
  var that = this;	
  this.create = function(){
  
    this.element = document.createElement('img');
	
	this.setPosition(this.x, this.y);
	
	this.element.setAttribute('src', 'images/car3.png');
	this.element.setAttribute('alt', 'player car');
	this.element.style.width = this.width;
	this.element.style.height = this.height;
	this.element.style.position = 'absolute';
	this.addEvents();
  }
  this.addEvents = function(){
    document.addEventListener('keydown', function (e) {
      x=parseInt(that.element.style.left);
      if(e.keyCode == '37'){
		if(x>=126){
	      that.velocityX = -126;
	    }
	  }
	  if(e.keyCode == '39'){
	    if(x<=200){
	      that.velocityX = 126;
	    }
	  }
	  that.move();
    });
  } 
  this.setPosition = function() {
    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }
  
  this.move = function(){
    this.x = this.x + this.velocityX;
    this.element.style.left = this.x; 
    this.velocityX = 0;
  }
}

