"use strict";

class NodeController {

   constructor(appGUI) {
      this.appGUI = appGUI;
   };
   
   applyNodeController(node) {
      
      node.childNodes.forEach( childNode =>  {
         if(WebUtil.hasClass(childNode, "node-sticky-point")) {
            childNode.addEventListener('click', (e) => this._addStickyPointAction(e, childNode), false);
         }
      });
      
      node.addEventListener('dblclick', (e) => this._addDbclikcNodeActions(e, node), false);
   };
   
   _addStickyPointAction(e, node) {
      if(this.appGUI.actionController.registerAndCheckIsAvailable(e, "node-sticky-point") === false) {
         return;
      }
      
      console.log("do some node-sticky-point action");
   };
   
   _addDbclikcNodeActions(e, node) {
      if(this.appGUI.actionController.registerAndCheckIsAvailable(e, "node") === false) {
         return;
      }
      
      // TODO calculate range and display in correct place top, right, bottom, left.
      const x = node.getBoundingClientRect().right - AppGUIUtil.normalizeValue(node.style.width)/2;
      const y = node.getBoundingClientRect().top;
      
      const menuBox = this.appGUI.menuDrawer.showHideBoxMenuByNode(x,y,node);
   };
   
}