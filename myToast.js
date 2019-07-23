/*
jQuery插件: toast提示框
调用方式:
 $.myToast('提示框内容',3000)
 $.hideMyToast()
 */
;(function($, window, document) {
    /**
     * 显示Toast提示框
     * @param  {string,number} content  显示的文案
     * @param  {number} duration 显示的时间(毫秒),默认值2000
     */
    $.myToast = function(content,duration) {
        if ($(".toast").length) {
            $(".toast>p").text(content)
            return
        }
        $('body').append('<div class="toast"><p>' + content + '</p></div>')
        $(".toast").fadeIn();
        setTimeout(function() {
            $(".toast").fadeOut().remove();
        }, duration?duration:2000)
    }

    /**
     * 隐藏Toast提示框
     */
    $.hideMyToast = function(){
        $(".toast").fadeOut().remove();
    }
})($, window, document)

