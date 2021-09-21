import { useContext } from 'react'
import { BASE_PATH } from '../../types/constant'
import { Button } from '../atoms/button'
import { Wrapper } from '../atoms/container'
import { ThemeContext } from '../util/ThemeContext'

const FreePage: React.FC = () => {

    const { isDark } = useContext(ThemeContext)

    return (
        <Wrapper flex="column">
            <h1>Free Page</h1>
            <Button
                onClick = {() => window.location.href = `${BASE_PATH}/`} 
                round width={150}
                base={isDark ? "white" : "black"}
                sub={isDark ? "black" : "white"}
            >
                    돌아가기
            </Button>
        </Wrapper>
    )
}

export default FreePage