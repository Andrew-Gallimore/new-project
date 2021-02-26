
var direction = "left";

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
		const upX = 1450;
		const downX = 0.01;

		const speedY = 340;
		const upY = 1700;
		const downY = 0.007;

		const cutoff = 105;

		const body = this.gameObject.body;

		if(!body) {
			return
		}
		body.setMaxVelocityX(speedX);
		body.setDamping(true);

		if (this.cursors.left.isDown && !this.cursors.right.isDown) {
			body.setAccelerationX(-upX * delta);
			body.setDragX(1,0);
			direction = "left";
			if(Math.abs(body.velocity.x) > cutoff) {
				this.gameObject.play('Left_Walk', true);
			}
		}
		if (this.cursors.right.isDown && !this.cursors.left.isDown) {
			body.setAccelerationX(upX * delta);
			body.setDragX(1,0);
			direction = "right";
			if(Math.abs(body.velocity.x) > cutoff) {
				this.gameObject.play('Right_Walk', true);
			}
		}
		if ((!this.cursors.left.isDown && !this.cursors.right.isDown) || (this.cursors.left.isDown && this.cursors.right.isDown)) {
			body.setAccelerationX(0);
			body.setDragX(downX / delta);
		}

		//Virtical movement
		body.setMaxVelocityY(speedY);

		if (this.cursors.up.isDown && !this.cursors.down.isDown) {
			body.setAccelerationY(-upY * delta);
			body.setDragY(1,0);
			//direction = "up";
			if(Math.abs(body.velocity.y) > cutoff && direction === "left") {
				this.gameObject.play('Left_Walk', true);
			}else if(Math.abs(body.velocity.y) > cutoff && direction === "right") {
				this.gameObject.play('Right_Walk', true);
			}
		}
		if (this.cursors.down.isDown && !this.cursors.up.isDown) {
			body.setAccelerationY(upY * delta);
			body.setDragY(1,0);
			//direction = "down";
			if(Math.abs(body.velocity.y) > cutoff && direction === "left") {
				this.gameObject.play('Left_Walk', true);
			}else if(Math.abs(body.velocity.y) > cutoff && direction === "right") {
				this.gameObject.play('Right_Walk', true);
			}
		}
		if ((!this.cursors.down.isDown && !this.cursors.up.isDown) || (this.cursors.down.isDown && this.cursors.up.isDown)) {
			body.setAccelerationY(0);
			body.setDragY(downY / delta);
		}
		if(Math.abs(body.velocity.x) < cutoff && Math.abs(body.velocity.y) < cutoff) {
			if(direction === "left") {
				this.gameObject.play('Left_Idle', true);
			}
			if(direction === "right") {
				this.gameObject.play('Right_Idle', true);
			}
		}
		//console.log(body.velocity.x < 50)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
