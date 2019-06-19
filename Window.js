'use strict'

const { BrowserWindow } = require('electron')

//default window settings

const defaultProps = {
    width:800,
    height:800,
    show:false
}

class Window extends BrowserWindow {
    constructor({ url, ...windowSettings}){
        // calls new BrowserWindow with these props
        super({ ...defaultProps, ...windowSettings})
        
        // load the EMS URL and open devtools
        this.loadURL(url);

        // Hide menu
        this.setMenu(null);
        
        //Clear cache
        //this.webContents.session.clearCache(()=>{console.log('cache cleared')})

        // gracefully show when ready to prevent flinkering
        this.once('ready-to-show', ()=>{
            this.show()
        })
    }
}

module.exports = Window