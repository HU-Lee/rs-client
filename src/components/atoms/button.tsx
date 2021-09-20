import styled from "styled-components";
import { ifProp, prop, withProp } from "styled-tools";

interface ButtonProps {
    width?: number,
    height?: number,
    base?: string,
    sub?: string,
    round?: boolean,
}

export const Button = styled.button<ButtonProps>`
    all: unset;
    cursor: pointer;

    width: ${prop("width", 100)}px;
    height: ${prop("height", 40)}px;

    border: 2px solid ${prop("base", "black")};
    border-radius: ${ifProp("round", withProp("height", x => x ? x/2 : 20), 0)}px;
    box-sizing: border-box;

    color: ${prop("base", "black")};
    
    margin: 5px;
    transition: 0.5s all;

    text-align: center;
    font-weight: 600;

    &:hover {
        background-color: ${prop("base", "black")};
        color: ${prop("sub", "white")};
    }
`

// 테마 변경용 토글 버튼
export const ToggleButton = styled.label`
    margin: 5px 15px 5px 15px;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 26px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: gray;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
    }
    span:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    input:checked + span {
      background-color: #FFF2CC;
    }
    input:focus + span {
      box-shadow: 0 0 1px #FFF2CC;
    }
    input:checked + span:before {
      -webkit-transform: translateX(34px);
      -ms-transform: translateX(34px);
      transform: translateX(34px);
      background-color: black;
    }
`