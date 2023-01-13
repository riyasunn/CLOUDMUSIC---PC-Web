import styled from "styled-components";

export const NewAlbumCoverWrapper = styled.div`
    .album-img {
        position: relative;
        margin-top: 10px;
        width: ${props => props.width};
        height: ${props => props.height};
        overflow: hidden;

        .cover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-position: 0 ${props => props.bgp};
            /* text-indent: -99999px; */
        };
    };

    .album-info {
        margin-top: 5px;
        font-size: 12px;
        width: ${props => props.width};

        .name {
            color: #000;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        };

        .artist {
            color: #666;
            
        }
    }

`