import Cookies from "universal-cookie";
import { NAVER_ACCESS } from "../../types/constant";

/**
 * @summary 쿠키를 관리하는 함수들
 */
const cookies = new Cookies()

export const setNaverToken = (accessToken: string) => {
    return cookies.set(NAVER_ACCESS, accessToken, {path: "/"})
}

export const getNaverToken = () => {
    return cookies.get(NAVER_ACCESS)
}

export const removeNaverTokens = () => {
    cookies.remove(NAVER_ACCESS, {path: "/"})
}