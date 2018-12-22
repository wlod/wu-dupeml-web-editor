"use strict";

const NODE = Object.freeze({"box":"box", "diamond":"diamond", "join_fork":"join-fork", "note":"note", "interface":"interface"});

/**
 * Available nodes: - box - diamond - join-fork - note - interface
 * 
 */
class NodeDrawer {
   
   constructor(appGUI) {
      this.appGUI = appGUI;
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
      box.style.zIndex = APP_CONF_UI.NODE_Z_INDEX + this.nodeCounter;
      box.style.top = y + APP_CONF_UI.UNIT;
      box.style.left = x + APP_CONF_UI.UNIT;
      
      box.className = NODE.box;
      
      box.setAttribute("id", this._getId(NODE.box));
      box.setAttribute("data-node-from", "");
      box.setAttribute("data-node-to", "");
      box.setAttribute("data-lines", "");
      box.setAttribute("data-type", NODE.box);
      
      
      this.appGUI.dragNodeController.applyDraggable(box);
      this.appGUI.nodeController.applyNodeController(box);
      
      this.appGUI.appContainer.appendChild(box);
      this.nodeCounter++;
      return box;
   };
   
   /**
    * Show or hide Box Menu
    */
   showHideBoxMenu(x, y, nodeId) {
      if(typeof this.menuForNodes.get(nodeId) === "undefined") {
         this.menuForNodes.clear();
         this.boxMenu.style.display = "block";
         this.menuForNodes.set(nodeId, 1);
      } else {
         this.boxMenu.style.display = "none";
         this.menuForNodes.delete(nodeId);
      }
      
      this.boxMenu.style.top = y + APP_CONF_UI.UNIT;
      this.boxMenu.style.left = x + APP_CONF_UI.UNIT;
      
      return this.boxMenu;
   }
   
   nodeCounter() {
      return this.nodeCounter;
   };
   
   createBoxMenu() {
      this.menuForNodes = new Map();
      
      this.boxMenu = document.createElement("div");
      this.boxMenu.setAttribute("id", "box-menu");
      this.boxMenu.style.zIndex = APP_CONF_UI.NODE_MENU_Z_INDEX;
      this.boxMenu.style.position = "absolute";
      this.boxMenu.style.display = "none";
      
      this.appGUI.dragNodeController.applyDraggable(this.boxMenu);
      
      this.appGUI.appContainer.appendChild(this.boxMenu);
   }
   
   _getId(type) {
      return type + this.nodeCounter;
   };
 
}