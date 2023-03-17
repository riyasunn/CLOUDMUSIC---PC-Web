import styled from "styled-components";

export const SettledSingerWrapper = styled.div`
    height: 33px;
    border-bottom: 1px solid #d3d3d3;
    padding: 25px;
    .title {
        display: flex;
        font-size: 15px;
        font-weight: bold;
        justify-content:center;
    };
    /* .divider {
            height: 1px;
            width: 100px;
            color: red;
        } */

    .singers {
        margin-top: 20px;
        display: flex;
        background-color: #F4F4F4;
        border: 1px solid #d3d3d3;

        img {
            border: 1px solid #d3d3d3;
        };
        .name {
            display: flex;
            align-items: center;
            font-size: 13px;
            font-weight: bolder;
            margin-left: 25px;
        };
    };

    button {
        height: 31px;
        width: 200px;
        border: 1px solid #d3d3d3;
        border-radius: 2px;
        margin-top: 20px;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            background-color: #E8E8E8;
        };
    };
`