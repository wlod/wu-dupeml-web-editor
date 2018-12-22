"use strict";

class DragNodeController {

   constructor(appGUI) {
      this.appGUI = appGUI;
   };
   
   applyDraggable(node) {
      node.pos1 = 0; 
      node.pos2 = 0; 
      node.pos3 = 0; 
      node.pos4 = 0;
      node.addEventListener('mousedown', (e) => this._dragMouseDown(e, node));
   };
   
   _dragMouseDown(e, node) {
      e = e || window.event;
      e.preventDefault();
      
      // get the mouse cursor position at startup:
      node.pos3 = e.clientX;
      node.pos4 = e.clientY;
      document.onmouseup = (e) => this._closeDragElement();
      
      // call a function whenever the cursor moves:
      document.onmousemove = (e) => this._elementDrag(e, node);
   };
   
   _elementDrag(e, node) {
      e = e || window.event;
      e.preventDefault();
      
      // calculate the new cursor position:
      node.pos1 = node.pos3 - e.clientX;
      node.pos2 = node.pos4 - e.clientY;
      node.pos3 = e.clientX;
      node.pos4 = e.clientY;
      
      // set the element's new position:
      node.style.top = (node.offsetTop - node.pos2) + APP_CONF_UI.UNIT;
      node.style.left = (node.offsetLeft - node.pos1) + APP_CONF_UI.UNIT;
      
      
      if (node.hasAttribute("data-lines")) {
         node.getAttribute("data-lines").split(",").forEach((line) => {
            if(line.length > 0) { 
               this.appGUI.lineDrawer.redrawLine(line);
            }
         });
     }
      
   };
   
   _closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
   }
}