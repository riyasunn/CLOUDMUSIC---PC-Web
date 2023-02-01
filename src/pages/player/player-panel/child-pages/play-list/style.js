import styled from "styled-components";

export const PlayListWrapper = styled.div`
    flex-grow: 1;
    /* position: absolute; */
    /* top:0px; */
    width: 553px;
    height: 260px;
    overflow: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        color: black;
        width: 3px;
    };
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    h2 {
           text-align: center;
           margin-top: 100px;
           font-size: 20px;
    };

    .play-item {
        display: flex;
        padding: 0 8px 0 25px;
        justify-content: space-between;
        position: relative;
        left: 2px;
        height: 28px;
        line-height: 28px;
        &:hover {
            color: #fff;
            background-color: #000;
        }

        &.active {
            color: #fff;
            background-color: #000;

            ::before {
                content: "";
                width: 10px;
                height: 10px;
                background: url(${require("../../../../../assets/img/sprite_playlist2.png")}) no-repeat 0 9999px;
                background-position: -182px 0;
                position: absolute;
                left: 9px;
                top: 9px;
            };
        }

        .song-name {
            cursor: pointer;
        }
        
        .song-info {
            display: flex;
            justify-content: space-between;

            .artiest {
                width: 88px;
            };

            .duration {
                width: 45px;
            };
        }
    }
`;