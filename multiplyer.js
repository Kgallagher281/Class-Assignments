const myMult = new Multiplier();

function Multiplier(){
this.currentValue = 1;

}

Multiplier.prototype.multiply = function(num){
	this.currentValue = this.currentValue * num;
	return this.getCurrentValue();
};

Multiplier.prototype.getCurrentValue = function(){
return this.currentValue;
};


