function ajax(options) {
    var xhr = new XMLHttpRequest();
    //拼接请求参数的变量
    var params = '';
    for (var attr in options.data) {
        params += attr + '=' + options.data[attr] + '&';
    }
    //截取字符串
    params = params.substr(0, params.length - 1);
    if (options.type == 'get') {
        options.url = options.url + '?' + params;
    }
    xhr.open(options.type, options.url);
    if (options.type == 'post') {
        //向服务器端传递的请求参数的类型
        var ContentType = options.header['Content-Type'];
        // 设置请求参数格式的类型
        xhr.setRequestHeader('Content-Type', options.header['Content-type']);
        xhr.send(params);
    } else {
        xhr.send();
    }
    xhr.onload = function() {
        options.success();
    }
}
ajax({
    type: 'get',
    url: 'http://127.0.0.1:3000',
    data: {
        name: '小刘',
        age: 20
    },
    header: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: function(data) {
        console.log('这里是success函数' + data)
    }

})