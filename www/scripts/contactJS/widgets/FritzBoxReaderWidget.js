define(['contactJS', 'jquery', './WidgetCreator', 'urijs/URI'], function (contactJS, $, WidgetCreator, URI) {
    var ROUTER_URL = "http://192.168.178.1/logincheck.lua";
    var WLAN_PAGE_URL_START = "/wlan/wlan_settings.lua";

    var readStartPage = function(success, error) {
        var startPageFound = function(startPageHTML) {
            readWlanLink(success, error, {html: {logincheck: startPageHTML}, currentUrl: ROUTER_URL});
        };

        $.ajax({
            url: ROUTER_URL,
            success: startPageFound,
            crossDomain: true
        });
    };

    var readWlanLink = function(success, error, options) {
        var html = options.html.logincheck;
        var linkSelector = "a[href^='" + WLAN_PAGE_URL_START + "']";
        var wlanLink = $(linkSelector, html).attr("href");
        var wlanUri = new URI(wlanLink, options.currentUrl);

        var wlanPageFound = function(wlanPageHtml) {
            console.log("WLAN HTML", wlanPageHtml);

            var linkSelector = "input#uiView_SSID";
            var wlanSSID = $(linkSelector, wlanPageHtml).attr("value");

            success(wlanSSID);
        };

        $.ajax({
            url: wlanUri.toString(),
            success: wlanPageFound,
            crossDomain: true
        });
    };

    return WidgetCreator.extend("RouterFinderWidget", {
        description: {
            out: [
                {
                    "name": "CI_WLAN_SSID",
                    "type": "STRING",
                    "parameterList": [["CP_UNIT", "STRING", "WLAN_SSID"]]
                }
            ],
            updateInterval: 2000
        },
        simpleQueryGenerator: function(callback) {
            var success = function(wlanSSID) {
                callback({0: wlanSSID});
                console.log("Hendrik", "WLAN SSID sent", wlanSSID);
            };
            var error = function() {
                console.log(arguments);
            };
            readStartPage(success, error);
        }
    });
});
