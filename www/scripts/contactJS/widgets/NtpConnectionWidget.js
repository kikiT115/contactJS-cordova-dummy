define(['contactJS', './WidgetCreator'], function (contactJS, WidgetCreator) {
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
            var ntpHost = "clock.psu.edu";
            ntp.analyzer.diagnose({host: ntpHost, timeout: 3000}, function(result) {
                console.log("Hendrik: NtpAnalyzer said " + result);
            }, function(error) {
                console.log("Hendrik: Error " + error);
            });
        }
    });
});