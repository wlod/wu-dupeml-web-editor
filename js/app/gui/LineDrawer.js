"use strict";

class LineDrawer {
   
   constructor(domContainer) {
      this.domContainer = domContainer;
      this.lineCounter = 0;
   }
   
   line(id) {
      const line = document.createElement("div");
      line.style.width = "1" + APP_CONF_UI.UNIT;
      line.style.position = "absolute";
      line.style.zIndex = APP_CONF_UI.LINE_Z_INDEX + this.lineCounter;
      
      line.className = "line";
      
      line.setAttribute("id", id);
      
      this.domContainer.appendChild(line);
      this.lineCounter++;
      return line;
   };
   
   adjustLine(from, to) {
      const line = this.line(this._getId(from,to));
      this._drawLine(from, to, line);
      this._updateReferences(from, to, line);
   };
   
   redrawLines(lineIds) {
      lineIds.forEach(lineId => {
         this.redrawLine(lineId);
      })
   };
   
   redrawLine(lineId) {
      const from = WebUtil.byId(this._getNodeIdFrom(lineId));
      const to = WebUtil.byId(this._getNodeIdTo(lineId));
      const line = WebUtil.byId(lineId);
      this._drawLine(from, to, line);
   };
   
   _drawLine(from, to, line) {
      const fromTop = from.offsetTop + from.offsetHeight/2;
      const fromLeft = from.offsetLeft + from.offsetWidth/2;
      const toTop = to.offsetTop + to.offsetHeight/2;
      const toLeft = to.offsetLeft + to.offsetWidth/2;
      
      const distanceHeight = Math.abs(toTop - fromTop);
      const distanceWidth = Math.abs(toLeft - fromLeft);
      const distance = Math.sqrt(distanceHeight*distanceHeight + distanceWidth*distanceWidth);
      
      let angle  = 180 / Math.PI * Math.acos( distanceHeight/distance );
      let top = 0;
      let left = 0;
      
      
      if(toTop > fromTop) {
         top  = (toTop-fromTop)/2 + fromTop;
      } else {
         top  = (fromTop-toTop)/2 + toTop;
      }
      
      if(toLeft > fromLeft) {
         left = (toLeft-fromLeft)/2 + fromLeft;
      } else {
         left = (fromLeft-toLeft)/2 + toLeft;
      }

      if( ( fromTop < toTop && fromLeft < toLeft ) ||
          ( toTop < fromTop && toLeft < fromLeft ) ||
          ( fromTop > toTop && fromLeft > toLeft ) ||
           (toTop > fromTop && toLeft > fromLeft ) ) {
         angle *= -1;
      }
  
      top-= distance/2;
  
      const rotateValue = 'rotate(' + angle + 'deg)';
      
      line.style["-webkit-transform"] = rotateValue;
      line.style["-moz-transform"] = rotateValue;
      line.style["-ms-transform"] = rotateValue;
      line.style["-o-transform"] = rotateValue;
      line.style["-transform"] = rotateValue;
      line.style.top    = top + 'px';
      line.style.left   = left + 'px';
      line.style.height = distance + 'px';
   };
   
   _updateReferences(from, to, line) {
      const currentNodeTo = from.getAttribute("data-node-to");
      const currentNodeFrom = to.getAttribute("data-node-from");
      const currentLinesFrom = from.getAttribute("data-lines");
      const currentLinesTo = to.getAttribute("data-lines");
      
      from.setAttribute("data-node-to", to.id + "," + currentNodeTo);
      to.setAttribute("data-node-from", from.id + "," + currentNodeFrom);
      
      to.setAttribute("data-lines", line.id + "," + currentLinesTo);
      from.setAttribute("data-lines", line.id + "," + currentLinesFrom);
   };
   
   _getId(from, to) {
      return from.id + "_" + to.id;
   };
   
   _getNodeIdFrom(lineId) {
      return lineId.split("_")[0];
   };
   
   _getNodeIdTo(lineId) {
      return lineId.split("_")[1];
   };
   
}