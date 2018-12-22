"use strict";

class AppGUI {

   constructor() {
      // For now is enough
      this.isAllObjectLoaded = false;
      try {
         this.appContainer = WebUtil.byId(APP_CONF.APP_DOM_ID);
         this.nodeDrawer = new NodeDrawer(this);
         this.lineDrawer = new LineDrawer(this);
         
         this.actionController = new ActionController();
         this.dragNodeController = new DragNodeController(this);
         this.menuController = new MenuController(this);
         this.nodeController = new NodeController(this);
         
         this.isAllObjectLoaded = true;
      } catch (e) {
         console.debug(e);
      }
   }
   
   loadGUI() {
      this.nodeDrawer.createBoxMenu();
      
      // TODO to remove - only for demo
      let boxFrom = this.nodeDrawer.box(123,123);
      let boxTo = this.nodeDrawer.box(323,323);
      
      this.lineDrawer.adjustLine(boxFrom, boxTo);
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