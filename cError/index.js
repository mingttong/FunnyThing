class cError extends Error {
    constructor(...args) {
        super(...args);
        this.name = 'Custome Error';
    }
}

// try {
//     throw new cError('获取菜单失败', 10000);
// } catch (err) {
//     console.log(err.code);
//     console.log(err.message);
// }
console.log(new cError('获取菜单失败', 10000).stack);