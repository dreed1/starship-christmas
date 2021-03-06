(function() {
  var Images = function(imagesLoadedCallback) {
    var _this = this;
      
    this.totalImages = 43;
    this.imagesReady = 0;
    this.completionCallback = imagesLoadedCallback;

    this.loadingTextImage = new Image();
    this.loadingTextImageReady = false;
    this.loadingTextImage.onload = function() {
      loadingTextImageReady = true;
      imageReady();
    };
    this.loadingTextImage.src = "assets/loading_text.png";

    this.asteroidLargeImageReady = false;
    this.asteroidLargeImage = new Image();
    this.asteroidLargeImage.onload = function() {
      this.asteroidLargeImageReady = true;
      imageReady();
    };
    this.asteroidLargeImage.src = "assets/asteroid_L.png";

    this.asteroidMediumImageReady = false;
    this.asteroidMediumImage = new Image();
    this.asteroidMediumImage.onload = function() {
      this.asteroidMediumImageReady = true;
      imageReady();
    };
    this.asteroidMediumImage.src = "assets/asteroid_M.png";

    this.asteroidSmallImageReady = false;
    this.asteroidSmallImage = new Image();
    this.asteroidSmallImage.onload = function() {
      this.asteroidSmallImageReady = true;
      imageReady();
    };
    this.asteroidSmallImage.src = "assets/asteroid_S.png";

    this.elfImageReady = false;
    this.elfImage = new Image();
    this.elfImage.onload = function() {
      this.elfImageReady = true;
      imageReady();
    };
    this.elfImage.src = "assets/elf.png";

    this.martianImageReady = false;
    this.martianImage = new Image();
    this.martianImage.onload = function() {
      this.martianImageReady = true;
      imageReady();
    };
    this.martianImage.src = "assets/martian.png";


    this.bulletImageReady = false;
    this.bulletImage = new Image();
    this.bulletImage.onload = function() {
      this.bulletImageReady = true;
      imageReady();
    };
    this.bulletImage.src = "assets/candy_cane.png";

        this.bkgdImage1Ready = false;
    this.bkgdImage1 = new Image();
    this.bkgdImage1.onload = function() {
      this.bkgdImage1Ready = true;
      imageReady();
    };
    this.bkgdImage1.src = "assets/space_bkgd_1.png";

    this.bkgdImage2Ready = false;
    this.bkgdImage2 = new Image();
    this.bkgdImage2.onload = function() {
      this.bkgdImage2Ready = true;
      imageReady();
    };
    this.bkgdImage2.src = "assets/space_bkgd_2.png";

    this.bkgdImage3Ready = false;
    this.bkgdImage3 = new Image();
    this.bkgdImage3.onload = function() {
      this.bkgdImage3Ready = true;
      imageReady();
    };
    this.bkgdImage3.src = "assets/space_bkgd_3.png";

    this.menuLogoReady = false;
    this.menuLogo = new Image();
    this.menuLogo.onload = function() {
      this.menuLogoReady = true;
      imageReady();
    };
    this.menuLogo.src = "assets/menu_logo.png";

    this.santaImage1 = new Image();
    this.santaImage1Ready = false;
    this.santaImage1.onload = function() {
      this.santaImage1Ready = true;
      imageReady();
    };
    this.santaImage1.src = "assets/santa_1.png";

    this.santaImage2 = new Image();
    this.santaImage2Ready = false;
    this.santaImage2.onload = function() {
      this.santaImage2Ready = true;
      imageReady();
    };
    this.santaImage2.src = "assets/santa_2.png";

    this.winTextImage = new Image();
    this.winTextImageReady = false;
    this.winTextImage.onload = function() {
      this.winTextImageReady = true;
      imageReady();
    };
    this.winTextImage.src = "assets/win_text.png";

    this.loseTextImage = new Image();
    this.loseTextImageReady = false;
    this.loseTextImage.onload = function() {
      this.loseTextImageReady = true;
      imageReady();
    };
    this.loseTextImage.src = "assets/lose_text.png";

    this.levelCompleteImage = new Image();
    this.levelCompleteImageReady = false;
    this.levelCompleteImage.onload = function() {
      this.levelCompleteImageReady = true;
      imageReady();
    };
    this.levelCompleteImage.src = "assets/level_complete.png";

    this.rudolphImage1 = new Image();
    this.rudolphImage1Ready = false;
    this.rudolphImage1.onload = function() {
      this.rudolphImage1Ready = true;
      imageReady();
    };
    this.rudolphImage1.src = "assets/rudolph_1.png";

    this.rudolphImage2 = new Image();
    this.rudolphImage2Ready = false;
    this.rudolphImage2.onload = function() {
      this.rudolphImage2Ready = true;
      imageReady();
    };
    this.rudolphImage2.src = "assets/rudolph_2.png";

    this.introTextImage1 = new Image();
    this.introTextImage1Ready = false;
    this.introTextImage1.onload = function() {
      introTextImage1Ready = true;
      imageReady();
    };
    this.introTextImage1.src = "assets/intro_text_1.png";

    this.introTextImage2 = new Image();
    this.introTextImage2Ready = false;
    this.introTextImage2.onload = function() {
      introTextImage2Ready = true;
      imageReady();
    };
    this.introTextImage2.src = "assets/intro_text_2.png";

    this.instructionTextImage1 = new Image();
    this.instructionTextImage1Ready = false;
    this.instructionTextImage1.onload = function() {
      instructionTextImage1Ready = true;
      imageReady();
    };
    this.instructionTextImage1.src = "assets/instruction_text_1.png";

    this.instructionTextImage2 = new Image();
    this.instructionTextImage2Ready = false;
    this.instructionTextImage2.onload = function() {
      instructionTextImage2Ready = true;
      imageReady();
    };
    this.instructionTextImage2.src = "assets/instruction_text_2.png";

    this.novawareImage1 = new Image();
    this.novawareImage1Ready = false;
    this.novawareImage1.onload = function() {
      novawareImage1Ready = true;
      imageReady();
    };
    this.novawareImage1.src = "assets/novaware_image_1.png";

    this.novawareImage2 = new Image();
    this.novawareImage2Ready = false;
    this.novawareImage2.onload = function() {
      novawareImage2Ready = true;
      imageReady();
    };
    this.novawareImage2.src = "assets/novaware_image_2.png";

    this.player1PortraitImage = new Image();
    player1PortraitImageReady = false;
    this.player1PortraitImage.onload = function() {
      player1PortraitImageReady = true;
      imageReady();
    };
    this.player1PortraitImage.src = "assets/pilot_dani.png";

    this.player2PortraitImage = new Image();
    player2PortraitImageReady = false;
    this.player2PortraitImage.onload = function() {
      player2PortraitImageReady = true;
      imageReady();
    };
    this.player2PortraitImage.src = "assets/pilot_abram.png";

    this.player3PortraitImage = new Image();
    player3PortraitImageReady = false;
    this.player3PortraitImage.onload = function() {
      player3PortraitImageReady = true;
      imageReady();
    };
    this.player3PortraitImage.src = "assets/pilot_brandon.png";

    this.player4PortraitImage = new Image();
    player4PortraitImageReady = false;
    this.player4PortraitImage.onload = function() {
      player4PortraitImageReady = true;
      imageReady();
    };
    this.player4PortraitImage.src = "assets/pilot_noah.png";

    this.player5PortraitImage = new Image();
    player5PortraitImageReady = false;
    this.player5PortraitImage.onload = function() {
      player5PortraitImageReady = true;
      imageReady();
    };
    this.player5PortraitImage.src = "assets/pilot_adam.png";

    this.player6PortraitImage = new Image();
    player6PortraitImageReady = false;
    this.player6PortraitImage.onload = function() {
      player6PortraitImageReady = true;
      imageReady();
    };
    this.player6PortraitImage.src = "assets/pilot_alex.png";

    this.player7PortraitImage = new Image();
    player7PortraitImageReady = false;
    this.player7PortraitImage.onload = function() {
      player7PortraitImageReady = true;
      imageReady();
    };
    this.player7PortraitImage.src = "assets/pilot_jess.png";

    this.player8PortraitImage = new Image();
    player8PortraitImageReady = false;
    this.player8PortraitImage.onload = function() {
      player8PortraitImageReady = true;
      imageReady();
    };
    this.player8PortraitImage.src = "assets/pilot_jacob.png";

    this.playerSelectBackgroundImage = new Image();
    playerSelectBackgroundImageReady = false;
    this.playerSelectBackgroundImage.onload = function() {
      playerSelectBackgroundImageReady = true;
      imageReady();
    };
    this.playerSelectBackgroundImage.src = "assets/player_select_background.png";

    this.playerSelectInactivePortraitImage = new Image();
    playerSelectInactivePortraitImageReady = false;
    this.playerSelectInactivePortraitImage.onload = function() {
      playerSelectInactivePortraitImageReady = true;
      imageReady();
    };
    this.playerSelectInactivePortraitImage.src = "assets/portrait_border_inactive.png";

    this.playerSelectActivePortraitImage = new Image();
    playerSelectActivePortraitImageReady = false;
    this.playerSelectActivePortraitImage.onload = function() {
      playerSelectActivePortraitImageReady = true;
      imageReady();
    };
    this.playerSelectActivePortraitImage.src = "assets/portrait_border_active.png";

    this.player1AvatarReady = false;
    this.player1Avatar = new Image();
    this.player1Avatar.onload = function() {
      this.player1AvatarReady = true;
      imageReady();
    };
    this.player1Avatar.src = "assets/sleigh_dani.png";

    this.player2AvatarReady = false;
    this.player2Avatar = new Image();
    this.player2Avatar.onload = function() {
      this.player2AvatarReady = true;
      imageReady();
    };
    this.player2Avatar.src = "assets/sleigh_abram.png";

    this.player3AvatarReady = false;
    this.player3Avatar = new Image();
    this.player3Avatar.onload = function() {
      this.player3AvatarReady = true;
      imageReady();
    };
    this.player3Avatar.src = "assets/sleigh_brandon.png";

    this.player4AvatarReady = false;
    this.player4Avatar = new Image();
    this.player4Avatar.onload = function() {
      this.player4AvatarReady = true;
      imageReady();
    };
    this.player4Avatar.src = "assets/sleigh_noah.png";

    this.player5AvatarReady = false;
    this.player5Avatar = new Image();
    this.player5Avatar.onload = function() {
      this.player5AvatarReady = true;
      imageReady();
    };
    this.player5Avatar.src = "assets/sleigh_adam.png";

    this.player6AvatarReady = false;
    this.player6Avatar = new Image();
    this.player6Avatar.onload = function() {
      this.player6AvatarReady = true;
      imageReady();
    };
    this.player6Avatar.src = "assets/sleigh_alex.png";

    this.player7AvatarReady = false;
    this.player7Avatar = new Image();
    this.player7Avatar.onload = function() {
      this.player7AvatarReady = true;
      imageReady();
    };
    this.player7Avatar.src = "assets/sleigh_jess.png";

    this.player8AvatarReady = false;
    this.player8Avatar = new Image();
    this.player8Avatar.onload = function() {
      this.player8AvatarReady = true;
      imageReady();
    };
    this.player8Avatar.src = "assets/sleigh_jacob.png";

    this.playerImages = [
      this.player1Avatar,
      this.player2Avatar,
      this.player3Avatar,
      this.player4Avatar,
      this.player5Avatar,
      this.player6Avatar,
      this.player7Avatar,
      this.player8Avatar,
    ];

    var imageReady = function() {
      _this.imagesReady++;
      if(_this.imagesReady >= _this.totalImages) {
        _this.completionCallback();
      }
    }

  }

  /*********************************************************************************/
  /***************************CHARACTER SELECT MODEL********************************/
  /*********************************************************************************/

  this.CharacterSelect = function(opts) {
    $.extend(this, {
      originX: 0,
      originY: 0,
      backgroundWidth: document.body.clientWidth,
      backgroundHeight: document.body.clientHeight,
      activePlayer: 0,
      backgroundImage: null,
      playerImages:[],
      inactivePlayerSelectBorderImage:null,
      activePlayerSelectBorderImage:null,
      context: null,
      completionCallback: function() {}
    },opts);
  }

  CharacterSelect.prototype.changePlayer = function(direction) {
    gameSounds.playSound("Doot");
    keys = { left: 37, up: 38, right: 39, down: 40, space: 32 };
    switch(direction) {
      case keys.left:
        this.activePlayer > 0 ? this.activePlayer-- : this.activePlayer = this.playerImages.length -1;
        break;
      case keys.right:
        this.activePlayer < this.playerImages.length-1 ? this.activePlayer++ : this.activePlayer = 0;
        break;
      case keys.up:
        this.activePlayer = this.activePlayer > 3 ? this.activePlayer - 4 : this.activePlayer + 4;
        break;
      case keys.down:
        this.activePlayer = (this.activePlayer + 4) % this.playerImages.length;
        break;
      case keys.space:
        this.playerChosen();
        break;
      default:
        console.log('you screwed up something in player select');
        break;
    }
  }

  CharacterSelect.prototype.playerChosen = function() {
    gameSounds.playSound("Tiku");
    this.completionCallback(this.activePlayer);
  }

  CharacterSelect.prototype.draw = function() {
    this.drawBackground();
    this.drawPlayerImages();
  }

  CharacterSelect.prototype.drawBackground = function() {
    this.context.drawImage(this.backgroundImage, this.originX, this.originY, this.backgroundWidth, this.backgroundHeight);
  }

  CharacterSelect.prototype.drawPlayerImages = function() {
    var bordersRectWidth = this.backgroundWidth - 200,
        bordersRectHeight = this.backgroundHeight - 200,
        borderImageWidth = 150,
        borderImageHeight = 220;

    if(bordersRectWidth < borderImageWidth * 4) bordersRectWidth = borderImageWidth * 4;
    if(bordersRectHeight < (borderImageHeight * 2) + 20) bordersRectHeight = (borderImageHeight * 2) + 20;

    //this thing assumes there's 8 players...
    //customize it yourself!
    for(var i=0; i< this.playerImages.length; i++) {
      var borderImage = i == this.activePlayer ? this.activePlayerSelectBorderImage : this.inactivePlayerSelectBorderImage,
          xOffset = (bordersRectWidth - (4 * borderImageWidth)) / 3,
          yOffset = (bordersRectHeight - (2 * borderImageHeight)),
          row = i < 4 ? 0 : 1,
          borderImageOriginX = 100  + ((i % 4) * xOffset) + ((i % 4) * borderImageWidth),
          borderImageOriginY = 140 + (row * yOffset) + (row * borderImageHeight);

      this.context.drawImage(borderImage, borderImageOriginX, borderImageOriginY, borderImageWidth, borderImageHeight);
      this.context.drawImage(this.playerImages[i], borderImageOriginX + 5, borderImageOriginY + 5, borderImageWidth - 10, borderImageHeight - 10);
    }
  }

  /*********************************************************************************/
  /********************************SOUND MODEL*****************************/
  /*********************************************************************************/

  this.Sounds = function(callback) {
    $.extend(this, {
      currentMusicId: null,
      currentMusic: null,
      currentSound: null,
      soundVolume: 0.67,
      musicVolume: 0.12,
      loadedSounds: 0,
      soundManifest: [
        {
          id:"Music1",
          src:"bgm-gysahl-greens.mp3"
        },
        {
          id:"Music2",
          src:"bgm-soul-cruise.mp3"
        },
        {
          id:"Music3",
          src:"bgm-triple-dragon.mp3"
        },
        {
          id:"Ding",
          src:"snd-ding.mp3"
        },
        {
          id:"Tiku",
          src:"snd-tiku.mp3"
        },
        {
          id:"Ugh",
          src:"snd-ugh.mp3"
        },
        {
          id:"Yeah",
          src:"snd-yeah.mp3"
        },
        {
          id:"CharacterConfirmed",
          src:"snd-character-confirmed.mp3"
        },
        {
          id:"Doot",
          src:"snd-doot.mp3"
        },
        {
          id:"Elf",
          src:"snd-elf.mp3"
        },
        {
          id:"Lose",
          src:"snd-lose.mp3"
        },
        {
          id:"PressStart",
          src:"snd-press-start.mp3"
        },
        {
          id:"Rudolph",
          src:"snd-rudolph.mp3"
        },
        {
          id:"Santa",
          src:"snd-santa.mp3"
        },
        {
          id:"Shot",
          src:"snd-shot.mp3"
        },
        {
          id:"Win",
          src:"snd-win.mp3"
        },
      ]
    });

    this.soundLoadedCallback = callback;

    // if initializeDefaultPlugins returns false, we cannot play sound in this browser
    if (!createjs.Sound.initializeDefaultPlugins()) {
      console.log('SOUND WONT PLAY')
    }

    this.audioPath = "assets/";

    var _this = this;
    createjs.Sound.addEventListener("fileload", createjs.proxy(_this.handleLoad, this));
    createjs.Sound.registerManifest(this.soundManifest, this.audioPath);
  }

  Sounds.prototype.handleLoad = function(event) {
    this.loadedSounds++;
    if(this.loadedSounds >= this.soundManifest.length) {
      this.soundLoadedCallback();
    }
  }

  Sounds.prototype.changeSoundVolume = function(volume) {
    this.soundVolume = volume;
    this.currentSound.volume = this.soundVolume;
  }

  Sounds.prototype.changeMusicVolume = function(volume) {
    this.musicVolume = volume;
    this.currentMusic.volume = this.musicVolume;
  }

  Sounds.prototype.playMusic = function(sound_id) {
    if(this.currentMusic) this.currentMusic.stop();
    this.currentMusicId = sound_id;
    this.currentMusic = createjs.Sound.play(sound_id);
    this.currentMusic.addEventListener("complete", this.replayCurrentMusic);
    this.currentMusic.volume = this.soundVolume;
  }

  Sounds.prototype.playSound = function(sound_id) {
    this.currentSound = createjs.Sound.play(sound_id);
    this.currentSound.volume = this.soundVolume;
  }

  Sounds.prototype.replayCurrentMusic = function() {
    this.playMusic(this.currentMusicId);
    this.currentMusic.addEventListener("complete", _this.replayCurrentMusic);
  }

  Sounds.prototype.stopMusic = function() {
    this.currentMusic.stop();
  }

  /*********************************************************************************/
  /********************************ANIMATED IMAGE MODEL*****************************/
  /*********************************************************************************/

  this.AnimatedImage = function(opts) {
    $.extend(this, {
      originX: 0,
      originY: 0,
      imageWidth: 100,
      imageHeight: 100,
      images:[],
      context: null,
      imageDuration:200, //in ms
      currentImageIndex: 0,
      timeutDuration: 30000 // in ms
    },opts);
  }

  AnimatedImage.prototype.reset = function() {
    this.currentImageIndex = 0;
    this.play();
  }

  AnimatedImage.prototype.play = function() {
    var _this = this;
    var changeInterval = setInterval(function() {
      _this.nextImage();
    }, this.imageDuration);

    setTimeout(function() {
      clearInterval(changeInterval);
    }, this.timeutDuration)
  }

  AnimatedImage.prototype.nextImage = function() {
    var _this = this;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  AnimatedImage.prototype.draw = function() {
    this.context.drawImage(this.images[this.currentImageIndex], this.originX, this.originY, this.imageWidth, this.imageHeight);
  }


  /*********************************************************************************/
  /********************************CINEMATIC MODEL**********************************/
  /*********************************************************************************/

  this.Cinematic = function(opts) {
    $.extend(this, {
      context:null,
      images:[],
      duration: 500,
      fillColor: '#000',
      overlayOpacity: 1,
      shouldFadeIn: false,
      shouldFadeOut: false,
      fadeDuration: 400,//ms
      completionCallback:function(){}
    },opts);
  }

  Cinematic.prototype.play = function() {
    var _this = this;
    if(this.shouldFadeIn) {
      this.fadeIn();
    }
    else {
      this.overlayOpacity = 0;
    }
    if(this.shouldFadeOut) {
      setTimeout(function() {
        _this.fadeOut();
      }, _this.duration - _this.fadeDuration - 100);
    }
    else {
      setTimeout(function() {
        _this.completionCallback();
      }, this.duration);
    }
    for(var i=0; i< this.images.length; i++) {
      this.images[i].play(function() {
        _this.images[i].play();
      });
    }
  }

  Cinematic.prototype.fadeIn = function() {
    var _this = this;
    var interval = setInterval(function() {
      _this.overlayOpacity -= .01;
      if(_this.overlayOpacity <= 0) {
        clearInterval(interval);
      }
    }, _this.fadeDuration/100);

  }

  Cinematic.prototype.fadeOut = function() {
    var _this = this;
    var interval = setInterval(function() {
      _this.overlayOpacity += .01;
      if(_this.overlayOpacity >= 1) {
        _this.completionCallback();
        clearInterval(interval);
      }
    }, _this.fadeDuration/100);

  }

  Cinematic.prototype.drawOverlay = function() {
    var width = document.body.clientWidth,
      height = document.body.clientHeight,
      overlayColor = "rgba(0,0,0," + this.overlayOpacity + ")";
    this.context.fillStyle = overlayColor;
    this.context.rect(0, 0, width, height);
    this.context.fill();
  }

  Cinematic.prototype.fillBackground = function() {
    var width = document.body.clientWidth,
      height = document.body.clientHeight;
    this.context.fillStyle = this.fillColor;
    this.context.rect(0, 0, width, height);
    this.context.fill();
  }

  Cinematic.prototype.draw = function() {
    this.fillBackground();
    for(var i=0; i< this.images.length; i++) {
      this.images[i].draw();
    }
    if(this.overlayOpacity > 0) this.drawOverlay();
  }

  /*********************************************************************************/
  /********************************ASTEROID MODEL**************************************/
  /*********************************************************************************/

  this.Asteroid = function(opts) {

    var self = this;

    this.sizeInfoHash = {
      "L": {
        "minChildren": 2,
        "maxChildren" : 6,
        "childSize" : "M",
        "icon": gameImages.asteroidLargeImage,
        "imageHeight": 80,
        "imageWidth": 80
      },
      "M": {
        "minChildren": 0,
        "maxChildren" : 5,
        "childSize" : "S",
        "icon": gameImages.asteroidMediumImage,
        "imageHeight": 48,
        "imageWidth": 32
      },
      "S": {
        "minChildren": 0,
        "maxChildren" : 0,
        "childSize" : "S",
        "icon": gameImages.asteroidSmallImage,
        "imageHeight": 24,
        "imageWidth": 20
      }
    }

    $.extend(this, {
      size: "L",
      velocity: 3 + Math.floor(Math.random() * 4),
      angle: 270, //angle of velocity
      orientation: Math.floor(Math.random()*360), //directional orientation
      originX: Math.floor(Math.random()* 600),
      originY: Math.floor(Math.random()* 800),
      imageWidth: 80,
      imageHeight: 80,
      rotation: 3 - Math.floor(Math.random()*7)
    },opts);

    this.init = function() {
      self.speedX = self.velocity * Math.cos(self.angle* Math.PI / 180);
      self.speedY = self.velocity * Math.sin(self.angle* Math.PI / 180);
    }

    this.move = function() {      
      self.originX += self.speedX;
      self.originY += self.speedY;
      self.orientation += self.rotation;

      var gameWidth = document.body.clientWidth;
      var gameHeight = document.body.clientHeight;

      var offTheScreen = false; 
      if(this.originY - this.imageHeight > gameHeight) offTheScreen = true;
      if(this.originX + this.imageWidth < 0) offTheScreen = true;
      if(this.originY + this.imageHeight < 0) offTheScreen = true;
      //kill it if we're above the fold
      return offTheScreen;
    }

    this.draw = function(context) {
      var image = this.sizeInfoHash[this.size]["icon"];
      this.drawRotatedImage(context, image, self.originX, self.originY, self.imageWidth, self.imageHeight, self.orientation);
    }

    this.drawRotatedImage = function(context, image, x, y, width, height, angle) {   
      context.save(); 
      context.translate(x+(width/2), y+(height/2));
      context.rotate(angle * Math.PI/180);
      context.drawImage(image, -(width/2), -(height/2), width, height);
      context.restore(); 
    }

    this.createChildren = function(asteroidArray) {
      var self = this;
      var maxChildren = this.sizeInfoHash[this.size]["maxChildren"],
        minChildren = this.sizeInfoHash[this.size]["minChildren"],
        childSize = this.sizeInfoHash[this.size]["childSize"],
        numChildren = Math.max(minChildren, Math.floor(Math.random() * maxChildren)),
        childWidth = this.sizeInfoHash[childSize]["imageWidth"],
        childHeight = this.sizeInfoHash[childSize]["imageHeight"]
        i = 0;

      for(var i = 0; i < numChildren; i++ ) {
        asteroidArray.push(
          new Asteroid({
            size: childSize,
            originX: this.originX, 
            originY: this.originY,
            velocity: Math.random() * 4,
            angle: (Math.random() * 360),
            imageWidth: childWidth,
            imageHeight: childHeight
          })
        );
      }
    }

    self.init();
  }

  /*** MARTIAN CLASS ***/

  this.Martian = function(opts) {
    $.extend(this, {
      velocity: 3 + Math.floor(Math.random() * 4),
      angle: 270, //angle of velocity
      orientation: 0,
      originX: Math.floor(Math.random()* 600),
      originY: Math.floor(Math.random()* 800),
      imageWidth: 64,
      imageHeight: 48,
      rotation: 0
    },opts);

    this.init();
  }

  Martian.prototype.init = function() {
    this.speedX = this.velocity * Math.cos(this.angle* Math.PI / 180);
    this.speedY = this.velocity * Math.sin(this.angle* Math.PI / 180);
  }

  Martian.prototype.move = function() {  
    var gameWidth = document.body.clientWidth;
    var gameHeight = document.body.clientHeight;    

    var offTheScreen = false; 
    if(this.originY + this.imageHeight >= gameHeight) this.speedY = -this.speedY;
    if(this.originX + this.imageWidth < 0) offTheScreen = true;
    if(this.originY <= 0) this.speedY = -this.speedY;

    this.originX += this.speedX;
    this.originY += this.speedY;
    this.orientation += this.rotation;

    
    //kill it if we're above the fold
    return offTheScreen;
  }

  Martian.prototype.draw = function(context) {
    this.drawRotatedImage(context, gameImages.martianImage, this.originX, this.originY, this.imageWidth, this.imageHeight, this.orientation);
  }

  Martian.prototype.drawRotatedImage = function(context, image, x, y, width, height, angle) {  
    context.save(); 
    context.translate(x+(width/2), y+(height/2));
    context.rotate(angle * Math.PI/180);
    context.drawImage(image, -(width/2), -(height/2), width, height);
    context.restore(); 
  }

    /*** ELF CLASS ***/

  this.Elf = function(opts) {
    $.extend(this, {
      velocity: 3 + Math.floor(Math.random() * 4),
      angle: 270, //angle of velocity
      orientation: Math.floor(Math.random()*360), //directional orientation
      originX: Math.floor(Math.random()* 600),
      originY: Math.floor(Math.random()* 800),
      imageWidth: 32,
      imageHeight: 64,
      rotation: 3 - Math.floor(Math.random()*7)
    },opts);

    this.init();
  }

  Elf.prototype.init = function() {
    this.speedX = this.velocity * Math.cos(this.angle* Math.PI / 180);
    this.speedY = this.velocity * Math.sin(this.angle* Math.PI / 180);
  }

  Elf.prototype.move = function() {  
    var gameWidth = document.body.clientWidth;
    var gameHeight = document.body.clientHeight;    

    var offTheScreen = false; 
    if(this.originY + this.imageHeight >= gameHeight) this.speedY = -this.speedY;
    if(this.originX + this.imageWidth < 0) offTheScreen = true;
    if(this.originY <= 0) this.speedY = -this.speedY;

    this.originX += this.speedX;
    this.originY += this.speedY;
    this.orientation += this.rotation;

    
    //kill it if we're above the fold
    return offTheScreen;
  }

  Elf.prototype.draw = function(context) {
    this.drawRotatedImage(context, gameImages.elfImage, this.originX, this.originY, this.imageWidth, this.imageHeight, this.orientation);
  }

  Elf.prototype.drawRotatedImage = function(context, image, x, y, width, height, angle) {  
    context.save(); 
    context.translate(x+(width/2), y+(height/2));
    context.rotate(angle * Math.PI/180);
    context.drawImage(image, -(width/2), -(height/2), width, height);
    context.restore(); 
  }

  /*** PLAYER CLASS ***/

  this.Player = function(avatar) {
    this.playerAvatar = avatar;

    this.imageHeight = 96;
    this.imageWidth = 196;

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

    this.lives = 7;

    this.bullets = [];
    this.maxBullets = 10;
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
      gameSounds.playSound("Shot");
      this.bullets.push( 
        new Bullet(
          Math.max(this.velocityX + 12, 12),
          0,
          this.originX + this.imageWidth/2,
          this.originY + this.imageHeight/2
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
    this.drawBullets(context);
    context.drawImage(gameImages.playerImages[this.playerAvatar], this.originX, this.originY, this.imageWidth, this.imageHeight);
  }

  Player.prototype.drawBullets = function(context) {
    for(var i=0; i<this.bullets.length; i++) {
      this.bullets[i].draw(context);
    }
  }

  Player.prototype.collideWithAsteroid = function() {
    gameSounds.playSound("Ugh");
    this.lives -= 1;
  }

  Player.prototype.collideWithElf = function() {
    gameSounds.playSound("Elf");
    this.elves += 1;
  }

  /*** BULLET CLASS ***/

  this.Bullet = function(initialVelocityX, initialVelocityY, xOrigin, yOrigin) {
    this.imageHeight = 12;
    this.imageWidth = 30;

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
    if(this.originX + this.imageWidth < 0) offTheScreen = true;
    if(this.originY + this.imageHeight < 0) offTheScreen = true;
    //kill it if we're above the fold
    return offTheScreen;
  }

  Bullet.prototype.draw = function(context) {
    context.drawImage(gameImages.bulletImage, this.originX, this.originY, this.imageWidth, this.imageHeight);
  }  

  /*** OPENING MENU ***/


  /*** GAME CLASS ***/
  this.Game = function() {

    this.debug = false;

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
      menuBackgroundVelocityx: -0.12,
      menuBackgroundVelocityy: 0,
      menuBackgroundImageWidth: 0,
      menuBackgroundImageHeight: 0,
      logoPositionx: 0,
      logoPositiony: 0,
      logoWidth: 600,
      logoHeight: 400,
      menuAsteroids: [],
      menuElves: [],
      menuNumElves: 5,
      menuNumAsteroids: 10,
      menuMartians: [],
      menuNumMartians: 5,
    }

    this.gameState = -1;
    this.gameInPlay = true;
    this.playerAvatar = 0;
    this.player;

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
    this.maxElfVelocityY = 24;

    this.martians = [];
    this.maxMartians = 3;
    this.maxMartianVelocityX = 18;
    this.maxMartianVelocityY = 98;

    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    this.spacePressed = false;

    this.nextLevel = false;
    this.currentLevel = 0;

    this.currentMusic;
    this.musicVolume = 0.5;
  }

  Game.prototype.initialize = function() {
    var _this = this;
    this.gameWidth = document.body.clientWidth;
    this.gameHeight = document.body.clientHeight;
    this.canvas = document.getElementById('starshipXmas-canvas');
    this.canvas.height = this.gameHeight;
    this.canvas.width = this.gameWidth;
    this.context = this.canvas.getContext('2d');

    this.characterSelect = new CharacterSelect({
      backgroundImage: gameImages.playerSelectBackgroundImage,
      playerImages:[
        gameImages.player1PortraitImage,
        gameImages.player2PortraitImage,
        gameImages.player3PortraitImage,
        gameImages.player4PortraitImage,
        gameImages.player5PortraitImage,
        gameImages.player6PortraitImage,
        gameImages.player7PortraitImage,
        gameImages.player8PortraitImage,
      ],
      inactivePlayerSelectBorderImage:gameImages.playerSelectInactivePortraitImage,
      activePlayerSelectBorderImage:gameImages.playerSelectActivePortraitImage,
      context: this.context,
      completionCallback: (function(chosenPlayer) {
        _this.player = new Player(chosenPlayer);
        _this.playInstructionCinematic();
      })
    });

    this.bkgd1X = 0;
    this.bkgd2X = this.gameWidth;
    this.bkgd3X = 2 * this.gameWidth;

    this.menuInfo.menuBackgroundImageHeight = this.gameHeight;
    this.menuInfo.menuBackgroundImageWidth = this.gameWidth;

    this.menuInfo.menuBackgroundPosition2x = this.menuInfo.menuBackgroundImageWidth;
    this.menuInfo.menuBackgroundPosition3x = this.menuInfo.menuBackgroundImageWidth * 2;

    this.menuInfo.logoPositionx = this.gameWidth/2 - this.menuInfo.logoWidth/2;
    this.menuInfo.logoPositiony = this.gameHeight/2 - this.menuInfo.logoHeight/2 - 100;

    //this.initializeSound();
    this.bindEvents();
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

    while(this.menuInfo.menuElves.length < this.menuInfo.menuNumElves) {
      this.menuInfo.menuElves.push(
        new Elf({
          originX: this.gameWidth +  (Math.random() * 500), 
          originY: Math.ceil(Math.random() * this.gameHeight),
          velocity: 0.3 + (Math.random() * 5),
          angle: 100 + Math.floor(Math.random() * 160)
        })
      );
    }

    while(this.menuInfo.menuMartians.length < this.menuInfo.menuNumMartians) {
      this.menuInfo.menuMartians.push(
        new Martian({
          originX: this.gameWidth +  (Math.random() * 500), 
          originY: Math.ceil(Math.random() * this.gameHeight),
          velocity: 0.3 + (Math.random() * 5),
          angle: 100 + Math.floor(Math.random() * 160)
        })
      );
    }

    while(this.menuInfo.menuAsteroids.length < this.menuInfo.menuNumAsteroids) {
      var sizeArray = ["L", "M", "S"],
        randomSize = Math.ceil(Math.random() * 3),
        randomHeight = Math.random() * 100,
        randomWidth = randomHeight * (0.5 + Math.random());
      //this.printAllMenuAsteroids();
      this.menuInfo.menuAsteroids.push(
        new Asteroid({
          size: sizeArray[randomSize],
          imageHeight: randomHeight,
          imageWidth: randomWidth,
          originX: this.gameWidth +  (Math.random() * 500), 
          originY: Math.ceil(Math.random() * this.gameHeight),
          velocity: 0.3 + (Math.random() * 5),
          angle: 160 + Math.floor(Math.random() * 40)
        })
      );
    }

    var elvesToKill = [],
      asteroidsToKill = [],
      martiansToKill = [];

    //move the elves, clear the ones we don't need
    for(var i=0; i < this.menuInfo.menuElves.length; i++) {
      var elf = this.menuInfo.menuElves[i];
      if( elf.move() ) {
        elvesToKill.push(i);
      }
    }
    for(var i=0; i< elvesToKill.length; i++) {
      this.menuInfo.menuElves.splice(elvesToKill[i],1);
    }

    //ditto, martians
    for(var i=0; i < this.menuInfo.menuMartians.length; i++) {
      var martian = this.menuInfo.menuMartians[i];
      if( martian.move() ) {
        martiansToKill.push(i);
      }
    }
    for(var i=0; i< martiansToKill.length; i++) {
      this.menuInfo.menuMartians.splice(martiansToKill[i],1);
    }
    //same for the asteroids
    for(var i=0; i < this.menuInfo.menuAsteroids.length; i++) {
      var asteroid = this.menuInfo.menuAsteroids[i];
      if( asteroid.move() ) {
        asteroidsToKill.push(i);
      }
    }
    for(var i=0; i< asteroidsToKill.length; i++) {
      this.menuInfo.menuAsteroids.splice(asteroidsToKill[i],1);
    }

    if (this.menuInfo.menuBackgroundPosition1x < -this.gameWidth) this.menuInfo.menuBackgroundPosition1x = this.menuInfo.menuBackgroundPosition3x + this.gameWidth;
    if (this.menuInfo.menuBackgroundPosition2x < -this.gameWidth) this.menuInfo.menuBackgroundPosition2x = this.menuInfo.menuBackgroundPosition1x + this.gameWidth;
    if (this.menuInfo.menuBackgroundPosition3x < -this.gameWidth) this.menuInfo.menuBackgroundPosition3x = this.menuInfo.menuBackgroundPosition2x + this.gameWidth;

    if( this.spacePressed) {
      //createjs.Sound.play("BeginDing");
      //this.currentMusic.stop();
      
      this.playIntroCinematic();
      var _this = this;

      // setTimeout(function() {
      //   _this.currentMusic = createjs.Sound.play("GameMusic");
      //   _this.currentMusic.addEventListener("complete", _this.replayCurrentMusic);
      //   _this.currentMusic.volume = _this.musicVolume;
      // }, 700);
    }
  }

  Game.prototype.printAllMenuAsteroids = function() {
    console.log('printing')
    for (var i=0; i< this.menuInfo.menuAsteroids.length; i++) {
      var asteroid = this.menuInfo.menuAsteroids[i];
      console.log(asteroid.originX, asteroid.originY, asteroid.velocity, asteroid.angle)
    }
    console.log('done')
  }

  Game.prototype.drawMenu = function() {

    //draw the background
    this.context.drawImage(gameImages.bkgdImage1, this.menuInfo.menuBackgroundPosition1x, this.menuInfo.menuBackgroundPosition1y, this.menuInfo.menuBackgroundImageWidth, this.menuInfo.menuBackgroundImageHeight);
    this.context.drawImage(gameImages.bkgdImage2, this.menuInfo.menuBackgroundPosition2x, this.menuInfo.menuBackgroundPosition2y, this.menuInfo.menuBackgroundImageWidth, this.menuInfo.menuBackgroundImageHeight);
    this.context.drawImage(gameImages.bkgdImage3, this.menuInfo.menuBackgroundPosition3x, this.menuInfo.menuBackgroundPosition3y, this.menuInfo.menuBackgroundImageWidth, this.menuInfo.menuBackgroundImageHeight);

    //draw the elves and the asteroids and the martians
    for(var i=0; i < this.menuInfo.menuElves.length; i++) {
      var elf = this.menuInfo.menuElves[i];
      elf.draw(this.context);
    }
    for(var i=0; i < this.menuInfo.menuAsteroids.length; i++) {
      var asteroid = this.menuInfo.menuAsteroids[i];
      asteroid.draw(this.context);
    }
    for(var i=0; i < this.menuInfo.menuMartians.length; i++) {
      var martian = this.menuInfo.menuMartians[i];
      martian.draw(this.context);
    }

    //draw the logo
    this.context.drawImage(gameImages.menuLogo, this.menuInfo.logoPositionx, this.menuInfo.logoPositiony, this.menuInfo.logoWidth, this.menuInfo.logoHeight);

    this.context.fillStyle = "rgb(255, 255, 255)";
    this.context.font = "14px Arial";
    this.context.fillText("- PRESS SPACE TO PLAY -", this.gameWidth/2 - 90, this.gameHeight - 150);
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

      //if we're selecting a player allow that but normally we wont be so 
      //i dont care right now about rebinding it... but you probably should. 
      if(_this.gameState == 5) _this.characterSelect.changePlayer(keyCode);


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
    this.moveMartians();
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

  Game.prototype.moveMartians = function() {
    var cullArray = [];
    for(var i = 0; i < this.martians.length; i++) {
      var martian = this.martians[i];
      if(martian.move()) cullArray.push(i);
    }
    for(var i = 0; i < cullArray.length; i++) {
      this.martians.splice(cullArray[i],1)
    }
  }

  Game.prototype.drawObjects = function() {
    this.drawBackground();
    this.drawAsteroids();
    this.drawElves();
    this.drawMartians();
    this.drawPlayer();
    this.drawHud();
  }

  Game.prototype.drawBackground = function() {
    this.context.fillStyle = "rgb(250, 250, 250)";
    this.context.drawImage(gameImages.bkgdImage1, this.bkgd1X, this.bkgd1Y, this.gameWidth, this.gameHeight);
    this.context.drawImage(gameImages.bkgdImage2, this.bkgd2X, this.bkgd2Y, this.gameWidth, this.gameHeight);
    this.context.drawImage(gameImages.bkgdImage3, this.bkgd3X, this.bkgd3Y, this.gameWidth, this.gameHeight);
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

  Game.prototype.drawMartians = function() {
    for (var i = 0; i < this.martians.length; i++) {
      var martian = this.martians[i];
      martian.draw(this.context);
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
      livesOffsetX = 4,
      livesOffsetY = 0,
      lifeWidth = 60,
      lifeHeight = 30;

    this.context.fillStyle = "rgb(255, 255, 255)";
    this.context.font = "12pt helvetica";
    this.context.fillText("SCORE: " + this.score, scorePositionX, scorePositionY);
    this.context.fillText("ELVES: " + this.player.elves, elvesPositionX, elvesPositionY);

    for( var i = 0; i < this.player.lives; i++) {
      this.context.drawImage(gameImages.playerImages[this.player.playerAvatar], livesOriginX+livesOffsetX, livesOriginY+livesOffsetY,lifeWidth, lifeHeight);
      livesOffsetX += lifeWidth + lifeMargin;
    }
  }

  Game.prototype.checkCollisions = function() {
    this.checkAsteroidCollisions();
    this.checkMartianCollisions();
    this.checkElfCollisions();
  }

  Game.prototype.checkAsteroidCollisions = function() {
    var asteroidCullArray = [],
        bulletCullArray = [],
        asteroidPregnantArray = [];
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
          asteroidPregnantArray.push(i);
          asteroidCullArray.push(i);
          bulletCullArray.push(j);
        }
      }
    }
    for(var i = 0; i < asteroidPregnantArray.length; i++) {
      this.asteroids[asteroidPregnantArray[i]].createChildren(this.asteroids);
    }
    for(var i = 0; i < asteroidCullArray.length; i++) {
      this.asteroids.splice(asteroidCullArray[i],1);
    }
    for(var i = 0; i < bulletCullArray.length; i++) {
      this.player.bullets.splice(bulletCullArray[i],1);
    }
  }

  Game.prototype.checkMartianCollisions = function() {
    var martianCullArray = [],
        bulletCullArray = [];
    for(var i = 0; i < this.martians.length; i++) {
      var martian = this.martians[i];
      if(this.collides(martian, this.player)) {
        //createjs.Sound.play("menuMidgroundSmack");
        martianCullArray.push(i);
        this.player.collideWithAsteroid();
      }
      for(var j=0; j< this.player.bullets.length; j++) {
        var bullet = this.player.bullets[j];
        //if the bullet collides with the asteroid, we want to do something
        if(this.collides(martian,bullet)) {
          martianCullArray.push(i);
          bulletCullArray.push(j);
        }
      }
    }
    for(var i = 0; i < martianCullArray.length; i++) {
      this.martians.splice(martianCullArray[i],1);
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
        if(this.player.elves >= (1 + this.currentLevel) * 10) {
          this.proceedToNextLevel();
        }
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
    this.maintainMartians();
  }

  Game.prototype.maintainBackground = function() {
    //this.bkgdVelocity += this.bkgdAcceleration;
  }

  Game.prototype.maintainAsteroids = function() {
    while(this.asteroids.length < this.maxAsteroids) {
      this.asteroids.push(
        new Asteroid({
          originX: this.gameWidth +  (Math.random() * 700), 
          originY: Math.ceil(Math.random() * this.gameHeight),
          velocity: 2 + (Math.random() * 4),
          angle: 178 + Math.floor(Math.random() * 4)
        })
      )
    }
  }

  Game.prototype.maintainElves = function() {
    while(this.elves.length < this.maxElves) {
      this.elves.push( 
        new Elf({
          originX: this.gameWidth +  (Math.ceil(Math.random() * this.gameWidth)), 
          originY: Math.ceil(Math.random() * this.gameHeight),
          velocity: 0.3 + (Math.random() * 5),
          angle: 150 + Math.floor(Math.random() * 60)
        })
      );
    }
  }

  Game.prototype.maintainMartians = function() {
    while(this.martians.length < this.maxMartians) {
      this.martians.push( 
        new Martian({
          originX: this.gameWidth +  (Math.ceil(Math.random() * this.gameWidth)), 
          originY: Math.ceil(Math.random() * this.gameHeight),
          velocity: 0.3 + (Math.random() * 5),
          angle: 170 + Math.floor(Math.random() * 20)
        })
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
      this.loseGame();
    }
  }

  Game.prototype.startGame = function() {
    gameSounds.playMusic("Music2");
    this.gameState = 1;
    this.asteroids = [];
    this.maxAsteroids = 6;
    this.maxAsteroidVelocityX = 14;
    this.maxAsteroidVelocityY = 0.4;

    this.elves = [];
    this.maxElves = 4;
    this.maxElfVelocityX = 23;
    this.maxElfVelocityY = 13;

    this.martians = [];
    this.maxMartians = 0;
    this.maxMartianVelocityX = 3;
    this.maxMartianVelocityY = 12;
  }

  Game.prototype.proceedToNextLevel = function() {
    var _this = this;
    this.currentLevel++;
    switch(this.currentLevel) {
      case 1: //2nd level
        this.asteroids = [];
        this.maxAsteroids = 11;
        this.maxAsteroidVelocityX = 25;
        this.maxAsteroidVelocityY = 0.7;

        this.elves = [];
        this.maxElves = 2;
        this.maxElfVelocityX = 46;
        this.maxElfVelocityY = 38;

        this.martians = [];
        this.maxMartians = 3;
        this.maxMartianVelocityX = 3;
        this.maxMartianVelocityY = 12;
        break;
      case 2: //boss level
        this.asteroids = [];
        this.maxAsteroids = 10;
        this.maxAsteroidVelocityX = 39;
        this.maxAsteroidVelocityY = 17;

        this.elves = [];
        this.maxElves = 2;
        this.maxElfVelocityX = 86;
        this.maxElfVelocityY = 118;

        this.martians = [];
        this.maxMartians = 6;
        this.maxMartianVelocityX = 60;
        this.maxMartianVelocityY = 18;
        break;
      case 3:
      default:
        this.winGame();
        break;
      }
    if(this.currentLevel < 3) {
      this.playNextLevelCinematic(function() {
        _this.gameState = 1;
      })
    }
  };

  Game.prototype.winGame = function() {
    var _this = this;
    this.playWinCinematic(function() {
      _this.getScoreInformation();
    })
  }

  Game.prototype.loseGame = function() {
    var _this = this;
    this.playLoseCinematic(function() {
      _this.getScoreInformation();
    });
  }

  Game.prototype.getScoreInformation = function() {
    var _this = this;
    console.log('get high score info here then do something');
    setTimeout(function() {
      _this.gotoMainMenu();
    }, 3000);
  }

  Game.prototype.playWinCinematic = function(callback) {
    var _this = this;
    this.gameState = 4;

    gameSounds.currentMusic.stop();
    gameSounds.playSound("Win");
    setTimeout(function() {
      gameSounds.playSound("Santa");
    }, 4500);

    var width = document.body.clientWidth,
      height = document.body.clientHeight,
      santaImages = [gameImages.santaImage1, gameImages.santaImage2],
      textImages = [gameImages.winTextImage];

    var imagesArray = [
      new AnimatedImage({
        originX: width/2- 300/2,
        originY: 50,
        imageWidth: 300,
        imageHeight: 300,
        images:santaImages,
        context: this.context,
        imageDuration:100, //in ms
        currentImageIndex: 0
      }),
      new AnimatedImage({
        originX: width/2 - 928/2,
        originY: 400,
        imageWidth:928,
        imageHeight: 225,
        images:textImages,
        context: this.context,
        imageDuration:800, //in ms
        currentImageIndex: 0
      })
    ]

    this.cinematic = new Cinematic({
      context:this.context,
      images:imagesArray,
      shouldFadeIn: false,
      shouldFadeOut: false,
      duration: 9500, //lol
      completionCallback: callback
    });

    this.cinematic.play();
  }

  Game.prototype.playLoseCinematic = function(callback) {
    var _this = this;
    this.gameState = 4;
    gameSounds.currentMusic.stop();
    gameSounds.playSound("Lose");
    var width = document.body.clientWidth,
      height = document.body.clientHeight,
      rudolphImages = [gameImages.rudolphImage1, gameImages.rudolphImage2],
      textImages = [gameImages.loseTextImage];

    var imagesArray = [
      new AnimatedImage({
        originX: width/2- 300/2,
        originY: 50,
        imageWidth: 300,
        imageHeight: 300,
        images:rudolphImages,
        context: this.context,
        imageDuration:100, //in ms
        currentImageIndex: 0
      }),
      new AnimatedImage({
        originX: width/2 - 928/2,
        originY: 400,
        imageWidth:928,
        imageHeight: 225,
        images:textImages,
        context: this.context,
        imageDuration:800, //in ms
        currentImageIndex: 0
      })
    ]

    this.cinematic = new Cinematic({
      context:this.context,
      images:imagesArray,
      shouldFadeIn: false,
      shouldFadeOut: false,
      duration: 6000,
      completionCallback: callback
    });

    this.cinematic.play();
  }

  Game.prototype.playNextLevelCinematic = function() {
    gameSounds.currentMusic.stop();
    gameSounds.playSound("CharacterConfirmed");
    var _this = this;
    this.gameState = 4;

    var width = document.body.clientWidth,
      height = document.body.clientHeight,
      nextLevelImages = [gameImages.levelCompleteImage];

    var imagesArray = [
      new AnimatedImage({
        originX: width/2-450,
        originY: height/2-200,
        imageWidth: 900,
        imageHeight: 400,
        images: nextLevelImages,
        context: this.context,
        imageDuration:999, //in ms
        currentImageIndex: 0
      })
    ]


    this.cinematic = new Cinematic({
      context:this.context,
      images:imagesArray,
      duration: 4000,
      shouldFadeIn: false,
      shouldFadeOut: false,
      fadeDuration: 300,
      completionCallback:function(){ 
        gameSounds.playMusic("Music2");
        _this.gameState = 1; 
      }
    });

    this.cinematic.play();
  }

  Game.prototype.playNovawareCinematic = function() {
    var _this = this;
    this.gameState = 4;

    var width = document.body.clientWidth,
      height = document.body.clientHeight,
      novawareImages = [gameImages.novawareImage1, gameImages.novawareImage2];

    var imagesArray = [
      new AnimatedImage({
        originX: 0,
        originY: 0,
        imageWidth: width,
        imageHeight: height,
        images: novawareImages,
        context: this.context,
        imageDuration:99, //in ms
        currentImageIndex: 0
      })
    ]

    gameSounds.playSound("CharacterConfirmed");

    this.cinematic = new Cinematic({
      context:this.context,
      images:imagesArray,
      duration: 4500,
      shouldFadeIn: false,
      shouldFadeOut: false,
      fadeDuration: 300,
      completionCallback:function(){ 
        _this.gotoMainMenu();
      }
    });

    this.cinematic.play();
  }

  Game.prototype.gotoMainMenu = function() {
    gameSounds.playMusic("Music3");
    this.gameState = 0;
  }

  Game.prototype.playIntroCinematic = function() {
    var _this = this;
    this.gameState = 4;
    gameSounds.currentMusic.stop();
    gameSounds.playSound("PressStart");

    var width = document.body.clientWidth,
      height = document.body.clientHeight,
      rudolphImages = [gameImages.rudolphImage1, gameImages.rudolphImage2],
      textImages = [gameImages.introTextImage1, gameImages.introTextImage2];

    var imagesArray = [
      new AnimatedImage({
        originX: width/2- 300/2,
        originY: 50,
        imageWidth: 300,
        imageHeight: 300,
        images:rudolphImages,
        context: this.context,
        imageDuration:300, //in ms
        currentImageIndex: 0
      }),
      new AnimatedImage({
        originX: width/2 - 928/2,
        originY: 400,
        imageWidth:928,
        imageHeight: 225,
        images:textImages,
        context: this.context,
        imageDuration:800, //in ms
        currentImageIndex: 0
      })
    ]

    setTimeout(function() {
      gameSounds.playSound("Rudolph");
    }, 1000);
    this.cinematic = new Cinematic({
      context:this.context,
      images:imagesArray,
      duration: 8000,
      completionCallback:function(){ 
        _this.playCharacterSelect();
      }
    });

    this.cinematic.play();

    var imagesReady = function() {
      return true;
    }
  }

  Game.prototype.playInstructionCinematic = function() {
    var _this = this;
    this.gameState = 4;

    gameSounds.currentMusic.stop();
    setTimeout(function() {
      gameSounds.playSound("Rudolph");
    }, 1000)

    var width = document.body.clientWidth,
      height = document.body.clientHeight,
      rudolphImages = [gameImages.rudolphImage1, gameImages.rudolphImage2],
      textImages = [gameImages.instructionTextImage1, gameImages.instructionTextImage2];

    var imagesArray = [
      new AnimatedImage({
        originX: width/2- 300/2,
        originY: 50,
        imageWidth: 300,
        imageHeight: 300,
        images:rudolphImages,
        context: this.context,
        imageDuration:300, //in ms
        currentImageIndex: 0
      }),
      new AnimatedImage({
        originX: width/2 - 928/2,
        originY: 400,
        imageWidth:928,
        imageHeight: 225,
        images:textImages,
        context: this.context,
        imageDuration:800, //in ms
        currentImageIndex: 0
      })
    ]

    this.cinematic = new Cinematic({
      context:this.context,
      images:imagesArray,
      shouldFadeIn: false,
      shouldFadeOut: false,
      duration: 8000,
      completionCallback:function(){ 
        _this.startGame();
      }
    });

    this.cinematic.play();
  }

  Game.prototype.playCurrentCinematic = function() {
    this.cinematic.draw();
  }

  Game.prototype.loading = function() {
    var width = document.body.clientWidth,
      height = document.body.clientHeight;
    this.context.fillStyle = 'black';
    this.context.rect(0, 0, width, height);
    this.context.fill(),
    loadingTextHeight = 225,
    loadingTextWidth = 928,
    loadingTextOriginX = width/2 - loadingTextWidth/2,
    loadingTextOriginY = height/2 - loadingTextHeight/2;

    
    this.context.drawImage(
      gameImages.loadingTextImage,
      loadingTextOriginX,
      loadingTextOriginY,
      loadingTextWidth,
      loadingTextHeight
    );

  }

  Game.prototype.playCharacterSelect = function() {
    this.gameState = 5;
    gameSounds.playMusic("Music1");
  }

  Game.prototype.drawCharacterSelect = function() {
    this.characterSelect.draw();
  }

  Game.prototype.pause = function() {
    console.log('PAUSED')
  }

  Game.prototype.over = function() {
    this.context.fillStyle = "rgb(255, 255, 255)";
    this.context.font = "34pt helvetica";
    this.context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    //this.currentMusic.stop();
    //createjs.Sound.play("GameOver");
  }

  $(document).ready(function() {
    var game = new Game();
    gameSounds = null;
    gameImages = new Images(function() {
      gameSounds = new Sounds(function() {
        game.playNovawareCinematic();
      });
    });
    game.initialize();
    var loopInterval = setInterval(function() {
      switch(game.gameState) {
        case -1: //images still loading
          game.loading();
          break;
        case 0: //main menu
          game.mainMenu();
          break;
        case 1: //gameplay
          game.play();
          break;
        case 2: // pause screen? idk, placeholder FOR NOTHING!
          break;
        case 3: //game over
          game.loseGame();
          clearInterval(loopInterval);
          break;
        case 4:
          //cinematic
          game.playCurrentCinematic();
          break;
        case 5: //character select
          game.drawCharacterSelect();
          break;
      }
    },16);//60 times a second
  });
})();