var gameWidth = 500;
var gameHeight = 200;
var maxGWidth = 1600;
var maxGHeight = 900;
function fittingGame(forceValue) {
	//forceValue is equivalent to scale, 1 = normal, 0.5 = half as big, 2 = twice as big, etc.
	var width = window.innerWidth;
	var height = window.innerHeight;
	//if the wize is less than max
	//height
	if(height <= maxGHeight) {
		gameHeight = height;  
	}
	//width
	if(width <= maxGWidth) {
		gameWidth = width;  
	}

	//otherwize if they are bigger
	if(height > maxGHeight || width > maxGWidth) {
		if(width/height < maxGWidth/maxGHeight) {
			//bigger width than height relitive to max resolution ratio
			gameWidth = gameHeight * (width/height);
			gameHeight = maxGHeight;
		}else if(width/height > maxGWidth/maxGHeight) {
			//bigger height than width relitive to max resolution ratio
			gameWidth = maxGWidth;
			gameHeight = maxGWidth * (height/width);
		}else if(width/height > maxGWidth/maxGHeight) {
			//same ratio of width/hight relitive to max resolution ratio
			gameWidth = maxGWidth;
			gameHeight = maxGHeight;
		}
	}
	gameWidth = gameWidth * forceValue;
	gameHeight = gameHeight * forceValue;
	//console.log("Width: " + gameWidth)
	//console.log("Height: " + gameHeight)
}
fittingGame(1);

window.addEventListener('load', function () {

	this.game = new Phaser.Game({
		width: gameWidth,
		height: gameHeight,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				gravity: { y: 0},
				debug: false
			}
		}
	});
	
	this.game.scene.add("Boot", Boot, true);
	this.advancedTiming = true;

});

window.addEventListener('resize', () => {
	fittingGame(1);
	this.game.scale.resize(gameWidth, gameHeight);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {
		
		this.scene.start("Level");
	}

}