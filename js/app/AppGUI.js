"use strict";

class AppGUI {

   constructor() {
      // For now is enough
      this.isAllObjectLoaded = false;
      try {
         this.appContainer = WebUtil.byId(APP_CONF.APP_DOM_ID);
         this.nodeDrawer = new NodeDrawer(this.appContainer);
         this.lineDrawer = new LineDrawer(this.appContainer);
         // TODO to remove
         DragNodeLoaded();
         this.isAllObjectLoaded = true;
      } catch (e) {
         console.debug(e);
      }
   }
   
   loadGUI() {
      let boxFrom = this.nodeDrawer.box(123,123);
      let boxTo = this.nodeDrawer.box(323,323);
      this.lineDrawer.adjustLine(boxFrom, boxTo);
      
      // TODO move to class with controller
      dragNode(boxFrom, this.lineDrawer);
      dragNode(boxTo, this.lineDrawer);
      
   }
   
}

function run(time, attempt) {
   let inAttempt = (typeof attempt !== "undefined" && attempt !== null) ? attempt : 20;
   
   if(inAttempt < 0) {
      console.error("Can not initialized App GUI");
      return;
   }
   const appGUI = new AppGUI();
   if( appGUI.isAllObjectLoaded ) {
      appGUI.loadGUI();
   } else {
      console.info("Wait 50 milliseconds and try again to load all dependencies files.");
      inAttempt--;
      setTimeout(() => { run(inAttempt, time); }, time);
      
   }
}

(function() {
   run(50, 15);
})();