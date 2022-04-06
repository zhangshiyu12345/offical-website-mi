function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }
    else{
        return obj.currentStyle[name];
    }
}

var timer;
box1=document.getElementById("box1");
  //移动，方向
  //创建一个可以执行简单动画的函数
  //obj 要执行动画的对象
  //speed 移动的速度 正数向右移动，负数向左移动
  //target 执行动画的目标位置
  //attr:要执行动画的样式,要修改动画的样式
  //callback:回调函数，将会在动画执行完毕以后执行
  function move(obj,attr,target,speed,callback){
      clearInterval(obj.timer);
      var current=parseInt(getStyle(obj,attr));
      if(current>target)
      {
          speed=-speed;
      }
      //保存自己的定时器标识
      obj.timer=setInterval(function(){
          var oldValue=parseInt(getStyle(obj,attr));
          var newValue=oldValue+speed;
          if((newValue<target&&speed<0)||(speed>0&&newValue>target))
          {
              newValue=target;
          }
          obj.style[attr]=newValue+"px";
          if(newValue==target){
              clearInterval(obj.timer);
              //动画执行完毕来执行回调函数
              callback && callback();
          }
      },30);
  };
 