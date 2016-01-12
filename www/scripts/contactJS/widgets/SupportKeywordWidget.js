/**
 * Created by Kristin on 12.01.2016.
 */

define(['contactJS', './WidgetCreator'], function (contactJS, creator) {
    return (function() {
        return creator.extend("SupportKeywordWidget", {
            description : {
                out: [
                    {
                        'name': 'CI_KEYWORD',
                        'type': 'STRING',
                        'parameterList': [["CP_UNIT", "STRING", "KEYWORD"]]
                    }
                ],
                updateInterval: 20000
            },
            simpleQueryGenerator: function(callback) {
                callback({0:['time']});
                //bekommen wir von equeo geliefert (data_object)
            }
        });
    })();
});
