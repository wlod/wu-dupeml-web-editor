"use strict";

class App {

   constructor() {
      this.loadScriptsAndStyles();
   }
   
   loadScriptsAndStyles() {
      APP_CONF.APP_STYLES.forEach( style => {
         WebUtil.appendStyleToDOM(style);
      });
      APP_CONF.APP_SCRIPTS.forEach( script => {
         WebUtil.appendScriptToDOM(script);
      });
   }
   
}