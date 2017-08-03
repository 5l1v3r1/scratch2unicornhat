(function (ext) {
    var COLORS = {
      "赤":[255, 0, 0],
      "青":[0, 255, 0],
      "緑":[0, 0, 255]
    };
    var serverUrl = "http://localhost:8080";

    ext.addPixel = function(x, y, r, g, b) {
        $.get(serverUrl + "/add_pixel/" + x + "/" + y + "/" + r + "/" + g + "/" + b, function() {
            console.log("addPixel succeeded");
        }).fail(function() {
            console.log("addPixel failed!");
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
            [" ", "x:%n y:%n のLEDを r:%n g:%n b:%n の色で点ける", "addPixel", 0, 0, 255, 255, 255],
            [" ", "全部消す", "allClear"],
        ],
        menus: {
            colors: Object.keys(COLORS)
        }
    };

    ScratchExtensions.register('scratchx2unicornhat', descriptor, ext);

})({});
