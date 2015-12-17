define(['contactJS'], function (contactJS) {
    return (function() {
        ScanWidget.description = {
            out: [
                {
                    'name':'CI_CURRENT_UNIX_TIME',
                    'type':'INTEGER',
                    'parameterList': [["CP_UNIT", "STRING", "MILLISECONDS"]]
                }
            ],
            const: [
                {
                    'name':'',
                    'type':''
                }
            ],
            updateInterval: 5000
        };

        /**
         *
         * @extends Widget
         * @param discoverer
         * @returns {ScanWidget}
         * @class ScanWidget
         */
        function ScanWidget(discoverer) {
            contactJS.Widget.call(this, discoverer);
            this._name = 'ScanWidget';
            return this;
        }

        ScanWidget.prototype = Object.create(contactJS.Widget.prototype);
        ScanWidget.prototype.constructor = ScanWidget;

        ScanWidget.prototype._initCallbacks = function() {
            this._addCallback(new contactJS.Callback().withName('UPDATE').withContextInformation(this.getOutputContextInformation()));
        };

        ScanWidget.prototype.queryGenerator = function(callback) {
            var wifiscanner = require("wifiscanner");
            if (!Scan.now) {
                Scan.now = wifiscanner();

                scanner.scan(function(error, networks){
                    if(error) {
                        console.error(error);
                    } else {
                        console.dir(networks);
                    }
                });
            }

            var response = new contactJS.ContextInformationList();
            response.put(this.getOutputContextInformation().getItems()[0].setValue(Date.now()));
            this._sendResponse(response, callback)
        };

        return ScanWidget;
    })();
});