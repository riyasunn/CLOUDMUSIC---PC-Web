import styled from "styled-components";

 export const AlbumCoverWrapper = styled.div`
    width: 140px;
    margin: 20px 0 20px 0;

    .cover-top {
        position: relative;

        &>img {
            width: 140px;
            height: 140px;
        };
        .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: 0 0; 

            .info {
                display: flex;
                justify-content: space-between;
                align-self: center;
                padding: 5px 10px;
                bottom: 0;
                left: 0;
                right: 0;
                position: absolute;
                background-position: 0 -537px;
                color: #ccc;
                height: 27px;

                .earphone {
                    display: inline-block;
                    width: 14px;
                    height: 11px;
                    background-position: 0 -24px;
                    margin-right: 5px;
                }

                .play {
                    display: inline-block;
                    width: 16px;
                    height: 17px;
                    background-position: 0 0;
                }
            }
        }
    };

    .cover-bottom {
        margin-top: 5px;
        color: #000;
        font-size: 14px;
    };
    
 `