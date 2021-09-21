import { useContext } from 'react'
import { Wrapper } from '../atoms/container'
import { LogoImage } from '../molecules/LogoImage'
import { NaverLoginButton } from '../molecules/NaverLoginButton'
import { ThemeContext } from '../util/ThemeContext'

function LoginPage() {

    const { isDark } = useContext(ThemeContext)

    return (
        <Wrapper flex="column">
            <LogoImage/>
            <NaverLoginButton dark={isDark}/>
        </Wrapper>
    )
}

export default LoginPage
