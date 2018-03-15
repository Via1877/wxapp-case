App({
    onLaunch: function () {
         console.log('正在初始化')
    },
    onShow: function () {
        console.log('监听显示')
    },
    onHide: function () {
        console.log('监听隐藏')
    },
    onError: function (msg) {
        console.log('错误监听函数')
    }
})