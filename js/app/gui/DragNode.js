// Temporary based on https://www.w3schools.com/howto/howto_js_draggable.asp
function dragNode(node, lineDrawer) {
   let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

   node.onmousedown = dragMouseDown;

   function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
   }

   function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      node.style.top = (node.offsetTop - pos2) + APP_CONF_UI.UNIT;
      node.style.left = (node.offsetLeft - pos1) + APP_CONF_UI.UNIT;
      
      node.getAttribute("data-lines").split(",").forEach((line) => {
         if(line.length > 0) {
            lineDrawer.redrawLine(line);
         }
      });
   }

   function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
   }
}

// TODO to remove
function DragNodeLoaded() {
}