/**
 * Created by lenovo on 2017/3/30.
 */

/*************************************************************
 *
 * 三个窗口 一起 服务
 *
 *************************************************************/

var main = function () {

    var timer = new Timer(),
        currentCustomer = null,
        waitTimeList = [],
        simulationTime = 5000
        ;

    var servers = [],
        queue = new Queue(),
        serverNum = 3;

    // 初始化服务窗口及队列
    for (var i = 0; i < serverNum; i += 1) {

        servers[i] = new Server(i);

    }

    servers.checkFree = function () {

        for (var i = 0; i < this.length; i += 1) {
            if (this[i].status === 'free') {
                return i + 1;
            }
        }

        return false;

    };

    // 初始化第一位顾客到达事件
    timer.eventList.push({
        type: 'arrive',
        time: 0
    });




    // ***********对于第一个人，只需要在eventList中添加一个事件就好了

    //server.status = 'busy'; // 服务窗口状态为忙
    //server.serveCustomer(timer.time); // 服务当前顾客
    //queue.setNextArrive(timer.time); // 设置下一个顾客到达时间
    //
    //// 加入顾客离开事件（服务结束）
    //timer.eventList.push({
    //    type: 'leave',
    //    time: server.getEndTime()
    //});
    //// 加入新的顾客到达事件
    //timer.eventList.push({
    //    type: 'arrive',
    //    time: queue.getNextArriveTime()
    //});



    while (timer.time <= simulationTime) {

        /*************************将事件分成几种情况就好了**************************/
        /*************************小心时间小于0会报错************************/
        timer.go(); // 时间流逝

        var event = timer.eventList[0],
            code;

        // 现在时间已经多达了时间列表的最近事件发生的时间

        // 如果将要发生的是离开事件
        if (event.type === 'leave') {

            code = event.code;

            // 先看下队伍长度是否为0，如果为0，则服务窗口休闲
            // 如果不为0，则服务下一个

            timer.eventList.delete('leave', code); // 删除服务结束事件

            // 如果不需要服务下一个人
            if (queue.customList.length === 0) {

                servers[code].setFree();

                // 如果需要服务下一个人
            } else {

                currentCustomer = queue.customList.shift();
                // 记录下他的等待时间
                var waitTime = currentCustomer.getWaitTime(timer.time);
                waitTimeList.push(waitTime);
                timer.totalDelay += waitTime;
                // 服务窗口服务顾客
                servers[code].serveCustomer(timer.time);

                timer.eventList.push({
                    type: 'leave',
                    time: servers[code].getEndTime(),
                    code: servers[code].code
                });

            }

            // 如果发生到达事件
        } else if (event.type === 'arrive') {

            // 先看下队伍长度是否为0，如果为0，则直接服务
            // 如果不为0，排队

            timer.eventList.delete('arrive'); // 删除到达事件

            queue.customerArrive(timer.time); // 顾客到达了
            timer.eventList.push({
                type: 'arrive',
                time: queue.getNextArriveTime()
            });

            // 如果队伍只有他自己，并且服务窗口空闲
            if (queue.customList.length === 1 && (code = servers.checkFree())) {
                // 直接服务

                code -= 1;

                currentCustomer = queue.customList.shift();
                // 记录下他的等待时间
                waitTimeList.push(currentCustomer.getWaitTime(timer.time));
                timer.totalDelay += currentCustomer.getWaitTime(timer.time);
                // 服务窗口服务顾客
                servers[code].serveCustomer(timer.time);

                timer.eventList.push({
                    type: 'leave',
                    time: servers[code].getEndTime(),
                    code: servers[code].code
                });

            }


        }

    }

    console.log('arrive:');
    console.log(queue.getArriveList());
    console.log('leave:');
    console.log(servers[0].getLeaveList());
    console.log(servers[1].getLeaveList());
    console.log(servers[2].getLeaveList());

    var sum = 0;

    for (i = 0; i < waitTimeList.length; i += 1) {
        sum += waitTimeList[i];
    }

    console.log(waitTimeList);

    console.log('custom number: ' + waitTimeList.length);

    console.log('max:');
    console.log(Math.max.apply(waitTimeList, waitTimeList));

    console.log('avg:');
    console.log(Math.round(sum / waitTimeList.length));

};

var Customer = function (time) {

    var startWait = time;

    return {
        getWaitTime: function (timeNow) {

            return timeNow - startWait;

        }
    }

};

/**
 * 时钟类
 * @returns {{eventList: Array, time: number}}
 * @constructor
 */
var Timer = function () {

    var eventList = []
        ;

    // 删除事件
    eventList.delete = function (type, code) {

        var idx = -1;

        for (var i = 0; i < this.length; i += 1) {

            if (this[i].type === type) {

                idx = i;
                break;

            }

        }

        if (idx !== -1) {
            this.splice(idx, 1);
        }

    };

    return {
        totalDelay: 0, // 总等待时间
        eventList: eventList,
        time: 0, // 当前时间
        go: function () {
            // 每次时间流逝的时候都重新排序事件列表，
            // 所以每次只需要将前面的事件取出判断就好了

            // 将事件列表排序
            eventList.sort(function(f, c) {
                return f.time <= c.time ? -1 : 1;
            });

            this.time = eventList[0].time;

        }
    }

};

/**
 * 服务窗口类
 * @returns {{status: string, serverTime, serveCustomer: *}}
 * @constructor
 */
var Server = function (code) {

    var that = this,
        leaveList = [],
        endTime// 服务结束时间
        ;

    // 服务顾客
    var serveCustomer = function (currentTime) {

        if (currentTime === undefined) {
            throw new Error('服务顾客时未设置当前时间！');
        }

        this.status = 'busy';
        endTime = currentTime + Math.round(Math.random() * 2 + 8); // 设置服务结束时间
        leaveList.push(endTime);
    };

    var getEndTime = function () {
        return endTime;
    };

    return {
        code: code,
        status: 'free',
        serveCustomer: serveCustomer,
        getEndTime: getEndTime,
        setFree: function () {
            this.status = 'free';
        },
        getLeaveList: function () {
            return leaveList;
        }
    }

};

/**
 * 队列类
 * @constructor
 */
var Queue = function () {

    var customList = [], // 顾客队伍
        nextArriveTime, // 下一个顾客到达时间
        newCustomer = null,
        arriveList = [],
        totalCustomerNum = 0 // 顾客总人数
        ;

    return {
        customList: customList,
        setFirstArrive: function () {

        },
        setNextArrive: function (currentTime) {
            if (currentTime === undefined) {
                throw new Error('设置顾客到达时间时未设置当前时间！');
            }

            nextArriveTime = currentTime - Math.round(10 * Math.log(Math.random()));
            arriveList.push(nextArriveTime);
        },
        getNextArriveTime: function () {
            return nextArriveTime;
        },
        customerArrive: function (currentTime) {
            newCustomer = new Customer(currentTime);
            customList.push(newCustomer);
            totalCustomerNum += 1;

            this.setNextArrive(currentTime);
        },
        getArriveList: function () {
            return arriveList;
        }
    }

};

main();