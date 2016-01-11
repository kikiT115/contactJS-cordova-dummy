define(['contactJS', './WidgetCreator'], function (contactJS, WidgetCreator) {
    var ntpHost = "clock.psu.edu";

    return WidgetCreator.extend("NtpConnectionWidget", {
        description: {
            out: [
                {
                    "name": "CI_NTP_CONNECTION",
                    "type": "STRING",
                    "parameterList": [["CP_UNIT", "STRING", "CONNECTION"]]
                }
            ],
            updateInterval: 5000
        },
        simpleQueryGenerator: function(callback) {
            var publishResult = function(result) {
                var isAvailable = result !== undefined ? result === 0 : undefined;

                callback({0: {
                    host: ntpHost,
                    available: isAvailable
                }})
            };

            ntp.analyzer.diagnose({host: ntpHost, timeout: 3000}, function(result) {
                console.log("Hendrik: NtpAnalyzer said " + result);
                publishResult(result);
            }, function(error) {
                console.log("Hendrik: Error " + error);
                publishResult(undefined);
            });
        }
    });
});