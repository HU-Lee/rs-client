import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import RsHeader from "./components/organisms/RsHeader";
import { GlobalStyles } from "./components/style/globalStyles";
import { postAPI } from "./components/util/Apis";
import { getNaverToken, setNaverToken } from "./components/util/Cookie";

function App() {

  const [User, setUser] = useState<UserInfo>()

  // auth by Naver
  const getAuthInfo = () => {
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
          window.history.pushState({}, document.title, "/rs-client/")
        }
    })
  }

  useEffect(() => {
    getAuthInfo()
  }, [])

  return (
    <>
      <GlobalStyles/>
      <RsHeader {...User}/>
      {User ? <AppRouter {...User}/> : null}
    </>
  );
}

export default App;
