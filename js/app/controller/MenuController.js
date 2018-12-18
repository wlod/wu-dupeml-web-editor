"use strict";

class MenuController {

   constructor(appGUI) {
      this.appGUI = appGUI;
      this._applyMenuController();
   };
   
   _applyMenuController() {
      this.appGUI.appContainer.addEventListener('dblclick', (e) => this._addBoxByMousePosition(e), false);
   };
   
   _addBoxByMousePosition(e) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      let box = this.appGUI.nodeDrawer.box(x,y);
      
      this.appGUI.dragNodeController.applyDraggable(box);
      
      // TODO to remove - temporary add 'random' two lines
      const nodeCounter = this.appGUI.nodeDrawer.nodeCounter;
      if(nodeCounter > 1) {
         
         const id1 = Math.floor((Math.random() * (nodeCounter-1)));
         const id2 = id1 > 0 ? (id1-1) : (id1+1);
         
         const to1 = WebUtil.byId(NODE.box + id1);
         const to2 = WebUtil.byId(NODE.box + id2);
         
         this.appGUI.lineDrawer.adjustLine(box, to1);
         this.appGUI.lineDrawer.adjustLine(box, to2);
      }
   }
   
}