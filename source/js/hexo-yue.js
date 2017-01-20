//代码高亮
hljs.initHighlightingOnLoad();
//nav切换
var inner_main = document.querySelector('#nav .main');
var toggle = document.querySelector('#nav .toggle');
toggle.onclick = function () {
    inner_main.classList.toggle("disabled");
};
