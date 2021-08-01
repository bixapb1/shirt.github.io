(function () {
    var _id = "d26c81c9c99e5d249102731b7681cda2";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:322px;height:94px;'></div>");
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [0, 1, 1, 1],
            "type": {
                "currentType": "2",
                "params": {"startByFirst": true, "days": "0", "hours": "3", "minutes": "52", "utc": 0}
            },
            "design": {
                "type": "circle",
                "params": {
                    "width": "9",
                    "radius": "37",
                    "line": "gradient",
                    "line-color": ["#fb1a1b", "#efefef"],
                    "background": "solid",
                    "background-color": "rgba(251,26,27,0.24)",
                    "direction": "direct",
                    "number-font-family": {
                        "family": "Ubuntu",
                        "link": "<link href='//fonts.googleapis.com/css?family=Ubuntu&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "39",
                    "number-font-color": "#000000",
                    "separator-margin": "10",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Ubuntu",
                        "link": "<link href='//fonts.googleapis.com/css?family=Ubuntu&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "13",
                    "text-font-color": "#000000"
                }
            },
            "designId": 9,
            "theme": "black",
            "width": 322,
            "height": 94
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);