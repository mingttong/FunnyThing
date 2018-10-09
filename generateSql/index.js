
/**
 * @extraFields 自定义字段值
 */
function getInsertSql(datas, tableName = 'table_name', extraFields) {
    if (typeof tableName === 'object') {
        extraFields = tableName;
        tableName = 'table_name';
    }
    const extraKeys = [];
    const extraValues = [];

    Object.keys(extraFields).forEach(k => {
        extraKeys.push(k);
        extraValues.push(extraFields[k]);
    });

    if (!(datas && datas.length)) {
        return '';
    }

    const keys = Object.keys(datas[0]).filter(key => key !== 'id'); // 排除id

    return `INSERT INTO ${tableName} ( ${keys.concat(extraKeys).join(', ')} ) VALUES ${datas.map(data => `( ${keys.map(key => {
        const value = data[key];

        // 字符类型的加上引号
        if (typeof value === 'string') {
            return `'${value}'`;
        }
        return value;
    }).concat(extraValues).join(', ')} )`).join(', ')};`;
}
