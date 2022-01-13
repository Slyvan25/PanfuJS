class TownScene extends Scene {
    bunny = new PIXI.Sprite;
    constructor()
    {
        super();
        let texture = PIXI.utils.TextureCache["town/bench_right.png"];
        this.bunny = PIXI.Sprite(texture);
        console.log(app);
        // this.bunny.anchor.x = 0.5;
        // this.bunny.anchor.y = 0.5;            
        // this.bunny.position.x = 50;
        // this.bunny.position.y = 50;
        // app.stage.addChild(this.bunny)
        // this.addChild(this.bunny);
    }

    update() {
        super.update();
    } 
}