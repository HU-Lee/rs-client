import React, { createContext, useState } from 'react'
import { theme } from "../style/theme";
import { ThemeProvider } from "styled-components";

/**
 * @summary     테마를 useContext로 전역 관리
 * @var         isDark 다크 모드 여부
 * @function    darkToggler 다크 모드 전환 함수
 */
export const ThemeContext = createContext({
    isDark: false,
    darkToggler: () => {}
})

// Provider
const ThemeContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const [isDark, setisDark] = useState(window.localStorage.getItem("rs_theme") === "dark")
    const darkToggler = () => { 
        setisDark(!isDark) 
        // 로컬 스토리지에 다크 모드 저장
        window.localStorage.setItem("rs_theme", isDark ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{isDark, darkToggler}}>
            <ThemeProvider theme={isDark ? theme.darkMode : theme.lightMode}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
