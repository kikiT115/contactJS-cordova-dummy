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
                        'name': 'CI_DEVICES',
                        'type': 'ARRAY_OF_STRING',
                        'parameterList': [["CP_UNIT", "STRING", "AVAILABLE_DEVICES"]]
                    },
                    {
                        //ExpectedDevicesWidget
                        'name': 'CI_DEVICES',
                        'type': 'ARRAY_OF_STRING',
                        'parameterList': [["CP_UNIT", "STRING", "EXPECTED_DEVICES"]]
                    }
                ],
                out: [
                    {
                        'name': 'CI_AVAILABLE_DEVICES',
                        'type': 'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "FritzBox_3635"]]
                    },
                    {
                        'name': 'CI_AVAILABLE_DEVICES',
                        'type': 'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "ThermoGod_30B"]]
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