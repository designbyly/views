var dates = [{
    name: "橘子1号",
    subject: '前端',
    score: 100
}, {
    name: "橘子2号",
    subject: '前端',
    score: 10
}, {
    name: "橘子3号",
    subject: '前端',
    score: 14
}, {
    name: "橘子4号",
    subject: '前端',
    score: 99
},
{
    name: "橘子5号",
    subject: '前端',
    score: 999
}];
var tbody = document.querySelector('tbody');
for (var i = 0; i < dates.length; i++) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (var k in dates[i]) {
        var td = document.createElement('td');
        console.log(dates[i][k]);
        td.innerHTML = dates[i][k];
        tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.innerHTML = '<a href=javascript:;>删除</a>';
    tr.appendChild(td);
}
var as = document.querySelectorAll('a');
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function() {
        tbody.removeChild(this.parentNode.parentNode);
    }
}