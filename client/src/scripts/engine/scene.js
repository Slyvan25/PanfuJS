class Scene extends PIXI.Container
{
    paused = false;
    updateCallBack = () => {};

    /**
     * 
     * @param {Function} updateCallBack
     */
    onUpdate(updateCallBack)
    {
        this.updateCallBack = updateCallBack;
    }

    update()
    {
        this.updateCallBack();
    }

    resume()
    {
        this.paused = false;
    }

    pause()
    {
        this.paused = true;
    }

    isPaused()
    {
        return this.paused;
    }
}