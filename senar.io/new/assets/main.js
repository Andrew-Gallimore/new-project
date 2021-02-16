var gameWidth = 500;
var gameHeight = 200;
var maxGWidth = 1920;
var maxGHeight = 1020;
function fittingGame() {
	if(window.innerWidth < maxGWidth) {
		gameWidth = window.innerWidth;  
	}else {
		gameWidth = maxGWidth;
	}
	if(window.innerHeight < maxGHeight) {
		gameHeight = window.innerHeight;  
	}else {
		gameHeight = maxGHeight;
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
				gravity: { y: 0}
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