
// You can write more code here

/* START OF COMPILED CODE */

class r_tree_1 extends Phaser.GameObjects.Image {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "R-Tree-1", frame);
		
		// this (components)
		const thisPhysics = new Physics(this);
		thisPhysics.static = true;
		thisPhysics.autoSize = "Custom";
		thisPhysics.bwidth = 85;
		thisPhysics.bheight = 85;
		thisPhysics.bxOffset = 20;
		thisPhysics.byOffset = 310;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
