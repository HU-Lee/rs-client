import { useContext } from 'react'
import { BASE_PATH } from '../../types/constant'
import { Button } from '../atoms/button'
import { Wrapper } from '../atoms/container'
import { LogoImage } from '../molecules/LogoImage'
import { NaverLoginButton } from '../molecules/NaverLoginButton'
import { ThemeContext } from '../util/ThemeContext'

const LoginPage: React.FC = () => {

    const { isDark } = useContext(ThemeContext)

    return (
        <Wrapper flex="column">
            <LogoImage/>
            <NaverLoginButton dark={isDark}/>
            <Button
                onClick = {() => window.location.href = `${BASE_PATH}/free`}  
                round width={150}
                base={isDark ? "white" : "black"}
                sub={isDark ? "black" : "white"}
            >
                    샘플 페이지
            </Button>
        </Wrapper>
    )
}

export default LoginPage
