"use strict";

class MenuController {

   constructor(appGUI) {
      this.appGUI = appGUI;
      this._applyMenuController();
   };
   
   removeNode(node) {
      
      this.appGUI.lineController.removeLines(node);
      node.remove();
      
   }
   
   _applyMenuController() {
      this.appGUI.appContainer.addEventListener('dblclick', (e) => this._showHideBoxMenu(e), false);
   };
   
   _showHideBoxMenu(e) {
      if(this.appGUI.actionController.registerAndCheckIsAvailable(e, NODE.menu) === false) {
         return;
      }
      
      const x = e.clientX;
      const y = e.clientY;
      
      this.appGUI.menuDrawer.showHideBoxMenuByNode(x,y,WebUtil.byId(BOX_MENU_ID));
   }
   
}