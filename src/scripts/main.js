
const canvas = document.getElementsByTagName("canvas-container")[0];
const username = document.cookie;
let townScene;

const sceneManager = new SceneManager;

const app = new PIXI.Application
({
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window
});

canvas.appendChild(app.view)
app.renderer.backgroundColor = 0x82bef5;
PIXI.AbstractRenderer.autoDensity = true;


function initializeScenes() {
    
}


function loadScene(scene) {
    console.log(scene);

    townScene = new TownScene;
    //#region town
    let town = sceneManager.createScene('town', townScene)

    //#endregion town

    sceneManager.gotoScene(scene)
}