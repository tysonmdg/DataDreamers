/**
 * Escena de Título.
 * @extends Phaser.Scene
 */
import LevelSelector from "./LevelSelector.js";
import ControlsScene from "./ControlsScene.js";
import HistoryScene from "./HistoryScene.js";
import Utils from "../Utils.js";

export default class MenuScene extends Phaser.Scene {
	/**
	 * Escena principal.
	 * @extends Phaser.Scene
	 */
	constructor() {
		super({ key: 'menuScene' });    
        this.levels = [ 
            new LevelSelector(),
            new ControlsScene(),
        ];  
        new Utils();
	}


    preload(){

        this.load.image('mute', 'assets/img/mute.png'); 
        this.load.image('sound', 'assets/img/sound.png');
        this.load.image('pc', 'assets/img/pc.png');
        this.load.image('mobile', 'assets/img/mobile.png');
        this.load.image('icon', 'assets/img/web/CodeChronicles.png');
        this.load.image('created', 'assets/img/web/Game-created-by.png');
        this.load.image('git','assets/img/git.png');
        this.load.image('cover','assets/img/buttonHover.png');
        this.load.image('screen','assets/img/screen.png');
        this.load.audio('menuMusic', 'assets/music/bgm/menuMusic.mp3');

    }

    create(){
        this.scale=0.3;

        this.musicMENU=this.sound.add('menuMusic');
        this.musicMENU.play({
          loop: true
      });;

        

        //BUTTON MUTE
        this.buttonMUTE = this.add.image(100,100,'mute');
        this.buttonMUTE.setScale(this.scale-0.15);
        this.buttonMUTE.setInteractive();
        this.buttonMUTE.on('pointerup', function () {Utils.setisMute(true);
          this.musicMENU.pause();  
        }, this);

        //BUTTON SOUND
        this.buttonSOUND = this.add.image(100,100,'sound');
        this.buttonSOUND.setScale(this.scale-0.15);
        this.buttonSOUND.setInteractive();
        this.buttonSOUND.setVisible(false)
        this.buttonSOUND.on('pointerup', function () {Utils.setisMute(false);
        this.musicMENU.play();
        }, this);


      //BUTTON MOBILE
        this.buttonMOBILE = this.add.image(SCREEN_MAX_WIDTH+90,100,'mobile');
        this.buttonMOBILE.setScale(this.scale-0.15);
        this.buttonMOBILE.setInteractive();
        this.buttonMOBILE.on('pointerup', function () {Utils.setisMobile(true)}, this);

        //BUTTON PC
        this.buttonPCMODE = this.add.image(SCREEN_MAX_WIDTH+90,108,'pc');
        this.buttonPCMODE.setScale(this.scale-0.09);
        this.buttonPCMODE.setVisible(false);
        this.buttonPCMODE.setInteractive();
        this.buttonPCMODE.on('pointerup', function () {Utils.setisMobile(false)}, this);
        

      //BUTTON FULL-SCREEN
        /*this.buttonSCREEN = this.add.image(SCREEN_MAX_WIDTH+100,100,'screen');
        this.buttonSCREEN.setScale(this.scale-0.2);
        this.buttonSCREEN.setInteractive();*/
    

        //BUTTON START
        this.buttonSTART = this.add.image(SCREEN_MAX_WIDTH/2+100,200,'button');
       // this.buttonSTART.setDepth(998);
        this.buttonSTART.setScale(this.scale);
        this.buttonSTART.setInteractive();
       // this.buttonSTART.on('pointerup', function () {this.scene.start('levelSelector')}, this);
       this.buttonSTART.on('pointerup', function () {this.scene.start('LoreScene')}, this);
        this.textSTART=this.add.text(SCREEN_MAX_WIDTH/2+50,185, "START",{ fontStyle: 'strong',font: '30px Arial', fill: '#ffffff' });
        this.textSTART.setDepth(999);

        

        //BUTTON CONTROL
        this.buttonCONTROLS = this.add.image(SCREEN_MAX_WIDTH/2+100,300,'button');
        //this.buttonCONTROLS.setDepth(998);
        this.buttonCONTROLS.setScale(this.scale);
        this.buttonCONTROLS.setInteractive();
        this.buttonCONTROLS.on('pointerup', function () {this.scene.start('ControlsScene')}, this);
        this.textCONTROL=this.add.text(SCREEN_MAX_WIDTH/2+20,285, "CONTROLS",{ fontStyle: 'strong',font: '30px Arial', fill: '#ffffff' });
        this.textCONTROL.setDepth(999);

        //BUTTON HISTORY
        this.buttonHISTORY = this.add.image(SCREEN_MAX_WIDTH/2+100,400,'button');
        //this.buttonHISTORY.setDepth(998);
        this.buttonHISTORY.setScale(this.scale);
        this.buttonHISTORY.setInteractive();
        this.buttonHISTORY.on('pointerup', function () {this.scene.start('HistoryScene')}, this);
        this.textHISTORY=this.add.text(SCREEN_MAX_WIDTH/2+40,385, "HISTORY",{ fontStyle: 'strong',font: '30px Arial', fill: '#ffffff' });
        this.textHISTORY.setDepth(999);

        //BUTTON GITYCREATORS
        this.buttonGITYCREATORS = this.add.image(SCREEN_MAX_WIDTH/2+100,500,'button');
        //this.buttonGITYCREATORS.setDepth(998);
        this.buttonGITYCREATORS.setScale(this.scale);
        this.buttonGITYCREATORS.setInteractive();
        this.buttonGITYCREATORS.on('pointerup', function () {this.redirectToWeb()}, this);
        this.textGITYCREATORS=this.add.text(SCREEN_MAX_WIDTH/2+55,470, "GITHUB &\nCREATORS",{ fontStyle: 'strong',font: '25px Arial', fill: '#ffffff' });
        this.textGITYCREATORS.setDepth(999);
        this.git = this.add.image(SCREEN_MAX_WIDTH/2+30,500,'git');
        this.git.setDepth(999);
        this.git.setScale(this.scale-0.2);

        //CodeChronicles
        this.icon = this.add.image(SCREEN_MAX_WIDTH/2+100,SCREEN_MAX_HEIGHT,'icon');
        this.icon.setDepth(999);
        this.icon.setScale(this.scale+0.3);
        this.created = this.add.image(SCREEN_MAX_WIDTH/2+100,SCREEN_MAX_HEIGHT-50,'created');
        this.created.setDepth(999);
        this.created.setScale(this.scale+0.3);

        //BUTTON COVER
        this.buttonCOVER = this.add.image(SCREEN_MAX_WIDTH/2+100,200,'cover');
        this.buttonCOVER.setScale(this.scale);
        this.buttonCOVER.setVisible(false);

        this.buttonCOVER2 = this.add.image(SCREEN_MAX_WIDTH/2+100,300,'cover');
        this.buttonCOVER2.setScale(this.scale);
        this.buttonCOVER2.setVisible(false);

        this.buttonCOVER3 = this.add.image(SCREEN_MAX_WIDTH/2+100,400,'cover');
        this.buttonCOVER3.setScale(this.scale);
        this.buttonCOVER3.setVisible(false);

        this.buttonCOVER4 = this.add.image(SCREEN_MAX_WIDTH/2+100,500,'cover');
        this.buttonCOVER4.setScale(this.scale);
        this.buttonCOVER4.setVisible(false);

        

        this.buttonSTART.on('pointerover', () => {
            this.buttonCOVER.setVisible(true); // muestra la imagen del botón al colocar el cursor sobre él
           // this.buttonSTART.setVisible(false); // oculta la imagen del botón original
          });
          
          this.buttonSTART.on('pointerout', () => {
            this.buttonCOVER.setVisible(false); // oculta la imagen del botón cuando el cursor sale de él
            //this.buttonSTART.setVisible(true); // muestra la imagen del botón original
          });
        
          this.buttonHISTORY.on('pointerover', () => {
            this.buttonCOVER3.setVisible(true); // muestra la imagen del botón al colocar el cursor sobre él
           // this.buttonSTART.setVisible(false); // oculta la imagen del botón original
          });
          
          this.buttonHISTORY.on('pointerout', () => {
            this.buttonCOVER3.setVisible(false); // oculta la imagen del botón cuando el cursor sale de él
            //this.buttonSTART.setVisible(true); // muestra la imagen del botón original
          });

          this.buttonCONTROLS.on('pointerover', () => {
            this.buttonCOVER2.setVisible(true); // muestra la imagen del botón al colocar el cursor sobre él
           // this.buttonSTART.setVisible(false); // oculta la imagen del botón original
          });
          
          this.buttonCONTROLS.on('pointerout', () => {
            this.buttonCOVER2.setVisible(false); // oculta la imagen del botón cuando el cursor sale de él
            //this.buttonSTART.setVisible(true); // muestra la imagen del botón original
          });
          this.buttonGITYCREATORS.on('pointerover', () => {
            this.buttonCOVER4.setVisible(true); // muestra la imagen del botón al colocar el cursor sobre él
           // this.buttonSTART.setVisible(false); // oculta la imagen del botón original
          });
          
          this.buttonGITYCREATORS.on('pointerout', () => {
            this.buttonCOVER4.setVisible(false); // oculta la imagen del botón cuando el cursor sale de él
            //this.buttonSTART.setVisible(true); // muestra la imagen del botón original
          });

          
          //console.log("LA VARIABLE ES: "+ this.game.scale.isFullscreen);
        /*  this.buttonSCREEN.on('pointerup', function ()  {
            if (this.game.scale.isFullscreen)this.game.scale.startFullscreen();
            else this.game.scale.startFullscreen();
        }, this);*/

        

    }

    update(){
        super.update();


        if(Utils.isMobile())this.buttonPCMODE.setVisible(true);
        else{this.buttonPCMODE.setVisible(false);}

        if(Utils.isMute())this.buttonSOUND.setVisible(true);
        else{this.buttonSOUND.setVisible(false);}


       
    }

    redirectToWeb() {
        // Redirige a una página web
        window.open('https://github.com/tysonmdg/CodeChronicles.github.io', '_blank');
    }
}
    
    
