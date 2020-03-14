//获取模态窗口
var modal = document.getElementById('myModal');

//获取图片模态框，alt属性作为图片弹出中文本描述
var img = document.getElementById('ewn');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function(){
    modal.style.display = "block";    //点击图片把这个modal窗口作为block块展示
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;   //这里结识了为什么弹出来的窗口图片下面会显示img的alt属性的值
}

//获取 <span> 元素， 设置关闭模态框按钮
var span = document.getElementsByClassName('close')[0];

//点击<span> 元素上的(x), 关闭模态框按钮
span.onclick = function(){
    modal.style.display = "none";   //点击x将modal窗口隐藏
}