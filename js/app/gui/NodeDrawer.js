"use strict";


/**
 * Available nodes: - box - diamond - join-fork - note - interface
 * 
 */
class NodeDrawer {
   
   constructor(domContainer) {
      this.domContainer = domContainer;
   }
   
   /**
    * Draw Box Node
    */
   box(x, y) {
      const box = document.createElement("div");
      box.style.height = APP_CONF_UI.NODE_BOX_HEIGHT + APP_CONF_UI.UNIT;
      box.style.width = APP_CONF_UI.NODE_BOX_WIDTH + APP_CONF_UI.UNIT;
      box.style.position = "absolute";
      box.style.top = x + APP_CONF_UI.UNIT;
      box.style.left = y + APP_CONF_UI.UNIT;
      
      box.className = "box";
      
      this.domContainer.appendChild(box);
      return box;
   }
 
}