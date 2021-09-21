import { useContext } from 'react'
import { ToggleButton } from '../atoms/button'
import { Header } from '../atoms/container'
import LogoutButton from '../molecules/LogoutButton'
import { ThemeContext } from '../util/ThemeContext'

const RsHeader = (props: UserInfo) => {

    const { isDark, darkToggler } = useContext(ThemeContext)

    return (
        <Header>
            테마 변경
            <ToggleButton>
                <input type="checkbox" checked={isDark} onChange={darkToggler}/>
                <span/>
            </ToggleButton>
            {props.isAuth ? <LogoutButton dark={isDark}/> : null}
        </Header>
    )
}

export default RsHeader