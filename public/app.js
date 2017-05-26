var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback){
    window.setTimeout(callback, 1000/60)
  };

var canvas = document.createElement('canvas');
var width = 400;
var height = 400;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

var step = function(){
  update();
  render();
  animate(step);
};

var update = function(){

};

var render = function(){
  context.fillStyle = '#ff00ff';
  context.fillRect(0, 0, width, height);
};

window.onload = function(){
  document.body.appendChild(canvas);
  animate(step);
};
