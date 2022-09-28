import { ReactNode } from "react"
export interface IUser {
    name?: string
    email?: string
    password?: string
}
export interface IResponseUser {
    user: {
        id: number
        name: string
        email: string
    }
    token: {
        token: string
        expires_at: string
    }
}

export interface IAuthContextData {
    signIn(credentials: IUser): Promise<void>
    signOut(): Promise<void>
    loadUserStorageData(): Promise<boolean>
    user: {
        id: number
        email: string
        name: string
    }
}

export interface IAuthProvider {
    children?: ReactNode
}
export interface IErrorResponse {
    status: string
    message: string
    errors?: {
        message: string
    } []
}