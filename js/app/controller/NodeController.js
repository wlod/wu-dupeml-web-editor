"use strict";

class NodeController {

   constructor(appGUI) {
      this.appGUI = appGUI;
   };
   
   applyNodeController(node) {
      node.addEventListener('dblclick', (e) => this._addNodeActions(e, node), false);
   };
   
   _addNodeActions(e, node) {
      if(this.appGUI.actionController.registerAndCheckIsAvailable(e, "node") === false) {
         return;
      }
      
      // TODO calculate range and display in correct place top, right, bottom, left.
      const x = node.getBoundingClientRect().right - AppGUIUtil.normalizeValue(node.style.width)/2;
      const y = node.getBoundingClientRect().top;
      
      this.appGUI.menuDrawer.showHideBoxMenu(x,y,node.id);
   }
   
}