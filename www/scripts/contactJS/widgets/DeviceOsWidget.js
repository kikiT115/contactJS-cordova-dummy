define(['contactJS', 'jquery', './WidgetCreator'], function(contactJS, $, WidgetCreator) {
    return WidgetCreator.extend("DeviceOsWidget", {
        description: {
            out: [
                {
                    "name": "CI_DEVICE_OS",
                    "type": "STRING",
                    "parameterList": [["CP_UNIT", "STRING", "DEVICE_OS"]]
                },
                {
                    "name": "CI_DEVICE_VERSION",
                    "type": "STRING",
                    "parameterList": [["CP_UNIT", "STRING", "DEVICE_VERSION"]]
                }
            ],
            updateInterval: 10000
        },
        simpleQueryGenerator: function(callback) {
            callback({0: device.platform, 1: device.version})
        }
    });
});