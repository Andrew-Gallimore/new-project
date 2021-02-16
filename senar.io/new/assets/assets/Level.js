
// You can write more code here
var others = [];

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.player;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// artwork_Zone
		this.add.image(960, 540, "Artwork_Zone");

		for (var i = 0; i < 10; i++) {
			others[i] = this.add.sprite(Math.random() * 900, Math.random() * 900, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
			others[i].scaleX = 0.12219397278844025;
			others[i].scaleY = 0.12219397278844025;
			others[i].setDepth(1);
			
			// player (components)
			new Physics(others[i]);
		}
		
		// player
		const player = this.add.sprite(400, 400, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
		player.scaleX = 0.12719397278844025;
		player.scaleY = 0.12719397278844025;
		
		// player (components)
		new Physics(player);
		new User_Movement(player);
		
		this.player = player;
	}
	
	/* START-USER-CODE */

	update() {
		this.cameras.main.startFollow(this.player,false,0.01,0.01,0,100);
		this.cameras.main.setZoom(0.65)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
function createOthers() {
	for (var i = 0; i < 10; i++) {
		others[i] = this.add.sprite(Math.random() * 900, Math.random() * 900, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
		others[i].scaleX = 0.12219397278844025;
		others[i].scaleY = 0.12219397278844025;
		others[i].setDepth(1);
		
		// player (components)
		new Physics(others[i]);
	}
}