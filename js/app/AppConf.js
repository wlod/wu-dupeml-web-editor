"use strict";

const APP_CONF = {
      APP_DOM_ID : "app",
      APP_STYLES : [ "css/app/App.css" ],
      APP_SCRIPTS : [ "js/app/gui/NodeDrawer.js", "js/app/gui/LineDrawer.js", "js/app/AppGUI.js" ]
};


const APP_CONF_UI = {
      UNIT : "px",
      NODE_BOX_HEIGHT : 75,
      NODE_BOX_WIDTH : 100
};


// TODO remove - only for tests
const AppConf = (function() {
   function impl() {
      this.stylesLoaded = function() {
         APP_CONF.APP_STYLES.forEach( style => {
            let loadedSheet = document.head.querySelector('link[href*="' + style + '"]').sheet;
            console.log("Check: ", style, Boolean(loadedSheet));
            if(!Boolean(loadedSheet)) {
               return false;
            }
         });
         return true;
      };

   }
   var instance;
   return {
      inst : function() {
         if (instance == null) {
            instance = new impl();
            // Hide the constructor so the returned object can't be new'd...
            instance.constructor = null;
         }
         return instance;
      }
   };
})();