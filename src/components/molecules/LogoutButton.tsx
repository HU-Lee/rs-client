import { Button } from "../atoms/button"
import { removeNaverTokens } from "../util/Cookie"

const LogoutButton = ({dark}: DarkProps) => {
    
    const handleLogout = () => {
        removeNaverTokens()
        alert("로그아웃 되었습니다!")
        // window.location.href = "/"
        window.location.href = "/rs-client/"
    }

    return (
        <Button onClick={handleLogout} 
                base={dark ? "black" : "white"}
                sub={dark ? "white" : "black"}
        >
            로그아웃
        </Button>
    )
}

export default LogoutButton
