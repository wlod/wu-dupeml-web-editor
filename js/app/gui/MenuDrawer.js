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
         
         this._init(node);
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
      this.boxMenu.setAttribute("data-type", NODE.menu);
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
   
   _init(node) {
      
      // clear before setup
      while (this.boxMenu.lastChild) {
         this.boxMenu.removeChild(this.boxMenu.lastChild);
     }
      
      this._addHeader(node);
      this._addActionsForNode(node);
   }
   
   _addHeader(node) {
      const boxMenuHeader = document.createElement("div");
      const boxMenuHeaderLabel = document.createTextNode(node.id);
      
      boxMenuHeader.appendChild(boxMenuHeaderLabel);
      
      this.boxMenu.appendChild(boxMenuHeader);
      
      return boxMenuHeader;
   }
   
   _addActionsForNode(node) {
      const type = node.getAttribute("data-type");
      // actions for all nodes
      this._addAction("X", "Close", () => {
         this._hideMenu(node);
      });
      
      // actions for type
      // TODO move action to controller
      switch(type) {
         case NODE.menu: {
            this._addAction("Add node", "Add node", (e) => {
               
               this.appGUI.nodeDrawer.box(e.clientX,e.clientY);
               
               this._hideMenu(node);
            });
            return;
         }
         case NODE.box: {
            this._addAction("Remove node", "Remove node", () => {
               
               this.appGUI.menuController.removeNode(node);
               this._hideMenu(node);
            });
            return;
         }
         default:
      }
   }
   
   _addAction(label, title, func) {
     const boxMenuAction = document.createElement("a");
     const boxMenuActionLabel = document.createTextNode(label);
     const newLine = document.createElement("br");
     
     boxMenuAction.appendChild(boxMenuActionLabel);
     boxMenuAction.title = title;
     boxMenuAction.onclick = func; 
     
     this.boxMenu.appendChild(boxMenuAction);
     this.boxMenu.appendChild(newLine);
     
     return boxMenuAction;
   }
   
   _hideMenu(node) {
      this.boxMenu.setAttribute("data-menu-for-node", "");
      this.boxMenu.style.display = "none";
      this.menuForNodes.delete(node.id);
   }
 
}