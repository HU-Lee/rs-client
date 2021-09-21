import { Wrapper } from "../atoms/container"
import { LogoImage } from "../molecules/LogoImage"

const MainPage = ({role, name}: UserInfo) => {
    return (
        <Wrapper flex="column">
            <LogoImage/>
            {role && role > 9 ? <>
                <h1>안녕하세요 가족 여러분!</h1>
                <h2>당신은 {name}님이군요!</h2>  
            </> : <>
                <h1>Welcome!</h1>  
            </>}
        </Wrapper>
    )
}

export default MainPage
