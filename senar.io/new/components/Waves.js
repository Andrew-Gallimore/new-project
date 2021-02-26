
// You can write more code here

/* START OF COMPILED CODE */

class Waves {
	
	constructor(gameObject) {
		gameObject["__Waves"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {"Top"|"Bottom"} */
		this.type = "";
		/** @type {number} */
		this.offset = 0;
		/** @type {number} */
		this.time = 0;
		
		/* START-USER-CTR-CODE */
		this.scene = this.gameObject.scene;

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.scene.events.once(Phaser.Scenes.Events.CREATE, this.create, this)
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Waves} */
	static getComponent(gameObject) {
		return gameObject["__Waves"];
	}
	
	/* START-USER-CODE */
	create() {
		if(this.type === "Top") {
			this.gameObject.play('Top', true);
		}
		if(this.type === "Bottom") {
			this.gameObject.play('Bottom', true);
		}
	}
	update(time) {
		var totalTime = 5000;
		// if(this.time !== 0) {
		// 	totalTime = this.time;
		// }
		// time = time + this.offset;

		var newTime = ((time + this.offset)/(totalTime + this.time) - Math.floor((time + this.offset)/(totalTime + this.time))) * 100;

		if(this.type === "Top") {
			//opasity animation
			if(newTime > 15 && newTime < 60) {
				var percent1 = map(newTime, 15, 60, 0, 100);
			}
			if(newTime > 60 && newTime < 72) {
				var percent1 = 100;
			}
			if(newTime > 72 && newTime < 90) {
				var percent1 = map(newTime, 72, 90, 100, 0);
			}
			this.gameObject.alpha = percent1/100;

			//transform animation
			if(newTime > 5 && newTime < 65) {
				var percent2 = map(newTime, 5, 65, -20, 20);
			}
			if(newTime > 65 && newTime < 72) {
				var percent2 = 20;
			}
			if(newTime > 72 && newTime < 100) {
				var percent2 = map(newTime, 72, 100, 20, 0);
			}
			//applying transform
			this.gameObject._displayOriginY = 540 + percent2;
			// if(this.gameObject.angle === 0) {
			// 	this.gameObject._displayOriginY = 540 + percent2;
			// }else {
			// 	this.gameObject._displayOriginY = 540 - (percent2 * Math.tan(this.gameObject.angle) * 10);
			// 	this.gameObject._displayOriginX = 960 + (percent2 * -Math.cos(this.gameObject.angle) * 10);
			// }
		}else if(this.type === "Bottom") {
			//opasity animation
			if(newTime > 0 && newTime < 50) {
				var percent3 = map(newTime, 0, 50, 0, 100);
			}
			if(newTime > 50 && newTime < 72) {
				var percent3 = 100;
			}
			if(newTime > 72 && newTime < 100) {
				var percent3 = map(newTime, 72, 100, 100, 0);
			}
			this.gameObject.alpha = percent3/100;
			
			//transform animation
			if(newTime > 0 && newTime < 70) {
				var percent4 = map(newTime, 0, 70, -45, 25);
			}
			if(newTime > 70 && newTime < 80) {
				var percent4 = 25;
			}
			if(newTime > 80 && newTime < 100) {
				var percent4 = map(newTime, 80, 100, 25, 33);
			}
			this.gameObject._displayOriginY = 540 + percent4;
			//this.gameObject._displayOriginX = 960 - (percent4 * Math.tan(this.gameObject.angle));
			//this.gameObject._displayOriginY = 540 + (percent4 / Math.tan(this.gameObject.angle));
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
