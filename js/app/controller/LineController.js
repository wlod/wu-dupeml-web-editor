"use strict";

class LineController {

   constructor(appGUI) {
      this.appGUI = appGUI;
   };
   
   
   removeLines(node) {
      this._removeLines(node, "data-node-to");
      this._removeLines(node, "data-node-from");
      
      if (node.hasAttribute("data-lines")) {
         node.getAttribute("data-lines").split(",").forEach((lineId) => {
            if(lineId.length > 0) { 
               const line = WebUtil.byId(lineId);
               line.remove();
            }
         });
      }
      
   }
   
   
   _removeLines(node, source) {
      node.getAttribute(source).split(",").forEach((nodeToId) => {
         if(nodeToId.length > 0) { 
            const nodeTo = WebUtil.byId(nodeToId);
            nodeTo.setAttribute("data-node-to", nodeTo.getAttribute("data-node-to").replace(node.id, ""));
            nodeTo.setAttribute("data-node-from", nodeTo.getAttribute("data-node-from").replace(node.id, ""));
            
            if (nodeTo.hasAttribute("data-lines")) {
               let newDataLines = "";
               nodeTo.getAttribute("data-lines").split(",").forEach((lineId) => {
                 if(lineId.length > 0) {
                    if(!lineId.includes(node.id)) {
                       newDataLines += lineId + ",";
                    }
                 }
               });
               nodeTo.setAttribute("data-lines", newDataLines);
            }
         }
      });
      
   }
   
   
}