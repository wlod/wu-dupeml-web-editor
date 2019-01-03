"use strict";

const BOX_MENU_ID = "box-menu";

const BOX_MENU_NODE_ID = "node-menu";
const BOX_MENU_APP_CONTAINER_ID = "app-container-menu";

class MenuDrawer {
   
   constructor(appGUI) {
      this.appGUI = appGUI;
      this.menuForNodes = new Map();
   }
   
   /**
    * Show or hide Box Menu
    */
   showHideBoxMenu(x, y, nodeId) {
      
      const type = WebUtil.byId(nodeId).getAttribute("data-type");
      
      if(typeof this.menuForNodes.get(nodeId) === "undefined") {
         this.menuForNodes.clear();
         this.boxMenu.style.display = "block";
         this.menuForNodes.set(nodeId, 1);
      } else if(type !== "menu") {
         this.boxMenu.style.display = "none";
         this.menuForNodes.delete(nodeId);
      }
      
      this.boxMenu.style.top = y + APP_CONF_UI.UNIT;
      this.boxMenu.style.left = x + APP_CONF_UI.UNIT;
      
      this.boxMenu.innerHTML = nodeId;
      
      return this.boxMenu;
   };
   
   createBoxMenu() {
      this.boxMenu = document.createElement("div");
      this.boxMenu.setAttribute("id", BOX_MENU_ID);
      // TODO use element factory
      this.boxMenu.setAttribute("data-type", "menu");
      
      this.boxMenu.style.zIndex = APP_CONF_UI.NODE_MENU_Z_INDEX;
      this.boxMenu.style.position = "absolute";
      this.boxMenu.style.display = "none";
      
      this.appGUI.dragNodeController.applyDraggable(this.boxMenu);
      
      this.appGUI.appContainer.appendChild(this.boxMenu);
   }
 
}