function EnemyCars(x,y){
  this.x = x;
  this.y = y;
  this.width = 100;
  this.height = 140;
  this.velocity = 10;
  var that = this;
  this.create = function(){
  
    this.element = document.createElement('img');
	
	this.setPosition(this.x, this.y);
	
	this.element.setAttribute('src', 'images/enemycar.png');
	this.element.setAttribute('alt', 'enemy car');
	this.element.style.width = this.width;
	this.element.style.height = this.height;
	this.element.style.position = 'absolute';

  }
  
  this.setPosition = function() {
    this.element.style.top = this.y;
    this.element.style.left = this.x;
    console.log('setpos',this.x, this.y)
  }
  
  this.move = function(){
    this.y = this.y + this.velocity;
    this.element.style.top = this.y; 
  }
}
