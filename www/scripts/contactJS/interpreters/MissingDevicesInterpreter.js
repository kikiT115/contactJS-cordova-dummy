/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS'], function(contactJS) {
    return (function() {
        MissingDevicesInterpreter.description = {
            in: [
                {
                    'name':'CI_MISSING_DEVICES',
                    'type':'STRING',
                    'parameterList': [["CP_UNIT", "STRING", "MILLISECONDS"]]
                }
            ],
            out: [
                {
                    'name':'CI_MISSING_DEVICES',
                    'type':'BOOLEAN',
                    'parameterList': [["CP_UNIT", "STRING", "SECONDS"]]
                }
            ]
        };

        /**
         *
         * @extends Interpreter
         * @param discoverer
         * @returns {SecondsInterpreter}
         * @class SecondsInterpreter
         */
        function MissingDevicesInterpreter(discoverer) {
            contactJS.Interpreter.call(this, discoverer);
            this._name = "MissingDevices";
            return this;
        }

        MissingDevicesInterpreter.prototype = Object.create(contactJS.Interpreter.prototype);
        MissingDevicesInterpreter.prototype.constructor = MissingDevicesInterpreter;

        MissingDevicesInterpreter.prototype._interpretData = function(inContextInformation, outContextInformation, callback) {

        };

        return MissingDevicesInterpreter;
    })();
});