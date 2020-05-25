export const changeItemByPropName = (arr, propName, id, obj) => arr.map((item) => {
    if(item[propName] === id) {
        return {
            ...item,
            ...obj,
        };
    }

    return item;
})