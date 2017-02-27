const BALL_SIZE = 16;
const PADDLE_WIDTH = 50;
const PADDLE_HEIGHT = 12;
const LIFE_WIDTH = 18;
const LIFE_HEIGHT = 18;
const LIFE_INTER = 2;
const MAX_LIVES = 9;
const BRICK_WIDTH = 40;
const BRICK_HEIGHT = 20;
const PADDLE_MARGIN_BOTTOM = 20;
const MID = 0.5;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const FOOTER_HEIGTH = 50;
const KEY_SENS = 8;
const FONT = "Chewy";
const BONUS_WIDTH  = 20;
const BONUS_HEIGHT = 20;
const BONUS_VELOCITY_Y = 200;

var ball;
var paddle;
var bricks;
var bricks_0;
var livesIcons;
var ballOnPaddle = true;
var lives = 3;
var score = 0;
var level = 2;
var levels = [];
var paused = false;
var moveMouse = false;
var escKey;
var pKey;
var cursors;
var spaceKey;
var savedVelocityX;
var savedVelocityY;
var over = false;
var day = true;
var ingameMenuBackground;
var scoreText;
var livesText;
var levelText;
var introText;
var buttonSound;
var brickSound;
var paddleSound;
var s;
var bonuses;
var bonusSound;

function preload() {
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    game.load.image('background_day', 'assets/graphics/background_day.jpg');
    game.load.image('background_night', 'assets/graphics/background_night.jpg');
    game.load.image('paddle_day', 'assets/graphics/paddle_day.png');
    game.load.image('paddle_night', 'assets/graphics/paddle_night.png');
    game.load.image('life', 'assets/graphics/life.png');
    game.load.image('brick_0_day', 'assets/graphics/brick_0_day.png');
    game.load.image('brick_0_night', 'assets/graphics/brick_0_night.png');
    game.load.image('brick_1', 'assets/graphics/brick_1.png');
    game.load.image('brick_2', 'assets/graphics/brick_2.png');
    game.load.image('brick_3', 'assets/graphics/brick_3.png');
    game.load.image('brick_4', 'assets/graphics/brick_4.png');
    game.load.image('ball_day', 'assets/graphics/ball_day.png');
    game.load.image('ball_night', 'assets/graphics/ball_night.png');
    game.load.image('bonus_0', 'assets/graphics/bonus_0.png');
    game.load.image('bonus_1', 'assets/graphics/bonus_1.png');
    game.load.audio('buttonSound', 'assets/audio/button.mp3');
    game.load.audio('brickSound', 'assets/audio/hit_brick.mp3');
    game.load.audio('paddleSound', 'assets/audio/hit_paddle.mp3');
    game.load.audio('bonusSound', 'assets/audio/hit_bonus.mp3');
    game.load.json('basicLevels', 'levels/basicLevels.json');
}