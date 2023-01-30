import styled from "styled-components";

export const LyricWrapper = styled.div`
    width: 420px;
    height: 260px; 
    flex-grow: 1;
    overflow-y: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        color: black;
        width: 10px;
    };
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }
    .lyric-content {
        text-align: center;
        margin-top: 10px;
        .lyc-line {
            margin: 30px 0 30px 0;
            font-size:14px;
        }
    }
`