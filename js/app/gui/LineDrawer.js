"use strict";

class LineDrawer {
   
   constructor(domContainer) {
      this.domContainer = domContainer;
   }
   
   line() {
      // TODO add ID from_to - manage remove elements
      const line = document.createElement("div");
      line.style.width = "1" + APP_CONF_UI.UNIT;
      line.style.position = "absolute";
      line.style.backgroundColor = "#000";
      this.domContainer.appendChild(line);
      return line;
   };
   
   adjustLine(from, to) {
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
      
      const line = this.line();
      line.style["-webkit-transform"] = rotateValue;
      line.style["-moz-transform"] = rotateValue;
      line.style["-ms-transform"] = rotateValue;
      line.style["-o-transform"] = rotateValue;
      line.style["-transform"] = rotateValue;
      line.style.top    = top + 'px';
      line.style.left   = left + 'px';
      line.style.height = distance + 'px';
   }
   
}