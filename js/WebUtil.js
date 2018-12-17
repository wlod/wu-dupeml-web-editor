"use strict";

class WebUtil {
    
    /**
       * Append js script file to DOM
       */
    static appendScriptToDOM(path) {
        const script = document.createElement("script");
        script.setAttribute("type","text/javascript");
        script.setAttribute("src", path);
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    /**
       * Append css file to DOM
       */
    static appendStyleToDOM(path, onloadFunction) {
       const style = document.createElement("link");
       style.setAttribute("rel","stylesheet");
       style.setAttribute("type","text/css");
       style.setAttribute("href", path);
       if(typeof onloadFunction !== "undefined" && onloadFunction !== null) {
          style.onload = onloadFunction;
       }
       document.getElementsByTagName("head")[0].appendChild(style);
    }
    
    /**
       * Check developer options
       */
    static isQueryParamPresent(queryParam) {
        const url = new URL(window.location.href);
        const param = url.searchParams.get(queryParam);
        if(typeof param !== "undefined" && param !== null) {
            return true;
        }
        return false;
    }
    
    /**
       * Waiting to load DOM element by selector. Default value for attempt is
       * 5. Other parameters should be set directly.
       */
    static waitForDomElement(selector, time, func, attempt) {
        let inAttempt = (typeof attempt !== "undefined" && attempt !== null) ? attempt : 5;
        let loadedElement = document.querySelector(selector);
        if(loadedElement !== null) {
            func(loadedElement);
            return;
        }
        else if (inAttempt < 0) {
            console.error("Cannot load element: " + selector);
            return;
        }
        else {
            inAttempt -= 1;
            setTimeout(() => { WebUtil.waitForDomElement(selector, time, func, inAttempt); }, time);
        }
    }
    
    static byId(elementId) {
       return document.getElementById(elementId);
    }

    static cookieValue(cookieName) {
       let cookieValue = document.cookie.match(cookieName + '=([^;]*)');
       if(isNotEmpty(cookieValue)) {
          return cookieValue[1];
       }
       return null;
    }
    
}