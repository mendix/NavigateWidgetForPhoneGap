define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "NavigateWidgetForPhoneGap/lib/AbstractPhoneGapWidget/widget"
], function(declare, lang, AbstractPhoneGapWidget) {
    "use strict";

    return declare("NavigateWidgetForPhoneGap.widget.NavigateWidgetForPhoneGap", [AbstractPhoneGapWidget], {

        // internal variables.
        addressAttr: "",

        _setupEvents: function(element, className) {
            logger.debug(this.id + "._setupEvents " + className);
            this.connect(element, "click", lang.hitch(this, function(evt) {
                if (!window.launchnavigator) {
                    mx.ui.error("Unable to detect navigate PhoneGap functionality.");
                    return;
                }
                this._onClickAction();
            }));
        },

        _onClickAction: function() {
            var address = this._obj.get(this.addressAttr);
            var success = function() {};
            var error = function(error) {
                alert(error);
            };
            window.launchnavigator.navigate(address, null, success, error);
        }
    });
});

// Compatibility with older mendix versions.
require(["NavigateWidgetForPhoneGap/widget/NavigateWidgetForPhoneGap"], function() {});
