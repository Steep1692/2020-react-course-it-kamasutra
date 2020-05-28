export const changeItemByPropName = (arr: any[] | null, propName: string, id: number, obj: {}): any[] | null => {
    if ( !arr ) {
        return null;
    }

    return arr.map((item: any) => {
        if (item[propName] === id) {
            return {
                ...item,
                ...obj,
            };
        }

        return item;
    })
};

export const isTheSameAsStrings = (a: any, b: any): boolean => (a === b) || ( !a && !b );