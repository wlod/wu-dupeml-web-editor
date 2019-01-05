"use strict";

const BOX_MENU_ID = "box-menu";

const BOX_MENU_NODE_ID = "node-menu";
const BOX_MENU_APP_CONTAINER_ID = "app-container-menu";

class MenuDrawer {
   
   constructor(appGUI) {
      this.appGUI = appGUI;
      this.menuForNodes = new Map();
   };
   
   /**
    * Show or hide Box Menu by DOM node
    */
   showHideBoxMenuByNode(x, y, node) {
      
      const type = node.getAttribute("data-type");
      
      if(typeof this.menuForNodes.get(node.id) === "undefined") {
         this.menuForNodes.clear();
         this.boxMenu.style.display = "block";
         this.boxMenu.setAttribute("data-menu-for-node", node.id);
         this.menuForNodes.set(node.id, 1);
         
         this._addActionsForNode(node);
         
      } else if(type !== "menu") {
         this._hideMenu(node);
      }
      
      this.boxMenu.style.top = y + APP_CONF_UI.UNIT;
      this.boxMenu.style.left = x + APP_CONF_UI.UNIT;
      
      // this.boxMenu.innerHTML = node.id;
      
      return this.boxMenu;
   };
   
   createBoxMenu() {
      this.boxMenu = document.createElement("div");
      this.boxMenu.setAttribute("id", BOX_MENU_ID);
      // TODO use element factory
      this.boxMenu.setAttribute("data-type", "menu");
      this.boxMenu.setAttribute("data-menu-for-node", "");
      
      this.boxMenu.style.zIndex = APP_CONF_UI.NODE_MENU_Z_INDEX;
      this.boxMenu.style.position = "absolute";
      this.boxMenu.style.display = "none";
      
      this.appGUI.dragNodeController.applyDraggable(this.boxMenu);
      
      this.appGUI.appContainer.appendChild(this.boxMenu);
   };
   
   isForNode(node) {
      return this.boxMenu.getAttribute("data-menu-for-node") === node.id;
   }
   
   _addActionsForNode(node) {
      const type = node.getAttribute("data-type");
      
      // clear before setup
      while (this.boxMenu.lastChild) {
         this.boxMenu.removeChild(this.boxMenu.lastChild);
     }
      
      // actions for all nodes
      this._addAction("X", "Close", () => {
         this._hideMenu(node);
      });
      
      
      // actions for type
   }
   
   _addAction(label, title, func) {
     const boxMenuAction = document.createElement("a");
     const domLabel = document.createTextNode(label);
     
     boxMenuAction.appendChild(domLabel);
     boxMenuAction.title = title;
     boxMenuAction.onclick = func; 
     
     this.boxMenu.appendChild(boxMenuAction);
     
     return boxMenuAction;
   }
   
   _hideMenu(node) {
      this.boxMenu.setAttribute("data-menu-for-node", "");
      this.boxMenu.style.display = "none";
      this.menuForNodes.delete(node.id);
   }
 
}