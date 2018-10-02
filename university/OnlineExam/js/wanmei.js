/**
 * Created by lenovo on 2017/3/29.
 */


/**
 * 要注意看看数据输入和输出的类型是否正确
 */

/*********************爸爸去哪了
 *
 */

//var param1 = '10, -10',
//    param2 = '20';
//
//var values = param1.split(','),
//    gift = parseInt(param2),
//    i, j,
//    count = 0
//;
//
//for (i = 0; i < values.length; i += 1) {
//    values[i] = parseInt(values[i]);
//}
//
//if (values.some(function (elem) {
//        return elem > 0;
//    }) && values.length > 0 && gift > 0) {
//    // 从大到小排序
//    values.sort(function (f, e) {
//        return f <= e ? 1 : -1;
//    });
//
//
//    for (i = 0; i < values.length; i += 1) {
//
//        count += Math.floor(gift / values[i]); // 得到个数
//        gift = gift % values[i]; // 更新
//
//        // 如果都找完了
//        if (gift === 0) {
//            break;
//        }
//
//        if (gift !== 0 && i === values.length - 1) {
//            count = -1;
//        }
//
//    }
//} else {
//    count = -1;
//}
//
//console.log(count);
//
//var i, j,
//    num = '5',
//    values = '5000 4000 3000 500 200',
//    weights = '5 4 6 3 1',
//    space = '10',
//    totalValue = 0,
//    totalWeight = 0,
//    xingjiabi = [],
//    prizes = [], // 保存所有奖品的信息
//    arr = []
//    ;
//
//// **********整理参数
//
//values = values.split(' ');
//weights = weights.split(' ');
//
//num = parseInt(num);
//
//for (i = 0; i < values[i]; i += 1) {
//    values[i] = parseInt(values[i]);
//    weights[i] = parseInt(weights[i]);
//    xingjiabi.push(values[i] / weights[i]);
//
//    prizes.push({
//        value: values[i],
//        weight: weights[i],
//        xingjiabi: xingjiabi[i]
//    })
//}
//
//space = parseInt(space);
//
//// 按价值低到高排序
//prizes.sort(function (f, c) {
//    return f.value < c.value ? -1 : 1;
//});
//
//for (i = 0; i < prizes.length; i += 1) {
//    totalValue += prizes[i].value;
//    totalWeight += prizes[i].weight;
//}
//
//while (totalWeight >= space) {
//
//    totalValue -= prizes[0].value;
//    totalWeight -= prizes[0].weight;
//    arr.push(prizes.shift());
//
//}
//
//arr.sort(function (f, c) {
//    return f.weight < c.weight ? -1 : 1;
//});
//
//while (totalWeight <= space) {
//
//    if (totalWeight + arr[0] <= space) {
//        totalValue += arr[0].value;
//        totalWeight += arr[0].weight;
//        arr.shift();
//    }
//
//}
//
//console.log(totalValue);

// *********按照性价比排序   如果带不走性价比最高的呢？

//prizes.sort(function (f, c) {
//    return f.xingjiabi < c.xingjiabi ? 1 : -1;
//});

//// 先带走性价比高的，带不走再带下一个，直到没有空间为止
//while (space > 0 && prizes.length > 0) {
//
//    if (space >= prizes[0].weight) {
//        // 能带走性价比最高的
//        totalValue += prizes[0].value;
//        space -= totalValue
//
//    }
//
//
//}


var marr = ['kejew', 'eee', 'jrerj'];

marr.showAll = function () {
    this.forEach(function (v) {
        console.log(v);
    })
};

marr.showAll();