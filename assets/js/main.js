/**
 * Created by zhengsl on 2017/3/21.
 */
window.onload= function () {
    require([
        "vue"
    ], function (Vue) {
        require(["vMapView"], function () {
            new Vue({
                el: "#widgets",
                data: {
                    id: "map"
                }
            });
        });
    });
};