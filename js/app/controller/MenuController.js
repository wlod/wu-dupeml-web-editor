"use strict";

class MenuController {

   constructor(appGUI) {
      this.appGUI = appGUI;
      this._applyMenuController();
   };
   
   _applyMenuController() {
      this.appGUI.appContainer.addEventListener('dblclick', (e) => this._showHideBoxMenu(e), false);
   };
   
   _showHideBoxMenu(e) {
      if(this.appGUI.actionController.registerAndCheckIsAvailable(e, "menu") === false) {
         return;
      }
      
      const x = e.clientX;
      const y = e.clientY;
      
      this.appGUI.menuDrawer.showHideBoxMenu(x,y,BOX_MENU_ID);
   }
   
}