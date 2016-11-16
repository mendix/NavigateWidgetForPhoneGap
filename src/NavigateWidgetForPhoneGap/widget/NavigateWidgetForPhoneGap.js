define([
    "mxui/widget/_WidgetBase", "mxui/dom", "dojo/dom-class", "dojo/dom-construct", "dojo/_base/declare"
], function(_WidgetBase, mxuiDom, dojoClass, dojoConstruct, declare) {
    "use strict";

    return declare("NavigateWidgetForPhoneGap.widget.NavigateWidgetForPhoneGap", _WidgetBase, {

        // internal variables.
        _button: null,
        _hasStarted: false,
        _obj: null,
        _imgNode: null,

        // Externally executed mendix function to create widget.
        startup: function() {
            if (this._hasStarted)
                return;

            this._hasStarted = true;

            // Setup widget
            this._setupWidget();

            // Create childnodes
            this._createChildnodes();

            // Setup events
            this._setupEvents();
        },

        update: function(obj, callback) {
            this._obj = obj;

            if (callback) callback();
        },

        // Setup
        _setupWidget: function() {
            // Set class for domNode
            dojoClass.add(this.domNode, "wx-NavigateWidgetForPhoneGap-container");

            // Empty domnode of this and appand new input
            dojoConstruct.empty(this.domNode);
        },

        // Internal event setup.
        _setupEvents: function() {
            // Attach only one event to dropdown list.
            this.connect(this._button, "click", function(evt) {
                
                if (!window.launchnavigator) {
                    mx.ui.error("Unable to detect navigate PhoneGap functionality.");
                    return;
                }
                this._navigate();

            }.bind(this));
        },

        
        _navigate: function() {

            var address = this._obj.get(this.addressAttr);
            var success = function(){};
            var error = function(error){
                alert(error)  
            };
            launchnavigator.navigate(address, null, success, error);
        },

        _createChildnodes: function() {
            // Placeholder container
            this._button = mxuiDom.create("div", {
                "class": "wx-NavigateWidgetForPhoneGap-button btn"
            }, this.buttonLabel);

            if (this.buttonClass)
                dojoClass.add(this._button, this.buttonClass);

            this._imgNode = mxuiDom.create("img", {
                "width": "64px", "height": "64px",
                "style": {
                    display: "none"
                }
            });

            // Add to wxnode
            this.domNode.appendChild(this._button);
            this.domNode.appendChild(this._imgNode);
        }
    });
});

// Compatibility with older mendix versions.
require([ "NavigateWidgetForPhoneGap/widget/NavigateWidgetForPhoneGap" ], function() {});