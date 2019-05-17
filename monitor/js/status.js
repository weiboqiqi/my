/**
 * @author: weibo
 * @description:
 * @Date: 2019/5/15 下午 5:01
 */

function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function(){
        callback(false);
    }
    xhr.send();
}

function checkStatus(){
    httpRequest('https://www.baidu.com/', function(status){
        chrome.browserAction.setIcon({path: 'images/'+(status?'online.png':'offline.png')}); //这个方法的作用就是更换扩展在浏览器工具栏中的图标
        setTimeout(checkStatus, 5000); //每5秒调用一次
    });
}

checkStatus();