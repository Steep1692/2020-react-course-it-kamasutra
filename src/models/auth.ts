export type Credentials = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type AuthResponse = {
    email: string | null,
    login: string | null,
    id: number | null,
}

export type LoginResponse = {
    userId: number | null,
}