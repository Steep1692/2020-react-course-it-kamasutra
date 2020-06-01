export type Validator = (value: string) => string | undefined

export type ApiResponse<T = {}> = {
    data: T
    messages: Array<string>
    resultCode: number
}
