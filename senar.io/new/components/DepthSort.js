
// You can write more code here

/* START OF COMPILED CODE */

class DepthSort {
	
	constructor(gameObject) {
		gameObject["__DepthSort"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {number} */
		this.offset = 0;
		/** @type {boolean} */
		this.force = false;
		/** @type {number} */
		this.exact = 1000;
		
		/* START-USER-CTR-CODE */

		const scene = this.gameObject.scene;
		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {DepthSort} */
	static getComponent(gameObject) {
		return gameObject["__DepthSort"];
	}
	
	/* START-USER-CODE */

	update() {
		if(this.force) {
			this.gameObject.setDepth(this.exact);
			return
		}
		//so insted of hole numbers from 0 it goes from 1000.00001's and 
		this.gameObject.setDepth((this.gameObject.y / 10000) + 1000 + (this.offset / 10000))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
