import { BASE_PATH } from "../../types/constant"
import { Button } from "../atoms/button"
import { removeNaverTokens } from "../util/Cookie"

const LogoutButton = ({dark}: DarkProps) => {
    
    const handleLogout = () => {
        removeNaverTokens()
        alert("로그아웃 되었습니다!")
        // window.location.href = "/"
        window.location.href = `${BASE_PATH}/`
    }

    return (
        <Button onClick={handleLogout} 
                base={dark ? "white" : "black"}
                sub={dark ? "black" : "white"}
                round
        >
            로그아웃
        </Button>
    )
}

export default LogoutButton
