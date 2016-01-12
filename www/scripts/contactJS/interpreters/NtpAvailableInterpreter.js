/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("NtpAvailableInterpreter", {
            description : {
                in: [
                    {
                        //NtpConnectionWidget
                        'name': 'CI_NTP_SERVER',
                        'type': 'OBJECT',
                        'parameterList': [["CP_UNIT", "STRING", "AVAILABLE_NTP"]]
                    }
                ],
                out: [
                    {
                        'name':'CI_AVAILABLE_NTP',
                        'type':'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "CONNECTION_CELL"]]
                    },
                    {
                        'name':'CI_AVAILABLE_NTP',
                        'type':'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "CONNECTION_WIFI"]]
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
