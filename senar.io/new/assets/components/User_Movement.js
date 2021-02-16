
// You can write more code here

/* START OF COMPILED CODE */

class User_Movement {
	
	constructor(gameObject) {
		gameObject["__User_Movement"] = this;
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
			const scene = this.gameObject.scene;

			this.cursors = scene.input.keyboard.createCursorKeys();
			// each time the scene is updated, call the `update` method
			scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
			
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {User_Movement} */
	static getComponent(gameObject) {
		return gameObject["__User_Movement"];
	}
	
	/* START-USER-CODE */

	update(time, delta) {
		const speedX = 400;
		const upX = 1300;
		const downX = 0.02;

		const speedY = 300;
		const upY = 1600;
		const downY = 0.01;

		const body = this.gameObject.body;

		if(!body) {
			return
		}
		body.setMaxVelocityX(speedX);
		body.setDamping(true);

		if (this.cursors.left.isDown) {
			body.setAccelerationX(-upX * delta);
			body.setDragX(1,0);
		}else if (this.cursors.right.isDown) {
			body.setAccelerationX(upX * delta);
			body.setDragX(1,0);
		}else {
			body.setAccelerationX(0);
			body.setDragX(downX / delta);
		}

		//Virtical movement
		body.setMaxVelocityY(speedY);

		if (this.cursors.up.isDown) {
			body.setAccelerationY(-upY * delta);
			body.setDragY(1,0);
		}else if (this.cursors.down.isDown) {
			body.setAccelerationY(upY * delta);
			body.setDragY(1,0);
		}else {
			body.setAccelerationY(0);
			body.setDragY(downY / delta);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
