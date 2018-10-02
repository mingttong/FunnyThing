var $send = $('#js-send-msg>div'),
    $input = $('#js-send-msg>textarea'),
    //words = ['炮骚美炮骚美炮骚美', '炮骚美炮骚美炮骚美炮骚美炮骚美炮骚美炮骚美炮骚美', '炮骚美炮骚美炮骚美炮骚美炮骚美', '炮骚美炮骚美炮骚美炮骚美炮骚美炮骚美'],
    //words = ['温州炮哥爱逍遥，誓与简言共存亡', '温州炮哥爱逍遥， 誓与简言共存亡', '温州炮哥爱逍遥   誓与简言共存亡', '温州炮哥爱逍遥 誓与简言共存亡', '温州炮哥爱逍遥  誓与简言共存亡'],
    words = ['斗鱼炮哥怂成狗，旁边有妹不敢搂', '斗鱼炮哥怂成狗，旁边有妹不敢搂 ', '斗鱼炮哥怂成狗，旁边有妹不敢搂  ', '斗鱼炮哥怂成狗，旁边有妹不敢搂  '],
    //words = ['66666666666666666666', '6666666666666666', '6666666666666666666666666666666', '666666666666666666666666666666'],
    //words = ['111111111111111111111111111111', '11111111111111111111111111111111111111', '1111111111111111111111111111111111111111111', '111111111111111111111111111111111111111'],
    //words = ['温州炮哥负心郎，我与十三共存亡', '温州炮哥负心郎 我与十三共存亡', '温州炮哥负心郎，我与十三共存亡'],
    //words = ['大大大大大大大大大大大大大', '大大大大大大大大大大大大大大', '大大大大大大大大大大大大大大大大大大大大大大大'],
    //words = ['小小小小小小小小小小小小小', '小小小小小小小小小小小', '小小小小小小小小小小小小小小小小小小小小小小小'],
    //words = ['成了', '成了 ', '成了  ', '成了   '],
    i = 0
    ;

var zwninterval = setInterval(function () {

    i = i % words.length;

    // 单次弹幕
    $input.val(words[i]);
    //$send.removeClass('b-btn-gray');
    $send.click();

    i += 1;
}, 20);

clearInterval(zwninterval);

//d.interval=function(){var e=l.$send.html(),t=c.cdT

//d.sendMsg = function () {
//    var a, u = e.trim(l.$content.val()) || e.trim(c.currentVal), g = t.fire("mod.chat.msg.color.get"), m = g.color, p = g.pid, h = g.nl > 0 ? 1 : 0;
//    "full" === t.fire("mod.video.state.get") ? 2 : 1;
//    if (!l.$send.hasClass("b-btn-gray")) {
//        if ("" === u)return void l.$content.val("").focus();
//        if (!o.check())return void o.show("login");
//        if (!t.fire("mod.chat.cmd.check", u)) {
//            if (5 != n.get("sys.groupid") && n.get("sys.uid") != n.get("room.owner_uid") && c.lastText === u)return void t.trigger("mod.chat.msg.msg", r.sysMsg({msg: "请不要重复发言。"}));
//            if (!d.roomLinkCheck(u))return void t.trigger("mod.chat.msg.msg", r.sysMsg({msg: "您输入的代码中含有非法字符，请重新输入。"}));
//            "" === u.replace(/\[emot:[A-Za-z0-9_]+\]/g, "") && (m = 0), a = [{
//                name: "content",
//                value: u.replace(/\\/g, "\\\\")
//            }, {name: "col", value: m}, {name: "type", value: "chatmessage"}, {
//                name: "dy",
//                value: n.get("room.device_id")
//            }, {name: "sender", value: n.get("sys.uid")}, {name: "pid", value: p}, {
//                name: "nc",
//                value: h
//            }], s.exe("js_sendmsg", i.encode(a)), t.trigger("mod.chat.msg.color.use", {pid: p}), c.lastText = u, l.$content.val("").focus(), c.currentVal = "", c.cdTime > 0 && d.interval(), t.trigger("activity.danmuh5.firstmsg");
//            var f = e('#js-color-barrage [data-type="cbt"]'), v = f.hasClass("c-btn-on") ? 1 : 2;
//            t.trigger("dys", {key: "dys.room.barrage.send", type: v, code: 1 === v ? f.data("code") : void 0})
//        }
//    }
//}, d.interval = function () {
//    var e = l.$send.html(), t = c.cdTime, i = null, a = null;
//    a = function () {
//        0 >= t ? (l.$send.removeClass("b-btn-gray").html(e), clearInterval(i)) : (l.$send.addClass("b-btn-gray").html(t), t--)
//    }, a(), i = setInterval(function () {
//        a()
//    }, 1e3)
//}, u.init = function () {
//    l.$log.on("click", '[data-type="login"]', function (e) {
//        e.preventDefault(), o.show("login"), t.trigger("dys", {key: "dys.room.chat.login.click"})
//    }), l.$send.on("click", function (e) {
//        e.preventDefault(), c.currentVal = l.$content.val(), d.sendMsg()
//    }), l.$content.on("keydown click focus keyup", function (t) {
//        if (e(this).css("color", l.$colorBarrage.css("color")), document.selection) {
//            var i = document.selection.createRange(), a = document.body.createTextRange(), n = 0;
//            for (a.moveToElementText(this); a.compareEndPoints("StartToStart", i) < 0; n++)a.moveStart("character", 1);
//            c.cursurPosition = n
//        } else c.cursurPosition = this.selectionStart
//    }).on("keypress", function (e) {
//        return 13 === e.which ? (c.currentVal = this.value, d.sendMsg(), !1) : void 0
//    }).on("input propertychange", function () {
//        this.value.length >= this.maxLength && (this.value = this.value.substr(0, this.maxLength))
//    }).on("blur", function () {
//        "" === e(this).val() && e(this).css("color", c.defval)
//    }), "" === l.$content.val() && l.$content.css("color", c.defval)
//}, s.reg("room_data_chatinit", function (e) {
//    var a = i.decode(e).too(), o = t.fire("mod.center.userrole.get"), s = parseInt(a.maxl, 10);
//    o.isAnchor() || o.isSuperAdmin() ? l.$content.prop({maxLength: 200}) : n.get("sys.uid") == a.uid && l.$content.prop({maxLength: s}), c.cdTime = a.cd / 1e3
//}), s.reg("room_data_reg", function (e) {
//    if (!t.fire("mod.chat.cmd.check", e)) {
//        if (!o.check())return o.show("reg"), void s.exe("js_sendhandler", [2, ""]);
//        var a = [{name: "content", value: e.replace(/\\/g, "\\\\")}, {name: "sender", value: n.get("sys.uid")}];
//        s.exe("js_sendmsg", i.encode(a)), l.$content.val(""), c.cdTime > 0 && d.interval(), t.trigger("activity.danmuh5.f