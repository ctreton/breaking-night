function initGame() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.physics.arcade.checkCollision.down = false;

    s = game.add.tileSprite(0, 0, GAME_WIDTH, GAME_HEIGHT, 'background_day');

    bricks = game.add.group();
    bricks.enableBody = true;
    bricks.physicsBodyType = Phaser.Physics.ARCADE;

    bricks_0 = game.add.group();
    bricks_0.enableBody = true;
    bricks_0.physicsBodyType = Phaser.Physics.ARCADE;

    buttonSound = game.add.audio('buttonSound');
    brickSound = game.add.audio('brickSound');
    paddleSound = game.add.audio('paddleSound');

}

function inputEvents(){
    game.input.onDown.add(releaseBallByClick, this);
    escKey = game.input.keyboard.addKey(Phaser.KeyCode.ESC);
    escKey.onDown.add(togglePauseGame, this);
    pKey = game.input.keyboard.addKey(Phaser.KeyCode.P);
    pKey.onDown.add(togglePauseGame, this);
    spaceKey = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    spaceKey.onDown.add(releaseBallByKeyboard, this);
    cursors = game.input.keyboard.createCursorKeys();

}

function addPaddle() {

    paddle = game.add.sprite(game.world.centerX, GAME_HEIGHT - (FOOTER_HEIGTH + PADDLE_MARGIN_BOTTOM), 'paddle_day');
    paddle.width = PADDLE_WIDTH;
    paddle.height = PADDLE_HEIGHT;
    paddle.anchor.setTo(MID, MID);

    game.physics.enable(paddle, Phaser.Physics.ARCADE);

    paddle.body.collideWorldBounds = true;
    paddle.body.bounce.set(1);
    paddle.body.immovable = true;

}

function addBall() {

    ball = game.add.sprite(game.world.centerX, paddle.y - BALL_SIZE, 'ball_day');
    ball.width = BALL_SIZE;
    ball.height = BALL_SIZE;
    ball.anchor.set(MID);
    ball.checkWorldBounds = true;

    game.physics.enable(ball, Phaser.Physics.ARCADE);

    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);

    ball.events.onOutOfBounds.add(ballLost, this);

}

function initBonuses() {
    bonuses = game.add.group();
    bonuses.enableBody = true;
    bonuses.physicsBodyType = Phaser.Physics.ARCADE;
    bonusSound = game.add.audio('bonusSound');
}