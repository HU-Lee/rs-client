import styled from "styled-components";
import { getAPI } from "../util/Apis";

const NaverLogin = styled.img`
    cursor: pointer;
    width: 250px;
    margin: 20px;
`

export const NaverLoginButton = ({dark}: DarkProps) => {

    const loginNaver = () => {
        getAPI("/naver/login")
        .then((res) => {
            if (res.data.success) {
                window.location.href = res.data.redirectUrl
            }
        })
    }

    return <NaverLogin src={`./images/naver-login-${dark ? "dark" : "light"}.png`} 
                       alt="로그인" onClick={loginNaver}/>
}