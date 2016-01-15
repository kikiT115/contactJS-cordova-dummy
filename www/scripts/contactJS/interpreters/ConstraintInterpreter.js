/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("ConstraintInterpreter", {
            description : {
                in: [
                    {
                        //ExpectedDevicesWidget
                        'name': 'CI_DEVICES',
                        'type': 'ARRAY_OF_STRING',
                        'parameterList': [["CP_UNIT", "STRING", "EXPECTED_DEVICES"]]
                    }
                ],
                out: [
                    {
                        'name': 'CI_CONSTRAINTS',
                        'type': 'ARRAY_OF_STRING',
                        'parameterList': [["CP_UNIT", "STRING", "EXPECTED_CONSTRAINTS"]]
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
