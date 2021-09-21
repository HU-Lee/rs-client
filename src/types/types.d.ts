/* Info */

interface UserInfo {
    isAuth?: boolean,
    name?: string,
    email?: string,
    id?: string,
    role?: number,
}


/* Props */

interface ThemeProps {
    theme: {
        bgColor: string,
        titleColor: string
    }
}

interface DarkProps {
    dark : boolean
}