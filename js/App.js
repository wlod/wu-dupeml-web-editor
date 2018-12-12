"use strict";

class App {

   constructor() {
      this.appContainer = WebUtil.byId(APP_CONF.APP_DOM_ID);
   }
   
   loadGUI() {
      
      WebUtil.appendStyleToDOM(APP_CONF.APP_STYLES);
      
   }
   
}