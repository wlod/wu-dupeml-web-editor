"use strict";

class AppGUIUtil {
   
   /**
    * Get UI value - depends on AppConf APP_CONF_UI.UNIT
    */
    static normalizeValue(value) {
       if(value == null || typeof value === 'undefined' ) {
          return value;
       }
       return parseInt(value.replace(APP_CONF_UI.UNIT,'').trim());
    }
   
}