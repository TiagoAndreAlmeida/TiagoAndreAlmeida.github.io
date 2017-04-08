//Shoot Class
var Shoot = function (x, y){
	this.x = x;
	this.y = y;
	this.speed = 15;
	this.width = 20;
	this.height = 5;
};

Shoot.prototype.move = function(){
	this.x += this.speed;
};
//Tank Class
var Tank = function (x, y){
	this.x = x;
	this.y = y;
	this.speed = 5;
	this.width = 20;
	this.height = 15;
};

Tank.prototype.move = function (up, down){
	if(up)
		this.y -= this.speed;
	if(down)
		this.y += this.speed;

};
//Enemy Class
var Enemy = function (x, y){
	this.y = y;
	this.x = x;
	this.speed = 3;
	this.width = 20;
	this.height = 15;
};
Enemy.prototype.move = function () {
	this.x -= this.speed;
};
