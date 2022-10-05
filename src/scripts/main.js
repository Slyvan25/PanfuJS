
const canvasContainer = document.getElementsByTagName("canvas-container")[0];
const username = document.cookie;

// scenes
let townScene = new TownScene;
let castleScene = new CastleScene;

const game = new Phaser.Game({
    type: Phaser.AUTO,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scale: {
        mode: Phaser.Scale.center,
        width: 800,
        height: 600
    },
    backgroundColor: '#fffffff',
    scene: [townScene, castleScene],
    parent: canvasContainer
})


window.addEventListener('resize', resize)

function resize() {
    let canvas = game.canvas ? game.canvas : null;
    console.log(!!canvas)
    if(canvas.width) {
        let width = document.getElementsByTagName("body")[0].offsetWidth
        let height = window.innerHeight;
        let wratio = width / height, ratio = canvas.width / canvas.height;
    
        if (wratio < ratio) {
            canvas.style.width = width + 'px';
            canvas.style.height = (width / ratio) + 'px';
        } else {
            canvas.style.width = (height * ratio) + 'px';
            canvas.style.height = height + 'px';
        }
    }
}


function loadScene(scene) {
    if (game.scene.scenes.length > 0) {       
        game.scene.scenes.forEach((scene) => {
            const key = scene.scene.key; // This is not a typo, the scene here is more like a "game" object, so the scene actually is under the "scene" property.
            game.scene.stop(key);
        })
    }
    // After stopping all scenes, then you can start only the scene you need
    game.sound.stopAll();
    game.scene.start(scene);
}