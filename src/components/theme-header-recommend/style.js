import styled from "styled-components";

export const ThemeHeaderWrapper = styled.div`
    height: 33px;
    border-bottom: 2px solid #c10d0c;
    padding: 0 10px 4px 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-position: -225px -156px;

    .left {
        display: flex;
        align-items: center;

        .title {
            font-size: 20px;
            margin-right: 20px;
        };

        .keywords {
            display: flex;
            font-size: 13.5px;
            .item {
                .divider {
                    margin: 0 10px;
                    color: #ccc;
                }
            }
        }
    };

    .right {
        display: flex;
        align-items: center;
        font-size: 13.5px;
        .icon {
            width: 12px;
            height: 12px;
            margin-left: 10px;
            background-position: 0 -240px;
        }
    }

    
`