var gameWidth = 500;
var gameHeight = 200;
var maxGWidth = 1920;
var maxGHeight = 1080;
function fittingGame() {
	//if the wize is less than max
	//height
	if(window.innerHeight <= maxGHeight) {
		gameHeight = window.innerHeight;  
	}
	//width
	if(window.innerWidth <= maxGWidth) {
		gameWidth = window.innerWidth;  
	}

	//otherwize if they are bigger
	if(window.innerHeight > maxGHeight || window.innerWidth > maxGWidth) {
		if(window.innerWidth/window.innerHeight < maxGWidth/maxGHeight) {
			//bigger width than height relitive to max resolution ratio
			gameWidth = gameHeight * (window.innerWidth/window.innerHeight);
			gameHeight = maxGHeight;
		}else if(window.innerWidth/window.innerHeight > maxGWidth/maxGHeight) {
			//bigger height than width relitive to max resolution ratio
			gameWidth = maxGWidth;
			gameHeight = maxGWidth * (window.innerHeight/window.innerWidth);
		}else if(window.innerWidth/window.innerHeight > maxGWidth/maxGHeight) {
			//same ratio of width/hight relitive to max resolution ratio
			gameWidth = maxGWidth;
			gameHeight = maxGHeight;
		}
	}
}
fittingGame();

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
	fittingGame();
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