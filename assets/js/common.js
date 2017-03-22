/**
 * Created by zhengsl on 2017/3/21.
 */

window.dojoConfig = {
    packages: [
        {
            name: "vue",
            location: getRelUrl() + "/assets/js",
            main: "vue"
        },
        {
            name: "vMapView",
            location: getRelUrl() + "/assets/components",
            main: "vMapView"
        }
    ]
};
function getRelUrl() {
    var relUrl = '';
    var url = document.location.toString();
    if (url.indexOf('?') != -1) {
        relUrl = url.split('?')[0];
    } else {
        relUrl = url;
    }
    var pos = relUrl.lastIndexOf('/');
    relUrl = relUrl.substr(0, pos);
    return relUrl;
}