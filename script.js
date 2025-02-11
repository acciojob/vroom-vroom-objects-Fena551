// Complete the js code
//function Car(make, model) {}

//function SportsCar(make, model, topSpeed) {}


class Car{
	constructor(make,model){
		this.make=make;
		this,model=model;
	}
}

Car.prototype.getMakeModel=function(){
	return `${this.make} ${this.model)`;
}

class SportsCar extends Car{
	constructor(make,model,topSpeed){
		super(make,model);
		this.topSpeed=topSpeed;
	}
}


Sportcar.prototype.getTopSpeed=function(){
	return this.topspeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
