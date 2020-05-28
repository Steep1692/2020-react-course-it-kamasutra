export type Validator = (value: string) => string | undefined
export type ApiResponse<T = any> = {
    data: T | any
    messages: Array<string>
    resultCode: number
}
