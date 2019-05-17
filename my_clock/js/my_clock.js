/**
 * @author: weibo
 * @description:
 * @Date: 2019/5/13 下午 7:03
 */

function my_clock(el) {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);
    el.innerHTML = h + ":" + m + ":" + s;
    setTimeout(function () {
        my_clock(el)
    }, 1000);
}

var clock_div = document.getElementById('clock_div');
my_clock(clock_div);

//在my_clock.js文件中我们定义了一个my_clock函数用于显示时间，这个函数包含了一个el参数，这个参数为显示时间的容器，由于在HTML文档中我们设计在id为clock_div的div容器中显示时间，所以调用my_clock函数时我们传入了这个容器，在js文件中用变量clock_div表示。之后my_clock函数1000毫秒之后又会再次调用自身，这样clock_div中显示的时间就会被更新