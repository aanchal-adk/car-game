function Road() {
  this.x = 0;
  this.y = 0;
  this.height = 400;
  this.width = 400;
  this.velocity = 10;
  
  this.create = function() {
    this.element = document.createElement('img');
    this.element.style.height = this.height;
    this.element.style.width = this.width;
    this.element.style.position = 'absolute';
    this.element.setAttribute('src','images/road.png');
    this.element.setAttribute('alt','road');
    this.setPosition();
  }
  
  this.setPosition = function() {
    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }
  
  this.move = function () {
    this.x += this.velocity;
    this.element.style.top = this.x;
  }
}
