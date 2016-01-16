/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("NtpViaCellInterpreter", {
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
                    }
                ]
            },
            simpleInterpretData: function(values, callback) {

            }
        });
    })();
});
/**
 * Created by Kristin on 12.01.2016.
 */
