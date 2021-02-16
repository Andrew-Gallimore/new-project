
// You can write more code here
var others = [];
var me;
var left = 0;
var oldpnum = 0;
var camTime = new Date().getTime();
var camTimeOffsetMax = 800;
var camTimeOffsetMin = 650;
var camTimeOffset = camTimeOffsetMin;
var camTimeOffsetOld = camTimeOffset;
var oldCamTime = 0;
var offset = 0;
var camData = [];

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
		this.add.image(608, 352, "Artwork_Zone");
		
		// player
		const player = this.add.sprite(400, 400, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
		player.scaleX = 0.12719397278844025;
		player.scaleY = 0.12719397278844025;
		player.setDepth(2);
		
		// player (components)
		new Physics(player);
		new User_Movement(player);
		
		this.player = player;
	}
	
	/* START-USER-CODE */
	update(time, delta) {
		//this.cameras.main.startFollow(this.player,false,0.01,0.01,0,100);
		this.cameras.main.setZoom(0.65);
		outputPos(this.player.x,this.player.y);
		updatePos(this);
		mapCam(this.game.canvas.clientWidth,this.game.canvas.clientHeight);
		if(camTimeOffsetOld !== camTimeOffset) { //if canvas size refreshes
			camTime = new Date().getTime();
			oldCamTime = 0;
			camData.length = 0;
			camTimeOffsetOld = camTimeOffset;
		}
		moveCam(this.cameras.main,this.player.x,this.player.y,delta);
		//console.log(camTimeOffset, camTimeOffsetOld)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

function outputPos(playerx,playery) {
	if(this.socketID !== undefined) {
		//putting out player position
		var pack = [];
		pack.push({
			ID:"" + this.socketID,
			x:playerx,
			y:playery
		});
		this.socket.emit('upos',pack);
	}
}

function updatePos(game) {
	// console.log(this.pnum)
	// console.log(oldpnum)
	if(oldpnum !== this.pnum) {
		for (var i = 0; oldpnum !== this.pnum; i++) {
			if(oldpnum < this.pnum) {
				others[oldpnum] = game.add.sprite(Math.random() * 900, Math.random() * 900, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
				others[oldpnum].scaleX = 0.10219397278844025;
				others[oldpnum].scaleY = 0.10219397278844025;
				others[oldpnum].setDepth(1);

				oldpnum = oldpnum + 1;
				//console.log("Adding: " + 1)
			}else if(oldpnum > this.pnum) {
				others[oldpnum - 1 - i].destroy();
			    others.splice(oldpnum - 1 - i,1);
				
				oldpnum = oldpnum - 1;
				//console.log("Removeing: " + 1)
			}
		}
	}
	// console.log(others)

	for (var i = 0; i < this.pnum; i++) {
		// console.log(i)
		if(this.pID[i] !== this.socketID) {
			others[i].x = this.px[i];
			others[i].y = this.py[i];
		}
		// }else if(others[i] !== undefined && this.pID[i] === this.socketID) {
		// 	others[i].destroy();
		// 	delete others[i];
		// 	me = i;
		// }
		//updateing the other peoples positions
	}

		// if(others.length === 0) {
		// 	for (var i = 0; i < this.pnum; i++) {
		// 		oldpnum = this.pnum;
		// 		others[i] = game.add.sprite(Math.random() * 900, Math.random() * 900, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
		// 		others[i].scaleX = 0.10219397278844025;
		// 		others[i].scaleY = 0.10219397278844025;
		// 		others[i].setDepth(1);
		// 		//adding people that are already in the world once you start in the world
		// 	}
		// 	// console.log(oldpnum)
		// 	//console.log(this.pnum)
		// 	// console.log(others)
		// 	console.log(2)
		// 	// console.log(others)
		// }else if(oldpnum < this.pnum) {
		// 	console.log(1)
		// 	console.log(others)
		// 	//console.log(oldpnum)
		// 	//console.log(this.pnum -1)
		// 	others[this.pnum -1] = game.add.sprite(Math.random() * 900, Math.random() * 900, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
		// 	others[this.pnum -1].scaleX = 0.10219397278844025;
		// 	others[this.pnum -1].scaleY = 0.10219397278844025;
		// 	others[this.pnum -1].setDepth(1);
		// 	//adding a player if a new person joins
		// }else if (oldpnum > this.pnum) {
		// 	console.log(-1)
		// 	console.log(others)
		// 	//console.log(oldpnum)
		// 	others[oldpnum-1].destroy();
		// 	others.splice(oldpnum-1,1);
		// 	//removeing a player if they leave
		// 	//console.log(others)
		// }

		// if(oldpnum < this.pnum) {
		// 	oldpnum = oldpnum + 1;
		// }else if(oldpnum > this.pnum) {
		// 	oldpnum = oldpnum - 1;
		// }
		// oldpnum = this.pnum;

		// console.log(this.socketID, this.pID)
}

function mapCam(width, height) {
	var maxWidth = 1000;
	var minWidth = 200;
	var maxHeight = 850;
	var minHeight = 200;

	if(width < maxWidth && width > minWidth) {
		camTimeOffset = camTimeOffsetMin;
		//maping camera waiting time from between ...OffsetMin & ...OffsetMax based off distance between minwidth/height
	}else if(width > maxWidth) {
		camTimeOffset = camTimeOffsetMax;
	}else {
		camTimeOffset = camTimeOffsetMin;
	}

	//do same for height
}

function moveCam(cam,px,py,delta) {
	var curTime = new Date().getTime();
	var time = curTime - camTime - offset;

	//dealing with delay for following player
	if(oldCamTime < Math.floor(time/200)) {
		if (time > camTimeOffset - delta - 1) {
			camData.shift();
			camData.push({px, py, time});
		}else {
			camData.push({px, py, time});
		}
		oldCamTime = Math.floor(time/200);
	}else if (time < 400) {
		//fallback camera placeing for if better camera is busy setting up
		cam.centerOn(px, py);
	}

	//smoothing player follow data 
	if(time > 710 && camData.length > 1 && camData.length < 3) {
		console.log("'camTimeOffsetMin' is two Low at a Value of (" + camTimeOffsetMin + ")")

	}else if (time > 410 && camData.length > 2) {
		camData[1].px = (camData[0].px + camData[1].px + camData[2].px) / 3;
		camData[1].py = (camData[0].py + camData[1].py + camData[2].py) / 3;
	}

	//placeing camera
	if (time > 410 && camData.length > 1) {
		var timeWhole = Math.floor(time/200);
		var timePercent = (Math.floor(((time/200) - timeWhole) * 100));
		
		var distX = camData[0].px - camData[1].px;
		var positionX = camData[0].px - ((timePercent / 100) * distX); // putting together all the factors for camera position X
		positionX = ((positionX * 4) + (px * 3)) / 7;

		var distY = camData[0].py - camData[1].py;
		var positionY = camData[0].py - ((timePercent / 100) * distY); // putting together all the factors for camera position Y
		positionY = ((positionY * 4) + (py * 3)) / 7;

		cam.centerOn(Math.floor(positionX), Math.floor(positionY));
	}
	

}