(function() {

  /*** ASTEROID CLASS ***/

  this.Asteroid = function(initialVelocityX, initialVelocityY, xOrigin, yOrigin) {
    this.asteroidImageReady = false;
    this.asteroidImage = new Image();
    this.asteroidImage.onload = function() {
      this.asteroidImageReady = true;
    };
    this.asteroidImage.src = "assets/asteroid_L.png";

    this.imageHeight = 64;
    this.imageWidth = 64;

    this.originX = xOrigin;
    this.originY = yOrigin;

    this.velocityX = initialVelocityX;
    this.velocityY = initialVelocityY;
  }

  Asteroid.prototype.move = function() {
    this.originX += this.velocityX;
    this.originY += this.velocityY;
    var gameWidth = document.body.clientWidth;
    var gameHeight = document.body.clientHeight;
    var offTheScreen = false; 
    if(this.originY + this.imageHeight > gameHeight) offTheScreen = true;
    if(this.originX < 0) offTheScreen = true;
    if(this.originY < 0) offTheScreen = true;
    //kill it if we're above the fold
    return offTheScreen;
  }

  Asteroid.prototype.draw = function(context) {
    context.drawImage(this.asteroidImage, this.originX, this.originY, this.imageWidth, this.imageHeight);
  }

  /*** Elf CLASS ***/

  this.Elf = function(initialVelocityX, initialVelocityY, xOrigin, yOrigin) {
    this.elfImageReady = false;
    this.elfImage = new Image();
    this.elfImage.onload = function() {
      this.elfImageReady = true;
    };
    this.elfImage.src = "assets/elf.png";


    this.imageHeight = 64;
    this.imageWidth = 32;

    this.happy = false;

    this.originX = xOrigin;
    this.originY = yOrigin;

    this.velocityX = initialVelocityX;
    this.velocityY = initialVelocityY;
  }

  Elf.prototype.move = function() {
    this.originX += this.velocityX;
    this.originY += this.velocityY;

    var gameWidth = document.body.clientWidth;
    var gameHeight = document.body.clientHeight;

    var offTheScreen = false; 
    if(this.originY + this.imageHeight > gameHeight) offTheScreen = true;
    if(this.originX < 0) offTheScreen = true;
    if(this.originY < 0) offTheScreen = true;
    //kill it if we're above the fold
    return offTheScreen;
  }

  Elf.prototype.draw = function(context) {
    context.drawImage(this.elfImage, this.originX, this.originY, this.imageWidth, this.imageHeight);
  }

  /*** player CLASS ***/

  this.Player = function() {
    this.playerImageReady = false;
    this.playerImage = new Image();
    this.playerImage.onload = function() {
      this.playerImageReady = true;
    };
    this.playerImage.src = "assets/spaceship.png";

    this.imageHeight = 64;
    this.imageWidth = 128;

    this.originX = 64;
    this.originY = 64;

    this.velocityX = 0;
    this.velocityY = 0;

    this.maxVelocityX = 20;
    this.maxVelocityY = 12;

    this.minVelocityX = 0.4;
    this.minVelocityY = 0.4;

    this.accelerationX = 1.8;
    this.accelerationY = 1.0;

    this.brakeCoefficient = 0.96;

    this.score = 0;

    this.elves = 0;

    this.lives = 5;

    this.bullets = [];
    this.maxBullets = 8;
    this.canAttack = true;
    this.attackInterval = 100; //in ms
  }

  Player.prototype.move = function(left, right, up, down) {

    if(left)  this.velocityX -= this.accelerationX;
    if(right) this.velocityX += this.accelerationX;

    if(up)    this.velocityY -= this.accelerationY;
    if(down)  this.velocityY += this.accelerationY;

    if(this.velocityX > this.maxVelocityX) this.velocityX = this.maxVelocityX;
    if(this.velocityX < -this.maxVelocityX) this.velocityX = -this.maxVelocityX;

    if(this.velocityY > this.maxVelocityY) this.velocityY = this.maxVelocityY;
    if(this.velocityY < -this.maxVelocityY) this.velocityY = -this.maxVelocityY;

    this.originX += this.velocityX;
    this.originY += this.velocityY;

    this.moveBullets();
    this.maintainPlayerPosition();
    this.bleedVelocity();
  }

  Player.prototype.moveBullets = function() {
    var cullArray = [];
    for(var i = 0; i < this.bullets.length; i++) {
      var bullet = this.bullets[i];
      if(bullet.move()) cullArray.push(i);
    }
    for(var i = cullArray.length-1; i > -1; i--) {
      this.bullets.splice(cullArray[i],1);
    }
  }

  Player.prototype.attack = function(attacking) {
    var _this = this;
    if(attacking && this.canAttack && this.bullets.length < this.maxBullets) {
      this.bullets.push( 
        new Bullet(
          Math.max(this.velocityX + 10, 10),
          0,
          this.originX,
          this.originY
        )
      );
      this.canAttack = false;
      setTimeout(function() {
        _this.canAttack = true;
      }, _this.attackInterval);
    }
  };

  Player.prototype.maintainPlayerPosition = function() {
    if(this.originX < 0) this.originX = 0; 
    if(this.originY < 0) this.originY = 0;
    var gameWidth = document.body.clientWidth;
    var gameHeight = document.body.clientHeight;
    if(this.originX + this.imageWidth > gameWidth) this.originX = gameWidth - this.imageWidth;
    if(this.originY + this.imageHeight > gameHeight) this.originY = gameHeight - this.imageHeight;

  }

  Player.prototype.bleedVelocity = function() {
    this.velocityX *= this.brakeCoefficient;
    this.velocityY *= this.brakeCoefficient;

    if(Math.abs(this.velocityX) < this.minVelocityX) this.velocityX = 0;
    if(Math.abs(this.velocityY) < this.minVelocityY) this.velocityY = 0;
  }

  Player.prototype.draw = function(context) {
    context.drawImage(this.playerImage, this.originX, this.originY, this.imageWidth, this.imageHeight);
    this.drawBullets(context);
  }

  Player.prototype.drawBullets = function(context) {
    for(var i=0; i<this.bullets.length; i++) {
      this.bullets[i].draw(context);
    }
  }

  Player.prototype.collideWithAsteroid = function() {
    this.lives -= 1;
  }

  Player.prototype.collideWithElf = function() {
    this.elves += 1;
  }

  /*** BULLET CLASS ***/

  this.Bullet = function(initialVelocityX, initialVelocityY, xOrigin, yOrigin) {
    this.bulletImageReady = false;
    this.bulletImage = new Image();
    this.bulletImage.onload = function() {
      this.bulletImageReady = true;
    };
    this.bulletImage.src = "assets/candy_cane.png";

    this.imageHeight = 16;
    this.imageWidth = 40;

    this.originX = xOrigin;
    this.originY = yOrigin;

    this.velocityX = initialVelocityX;
    this.velocityY = initialVelocityY;
  }

  Bullet.prototype.move = function() {
    this.originX += this.velocityX;
    this.originY += this.velocityY;
    var gameWidth = document.body.clientWidth;
    var gameHeight = document.body.clientHeight;
    var offTheScreen = false; 
    if(this.originX + this.imageWidth > gameWidth) offTheScreen = true;
    if(this.originY + this.imageHeight > gameHeight) offTheScreen = true;
    if(this.originX < 0) offTheScreen = true;
    if(this.originY < 0) offTheScreen = true;
    //kill it if we're above the fold
    return offTheScreen;
  }

  Bullet.prototype.draw = function(context) {
    context.drawImage(this.bulletImage, this.originX, this.originY, this.imageWidth, this.imageHeight);
  }  

  /*** OPENING MENU ***/


  /*** GAME CLASS ***/
  this.Game = function() {

    this.debug = false;

    this.bkgdImage1Ready = false;
    this.bkgdImage1 = new Image();
    this.bkgdImage1.onload = function() {
      this.bkgdImage1Ready = true;
    };
    this.bkgdImage1.src = "assets/space_bkgd_1.png";

    this.bkgdImage2Ready = false;
    this.bkgdImage2 = new Image();
    this.bkgdImage2.onload = function() {
      this.bkgdImage2Ready = true;
    };
    this.bkgdImage2.src = "assets/space_bkgd_2.png";

    this.bkgdImage3Ready = false;
    this.bkgdImage3 = new Image();
    this.bkgdImage3.onload = function() {
      this.bkgdImage3Ready = true;
    };
    this.bkgdImage3.src = "assets/space_bkgd_3.png";

    this.menuLogoReady = false;
    this.menuLogo = new Image();
    this.menuLogo.onload = function() {
      this.menuLogoReady = true;
    };
    this.menuLogo.src = "assets/menu_logo.png";

    this.bkgdVelocity = -1;
    this.bkgdAcceleration = -.01;
    this.bkgd1X = 0;
    this.bkgd2X = 0;
    this.bkgd3X = 0;
    this.bkgd1Y = 0;
    this.bkgd2Y = 0;
    this.bkgd3Y = 0;

    this.menuInfo = {
      menuBackgroundPosition1x: 0,
      menuBackgroundPosition2x: 0,
      menuBackgroundPosition3x: 0,
      menuBackgroundPosition1y: 0,
      menuBackgroundPosition2y: 0,
      menuBackgroundPosition3y: 0,
      menuMidgroundPosition1x: 0,
      menuMidgroundPosition2x: 0,
      menuMidgroundPosition3x: 0,
      menuMidgroundPosition1y: 100,
      menuMidgroundPosition2y: 100,
      menuMidgroundPosition3y: 100,
      menuForegroundPosition1x: 0,
      menuForegroundPosition2x: 0,
      menuForegroundPosition3x: 0,
      menuForegroundPosition1y: 600,
      menuForegroundPosition2y: 600,
      menuForegroundPosition3y: 600,
      menuBackgroundVelocityx: -0.2,
      menuMidgroundVelocityx: -1.2,
      menuForegroundVelocityx: -10,
      menuBackgroundVelocityy: 0,
      menuMidgroundVelocityy: 0,
      menuForegroundVelocityy: 0,
      menuBackgroundImageWidth: 0,
      menuBackgroundImageHeight: 0,
      menuMidgroundImageWidth: 0,
      menuMidgroundImageHeight: 0,
      menuForegroundImageWidth: 0,
      menuForegroundImageHeight: 0,
      logoPositionx: 0,
      logoPositiony: 0,
      logoWidth: 600,
      logoHeight: 400
    }

    this.gameState = 0;
    this.gameInPlay = true;
    this.player = new Player();

    this.gameWidth = 0;
    this.gameHeight = 0;
    this.canvas = null;
    this.context = null;

    this.score = 0;

    this.asteroids = [];
    this.maxAsteroids = 9;
    this.maxAsteroidVelocityX = 12;
    this.maxAsteroidVelocityY = 0.1;

    this.elves = [];
    this.maxElves = 3;
    this.maxElfVelocityX = 18;
    this.maxElfVelocityY = 0.1;

    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    this.spacePressed = false;

    this.currentMusic;
    this.musicVolume = 0.5;
  }

  Game.prototype.initialize = function() {
    this.gameWidth = document.body.clientWidth;
    this.gameHeight = document.body.clientHeight;
    this.canvas = document.getElementById('starshipXmas-canvas');
    this.canvas.height = this.gameHeight;
    this.canvas.width = this.gameWidth;
    this.context = this.canvas.getContext('2d');

    this.bkgd1X = 0;
    this.bkgd2X = this.gameWidth;
    this.bkgd3X = 2 * this.gameWidth;

    this.menuInfo.menuBackgroundImageHeight = this.gameHeight;
    this.menuInfo.menuBackgroundImageWidth = this.gameWidth;
    this.menuInfo.menuMidgroundImageHeight = this.gameHeight;
    this.menuInfo.menuMidgroundImageWidth = this.gameWidth;
    this.menuInfo.menuForegroundImageHeight = this.gameHeight/3;
    this.menuInfo.menuForegroundImageWidth = this.gameWidth;

    this.menuInfo.menuBackgroundPosition2x = this.menuInfo.menuBackgroundImageWidth;
    this.menuInfo.menuBackgroundPosition3x = this.menuInfo.menuBackgroundImageWidth * 2;
    this.menuInfo.menuMidgroundPosition2x = this.menuInfo.menuMidgroundImageWidth;
    this.menuInfo.menuMidgroundPosition3x = this.menuInfo.menuMidgroundImageWidth * 2;
    this.menuInfo.menuForegroundPosition2x = this.menuInfo.menuForegroundImageWidth;
    this.menuInfo.menuForegroundPosition3x = this.menuInfo.menuForegroundImageWidth * 2;

    this.menuInfo.logoPositionx = this.gameWidth/2 - this.menuInfo.logoWidth/2;
    this.menuInfo.logoPositiony = this.gameHeight/2 - this.menuInfo.logoHeight/2 - 100;

    //this.initializeSound();
    this.bindEvents();
  }

  Game.prototype.initializeSound = function() {
    // if initializeDefaultPlugins returns false, we cannot play sound in this browser
    if (!createjs.Sound.initializeDefaultPlugins()) {return;}
    var audioPath = "sounds/";
    var manifest = [
      {
        id:"TitleMusic",
        src:audioPath+"bgm-bladeRunner.mp3"
      },
      {
        id:"GameMusic",
        src:audioPath+"bgm-gysahlGreens.mp3"
      },
      {
        id:"BeginDing",
        src:audioPath+"snd-ding.mp3"
      },
      {
        id:"PauseSound",
        src:audioPath+"snd-tiku.mp3"
      },
      {
        id:"menuMidgroundSmack",
        src:audioPath+"snd-ugh.mp3"
      },
      {
        id:"elfAcquired",
        src:audioPath+"snd-yeah.mp3"
      },
      {
        id:"GameOver",
        src:audioPath+"snd-gameOver.mp3"
      }
    ];
    createjs.Sound.registerManifest(manifest);
    
    // this.currentMusic = createjs.Sound.play("TitleMusic");
    // this.currentMusic.addEventListener("complete", this.replayCurrentMusic);
    // this.currentMusic.volume = this.musicVolume;
  }

  Game.prototype.replayCurrentMusic = function() {
    //this.currentMusic.play();
  }

  Game.prototype.maintainMenu = function() {
    
    this.menuInfo.menuBackgroundPosition1x += this.menuInfo.menuBackgroundVelocityx;
    this.menuInfo.menuBackgroundPosition2x += this.menuInfo.menuBackgroundVelocityx;
    this.menuInfo.menuBackgroundPosition3x += this.menuInfo.menuBackgroundVelocityx;
    this.menuInfo.menuBackgroundPosition1y += this.menuInfo.menuBackgroundVelocityy;
    this.menuInfo.menuBackgroundPosition2y += this.menuInfo.menuBackgroundVelocityy;
    this.menuInfo.menuBackgroundPosition3y += this.menuInfo.menuBackgroundVelocityy;

    if (this.menuInfo.menuBackgroundPosition1x < -this.gameWidth) this.menuInfo.menuBackgroundPosition1x = this.menuInfo.menuBackgroundPosition3x + this.gameWidth;
    if (this.menuInfo.menuBackgroundPosition2x < -this.gameWidth) this.menuInfo.menuBackgroundPosition2x = this.menuInfo.menuBackgroundPosition1x + this.gameWidth;
    if (this.menuInfo.menuBackgroundPosition3x < -this.gameWidth) this.menuInfo.menuBackgroundPosition3x = this.menuInfo.menuBackgroundPosition2x + this.gameWidth;

    this.menuInfo.menuMidgroundPosition1x += this.menuInfo.menuMidgroundVelocityx;
    this.menuInfo.menuMidgroundPosition2x += this.menuInfo.menuMidgroundVelocityx;
    this.menuInfo.menuMidgroundPosition3x += this.menuInfo.menuMidgroundVelocityx;
    this.menuInfo.menuMidgroundPosition1y += this.menuInfo.menuMidgroundVelocityy;
    this.menuInfo.menuMidgroundPosition2y += this.menuInfo.menuMidgroundVelocityy;
    this.menuInfo.menuMidgroundPosition3y += this.menuInfo.menuMidgroundVelocityy;

    if (this.menuInfo.menuMidgroundPosition1x < -this.gameWidth) this.menuInfo.menuMidgroundPosition1x = this.menuInfo.menuMidgroundPosition3x + this.gameWidth;
    if (this.menuInfo.menuMidgroundPosition2x < -this.gameWidth) this.menuInfo.menuMidgroundPosition2x = this.menuInfo.menuMidgroundPosition1x + this.gameWidth;
    if (this.menuInfo.menuMidgroundPosition3x < -this.gameWidth) this.menuInfo.menuMidgroundPosition3x = this.menuInfo.menuMidgroundPosition2x + this.gameWidth;

    this.menuInfo.menuForegroundPosition1x += this.menuInfo.menuForegroundVelocityx;
    this.menuInfo.menuForegroundPosition2x += this.menuInfo.menuForegroundVelocityx;
    this.menuInfo.menuForegroundPosition3x += this.menuInfo.menuForegroundVelocityx;
    this.menuInfo.menuForegroundPosition1y += this.menuInfo.menuForegroundVelocityy;
    this.menuInfo.menuForegroundPosition2y += this.menuInfo.menuForegroundVelocityy;
    this.menuInfo.menuForegroundPosition3y += this.menuInfo.menuForegroundVelocityy;

    if (this.menuInfo.menuForegroundPosition1x < -this.gameWidth) this.menuInfo.menuForegroundPosition1x = this.menuInfo.menuForegroundPosition3x + this.gameWidth;
    if (this.menuInfo.menuForegroundPosition2x < -this.gameWidth) this.menuInfo.menuForegroundPosition2x = this.menuInfo.menuForegroundPosition1x + this.gameWidth;
    if (this.menuInfo.menuForegroundPosition3x < -this.gameWidth) this.menuInfo.menuForegroundPosition3x = this.menuInfo.menuForegroundPosition2x + this.gameWidth;

    if( this.spacePressed) {
      //createjs.Sound.play("BeginDing");
      //this.currentMusic.stop();
      this.gameState = 1;
      var _this = this;

      // setTimeout(function() {
      //   _this.currentMusic = createjs.Sound.play("GameMusic");
      //   _this.currentMusic.addEventListener("complete", _this.replayCurrentMusic);
      //   _this.currentMusic.volume = _this.musicVolume;
      // }, 700);
    }
  }

  Game.prototype.drawMenu = function() {

    this.context.drawImage(this.bkgdImage3, this.menuInfo.menuBackgroundPosition1x, this.menuInfo.menuBackgroundPosition1y, this.menuInfo.menuBackgroundImageWidth, this.menuInfo.menuBackgroundImageHeight);
    this.context.drawImage(this.bkgdImage3, this.menuInfo.menuBackgroundPosition2x, this.menuInfo.menuBackgroundPosition2y, this.menuInfo.menuBackgroundImageWidth, this.menuInfo.menuBackgroundImageHeight);
    this.context.drawImage(this.bkgdImage3, this.menuInfo.menuBackgroundPosition3x, this.menuInfo.menuBackgroundPosition3y, this.menuInfo.menuBackgroundImageWidth, this.menuInfo.menuBackgroundImageHeight);

    this.context.drawImage(this.bkgdImage2, this.menuInfo.menuMidgroundPosition1x, this.menuInfo.menuMidgroundPosition1y, this.menuInfo.menuMidgroundImageWidth, this.menuInfo.menuMidgroundImageHeight);
    this.context.drawImage(this.bkgdImage2, this.menuInfo.menuMidgroundPosition2x, this.menuInfo.menuMidgroundPosition2y, this.menuInfo.menuMidgroundImageWidth, this.menuInfo.menuMidgroundImageHeight);
    this.context.drawImage(this.bkgdImage2, this.menuInfo.menuMidgroundPosition3x, this.menuInfo.menuMidgroundPosition3y, this.menuInfo.menuMidgroundImageWidth, this.menuInfo.menuMidgroundImageHeight);

    this.context.drawImage(this.bkgdImage1, this.menuInfo.menuForegroundPosition1x, this.menuInfo.menuForegroundPosition1y, this.menuInfo.menuForegroundImageWidth, this.menuInfo.menuForegroundImageHeight);
    this.context.drawImage(this.bkgdImage1, this.menuInfo.menuForegroundPosition2x, this.menuInfo.menuForegroundPosition2y, this.menuInfo.menuForegroundImageWidth, this.menuInfo.menuForegroundImageHeight);
    this.context.drawImage(this.bkgdImage1, this.menuInfo.menuForegroundPosition3x, this.menuInfo.menuForegroundPosition3y, this.menuInfo.menuForegroundImageWidth, this.menuInfo.menuForegroundImageHeight);

    this.context.drawImage(this.menuLogo, this.menuInfo.logoPositionx, this.menuInfo.logoPositiony, this.menuInfo.logoWidth, this.menuInfo.logoHeight);

    this.context.fillStyle = "rgb(255, 255, 255)";
    this.context.fonts = "34px Arial";
    this.context.fillText("- PRESS SPACE TO PLAY -", this.gameWidth/2 - 50, this.gameHeight - 50);
  }

  Game.prototype.bindEvents = function() {
    var _this = this;
    $(document).keydown(function(e) {
      var keyCode = e.keyCode || e.which,
        arrow = { left: 37, up: 38, right: 39, down: 40, space: 32 };
      switch(keyCode) {
        case arrow.left:
          _this.leftPressed = true;
        break;
        case arrow.up:
          _this.upPressed = true;
        break;
        case arrow.right:
          _this.rightPressed = true;
        break;
        case arrow.down:
          _this.downPressed = true;
        break;
        case arrow.space:
          _this.spacePressed = true;

        break;
      }
    });
    $(document).keyup(function(e) {
      var keyCode = e.keyCode || e.which,
        arrow = { left: 37, up: 38, right: 39, down: 40, space: 32 };
      switch(keyCode) {
        case arrow.left:
          _this.leftPressed = false;
        break;
        case arrow.up:
          _this.upPressed = false;
        break;
        case arrow.right:
          _this.rightPressed = false;
        break;
        case arrow.down:
          _this.downPressed = false;
        break;
        case arrow.space:
          _this.spacePressed = false;
        break;
      }
      //the comma key
      if(e.keyCode == 188) {
        _this.toggleDebug();
      }
    });
  }

  Game.prototype.toggleDebug = function() {
    this.debug = !this.debug;
    console.log('debug is', this.debug);
  }

  Game.prototype.moveObjects = function() {
    this.movePlayer();
    this.moveBackground();
    this.moveAsteroids();
    this.moveElves();
  }

  Game.prototype.movePlayer = function() {
    this.player.move(this.leftPressed, this.rightPressed, this.upPressed, this.downPressed);
    this.player.attack(this.spacePressed);
  }

  Game.prototype.moveBackground = function() {
    this.bkgd1X += this.bkgdVelocity;
    this.bkgd2X += this.bkgdVelocity;
    this.bkgd3X += this.bkgdVelocity;

    if (this.bkgd1X < -this.gameWidth) this.bkgd1X = this.bkgd3X + this.gameWidth;
    if (this.bkgd2X < -this.gameWidth) this.bkgd2X = this.bkgd1X + this.gameWidth;
    if (this.bkgd3X < -this.gameWidth) this.bkgd3X = this.bkgd2X + this.gameWidth;
  }

  Game.prototype.moveAsteroids = function() {
    var cullArray = [];
    for(var i = 0; i < this.asteroids.length; i++) {
      var asteroid = this.asteroids[i];
      if(asteroid.move()) cullArray.push(i);
    }
    for(var i = cullArray.length-1; i > -1; i--) {
      this.asteroids.splice(cullArray[i],1);
    }
  }

  Game.prototype.moveElves = function() {
    var cullArray = [];
    for(var i = 0; i < this.elves.length; i++) {
      var elf = this.elves[i];
      if(elf.move()) cullArray.push(i);
    }
    for(var i = 0; i < cullArray.length; i++) {
      this.elves.splice(cullArray[i],1)
    }
  }

  Game.prototype.drawObjects = function() {
    this.drawBackground();
    this.drawAsteroids();
    this.drawElves();
    this.drawPlayer();
    this.drawHud();
  }

  Game.prototype.drawBackground = function() {
    this.context.fillStyle = "rgb(250, 250, 250)";
    this.context.drawImage(this.bkgdImage1, this.bkgd1X, this.bkgd1Y, this.gameWidth, this.gameHeight);
    this.context.drawImage(this.bkgdImage2, this.bkgd2X, this.bkgd2Y, this.gameWidth, this.gameHeight);
    this.context.drawImage(this.bkgdImage3, this.bkgd3X, this.bkgd3Y, this.gameWidth, this.gameHeight);
  }

  Game.prototype.drawAsteroids = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      var asteroid = this.asteroids[i];
      asteroid.draw(this.context);
    }
  }

  Game.prototype.drawPlayer = function() {
    this.player.draw(this.context);
  }

  Game.prototype.drawElves = function() {
    for (var i = 0; i < this.elves.length; i++) {
      var elf = this.elves[i];
      elf.draw(this.context);
    }
  }

  Game.prototype.drawHud = function() {
    var scorePositionX = this.gameWidth - 150,
      scorePositionY = 50,
      elvesPositionX = this.gameWidth - 150,
      elvesPositionY = 80,
      lifeMargin = 8,
      livesOriginX = lifeMargin + 20,
      livesOriginY = 10,
      livesOffsetX = 0,
      livesOffsetY = 0,
      lifeWidth = 40,
      lifeHeight = 40;

    this.context.fillStyle = "rgb(0, 0, 0)";
    this.context.fonts = "14pt helvetica";
    this.context.fillText("SCORE:" + this.score, scorePositionX, scorePositionY);
    this.context.fillText("elves:" + this.player.elves, elvesPositionX, elvesPositionY);

    for( var i = 0; i < this.player.lives; i++) {
      this.context.drawImage(this.player.playerImage, livesOriginX+livesOffsetX, livesOriginY+livesOffsetY,lifeWidth, lifeHeight);
      livesOffsetX += lifeWidth + lifeMargin;
    }
  }

  Game.prototype.checkCollisions = function() {
    this.checkAsteroidCollisions();
    this.checkElfCollisions();
  }

  Game.prototype.checkAsteroidCollisions = function() {
    var asteroidCullArray = [],
        bulletCullArray = [];
    for(var i = 0; i < this.asteroids.length; i++) {
      var asteroid = this.asteroids[i];
      if(this.collides(asteroid, this.player)) {
        //createjs.Sound.play("menuMidgroundSmack");
        asteroidCullArray.push(i);
        this.player.collideWithAsteroid();
      }
      for(var j=0; j< this.player.bullets.length; j++) {
        var bullet = this.player.bullets[j];
        //if the bullet collides with the asteroid, we want to do something
        if(this.collides(asteroid,bullet)) {
          asteroidCullArray.push(i);
          bulletCullArray.push(j);
        }
      }
    }
    for(var i = 0; i < asteroidCullArray.length; i++) {
      this.asteroids.splice(asteroidCullArray[i],1);
    }
    for(var i = 0; i < bulletCullArray.length; i++) {
      this.player.bullets.splice(bulletCullArray[i],1);
    }
  }

  Game.prototype.checkElfCollisions = function() {
    var cullArray = []
    for(var i = 0; i < this.elves.length; i++) {
      if(this.collides(this.elves[i], this.player)) {
        cullArray.push(i);
        this.player.collideWithElf();
      }
    }
    for(var i = 0; i < cullArray.length; i++) {
      this.elves.splice(cullArray[i],1);
    }
  }

  Game.prototype.maintainObjects = function() {
    this.maintainBackground();
    this.maintainAsteroids();
    this.maintainElves();
  }

  Game.prototype.maintainBackground = function() {
    //this.bkgdVelocity += this.bkgdAcceleration;
  }

  Game.prototype.maintainAsteroids = function() {
    while(this.asteroids.length < this.maxAsteroids) {
      var yVelocityPotential = Math.random() * this.maxAsteroidVelocityY;
      this.asteroids.push(
        new Asteroid(
          -Math.random(this.maxAsteroidVelocityX),
          -this.maxAsteroidVelocityY + (Math.random() * this.maxAsteroidVelocityY),
          this.gameWidth +  (Math.ceil(Math.random() * this.gameWidth)), 
          (Math.ceil(Math.random() * this.gameHeight))
        )
      );
    }
  }

  Game.prototype.maintainElves = function() {
    while(this.elves.length < this.maxElves) {
      this.elves.push( 
        new Elf(
          -Math.random(this.maxElfVelocityX),
          -Math.random(this.maxElfVelocityY),
          this.gameWidth + Math.ceil(Math.random() * this.gameWidth), 
          (Math.ceil(Math.random() * this.gameHeight ))
        )
      );
    }
  }

  Game.prototype.maintainUser = function() {
    if(this.player.lives > 0) {
      var baseScore = 3,
        baseelvescore = 5;

      this.score += 3 + (this.player.elves * baseelvescore);
      return true;
    }
    else {
      return false;
    }
  }

  Game.prototype.collides = function(object1, object2) {
    var radius1 = Math.min(object1.imageHeight, object1.imageWidth)/2;
    var radius2 = Math.min(object2.imageHeight, object2.imageWidth)/2;
    var center1 = this.findCenterOfRect(object1.originX, object1.originY, object1.imageWidth, object1.imageHeight);
    var center2 = this.findCenterOfRect(object2.originX, object2.originY, object2.imageWidth, object2.imageHeight);

    if(this.distanceBetweenTwoPoints(center1.x, center1.y, center2.x, center2.y) < radius1 + radius2) {
      return true;
    }
    return false;
  }

  Game.prototype.findCenterOfRect = function(x, y, width, height) {
    return {x: x + width/2, y: y + height/2};
  }

  Game.prototype.distanceBetweenTwoPoints = function(x1,y1, x2,y2) { 
    var dx  = x1 - x2,
      dy = y1 - y2;
    return Math.sqrt( dx*dx + dy*dy ); 
  }

  Game.prototype.mainMenu = function() {
    this.maintainMenu();
    this.drawMenu();
  }

  Game.prototype.play = function() {
    this.moveObjects();
    this.drawObjects();
    this.checkCollisions();
    this.maintainObjects();
    this.gameInPlay = this.maintainUser();
    if(!this.gameInPlay) {
      this.gameState = 3;
    }
  }

  Game.prototype.pause = function() {
    console.log('PAUSED')
  }

  Game.prototype.over = function() {
    this.context.fillStyle = "rgb(0, 0, 0)";
    this.context.fonts = "34pt helvetica";
    this.context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    //this.currentMusic.stop();
    //createjs.Sound.play("GameOver");
  }

  $(document).ready(function() {
    var game = new Game();
    game.initialize();
    var loopInterval = setInterval(function() {
      switch(game.gameState) {
        case 0:
          game.mainMenu();
          break;
        case 1:
          game.play();
          break;
        case 2:
          break;
        case 3:
          game.over();
          clearInterval(loopInterval);
          break;
      }
    },16);//60 times a second
  });
})();