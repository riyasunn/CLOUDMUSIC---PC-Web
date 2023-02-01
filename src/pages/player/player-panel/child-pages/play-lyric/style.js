import styled from "styled-components";

export const LyricWrapper = styled.div`
    width: 420px;
    height: 260px; 
    /* position: absolute;
    top: 0px; */
    flex-grow: 1;
    overflow-y: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        color: black;
        width: 5px;
    };
    ::-webkit-scrollbar-thumb {
        background: #888; 
    };
    border-left: 5px solid black;
    
    .lyric-content {
        /* text-align: center; */
        margin-top: 10px;
        .lyc-line {
            /* margin: 30px 0 30px 0; */
            font-size:13px;
            height: 32px;
            text-align: center;

            &.active {
                color: rgb(154, 233, 245);
                font-size: 18px;
                font-weight: 150px;
            }
        };
    }
`