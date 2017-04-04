var Shoot = function (x, y){
	this.x = x;
	this.y = y;
	this.speed = 25;
	this.width = 20;
	this.height = 5;
};

Shoot.prototype.move = function(){
	this.x += this.speed;
}

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