/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS', './InterpreterCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("WifiUiInterpreter", {
            description : {
                in: [
                    {
                        //DeviceOsWidget
                        'name': 'CI_DEVICE_OS',
                        'type': 'OBJECT',
                        'parameterList': [["CP_UNIT", "STRING", "AVAILABLE_OS"]]
                    }
                ],
                out: [
                    {
                        'name':'CI_WIFI_UI',
                        'type':'STRING',
                        'parameterList': [["CP_UNIT", "STRING", "WIFI_UI"]]
                    }
                ]
            },
            simpleInterpretData: function(values, callback) {
                var d = values[0];
                // Wir wollen folgende Smartphones unterstützen

                // - Samsung Galaxy S4 (Tini, Hendrik)
                if (d.os === "Android" && d.version.startsWith("5.") && d.model === "GT-I9515") {
                    callback({0: "Galaxy-S4-Android-5"});
                    return;
                }

                // - Samsung Galaxy S6 (Matze)
                // - Galaxy Nexus (Lehrstuhl)
                // - Wiko Jam Up (Alina)

                // Unbekanntes Gerät
                callback({0: "Unknown-device"});
            }
        });
    })();
});