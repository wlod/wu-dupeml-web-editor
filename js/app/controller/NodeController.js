"use strict";

class NodeController {

   constructor(appGUI) {
      this.appGUI = appGUI;
   };
   
   applyNodeController(node) {
      node.addEventListener('dblclick', (e) => this._addNodeActions(e), false);
   };
   
   _addNodeActions(e) {
      if(this.appGUI.actionController.registerAndCheckIsAvailable(e, "node") === false) {
         return;
      }
      
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      console.log("_addNodeActions", e);
   }
   
}