"use strict";

const NODE = Object.freeze({"box":"box", "diamond":"diamond", "join_fork":"join-fork", "note":"note", "interface":"interface"});

/**
 * Available nodes: - box - diamond - join-fork - note - interface
 * 
 */
class NodeDrawer {
   
   constructor(domContainer) {
      this.domContainer = domContainer;
      this.nodeCounter = 0;
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
      
      box.className = NODE.box;
      
      box.setAttribute("id", this._getId(NODE.box));
      box.setAttribute("data-node-from", "");
      box.setAttribute("data-node-to", "");
      box.setAttribute("data-lines", "");
      
      this.domContainer.appendChild(box);
      return box;
   };
   
   _getId(type) {
      return type + this.nodeCounter++;
   }
 
}