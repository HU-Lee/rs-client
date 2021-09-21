import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FreePage from "./components/pages/FreePage"
import LoginPage from "./components/pages/LoginPage"
import MainPage from "./components/pages/MainPage"
import { postAPI } from "./components/util/Apis";
import RsHeader from "./components/organisms/RsHeader";
import { getNaverToken, setNaverToken } from "./components/util/Cookie";
import { BASE_PATH } from "./types/constant";

function AppRouter() {

    const [User, setUser] = useState<UserInfo>()

    // auth by naver
    useEffect(() => {
        const url = new URL(window.location.href)
        const data = {
            code: url.searchParams.get("code"),
            state: url.searchParams.get("state"),
            accessToken: getNaverToken()
        }
        postAPI("/naver/auth", data)
        .then((res) => {
            setUser(res.data)
            if (res.data.isAuth) {
            setNaverToken(res.data.accessToken)
            }
            if (data.code || data.state) {
            // window.history.pushState({}, document.title, "/")
            window.history.pushState({}, document.title, `${BASE_PATH}/`)
            }
        })
    }, [])
    
    return (
        <Router basename="/rs-client/">
            <RsHeader {...User}/>
            <Switch>
                <Route exact path="/free" render={() => <FreePage/>}/>
                {!User?.isAuth ? 
                    <Route exact path="/" render={() => <LoginPage/>}/> :
                    <Route exact path="/" render={() => <MainPage {...User}/>}/>
                }
            </Switch>
        </Router>
    )
}

export default AppRouter
