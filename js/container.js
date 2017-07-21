function Container() {
  this.width = 400;
  this.height = 600;
  this.x = 0;
  this.y = 0;
  this.color = 'grey';
  this.element;
  
  this.create = function(){
    this.element = document.createElement('div');
    this.element.style.height = this.height;
    this.element.style.width = this.width;
    this.element.style.background = this.color;
    this.element.style.position = 'relative';
    this.element.style.overflow = 'hidden';
    
  }
  
  this.append = function(element){
    this.element.appendChild(element);
  }
}
