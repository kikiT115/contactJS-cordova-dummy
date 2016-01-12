/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("WifiUiInterpreter", {
            description : {
                in: [
                    {
                        //DeviceOsWidget
                        'name': 'CI_DEVICE_OS',
                        'type': 'OBJECT',
                        'parameterList': [["CP_UNIT", "STRING", "AVAILABLE_OS"]]
                    }
                ],
                out: [
                    {
                        'name':'CI_WIFI_UI',
                        'type':'STRING',
                        'parameterList': [["CP_UNIT", "STRING", "WIFI_UI"]]
                    }
                ],
                updateInterval: 20000
            },
            simpleInterpretData: function(values, callback) {
                //müssen Hardcoded werden aus dem Handbuch...
            }
        });
    })();
});
/**
 * Created by Kristin on 12.01.2016.
 */
