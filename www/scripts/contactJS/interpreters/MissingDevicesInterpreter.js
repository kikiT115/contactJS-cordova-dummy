/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("MissingDeviceInterpreter", {
            description: {
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
                var dev1, dev2 = false;
                for (var index1 in available_devices){
                    var scan_dev = available_devices[index1];

                    for (var index2 in expected_devices){
                        var exp_dev = expected_devices[index2];

                        if (scan_dev === exp_dev){
                            console.log('Tini: expected device found!');

                            if (scan_dev == 'FritzBox_3635'){
                                console.log('Tini: device FritzBox_3635 found!');
                                dev1 = true;
                            }
                            else if (scan_dev == 'ThermoGod_30B') {
                                console.log('Tini: device ThermoGod_30B found!');
                                dev2 = true;
                            }
                        }
                    }
                }
                console.log('Tini: ' + dev1 + dev2);
                callback({0:dev1, 1:dev2});
            }

        });
    })();
});