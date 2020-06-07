export const changeItemByPropName = (arr: any[], propName: string, id: number, obj: {}): any[] => {
    return arr.map((item: any) => {
        if (item[propName] === id) {
            return {
                ...item,
                ...obj,
            }
        }

        return item
    })
}

export const isTheSameAsStrings = (a: any, b: any): boolean => (a === b) || ( !a && !b )