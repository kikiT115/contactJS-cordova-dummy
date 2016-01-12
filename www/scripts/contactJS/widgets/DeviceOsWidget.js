define(['contactJS', 'jquery', './WidgetCreator'], function(contactJS, $, WidgetCreator) {
    return WidgetCreator.extend("DeviceOsWidget", {
        description: {
            out: [
                {
                    "name": "CI_DEVICE_OS",
                    "type": "OBJECT",
                    "parameterList": [["CP_UNIT", "STRING", "AVAILABLE_OS"]]
                }
            ],
            updateInterval: 10000
        },
        simpleQueryGenerator: function(callback) {
            callback({0: {
                os: device.platform,
                version: device.version
            }})
        }
    });
});