define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("NtpProblemInterpreter", {
            description : {
                in: [
                    {
                        // ConstraintInterpreter
                        'name': 'CI_CONSTRAINTS',
                        'type': 'ARRAY_OF_STRING',
                        'parameterList': [["CP_UNIT", "STRING", "EXPECTED_CONSTRAINTS"]]
                    },
                    {
                        // SupportKeywordWidget
                        'name': 'CI_KEYWORD',
                        'type': 'STRING',
                        'parameterList': [["CP_UNIT", "STRING", "SUPPORT_KEYWORD"]]
                    },
                    {
                        // NtpAvailableInterpreter
                        'name': 'CI_AVAILABLE_NTP',
                        'type': 'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "CONNECTION_CELL"]]
                    },
                    {
                        // NtpAvailableInterpreter
                        'name': 'CI_AVAILABLE_NTP',
                        'type': 'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "CONNECTION_WIFI"]]
                    }
                ],
                out: [
                    {
                        'name': 'CI_NTP_PROBLEM',
                        'type': 'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "CONNECTION_CELL"]]
                    },
                    {
                        'name': 'CI_NTP_PROBLEM',
                        'type': 'BOOLEAN',
                        'parameterList': [["CP_UNIT", "STRING", "CONNECTION_WIFI"]]
                    }
                ]
            },
            simpleInterpretData: function(values, callback) {
            }
        });
    })();
});