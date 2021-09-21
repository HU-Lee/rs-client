import styled from "styled-components";
import { ifProp } from "styled-tools";

interface ContainerProps {
    flex?: string,
}

export const Wrapper = styled.div<ContainerProps>`
    width: 100%;
    min-height: 70vh;

    display: flex;
    flex-direction: ${ifProp({flex: "column"}, "column", "row")};
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const Header = styled(Wrapper)<ContainerProps>`
    height: 50px;
    min-height: 60px;
    
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
`