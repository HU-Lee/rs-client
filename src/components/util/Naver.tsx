import React, { useContext, useEffect } from "react"
import { ThemeContext } from "./ThemeContext"

declare global {
    interface Window {
        naver: any
    }
}

/**
 * @summary 나중에 사용할 수도 있는 네이버 로그인 버튼
 *          현재는 사용하지 않음
 */
const Naver: React.FC = () => {
    
    const { naver } = window
    const { isDark } = useContext(ThemeContext)

    useEffect(() => {
        const NaverLogin = new naver.LoginWithNaverId({
            // clientId : process.env.REACT_APP_NAVER_CLIENT_ID,
            // callbackUrl: process.env.REACT_APP_CLIENT_URL,
            isPopup: false,
            loginButton: {
                color: isDark ? "white" : "green", 
                type: 3, 
                height: 50
            }
        })
        NaverLogin.init()
    }, [isDark])
    
    return (
        <div id="naverIdLogin"/>
    )
}

export default Naver
