
// const canvas = document.getElementsByTagName("canvas-container")[0];
// const username = document.cookie;
// let townScene;

// const sceneManager = new SceneManager;

// const app = new PIXI.Application
// ({
//     width: window.innerWidth,
//     height: window.innerHeight,
//     resizeTo: window
// });

// canvas.appendChild(app.view)
// app.renderer.backgroundColor = 0x82bef5;
// PIXI.AbstractRenderer.autoDensity = true;


// function initializeScenes() {
//     //#region town
//     townScene = new TownScene;
//     let town = sceneManager.createScene('town', townScene)
//     //#endregion
// }


// function loadScene(scene) {
//     sceneManager.gotoScene(scene)
// }

class SceneManager {
    static scenes = {};
    static currentScene = Scene;
    static rendrerer = PIXI.IRenderer;

    static width = null;
    static height = null;


    createWindow()
    {
        if (SceneManager.rendrerer) {
            return this;
        }
        SceneManager.rendrerer = PIXI.autoDetectRenderer(SceneManager.width, SceneManager.height);
        console.log(SceneManager.rendrerer.view)
        document.getElementsByTagName("canvas-container")[0].appendChild(SceneManager.rendrerer.view);
    }

    /**
     * creates a render loop
     * @returns void
     */
    loop()
    {
        requestAnimationFrame(this.loop)
        if(!SceneManager.currentScene || SceneManager.currentScene.isPaused()) { return; }
        SceneManager.currentScene.update();
        SceneManager.rendrerer.render(SceneManager.currentScene);
    }

    /**
     * navigates to next scene
     * @param {String} name
     */
    gotoScene(name)
    {
        console.log(SceneManager.scenes[name]);
        console.log(`::Engine:: Switching to scene: ${name}...`);
        if (SceneManager.scenes[name]) {
            if (SceneManager.currentScene) {
                SceneManager.currentScene.pause();
            }
            SceneManager.currentScene = SceneManager.scenes[name]
            SceneManager.currentScene.resume();
            return true;
        }
    }

    createScene(id, tScene)
    {
        console.log('test');
        if (SceneManager.scenes[id]) {
            return;
        }

        let scene = new tScene();
        SceneManager.scenes[id];
        return scene;
    }
}