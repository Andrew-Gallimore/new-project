
// You can write more code here
var others = [];
var tags = [];
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

var oldWavePos;
var oldWavePos2;
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_2;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_2_3;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_1_4;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_2_3_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_1_4_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_1_4_1_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_2_3_1_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_2_4;
		/** @type {Phaser.GameObjects.Sprite} */
		this.ocian_Foam_1_5;
		/** @type {Phaser.GameObjects.Sprite} */
		this.player;
		/** @type {Phaser.GameObjects.Image[]} */
		this.trees;
		/** @type {Array} */
		this.shadow_masks;
		/** @type {Phaser.GameObjects.Rectangle[]} */
		this.barriers;
		/** @type {Array} */
		this.waves;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// artwork_Zone
		this.add.image(608, 352, "Artwork_Zone");
		
		// rectangle
		const rectangle = this.add.rectangle(531, 2443, 128, 128);
		rectangle.scaleX = 139.53721410985838;
		rectangle.scaleY = -117.11519220759233;
		rectangle.isFilled = true;
		rectangle.fillColor = 5025739;
		
		// ocian_Foam_1_1_2
		const ocian_Foam_1_1_2 = this.add.image(2640, 1680, "Ocian_Foam-1");
		ocian_Foam_1_1_2.angle = 2;
		ocian_Foam_1_1_2.alpha = 0.9;
		ocian_Foam_1_1_2.alphaTopLeft = 0.9;
		ocian_Foam_1_1_2.alphaTopRight = 0.9;
		ocian_Foam_1_1_2.alphaBottomLeft = 0.9;
		ocian_Foam_1_1_2.alphaBottomRight = 0.9;
		
		// ocian_Foam_1_3_1
		const ocian_Foam_1_3_1 = this.add.image(-2608, 128, "Ocian_Foam-1");
		ocian_Foam_1_3_1.angle = 83;
		ocian_Foam_1_3_1.alpha = 0.9;
		ocian_Foam_1_3_1.alphaTopLeft = 0.9;
		ocian_Foam_1_3_1.alphaTopRight = 0.9;
		ocian_Foam_1_3_1.alphaBottomLeft = 0.9;
		ocian_Foam_1_3_1.alphaBottomRight = 0.9;
		
		// ocian_Foam_1_1
		const ocian_Foam_1_1 = this.add.image(688, 1472, "Ocian_Foam-1");
		ocian_Foam_1_1.angle = -11;
		ocian_Foam_1_1.alpha = 0.9;
		ocian_Foam_1_1.alphaTopLeft = 0.9;
		ocian_Foam_1_1.alphaTopRight = 0.9;
		ocian_Foam_1_1.alphaBottomLeft = 0.9;
		ocian_Foam_1_1.alphaBottomRight = 0.9;
		
		// ocian_Foam_1_2
		const ocian_Foam_1_2 = this.add.image(-576, 1584, "Ocian_Foam-1");
		ocian_Foam_1_2.angle = 4;
		ocian_Foam_1_2.alpha = 0.9;
		ocian_Foam_1_2.alphaTopLeft = 0.9;
		ocian_Foam_1_2.alphaTopRight = 0.9;
		ocian_Foam_1_2.alphaBottomLeft = 0.9;
		ocian_Foam_1_2.alphaBottomRight = 0.9;
		
		// ocian_Foam_1_3
		const ocian_Foam_1_3 = this.add.image(-1792, 1216, "Ocian_Foam-1");
		ocian_Foam_1_3.angle = 25;
		ocian_Foam_1_3.alpha = 0.9;
		ocian_Foam_1_3.alphaTopLeft = 0.9;
		ocian_Foam_1_3.alphaTopRight = 0.9;
		ocian_Foam_1_3.alphaBottomLeft = 0.9;
		ocian_Foam_1_3.alphaBottomRight = 0.9;
		
		// ocian_Foam_1_1_1
		const ocian_Foam_1_1_1 = this.add.image(1168, 1568, "Ocian_Foam-1");
		ocian_Foam_1_1_1.angle = 7;
		ocian_Foam_1_1_1.alpha = 0.9;
		ocian_Foam_1_1_1.alphaTopLeft = 0.9;
		ocian_Foam_1_1_1.alphaTopRight = 0.9;
		ocian_Foam_1_1_1.alphaBottomLeft = 0.9;
		ocian_Foam_1_1_1.alphaBottomRight = 0.9;
		
		// ocian_Foam_2
		const ocian_Foam_2 = this.add.sprite(880, 2752, "Ocian_Foam-2");
		
		// ocian_Foam_1
		const ocian_Foam_1 = this.add.sprite(912, 2720, "Ocian_Foam-1");
		
		// ocian_Foam_2_3
		const ocian_Foam_2_3 = this.add.sprite(-592, 2160, "Ocian_Foam-2");
		ocian_Foam_2_3.angle = 5;
		
		// ocian_Foam_1_4
		const ocian_Foam_1_4 = this.add.sprite(-560, 2176, "Ocian_Foam-1");
		ocian_Foam_1_4.angle = 5;
		
		// ocian_Foam_2_3_1
		const ocian_Foam_2_3_1 = this.add.sprite(-2864, 1696, "Ocian_Foam-2");
		ocian_Foam_2_3_1.angle = 10;
		
		// ocian_Foam_1_4_1
		const ocian_Foam_1_4_1 = this.add.sprite(-2832, 1696, "Ocian_Foam-1");
		ocian_Foam_1_4_1.angle = 10;
		
		// ocian_Foam_1_4_1_1
		const ocian_Foam_1_4_1_1 = this.add.sprite(2960, 2320, "Ocian_Foam-1");
		ocian_Foam_1_4_1_1.angle = -8;
		
		// ocian_Foam_2_3_1_1
		const ocian_Foam_2_3_1_1 = this.add.sprite(2928, 2320, "Ocian_Foam-2");
		ocian_Foam_2_3_1_1.angle = -8;
		
		// ocian_Foam_2_4
		const ocian_Foam_2_4 = this.add.sprite(-1984, 2752, "Ocian_Foam-2");
		ocian_Foam_2_4.angle = 6;
		
		// ocian_Foam_1_5
		const ocian_Foam_1_5 = this.add.sprite(-1952, 2720, "Ocian_Foam-1");
		ocian_Foam_1_5.angle = 6;
		
		// sand_Edge
		const sand_Edge = this.add.image(-1584, 704, "Sand Edge");
		sand_Edge.angle = 19;
		
		// sand_Edge_3
		this.add.image(1584, 1072, "Sand Edge");
		
		// sand_Full
		this.add.image(3136, 800, "Sand Full");
		
		// sand_Full_1
		this.add.image(4992, 816, "Sand Full");
		
		// sand_Full_2
		this.add.image(3552, -192, "Sand Full");
		
		// sand_Full_3
		this.add.image(4992, -192, "Sand Full");
		
		// sand_Edge_5
		const sand_Edge_5 = this.add.image(-2128, -16, "Sand Edge");
		sand_Edge_5.angle = 86;
		
		// sand_Edge_6
		const sand_Edge_6 = this.add.image(-2000, -896, "Sand Edge");
		sand_Edge_6.angle = 19;
		
		// sand_Edge_5_1
		const sand_Edge_5_1 = this.add.image(-1440, -384, "Sand Edge");
		sand_Edge_5_1.angle = 72;
		
		// sand_Edge_4_1
		const sand_Edge_4_1 = this.add.image(3312, 816, "Sand Edge");
		sand_Edge_4_1.angle = 77;
		
		// sand_Edge_2
		const sand_Edge_2 = this.add.image(464, 880, "Sand Edge");
		sand_Edge_2.angle = 16;
		
		// sand_Edge_4
		const sand_Edge_4 = this.add.image(2544, 1136, "Sand Edge");
		sand_Edge_4.angle = 15;
		
		// sand_Edge_1
		const sand_Edge_1 = this.add.image(-544, 1072, "Sand Edge");
		sand_Edge_1.angle = 6;
		
		// grass_Full
		this.add.image(-576, -368, "Grass Full");
		
		// grass_Full_1
		this.add.image(1296, -336, "Grass Full");
		
		// grass_Full_1_1
		this.add.image(1312, -1328, "Grass Full");
		
		// grass_Full_1_2
		this.add.image(-608, -1376, "Grass Full");
		
		// grass_Full_1_3
		this.add.image(2464, -1360, "Grass Full");
		
		// grass_Full_1_4
		this.add.image(2480, -2352, "Grass Full");
		
		// grass_Full_1_5
		this.add.image(688, -2352, "Grass Full");
		
		// grass_Full_1_6
		this.add.image(-624, -2352, "Grass Full");
		
		// grass_Edge_3_1_1_1_1
		const grass_Edge_3_1_1_1_1 = this.add.image(-1312, -320, "Grass Edge");
		grass_Edge_3_1_1_1_1.angle = 82;
		
		// grass_Edge_3_1
		const grass_Edge_3_1 = this.add.image(2880, -288, "Grass Edge");
		grass_Edge_3_1.angle = -42;
		
		// grass_Edge_3_1_1
		const grass_Edge_3_1_1 = this.add.image(2160, -736, "Grass Edge");
		grass_Edge_3_1_1.angle = 22;
		
		// grass_Edge_3_1_2
		const grass_Edge_3_1_2 = this.add.image(112, -1408, "Grass Edge");
		grass_Edge_3_1_2.angle = 35;
		
		// grass_Edge_3_1_2_1
		const grass_Edge_3_1_2_1 = this.add.image(1632, -2048, "Grass Edge");
		grass_Edge_3_1_2_1.angle = 2;
		
		// grass_Edge_3_1_1_1
		const grass_Edge_3_1_1_1 = this.add.image(-1184, -960, "Grass Edge");
		grass_Edge_3_1_1_1.angle = 22;
		
		// grass_Edge
		this.add.image(-832, 320, "Grass Edge");
		
		// grass_Edge_3
		this.add.image(2096, 352, "Grass Edge");
		
		// grass_Edge_2
		const grass_Edge_2 = this.add.image(1152, 304, "Grass Edge");
		grass_Edge_2.angle = 22;
		
		// grass_Edge_1
		const grass_Edge_1 = this.add.image(128, 32, "Grass Edge");
		grass_Edge_1.angle = -173;
		
		// pebbles_1
		this.add.image(110, 475, "Pebbles-1");
		
		// pebbles_2
		this.add.image(57, 521, "Pebbles-2");
		
		// pebbles_2_1
		this.add.image(-405, 737, "Pebbles-2");
		
		// pebbles_2_2
		this.add.image(-622, 565, "Pebbles-2");
		
		// pebbles_1_2
		const pebbles_1_2 = this.add.image(1037, 595, "Pebbles-1");
		pebbles_1_2.angle = 32;
		
		// pebbles_2_3
		const pebbles_2_3 = this.add.image(1049, 663, "Pebbles-2");
		pebbles_2_3.angle = 21;
		
		// pebbles_2_4
		const pebbles_2_4 = this.add.image(717, 615, "Pebbles-2");
		pebbles_2_4.angle = 48;
		
		// pebbles_2_5
		this.add.image(1266, 853, "Pebbles-2");
		
		// pebbles_2_6
		this.add.image(1724, 949, "Pebbles-2");
		
		// pebbles_2_7
		const pebbles_2_7 = this.add.image(1657, 854, "Pebbles-2");
		pebbles_2_7.angle = 35;
		
		// pebbles_2_8
		this.add.image(-842, 900, "Pebbles-2");
		
		// pebbles_1_3
		this.add.image(-1393, 700, "Pebbles-1");
		
		// pebbles_2_9
		const pebbles_2_9 = this.add.image(-1537, 649, "Pebbles-2");
		pebbles_2_9.angle = 22;
		
		// pebbles_2_10
		const pebbles_2_10 = this.add.image(-1328, 847, "Pebbles-2");
		pebbles_2_10.angle = 63;
		
		// pebbles_2_11
		const pebbles_2_11 = this.add.image(-617, 424, "Pebbles-2");
		pebbles_2_11.angle = 80;
		
		// pebbles_2_12
		this.add.image(-104, 204, "Pebbles-2");
		
		// pebbles_2_13
		this.add.image(-320, 1056, "Pebbles-2");
		
		// pebbles_2_14
		const pebbles_2_14 = this.add.image(400, 1232, "Pebbles-2");
		pebbles_2_14.angle = -20;
		
		// pebbles_2_15
		this.add.image(-1040, 1296, "Pebbles-2");
		
		// shell_1
		const shell_1 = this.add.image(176, 1296, "Shell_1");
		shell_1.alpha = 0.8;
		shell_1.alphaTopLeft = 0.8;
		shell_1.alphaTopRight = 0.8;
		shell_1.alphaBottomLeft = 0.8;
		shell_1.alphaBottomRight = 0.8;
		
		// shell_2
		const shell_2 = this.add.image(352, 1168, "Shell_2");
		shell_2.alpha = 0.8;
		shell_2.alphaTopLeft = 0.8;
		shell_2.alphaTopRight = 0.8;
		shell_2.alphaBottomLeft = 0.8;
		shell_2.alphaBottomRight = 0.8;
		
		// shell_7
		const shell_7 = this.add.image(-240, 992, "Shell_7");
		shell_7.alpha = 0.8;
		shell_7.alphaTopLeft = 0.8;
		shell_7.alphaTopRight = 0.8;
		shell_7.alphaBottomLeft = 0.8;
		shell_7.alphaBottomRight = 0.8;
		
		// shell_10
		const shell_10 = this.add.image(1344, 1088, "Shell_10");
		shell_10.alpha = 0.8;
		shell_10.alphaTopLeft = 0.8;
		shell_10.alphaTopRight = 0.8;
		shell_10.alphaBottomLeft = 0.8;
		shell_10.alphaBottomRight = 0.8;
		
		// shell_5
		const shell_5 = this.add.image(-1040, 1264, "Shell_5");
		shell_5.alpha = 0.8;
		shell_5.alphaTopLeft = 0.8;
		shell_5.alphaTopRight = 0.8;
		shell_5.alphaBottomLeft = 0.8;
		shell_5.alphaBottomRight = 0.8;
		
		// player
		const player = this.add.sprite(419, 436, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
		player.scaleX = 0.12719397278844025;
		player.scaleY = 0.12719397278844025;
		
		// r_Shadow_2_4
		this.add.image(2592, 304, "R-Shadow-2");
		
		// r_Shadow_2_4_1
		this.add.image(1776, -480, "R-Shadow-2");
		
		// r_Shadow_1_3
		this.add.image(2352, -128, "R-Shadow-1");
		
		// r_Shadow_1_3_1
		this.add.image(-1216, -336, "R-Shadow-1");
		
		// r_Shadow_1
		this.add.image(1632, 1024, "R-Shadow-1");
		
		// r_Shadow_1_1
		this.add.image(417, 735, "R-Shadow-1");
		
		// r_Shadow_1_2
		this.add.image(-624, 1009, "R-Shadow-1");
		
		// r_Shadow_2_1
		this.add.image(-632, 79, "R-Shadow-2");
		
		// r_Shadow_2
		this.add.image(-1091, 763, "R-Shadow-2");
		
		// r_Shadow_2_2
		this.add.image(1417, 308, "R-Shadow-2");
		
		// r_Shadow_2_3
		this.add.image(1940, 690, "R-Shadow-2");
		
		// r_Shadow_4
		this.add.image(-323, 720, "R-Shadow-4");
		
		// r_Shadow_4_1
		this.add.image(-1384, 660, "R-Shadow-4");
		
		// r_Shadow_4_2
		this.add.image(-1178, 620, "R-Shadow-4");
		
		// r_Shadow_4_3
		this.add.image(-859, 881, "R-Shadow-4");
		
		// r_Shadow_3
		this.add.image(-1047, 857, "R-Shadow-3");
		
		// r_Shadow_3_1
		this.add.image(-983, 701, "R-Shadow-3");
		
		// r_Shadow_3_2
		this.add.image(1255, 793, "R-Shadow-3");
		
		// r_Shadow_3_3
		this.add.image(1809, 609, "R-Shadow-3");
		
		// r_Shadow_4_4
		this.add.image(1586, 692, "R-Shadow-4");
		
		// r_Shadow_4_5
		this.add.image(1098, 619, "R-Shadow-4");
		
		// r_Shadow_4_6
		this.add.image(1977, 525, "R-Shadow-4");
		
		// r_Shadow_3_4
		this.add.image(1596, 855, "R-Shadow-3");
		
		// r_Shadow_3_5
		this.add.image(1034, 550, "R-Shadow-3");
		
		// r_Bush_1
		const r_Bush_1 = this.add.image(-1039, 774, "R-Bush-1");
		
		// r_Bush_1_6
		const r_Bush_1_6 = this.add.image(1198, 366, "R-Bush-1");
		
		// r_Bush_1_2
		const r_Bush_1_2 = this.add.image(-989, 614, "R-Bush-1");
		
		// r_Bush_1_7
		const r_Bush_1_7 = this.add.image(1375, 524, "R-Bush-1");
		
		// r_Bush_2_6
		const r_Bush_2_6 = this.add.image(1634, 414, "R-Bush-2");
		
		// r_Bush_1_3
		const r_Bush_1_3 = this.add.image(-1277, 435, "R-Bush-1");
		
		// r_Bush_1_4
		const r_Bush_1_4 = this.add.image(1282, 714, "R-Bush-1");
		
		// r_Tree_1_2_1
		const r_Tree_1_2_1 = this.add.image(2080, -656, "R-Tree-1");
		
		// r_Tree_1_2_2
		const r_Tree_1_2_2 = this.add.image(-1488, -864, "R-Tree-1");
		
		// r_Tree_2_2_1
		const r_Tree_2_2_1 = this.add.image(1552, -976, "R-Tree-2");
		
		// r_Tree_2_2_2
		const r_Tree_2_2_2 = this.add.image(2368, -192, "R-Tree-2");
		
		// r_Tree_2_3
		const r_Tree_2_3 = this.add.image(-855, -429, "R-Tree-2");
		
		// r_Tree_2_1
		const r_Tree_2_1 = this.add.image(1195, -192, "R-Tree-2");
		
		// r_Bush_1_9
		const r_Bush_1_9 = this.add.image(1050, 462, "R-Bush-1");
		
		// r_Bush_2_5
		const r_Bush_2_5 = this.add.image(1085, 543, "R-Bush-2");
		
		// r_Bush_2_8
		const r_Bush_2_8 = this.add.image(1545, 614, "R-Bush-2");
		
		// r_Tree_2
		const r_Tree_2 = this.add.image(1712, 186, "R-Tree-2");
		
		// r_Tree_2_2
		const r_Tree_2_2 = this.add.image(-1313, 261, "R-Tree-2");
		
		// r_Tree_1
		const r_Tree_1 = this.add.image(1362, 492, "R-Tree-1");
		
		// r_Tree_1_1
		const r_Tree_1_1 = this.add.image(145, 207, "R-Tree-1");
		
		// r_Bush_1_1
		const r_Bush_1_1 = this.add.image(-814, 740, "R-Bush-1");
		
		// r_Tree_1_2
		const r_Tree_1_2 = this.add.image(-887, 474, "R-Tree-1");
		
		// r_Bush_2
		const r_Bush_2 = this.add.image(-895, 812, "R-Bush-2");
		
		// r_Shadow_2_Mask
		const r_Shadow_2_Mask = this.add.image(-1087, 765, "R-Shadow-2 Mask");
		r_Shadow_2_Mask.visible = false;
		
		// r_Shadow_2_Mask_1
		const r_Shadow_2_Mask_1 = this.add.image(-630, 80, "R-Shadow-2 Mask");
		r_Shadow_2_Mask_1.visible = false;
		
		// r_Bush_2_7
		const r_Bush_2_7 = this.add.image(1938, 458, "R-Bush-2");
		
		// r_Shadow_2_Mask_2
		const r_Shadow_2_Mask_2 = this.add.image(1938, 694, "R-Shadow-2 Mask");
		r_Shadow_2_Mask_2.visible = false;
		
		// r_Bush_2_1
		const r_Bush_2_1 = this.add.image(-1423, 597, "R-Bush-2");
		
		// r_Bush_2_2
		const r_Bush_2_2 = this.add.image(-1219, 591, "R-Bush-2");
		
		// r_Bush_1_8
		const r_Bush_1_8 = this.add.image(1818, 530, "R-Bush-1");
		
		// r_Bush_2_3
		const r_Bush_2_3 = this.add.image(-362, 653, "R-Bush-2");
		
		// r_Bush_1_5
		const r_Bush_1_5 = this.add.image(1592, 782, "R-Bush-1");
		
		// r_Bush_2_4
		const r_Bush_2_4 = this.add.image(1419, 908, "R-Bush-2");
		
		// barrier
		const barrier = this.add.rectangle(160, 2224, 128, 128);
		barrier.scaleX = 60.317694936308186;
		barrier.scaleY = 1.4724738925515288;
		barrier.visible = false;
		barrier.isFilled = true;
		barrier.fillColor = 14686489;
		barrier.lineWidth = 2;
		
		// barrier_1
		const barrier_1 = this.add.rectangle(-3328, 96, 128, 128);
		barrier_1.scaleX = 1.651475143727445;
		barrier_1.scaleY = 39.15240615252361;
		barrier_1.visible = false;
		barrier_1.isFilled = true;
		barrier_1.fillColor = 14686489;
		barrier_1.lineWidth = 2;
		
		// barrier_1_1
		const barrier_1_1 = this.add.rectangle(3504, 96, 128, 128);
		barrier_1_1.scaleX = 1.651475143727445;
		barrier_1_1.scaleY = 39.15240615252361;
		barrier_1_1.visible = false;
		barrier_1_1.isFilled = true;
		barrier_1_1.fillColor = 14686489;
		barrier_1_1.lineWidth = 2;
		
		// barrier_2
		const barrier_2 = this.add.rectangle(208, -1824, 128, 128);
		barrier_2.scaleX = 60.317694936308186;
		barrier_2.scaleY = 1.4724738925515288;
		barrier_2.visible = false;
		barrier_2.isFilled = true;
		barrier_2.fillColor = 14686489;
		barrier_2.lineWidth = 2;
		
		// lists
		const trees = [r_Tree_1, r_Tree_1_2, r_Tree_1_1, r_Tree_2_2, r_Tree_2_3, r_Tree_2, r_Tree_2_1, r_Tree_2_2_2, r_Tree_1_2_1, r_Tree_2_2_1, r_Tree_1_2_2]
		const shadow_masks = []
		const barriers = [barrier, barrier_1, barrier_1_1, barrier_2]
		const waves = []
		
		// ocian_Foam_2 (components)
		const ocian_Foam_2Waves = new Waves(ocian_Foam_2);
		ocian_Foam_2Waves.type = "Bottom";
		
		// ocian_Foam_1 (components)
		const ocian_Foam_1Waves = new Waves(ocian_Foam_1);
		ocian_Foam_1Waves.type = "Top";
		
		// ocian_Foam_2_3 (components)
		const ocian_Foam_2_3Waves = new Waves(ocian_Foam_2_3);
		ocian_Foam_2_3Waves.type = "Bottom";
		ocian_Foam_2_3Waves.offset = 1000;
		ocian_Foam_2_3Waves.time = 1000;
		
		// ocian_Foam_1_4 (components)
		const ocian_Foam_1_4Waves = new Waves(ocian_Foam_1_4);
		ocian_Foam_1_4Waves.type = "Top";
		ocian_Foam_1_4Waves.offset = 1000;
		ocian_Foam_1_4Waves.time = 1000;
		
		// ocian_Foam_2_3_1 (components)
		const ocian_Foam_2_3_1Waves = new Waves(ocian_Foam_2_3_1);
		ocian_Foam_2_3_1Waves.type = "Bottom";
		ocian_Foam_2_3_1Waves.offset = 500;
		ocian_Foam_2_3_1Waves.time = 200;
		
		// ocian_Foam_1_4_1 (components)
		const ocian_Foam_1_4_1Waves = new Waves(ocian_Foam_1_4_1);
		ocian_Foam_1_4_1Waves.type = "Top";
		ocian_Foam_1_4_1Waves.offset = 500;
		ocian_Foam_1_4_1Waves.time = 200;
		
		// ocian_Foam_1_4_1_1 (components)
		const ocian_Foam_1_4_1_1Waves = new Waves(ocian_Foam_1_4_1_1);
		ocian_Foam_1_4_1_1Waves.type = "Top";
		ocian_Foam_1_4_1_1Waves.offset = 200;
		ocian_Foam_1_4_1_1Waves.time = 1000;
		
		// ocian_Foam_2_3_1_1 (components)
		const ocian_Foam_2_3_1_1Waves = new Waves(ocian_Foam_2_3_1_1);
		ocian_Foam_2_3_1_1Waves.type = "Bottom";
		ocian_Foam_2_3_1_1Waves.offset = 200;
		ocian_Foam_2_3_1_1Waves.time = 1000;
		
		// ocian_Foam_2_4 (components)
		const ocian_Foam_2_4Waves = new Waves(ocian_Foam_2_4);
		ocian_Foam_2_4Waves.type = "Bottom";
		ocian_Foam_2_4Waves.offset = 2000;
		
		// ocian_Foam_1_5 (components)
		const ocian_Foam_1_5Waves = new Waves(ocian_Foam_1_5);
		ocian_Foam_1_5Waves.type = "Top";
		ocian_Foam_1_5Waves.offset = 2000;
		
		// player (components)
		const playerPhysics = new Physics(player);
		playerPhysics.autoSize = "Custom";
		playerPhysics.bwidth = 1100;
		playerPhysics.bheight = 600;
		playerPhysics.byOffset = 450;
		new User_Movement(player);
		new DepthSort(player);
		
		// r_Bush_1 (components)
		new DepthSort(r_Bush_1);
		
		// r_Bush_1_6 (components)
		new DepthSort(r_Bush_1_6);
		
		// r_Bush_1_2 (components)
		new DepthSort(r_Bush_1_2);
		
		// r_Bush_1_7 (components)
		new DepthSort(r_Bush_1_7);
		
		// r_Bush_2_6 (components)
		new DepthSort(r_Bush_2_6);
		
		// r_Bush_1_3 (components)
		new DepthSort(r_Bush_1_3);
		
		// r_Bush_1_4 (components)
		new DepthSort(r_Bush_1_4);
		
		// r_Tree_1_2_1 (components)
		const r_Tree_1_2_1Physics = new Physics(r_Tree_1_2_1);
		r_Tree_1_2_1Physics.static = true;
		r_Tree_1_2_1Physics.autoSize = "Custom";
		r_Tree_1_2_1Physics.bwidth = 85;
		r_Tree_1_2_1Physics.bheight = 85;
		r_Tree_1_2_1Physics.bxOffset = 20;
		r_Tree_1_2_1Physics.byOffset = 310;
		const r_Tree_1_2_1DepthSort = new DepthSort(r_Tree_1_2_1);
		r_Tree_1_2_1DepthSort.offset = 310;
		
		// r_Tree_1_2_2 (components)
		const r_Tree_1_2_2Physics = new Physics(r_Tree_1_2_2);
		r_Tree_1_2_2Physics.static = true;
		r_Tree_1_2_2Physics.autoSize = "Custom";
		r_Tree_1_2_2Physics.bwidth = 85;
		r_Tree_1_2_2Physics.bheight = 85;
		r_Tree_1_2_2Physics.bxOffset = 20;
		r_Tree_1_2_2Physics.byOffset = 310;
		const r_Tree_1_2_2DepthSort = new DepthSort(r_Tree_1_2_2);
		r_Tree_1_2_2DepthSort.offset = 310;
		
		// r_Tree_2_2_1 (components)
		const r_Tree_2_2_1Physics = new Physics(r_Tree_2_2_1);
		r_Tree_2_2_1Physics.static = true;
		r_Tree_2_2_1Physics.autoSize = "Custom";
		r_Tree_2_2_1Physics.bwidth = 85;
		r_Tree_2_2_1Physics.bheight = 85;
		r_Tree_2_2_1Physics.bxOffset = 20;
		r_Tree_2_2_1Physics.byOffset = 310;
		const r_Tree_2_2_1DepthSort = new DepthSort(r_Tree_2_2_1);
		r_Tree_2_2_1DepthSort.offset = 310;
		
		// r_Tree_2_2_2 (components)
		const r_Tree_2_2_2Physics = new Physics(r_Tree_2_2_2);
		r_Tree_2_2_2Physics.static = true;
		r_Tree_2_2_2Physics.autoSize = "Custom";
		r_Tree_2_2_2Physics.bwidth = 85;
		r_Tree_2_2_2Physics.bheight = 85;
		r_Tree_2_2_2Physics.bxOffset = 20;
		r_Tree_2_2_2Physics.byOffset = 310;
		const r_Tree_2_2_2DepthSort = new DepthSort(r_Tree_2_2_2);
		r_Tree_2_2_2DepthSort.offset = 310;
		
		// r_Tree_2_3 (components)
		const r_Tree_2_3Physics = new Physics(r_Tree_2_3);
		r_Tree_2_3Physics.static = true;
		r_Tree_2_3Physics.autoSize = "Custom";
		r_Tree_2_3Physics.bwidth = 85;
		r_Tree_2_3Physics.bheight = 85;
		r_Tree_2_3Physics.bxOffset = 20;
		r_Tree_2_3Physics.byOffset = 310;
		const r_Tree_2_3DepthSort = new DepthSort(r_Tree_2_3);
		r_Tree_2_3DepthSort.offset = 310;
		r_Tree_2_3DepthSort.force = true;
		
		// r_Tree_2_1 (components)
		const r_Tree_2_1Physics = new Physics(r_Tree_2_1);
		r_Tree_2_1Physics.static = true;
		r_Tree_2_1Physics.autoSize = "Custom";
		r_Tree_2_1Physics.bwidth = 85;
		r_Tree_2_1Physics.bheight = 85;
		r_Tree_2_1Physics.bxOffset = 20;
		r_Tree_2_1Physics.byOffset = 310;
		const r_Tree_2_1DepthSort = new DepthSort(r_Tree_2_1);
		r_Tree_2_1DepthSort.offset = 310;
		
		// r_Bush_1_9 (components)
		new DepthSort(r_Bush_1_9);
		
		// r_Bush_2_5 (components)
		new DepthSort(r_Bush_2_5);
		
		// r_Bush_2_8 (components)
		new DepthSort(r_Bush_2_8);
		
		// r_Tree_2 (components)
		const r_Tree_2Physics = new Physics(r_Tree_2);
		r_Tree_2Physics.static = true;
		r_Tree_2Physics.autoSize = "Custom";
		r_Tree_2Physics.bwidth = 85;
		r_Tree_2Physics.bheight = 85;
		r_Tree_2Physics.bxOffset = 20;
		r_Tree_2Physics.byOffset = 310;
		const r_Tree_2DepthSort = new DepthSort(r_Tree_2);
		r_Tree_2DepthSort.offset = 310;
		
		// r_Tree_2_2 (components)
		const r_Tree_2_2Physics = new Physics(r_Tree_2_2);
		r_Tree_2_2Physics.static = true;
		r_Tree_2_2Physics.autoSize = "Custom";
		r_Tree_2_2Physics.bwidth = 85;
		r_Tree_2_2Physics.bheight = 85;
		r_Tree_2_2Physics.bxOffset = 20;
		r_Tree_2_2Physics.byOffset = 310;
		const r_Tree_2_2DepthSort = new DepthSort(r_Tree_2_2);
		r_Tree_2_2DepthSort.offset = 310;
		
		// r_Tree_1 (components)
		const r_Tree_1Physics = new Physics(r_Tree_1);
		r_Tree_1Physics.static = true;
		r_Tree_1Physics.autoSize = "Custom";
		r_Tree_1Physics.bwidth = 85;
		r_Tree_1Physics.bheight = 85;
		r_Tree_1Physics.bxOffset = 21;
		r_Tree_1Physics.byOffset = 310;
		const r_Tree_1DepthSort = new DepthSort(r_Tree_1);
		r_Tree_1DepthSort.offset = 310;
		
		// r_Tree_1_1 (components)
		const r_Tree_1_1Physics = new Physics(r_Tree_1_1);
		r_Tree_1_1Physics.static = true;
		r_Tree_1_1Physics.autoSize = "Custom";
		r_Tree_1_1Physics.bwidth = 85;
		r_Tree_1_1Physics.bheight = 85;
		r_Tree_1_1Physics.bxOffset = 20;
		r_Tree_1_1Physics.byOffset = 310;
		const r_Tree_1_1DepthSort = new DepthSort(r_Tree_1_1);
		r_Tree_1_1DepthSort.offset = 310;
		
		// r_Bush_1_1 (components)
		new DepthSort(r_Bush_1_1);
		
		// r_Tree_1_2 (components)
		const r_Tree_1_2Physics = new Physics(r_Tree_1_2);
		r_Tree_1_2Physics.static = true;
		r_Tree_1_2Physics.autoSize = "Custom";
		r_Tree_1_2Physics.bwidth = 85;
		r_Tree_1_2Physics.bheight = 85;
		r_Tree_1_2Physics.bxOffset = 20;
		r_Tree_1_2Physics.byOffset = 310;
		const r_Tree_1_2DepthSort = new DepthSort(r_Tree_1_2);
		r_Tree_1_2DepthSort.offset = 310;
		
		// r_Bush_2 (components)
		new DepthSort(r_Bush_2);
		
		// r_Shadow_2_Mask (components)
		const r_Shadow_2_MaskDepthSort = new DepthSort(r_Shadow_2_Mask);
		r_Shadow_2_MaskDepthSort.force = true;
		r_Shadow_2_MaskDepthSort.exact = 10000;
		
		// r_Shadow_2_Mask_1 (components)
		const r_Shadow_2_Mask_1DepthSort = new DepthSort(r_Shadow_2_Mask_1);
		r_Shadow_2_Mask_1DepthSort.force = true;
		r_Shadow_2_Mask_1DepthSort.exact = 10000;
		
		// r_Bush_2_7 (components)
		new DepthSort(r_Bush_2_7);
		
		// r_Shadow_2_Mask_2 (components)
		const r_Shadow_2_Mask_2DepthSort = new DepthSort(r_Shadow_2_Mask_2);
		r_Shadow_2_Mask_2DepthSort.force = true;
		r_Shadow_2_Mask_2DepthSort.exact = 10000;
		
		// r_Bush_2_1 (components)
		new DepthSort(r_Bush_2_1);
		
		// r_Bush_2_2 (components)
		new DepthSort(r_Bush_2_2);
		
		// r_Bush_1_8 (components)
		new DepthSort(r_Bush_1_8);
		
		// r_Bush_2_3 (components)
		new DepthSort(r_Bush_2_3);
		
		// r_Bush_1_5 (components)
		new DepthSort(r_Bush_1_5);
		
		// r_Bush_2_4 (components)
		new DepthSort(r_Bush_2_4);
		
		// barrier (components)
		const barrierPhysics = new Physics(barrier);
		barrierPhysics.static = true;
		
		// barrier_1 (components)
		const barrier_1Physics = new Physics(barrier_1);
		barrier_1Physics.static = true;
		
		// barrier_1_1 (components)
		const barrier_1_1Physics = new Physics(barrier_1_1);
		barrier_1_1Physics.static = true;
		
		// barrier_2 (components)
		const barrier_2Physics = new Physics(barrier_2);
		barrier_2Physics.static = true;
		
		this.ocian_Foam_2 = ocian_Foam_2;
		this.ocian_Foam_1 = ocian_Foam_1;
		this.ocian_Foam_2_3 = ocian_Foam_2_3;
		this.ocian_Foam_1_4 = ocian_Foam_1_4;
		this.ocian_Foam_2_3_1 = ocian_Foam_2_3_1;
		this.ocian_Foam_1_4_1 = ocian_Foam_1_4_1;
		this.ocian_Foam_1_4_1_1 = ocian_Foam_1_4_1_1;
		this.ocian_Foam_2_3_1_1 = ocian_Foam_2_3_1_1;
		this.ocian_Foam_2_4 = ocian_Foam_2_4;
		this.ocian_Foam_1_5 = ocian_Foam_1_5;
		this.player = player;
		this.trees = trees;
		this.shadow_masks = shadow_masks;
		this.barriers = barriers;
		this.waves = waves;
	}
	
	/* START-USER-CODE */
	create() {
		this.editorCreate();
		this.player.play('Left_Idle', true);

		mapCam(this.game.canvas.clientWidth,this.game.canvas.clientHeight);
		this.physics.add.collider(this.player, this.trees);
		this.physics.add.collider(this.player, this.barriers);

		//makeing all the world barriers invisible
		for (var i in this.barriers) {
			this.barriers[i].visible = false;
		}

		//adding a mask for all the shadows that go over the player
		for (var i in this.shadow_masks) {
			this.shadow_masks[i].visible = true;
			this.shadow_masks[i].mask = new Phaser.Display.Masks.BitmapMask(this, this.player);
		}
		//
		for (var i in this.waves) {

		}
		//console.log(this.ocian_Foam_1.angle)
		oldWavePos = this.ocian_Foam_1.y;
		oldWavePos2 = this.ocian_Foam_2.y;
		// this.ocian_Foam_1.play('Top', true);
		// this.ocian_Foam_2.play('Bottom', true);
		//console.log(this.player.anims.currentAnim.key)

		updatePos(this);
		animateOthers(true);
	}
	update(time, delta) {
		//putting out player positions and setting up camera
		//this.cameras.main.startFollow(this.player,false,0.01,0.01,0,100);
		this.cameras.main.setZoom(0.40);
		outputPos(this.player.x,this.player.y);
		updatePos(this);
		if(camTimeOffsetOld !== camTimeOffset) { //if canvas size refreshes
			mapCam(this.game.canvas.clientWidth,this.game.canvas.clientHeight);
			camTime = new Date().getTime();
			oldCamTime = 0;
			camData.length = 0;
			camTimeOffsetOld = camTimeOffset;
		}
		moveCam(this.cameras.main,this.player.x,this.player.y,delta);
		animateWaves(this.ocian_Foam_1, this.ocian_Foam_2, time)
		//console.log(camTimeOffset, camTimeOffsetOld)

		//depth sorting things
		// this.children.each(c => {
		// 	/** @type {Phaser.Physics.Arcade.Sprite} */
		// 	// @ts-ignore
		// 	// if(!DepthSort.getComponent(child)) {
		// 	// 	return
		// 	// }
		// 	const child = c

		// 	child.setDepth(child.y)
		// })
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

function outputPos(playerx,playery) {
	if(this.socketID !== undefined) {
		//putting out player position
		var pack = [];
		pack.push({
			ID:"" + this.socketID,
			x:playerx,
			y:playery,
			username:Object.values(JSON.parse(localStorage.getItem('lastUser')))[1]
		});
		this.socket.emit('upos',pack);
	}
}

function updatePos(game) {
	//if there is a change in the number of people in a game
	if(oldpnum !== this.pnum) {
		for (var i = 0; oldpnum !== this.pnum; i++) {
			if(oldpnum < this.pnum) {
				//createing the player
				others[oldpnum] = game.add.sprite(0.1101, 0.1101, "dbmx2dt-7e7c10c2-637f-41c7-8d95-0295afa8abd8");
				others[oldpnum].scaleX = 0.11219397278844025;
				others[oldpnum].scaleY = 0.11219397278844025;
				others[oldpnum].setDepth(1);

				//things for the animations
				others[oldpnum].customDirection = 'left';
				others[oldpnum].changeX = 0;
				others[oldpnum].changeY = 0;
				others[oldpnum].moveing = false;

				others[oldpnum].new = true;
				others[oldpnum].play('Left_Idle', true);

				//createing the name tags
				tags[oldpnum] = game.add.text(352, 272, "", {});
				tags[oldpnum].scaleX = 2.7051199066485425;
				tags[oldpnum].scaleY = 2.7051199066485425;
				tags[oldpnum].text = this.username[oldpnum];
				tags[oldpnum].setStyle({"align":"center","fontFamily":"Roboto"});
				tags[oldpnum].setDepth(100000);
				tags[oldpnum].displayOriginX = tags[oldpnum].width / 2;

				//adding depth sorting to the other players
				new DepthSort(others[oldpnum]);

				oldpnum = oldpnum + 1;
				animateOthers();
				//console.log("Adding: " + 1)
			}else if(oldpnum > this.pnum) {
				others[oldpnum - 1 - i].destroy();
			    others.splice(oldpnum - 1 - i,1);
				tags[oldpnum - 1 - i].destroy();
				tags.splice(oldpnum - 1 - i,1);
				
				oldpnum = oldpnum - 1;
				//console.log("Removeing: " + 1)
			}
		}
	}

	//for each person, update their positions
	for (var i = 0; i < this.pnum; i++) {
		if(!others[i].new) {
			//working with and updateing x animation
			if(Math.abs(others[i].x - this.px[i]) > 0) {
				others[i].changeX = others[i].x - this.px[i];
			}
			
			if(others[i].changeX > 0) {
				others[i].customDirection = 'left'
			}else if(others[i].changeX < 0) {
				others[i].customDirection = 'right'
			}
			//working with and updateing y animation
			if(Math.abs(others[i].y - this.py[i]) > 0) {
				others[i].changeY = others[i].y - this.py[i];
			}
		}
		//updateing the peoples positions in the world
		others[i].x = this.px[i];
		others[i].y = this.py[i];
		tags[i].x = this.px[i];
		tags[i].y = this.py[i] - 150;
	}

	animateOthers();
	// console.log(this.username);
}

function animateOthers() {
	const cutoff = 30;
	//for all the other players
	for (var i in others) {
		if(!others[i].new) {
			//left
			if(Math.abs(others[i].changeX) > cutoff && others[i].customDirection === "left" && others[i].moveing  == false) {
				others[i].play('Left_Walk', true);
				others[i].moveing = true;
				//console.log("left")
				//console.log(others[i].changeX, others[i].customDirection, others[i].moveing)
			}
			//right
			if(Math.abs(others[i].changeX) > cutoff  && others[i].customDirection === "right" && others[i].moveing == false) {
				others[i].play('Right_Walk', true);
				others[i].moveing = true;
				//console.log("right")
				//console.log(others[i].changeX, others[i].customDirection, others[i].moveing)
			}
			//up or down left
			if(Math.abs(others[i].changeY) > cutoff && others[i].customDirection === "left" && others[i].moveing  == false) {
				others[i].play('Left_Walk', true);
				others[i].moveing = true;
				//console.log("up/down left")
				//console.log(others[i].changeX, others[i].customDirection, others[i].moveing)
			}
			//up or down right
			if(Math.abs(others[i].changeY) > cutoff  && others[i].customDirection === "right" && others[i].moveing == false) {
				others[i].play('Right_Walk', true);
				others[i].moveing = true;
				//console.log("up/down right")
				//console.log(others[i].changeX, others[i].customDirection, others[i].moveing)
			}
			//stopped
			if(Math.abs(others[i].changeX) < cutoff && Math.abs(others[i].changeY) < cutoff) {
				if(others[i].customDirection === "left") {
					others[i].play('Left_Idle', true);
				}
				if(others[i].customDirection === "right") {
					others[i].play('Right_Idle', true);
				}
				others[i].moveing = false;
			}
		}else if(others[i].x !== 0.1101) {
			others[i].new = false;
		}
	}
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

function animateWaves(front, back, time) {
	var percent1 = 0;
	var percent2 = 0;
	var percent3 = 0;
	var percent4 = 0;
	const totalTime = 5000;
	

	//setting up the numbers to count up to one then reset
	var newTime = (time/totalTime - Math.floor(time/totalTime)) * 100;
	// if(newTime > 1) {
	// 	offset++;
	// 	newTime = time/totalTime - offset;
	// 	console.log(newTime, offset)
	// }
	//console.log(newTime, offset)
	//console.log(time/4000)
	// frame(time/totalTime,0,100,)

	//dealing with the opasity
	// if(newTime > 15 && newTime < 60) {
	// 	percent1 = map(newTime, 15, 60, 0, 100);
	// }
	// if(newTime > 60 && newTime < 72) {
	// 	percent1 = 100;
	// }
	// if(newTime > 72 && newTime < 90) {
	// 	percent1 = map(newTime, 72, 90, 100, 0);
	// }
	// front.alpha = percent1/100;

	//dealing with the opasity again
	// if(newTime > 0 && newTime < 50) {
	// 	percent3 = map(newTime, 0, 50, 0, 100);
	// }
	// if(newTime > 50 && newTime < 72) {
	// 	percent3 = 100;
	// }
	// if(newTime > 72 && newTime < 100) {
	// 	percent3 = map(newTime, 72, 100, 100, 0);
	// }
	// back.alpha = percent3/100;

	//dealing with the transform
	// if(newTime > 5 && newTime < 65) {
	// 	percent2 = map(newTime, 5, 65, -20, 20);
	// }
	// if(newTime > 65 && newTime < 72) {
	// 	percent2 = 20;
	// }
	// if(newTime > 72 && newTime < 100) {
	// 	percent2 = map(newTime, 72, 100, 20, 0);
	// }
	// front.y = oldWavePos - percent2;

	//dealing with the transform again
	// if(newTime > 0 && newTime < 70) {
	// 	percent4 = map(newTime, 0, 70, -45, 20);
	// }
	// if(newTime > 70 && newTime < 80) {
	// 	percent4 = 20;
	// }
	// if(newTime > 80 && newTime < 100) {
	// 	percent4 = map(newTime, 80, 100, 20, 28);
	// }
	// back.y = oldWavePos2 - percent4;
}

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}