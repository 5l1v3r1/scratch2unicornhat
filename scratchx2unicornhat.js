(function (ext) {
    var COLORS = {
      "白(255, 255, 255)" : [255, 255, 255],
      "銀(192, 192, 192)" : [192, 192, 192],
      "灰(128, 128, 128)" : [128, 128, 128],
      "黒(0, 0, 0)" : [0, 0, 0],
      "赤(255, 0, 0)" : [255, 0, 0],
      "茶(128, 0, 0)" : [128, 0, 0],
      "黄(255, 255, 0)" : [255, 255, 0],
      "オリーブ(128, 128, 0)" : [128, 128, 0],
      "黄緑(0, 255, 0)" : [0, 255, 0],
      "緑(0, 128, 0)" : [0, 128, 0],
      "水色(0, 255, 255)" : [0, 255, 255],
      "青緑(0, 128, 128)" : [0, 128, 128],
      "青(0, 0, 255)" : [0, 0, 255],
      "紺(0, 0, 128)" : [0, 0, 128],
      "赤紫(255, 0, 255)" : [255, 0, 255],
      "紫(128, 0, 128)" : [128, 0, 128]
    };
    var COORDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var serverUrl = "http://localhost:8080";

    ext.addPixel = function(x, y, r, g, b) {
        $.get(serverUrl + "/add_pixel/" + x + "/" + y + "/" + r + "/" + g + "/" + b, function() {
            console.log("addPixel succeeded");
        }).fail(function() {
            console.log("addPixel failed!");
        });
    };

    ext.addPixelSimple = function(x, y, color) {
        [r, g, b] = COLORS[color];
        $.get(serverUrl + "/add_pixel/" + x + "/" + y + "/" + r + "/" + g + "/" + b, function() {
            console.log("addPixelSimple succeeded");
        }).fail(function() {
            console.log("addPixelSimple failed!");
        });
    };

    ext.setPixel = function(x, y, r, g, b) {
        $.get(serverUrl + "/set_pixel/" + x + "/" + y + "/" + r + "/" + g + "/" + b, function() {
            console.log("setPixel succeeded");
        }).fail(function() {
            console.log("setPixel failed!");
        });
    };

    ext.convert = function(code) {
        $.post(serverUrl + "/convert", {
          code: code
        }, function() {
            console.log("convert succeeded");
        }).fail(function() {
            console.log("convert failed!");
        });
    };

    ext.show = function() {
        $.get(serverUrl + "/show", function() {
            console.log("show succeeded");
        }).fail(function() {
            console.log("show failed!");
        });
    };

    ext.clear = function() {
        $.get(serverUrl + "/clear", function() {
            console.log("clear succeeded");
        }).fail(function() {
            console.log("clear failed!");
        });
    };

    ext.allClear = function() {
      $.get(serverUrl + "/all_clear", function() {
          console.log("allClear succeeded");
      }).fail(function() {
          console.log("allClear failed!");
      });
    };

    ext._getStatus = function() {
        return { status:2, msg:'Ready' };
    };

    ext._shutdown = function() {};

    var descriptor = {
        blocks: [
            [" ", "x:%n y:%n のLEDを r:%n g:%n b:%n の色で表示する", "addPixel", 0, 0, 255, 255, 255],
            [" ", "x: %m.coords y: %m.coords のLEDを %m.colors で表示する", "addPixelSimple", 0, 0, "白(255, 255, 255)"],
            [" ", "x:%n y:%n のLEDを %m.colors で表示する", "addPixelSimple", 0, 0, "白(255, 255, 255)"],
            [" ", "x:%n y:%n のLEDを r:%n g:%n b:%n の色にする", "setPixel", 0, 0, 255, 255, 255],
            [" ", "SIDAコードから変換する %s", "convert", ""],
            [" ", "表示する", "show"],
            [" ", "クリアする", "clear"],
            [" ", "全部消す", "allClear"],
        ],
        menus: {
            colors: Object.keys(COLORS),
            coords: COORDS
        }
    };

    ScratchExtensions.register('scratchx2unicornhat', descriptor, ext);

})({});
