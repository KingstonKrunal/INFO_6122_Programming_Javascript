class TV {
    constructor(channel, volumeLevel) {
        this.channel = channel;
        this.volumeLevel = volumeLevel;
    }

    tvStatus() {
        console.log("The TV is currently playing channel " + this.channel + " and the volume level is " + this.volumeLevel);
    }
}

class SmartTV extends TV {
    constructor(channel, volumeLevel, brand) {
        super(channel, volumeLevel);

        this.brand = brand;
    }

    tvStatus() {
        console.log("The " + this.brand + " TV is currently playing channel " + this.channel + "  and the volume level is " + this.volumeLevel);
    }
}

let varTV = new TV("BBC", 9);
varTV.tvStatus();

let varSmartTV = new SmartTV("BBC", 9, "Samsung");
varSmartTV.tvStatus();