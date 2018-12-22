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
      
      const x = e.clientX;
      const y = e.clientY;
      
      this.appGUI.nodeDrawer.showHideBoxMenu(x,y,node.id);
   }
   
}