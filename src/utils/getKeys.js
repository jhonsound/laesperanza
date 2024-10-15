export const getKeys = (arr) => {
    const keys = [];
    arr.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
            if (!keys.includes(key)) {
                keys.push(key);
            }
        });
    });
    return keys;
};
