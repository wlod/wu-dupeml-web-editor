"use strict";

const APP_CONF = {
      APP_DOM_ID : "app",
      APP_STYLES : [ "css/app/App.css" ],
      APP_SCRIPTS : [ "js/app/util/AppGUIUtil.js", "js/app/controller/ActionController.js", "js/app/controller/DragNodeController.js",
                  "js/app/controller/MenuController.js", "js/app/controller/NodeController.js", "js/app/gui/NodeDrawer.js", "js/app/gui/MenuDrawer.js",
                  "js/app/gui/LineDrawer.js", "js/app/AppGUI.js" ]
};

const APP_CONF_UI = {
      UNIT : "px",
      NODE_BOX_HEIGHT : 75,
      NODE_BOX_WIDTH : 100,
      LINE_Z_INDEX : 50000,
      NODE_Z_INDEX : 10000,
      NODE_MENU_Z_INDEX : 100000,
};