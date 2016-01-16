/**
 * Created by Kristin on 16.01.2016.
 */
define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("NtpViaWifiInterpreter", {
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
                        'parameterList': [["CP_UNIT", "STRING", "CONNECTION_WIFI"]]
                    }
                ]
            },
            simpleInterpretData: function(values, callback) {

            }
        });
    })();
});