function Divider(roadH,x,y){
  this.width = 14;
  this.height = 80;
  this.x = x;
  this.y = y;
  this.velocity = 10;
  this.color = 'yellow';
  this.roadH= roadH;
  
  this.element;
  
  this.create = function() {
    this.element = document.createElement('div');
    this.setPosition();
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.background = this.color;
    this.element.style.position = 'absolute';
  }
  
  this.setPosition = function() {
    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }
  
  this.move = function () { 
    this.element.style.top = this.y;
    if(this.y >= 830){ //50+(80+50)*6
	  this.y = -80;
	}
	this.y += this.velocity;
  }
}
