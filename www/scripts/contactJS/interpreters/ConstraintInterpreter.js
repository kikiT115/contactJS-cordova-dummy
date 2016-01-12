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
                //müssen Hardcoded werden aus dem Handbuch...
            }
        });
    })();
});
