function getInsertSql(datas) {

    if (!(datas && datas.length)) {
        return '';
    }

    const keys = Object.keys(datas[0]).filter(key => key !== 'id'); // 排除id

    return `INSERT INTO table_name ( ${keys.join(', ')} ) VALUES ${datas.map(data => `( ${keys.map(key => {
        const value = data[key];

        // 字符类型的加上引号
        if (typeof value === 'string') {
            return `'${value}'`;
        }

        return value;
    }).join(', ')} )`).join(', ')};`;
}