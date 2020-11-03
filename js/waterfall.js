function waterfall(id, w, $gridsWidth) {
    var $waterfall = $(id);
    var $grids = $waterfall.find("li");

    var col = parseInt(w / $gridsWidth);  //总列数。
    waterfall();

    function waterfall() {
        var arr = [];
        $grids.each(function (j) {
            var left = (j % col) * $gridsWidth;
            var sum = 0;    //sum是这个盒子上面所有盒子的总高度
            for (var i = j - col ; i >= 0 ; i = i - col) {
                sum = sum + $grids.eq(i).outerHeight();
            };
            arr[j] = sum + $(this).outerHeight();
            $(this).stop(true).animate(
              {
                  "left": left,
                  "top": sum
              }, 300);
            //$(this).css("top", sum);
            //$(this).css("left", left);
            //$(this).animate({ "opacity": 1 }, 300);
        });
        $waterfall.css("height", Math.max.apply(null, arr));
    }

    function waterfall2() {
        var arr = [];
        $grids.each(function (j) {
            var left = (j % col) * $gridsWidth;
            if (j < 5) {
                $(this).stop(true).animate(
              {
                  "left": left,
                  "top": 0
              }, 300);
                arr.push($(this).outerHeight());
            } else {
                var minHeight = Math.min.apply(null, arr);
                var minIndex = $.inArray(minHeight, arr);
                arr[minIndex] += $(this).outerHeight();
                $(this).stop(true).animate(
              {
                  "left": left,
                  "top": minHeight
              }, 300);
            }
        });
        $waterfall.css("height", Math.max.apply(null, arr));
    }
};