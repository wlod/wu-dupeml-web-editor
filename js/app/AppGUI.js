"use strict";

class AppGUI {

   constructor() {
      // For now is enough
      this.isAllObjectLoaded = false;
      try {
         this.appContainer = WebUtil.byId(APP_CONF.APP_DOM_ID);
         this.nodeDrawer = new NodeDrawer(this.appContainer);
         this.lineDrawer = new LineDrawer(this.appContainer);
         this.isAllObjectLoaded = true;
      } catch (e) {
         console.debug(e);
      }
   }
   
   loadGUI() {
      let boxFrom = this.nodeDrawer.box(123,123);
      let boxTo = this.nodeDrawer.box(323,323);
      this.lineDrawer.adjustLine(boxFrom, boxTo);
   }
   
}

var runAttempt = 20;

function run() {
   if(runAttempt < 0) {
      console.error("Can not initialized App GUI");
      return;
   }
   const appGUI = new AppGUI();
   if( appGUI.isAllObjectLoaded ) {
      appGUI.loadGUI();
   } else {
      console.debug("Wait 50 milliseconds and try again to load all dependencies files.");
      runAttempt--;
      window.setTimeout( run, 50 );
   }
}

(function() {
   run();
})();