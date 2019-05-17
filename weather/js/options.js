/**
 * @author: weibo
 * @description:
 * @Date: 2019/5/15 下午 5:36
 */

var city = localStorage.city;
city = city?city:'beijing';
document.getElementById('city').value = city;
document.getElementById('save').onclick = function(){
    localStorage.city = document.getElementById('city').value;
    alert('保存成功。');
}