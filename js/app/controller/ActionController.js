"use strict";

class ActionController {

   constructor() {
      this.actions = new Map();
   };
   
   // Currently registration works only for one action, after trying register new one the old actions are removed.
   registerAndCheckIsAvailable(e, name) {
      
      let actionIndex = new Action(e).id();
      let action = this.actions.get(actionIndex);
      
      // remove duplicate action for the same name and actionIndex
      // it will be override after
      if(action === name) {
         action = null;
      }
      
      let isNew = false;
      if(action == null || action === "undefined") {
         // clear actions for new one
         this.actions.clear();
         this.actions.set(actionIndex, name);
         isNew = true;
      }
      console.debug("try register [" + name + "] index: ", actionIndex, action, this.actions.size, isNew);
      return isNew;
   }
   
}

class Action {
   constructor(e) {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
   }
   
   id() {
      return this.clientX + "_" + this.clientY;
   }
}