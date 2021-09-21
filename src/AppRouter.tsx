import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FreePage from "./components/pages/FreePage"
import LoginPage from "./components/pages/LoginPage"
import MainPage from "./components/pages/MainPage"

function AppRouter(props: UserInfo) {
    return (
        <Router basename="/rs-client">
            <Switch>
                {!props.isAuth ? <>
                    <Route exact path="/" component={LoginPage}/>
                </> : <>
                    <Route exact path="/" component={() => <MainPage {...props}/>}/>
                </>}
                <Route exact path="/free" component={FreePage}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
