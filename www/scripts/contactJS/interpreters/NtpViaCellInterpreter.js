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
                var result = false;
                var host = values.host;
                var connection = values.connection;
                var available = values.available;

                console.log("TINI1: host - " + host);
                console.log("TINI1: connection - " + connection);
                console.log("TINI1: available - " + available);
                console.log("TINI1: result - " + result);

                if (connection === 'cell' && available === isAvailable){
                    result = true;
                }else if (connection === undefined || available === undefined){
                    result = undefined;
                }else {
                    result = false;
                }
                console.log("TINI2: result - " + result);
                callback({0: result});

                /**callback({0: {
                    host: ntpHost,
                    connection: getConnectedNetwork(),  -- unknown, ethernet, wifi, cell, none
                    available: isAvailable
                }})*/
            }
        });
    })();
});
/**
 * Created by Kristin on 12.01.2016.
 */
