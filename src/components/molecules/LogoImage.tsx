import styled from "styled-components";
import { prop } from "styled-tools";

interface LogoProps {
    width?: number
}

const ImageWrapper = styled.img<LogoProps>`
    width: ${prop("width", 240)}px;
    height: ${prop("width", 240)}px;
`

export const LogoImage = ({ width }: LogoProps) => (
    <ImageWrapper width={width} src="./images/logo.png" alt="logo"/>
)