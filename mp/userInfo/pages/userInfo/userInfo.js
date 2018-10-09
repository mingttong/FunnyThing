//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
        url: '../logs/logs'
        })
    },
    onLoad: function () {
        const that = this;
        wx.getSetting({
            success({ authSetting }) {
                if (authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success({ userInfo }) {
                            that.setData({
                                userInfo,
                                hasUserInfo: true,
                            });
                        },
                    });
                }
            },
        });
    },
    getUserInfo: function(e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
})
