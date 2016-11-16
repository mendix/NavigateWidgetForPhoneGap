define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "NavigateWidgetForPhoneGap/lib/AbstractPhoneGapWidget/widget"
], function(declare, lang, AbstractPhoneGapWidget) {
    "use strict";

    return declare("NavigateWidgetForPhoneGap.widget.NavigateWidgetForPhoneGap", [AbstractPhoneGapWidget], {

        // internal variables.
        addressAttr: "",

        _phoneGapCheck: function () {
            return !!window.launchnavigator;
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
