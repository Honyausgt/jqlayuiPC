// 使用方法：width:4rem;max-width:100%;
// 说明：此方法设置了最大宽度为900px 
/**
 * rem
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        // 尺寸改变时的事件
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //          docEl.style.fontSize = 100 * (clientWidth / 360) + 'px';
            if (clientWidth >= 900) {   // 页面宽不小于900
                docEl.style.fontSize = '250px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 360) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);