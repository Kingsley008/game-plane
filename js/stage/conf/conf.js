const  conf_player = {
    playerSpeed: 5,
    bulletSpeed:10,
    cloudSpeed:1,
};

var bindAll = function (sel,eventName, callback ) {
    var l =  document.querySelectorAll(sel);
    for( var i = 0; i < l.length; i++){
        var input = l[i];
        input.addEventListener(eventName,function (e) {
            callback(e);
        })
    }
}


bindAll('.conf', 'input', function (e) {

    var target = e.target;
    // 得到 conf 对象的string
    var bindConf = target.dataset.value;
    var v = target.value;
    eval(bindConf + '=' + v);
    //找到最近的label节点
    var label = target.closest('label').querySelector('.gua-speed');
    label.innerText = v;

});


var range = document.getElementById('myRange');
var fps = range.getAttribute('value');
// fps 绑定 range
range.addEventListener('input', function (e) {
    fps = e.target.value;
});
