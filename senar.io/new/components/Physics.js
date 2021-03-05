
// You can write more code here

/* START OF COMPILED CODE */

class Physics {
	
	constructor(gameObject) {
		gameObject["__Physics"] = this;
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.gameObject = gameObject;
		/** @type {boolean} */
		this.static = false;
		/** @type {"Auto"|"Custom"} */
		this.autoSize = "Auto";
		/** @type {number} */
		this.bwidth = 0;
		/** @type {number} */
		this.bheight = 0;
		/** @type {number} */
		this.bxOffset = 0;
		/** @type {number} */
		this.byOffset = 0;
		/** @type {boolean} */
		this.centerX = true;
		/** @type {boolean} */
		this.centerY = true;
		
		/* START-USER-CTR-CODE */
			this.scene = this.gameObject.scene;

			this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Physics} */
	static getComponent(gameObject) {
		return gameObject["__Physics"];
	}
	
	/* START-USER-CODE */

	update() {
		this.scene.physics.add.existing(this.gameObject, this.static);
		if(this.autoSize === "Custom") {
			const body = this.gameObject.body;
			body.setSize(this.bwidth, this.bheight);
			if(this.centerX && !this.centerY) {
				// console.log(this.gameObject.width)
				// console.log(this.gameObject.offset)
				//console.log("X")
				body.setOffset(this.gameObject.width/2 - this.bwidth/2 + this.bxOffset, this.byOffset);

			}
			if(!this.centerX && this.centerY) {
				//console.log("Y")
				body.setOffset(this.bxOffset, this.gameObject.height/2 - this.bheight/2 + this.byOffset);

			}
			if(this.centerX && this.centerY){
				//console.log("Both")
				body.setOffset(this.gameObject.width/2 - this.bwidth/2 + this.bxOffset, this.gameObject.height/2 - this.bheight/2 + this.byOffset);

			}else if(!this.centerX && !this.centerY){
				//console.log("Neither")
				body.setOffset(this.bxOffset, this.byOffset);

			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
