class Vehicle {
    constructor(NoOfWheels, NoOfSeats) {
        this.NoOfWheels = NoOfWheels;
        this.NoOfSeats = NoOfSeats;
    }

    Details() {
        console.log("This is a vehicle class.");
    }
}

class Bike extends Vehicle {
    constructor(NoOfWheels, NoOfSeats, Handle) {
        super(NoOfWheels, NoOfSeats);

        this.Handle = Handle;
    }

    Details() {
        console.log("This is a bike class.");

        document.getElementById("bikeWheels").innerHTML = bikeObject.NoOfWheels;
        document.getElementById("bikeSeats").innerHTML = bikeObject.NoOfSeats;
        document.getElementById("bikeHandle").innerHTML = bikeObject.Handle;
    }
}

class Car extends Vehicle {
    constructor(NoOfWheels, NoOfSeats, Model, EntertainmentSystem) {
        super(NoOfWheels, NoOfSeats);

        this.Model = Model;
        this.EntertainmentSystem = EntertainmentSystem;
    }

    Details() {
        console.log("This is a car class.");

        document.getElementById("carModel").innerHTML = carObject.Model;
        document.getElementById("carEntertainmentSystem").innerHTML = carObject.EntertainmentSystem;
        document.getElementById("carWheels").innerHTML = carObject.NoOfWheels;
        document.getElementById("carSeats").innerHTML = carObject.NoOfSeats;
    }
}

class Truck extends Vehicle {
    constructor(NoOfWheels, NoOfSeats, Container) {
        super(NoOfWheels, NoOfSeats);

        this.Container = Container;
    }

    Details() {
        console.log("This is a truck class.");

        document.getElementById("truckWheels").innerHTML = truckObject.NoOfWheels;
        document.getElementById("truckSeats").innerHTML = truckObject.NoOfSeats;
        document.getElementById("truckContainer").innerHTML = truckObject.Container;
    }
}

let vehicleObject;
let bikeObject;
let carObject;
let truckObject;

function load() {
    vehicleObject = new Vehicle(4, 4);
    bikeObject = new Bike(2, 1, "short");
    carObject = new Car(4, 2, "Tesla", "Bose");
    truckObject = new Truck(6, 2, "20m");

    vehicleObject.Details();
    bikeObject.Details();
    carObject.Details();
    truckObject.Details();
}