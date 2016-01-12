/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("MissingDeviceInterpreter", {
            description : {
                in: [
                    {
                        //ScanWidget
                        'name': 'CI_WLAN_DEVICES',
                        'type': 'STRING',
                        'parameterList': [["CP_UNIT", "STRING", "WLAN_DEVICES"]]
                    },
                    {
                        //ExpectedDevicesWidget
                        'name': 'CI_DEVICES',
                        'type': 'STRING',
                        'parameterList': [["CP_UNIT", "STRING", "DEVICES"]]
                    }
                ],
                out: [
                    {
                        'name':'CI_DEVICES',
                        'type':'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "SECONDS"]]
                    }
                ],
                updateInterval: 20000
            },
            simpleInterpretData: function(values, callback) {
                var value = values[0];
                console.log('Tini2: '+value);
                callback({0:true});
                console.log('Tini2: response_sent');
            }
        });
    })();
});