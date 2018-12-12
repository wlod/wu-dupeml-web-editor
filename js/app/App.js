"use strict";

class App {

   constructor() {

      APP_CONF.APP_SCRIPTS.forEach( script => {
         WebUtil.appendScriptToDOM(script);
      });
      APP_CONF.APP_STYLES.forEach( style => {
         WebUtil.appendStyleToDOM(style);
      });

      this.appContainer = WebUtil.byId(APP_CONF.APP_DOM_ID);
      this.loadGUI();
   }
   
   loadGUI() {
      
      console.log("loadGUI");
   }
   
}