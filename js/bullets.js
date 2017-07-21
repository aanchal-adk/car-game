function Bullet(player) {
  this.player = player;
  this.width = 5;
  this.height = 20;
  this.element;
  this.x = (parseInt(this.player.element.style.left) +parseInt(this.player.element.style.width)/2);
  this.y = (parseInt(this.player.element.style.top)- this.height);
  this.velocity = -10;
  var that = this;
  
  this.create = function() {
    this.element = document.createElement('img');
    this.element.setAttribute('src', 'images/bullet.png');
    this.element.setAttribute('alt','bullet');
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'absolute';
    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }
  
  this.move = function() {
	id = setInterval(function(){
	  that.y += that.velocity;
      that.element.style.top = that.y;
	},1000/60); 
  }
}
