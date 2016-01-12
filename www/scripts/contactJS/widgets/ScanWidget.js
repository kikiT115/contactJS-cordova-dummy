define(['contactJS', './WidgetCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("ScanWidget", {
            description : {
                out: [
                    {
                        'name': 'CI_WLAN_DEVICES',
                        'type': 'STRING',
                        'parameterList': [["CP_UNIT", "STRING", "WLAN_DEVICES"]]
                    }
                ],
                updateInterval: 20000
            },
            simpleQueryGenerator: function(callback) {
                WifiWizard.startScan(function(){
                    console.log('Tini1: scan_started');
                    WifiWizard.getScanResults({
                        numLevels: true
                    }, function(networks){
                        console.log('Tini1: get_scanresults_returned')
                        for (var index in networks){
                            var device = networks[index];
                            console.log('Tini1: '+device.SSID)
                        }
                        console.log('Tini1: get_scanresults_finished')
                    }, function(){
                        console.log('Tini1: get_scanresults_failed')
                    })
                },function(){
                    console.log('Tini1: start_scan_failed')
                })
                callback({0:'test'})
            }
        });
    })();
});