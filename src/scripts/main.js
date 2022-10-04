
const canvasContainer = document.getElementsByTagName("canvas-container")[0];
const username = document.cookie;

// scenes
let townScene = new TownScene;

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
    scene: townScene,
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
    console.log(scene);

    // townScene = new TownScene;
    // //#region town
    // let town = sceneManager.createScene('town', townScene)

    //#endregion town

    sceneManager.gotoScene(scene)
}