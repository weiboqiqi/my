/**
 * @author: weibo
 * @description:
 * @Date: 2019/5/16 下午 7:03
 */

function chgIcon(index){
    if(!index){
        index = 0;
    }
    else{
        index = index%20;
    }
    chrome.browserAction.setIcon({path: {'19': 'images/icon19_'+index+'.png'}},function(){
        //alert('你是一个大乌龟')
        //alert(JSON.stringify(arguments))
    });
    chrome.browserAction.setIcon({path: {'38': 'images/icon38_'+index+'.png'}},function(){
        //alert(JSON.stringify(arguments))
        //alert('你是一个大乌龟')
    });
    setTimeout(function(){chgIcon(index+1)},50);
}

chgIcon();