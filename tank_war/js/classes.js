//Shoot Class
var Shoot = function (x, y, src){
	this.x = x;
	this.y = y;
	this.speed = 15;
	this.width = 20;
	this.height = 5;
	this.sprite = new Image();
	this.sprite.src = src;
};

Shoot.prototype.move = function(){
	this.x += this.speed;
};
//Tank Class
var Tank = function (x, y, src){
	this.x = x;
	this.y = y;
	this.speed = 5;
	this.width = 15;
	this.height = 20;
	this.sprite = new Image();
	this.sprite.src = src;
};

Tank.prototype.move = function (up, down){
	if(up)
		this.y -= this.speed;
	if(down)
		this.y += this.speed;

};
//Enemy Class
var Enemy = function (x, y, src){
	this.y = y;
	this.x = x;
	this.speed = 3;
	this.width = 20;
	this.height = 13;
	this.sprite = new Image();
	this.sprite.src = src;
};
Enemy.prototype.move = function () {
	this.x -= this.speed;
};
