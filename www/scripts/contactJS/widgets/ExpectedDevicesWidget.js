define(['contactJS', './WidgetCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("ExpectedDevicesWidget", {
            description : {
                out: [
                    {
                        'name': 'CI_DEVICES',
                        'type': 'ARRAY_OF_STRING',
                        'parameterList': [["CP_UNIT", "STRING", "EXPECTED_DEVICES"]]
                    }
                ],
                updateInterval: 20000
            },
            simpleQueryGenerator: function(callback) {
                callback({0:['thermo_name']});
                //bekommen wir von equeo geliefert (data_object)
            }
        });
    })();
});