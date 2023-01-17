import styled from "styled-components";

export const RankingListWrapper = styled.div`
    flex: 1;
    .header {
        position: relative;
        top: 20px;
        left: 20px;
        display: flex;
        /* height: 100px;
        margin: 20px 0 0 20px; */

        .image {
            position: relative;
        };
    

        .info {
            margin: 5px 0 0 20px;

            a {
                font-size: 18px;
                color: #333;
                font-weight: 700;
            };

            .btn {
                width: 22px;
                height: 22px;
                margin: 8px 10px 0 0;
                cursor: pointer;
                /* display: inline-block; */
                text-indent:-999999px;
            };

            .play {

                background-position: -267px -205px;
            };

            .favor {

                background-position: -300px -205px;
            };
        };
    };

    .list{
        margin-top: 40px;
        .list-item{
            position: relative;
            display: flex;
            align-items: center;
            height: 32px;

            :nth-child(-n+3) {
                color: #c10d0c;
            };

            .index {
                width: 35px;
                text-align: center;
                font-size:16px;
                margin-left: 10px;
            };

            .list-detail {
                color: #000;
                width: 170px;
                height: 17px;
                line-height: 17px;
                display: flex;
                justify-content: space-between;
                
                .name {
                    flex: 1;
                };

                .operate {
                    display: flex;
                    align-items: center;
                    width: 82px;
                    display: none;

                    .btn {
                        width: 17px;
                        height: 17px;
                        cursor: pointer;
                        margin-left: 8px;
                    }

                    .play {
                        background-position: -267px -268px;
                        opacity: .5;
                        :hover {
                            opacity: 1;
                        }
                    };

                    .add {
                        position: relative;
                        background-position: 0 -700px;
                        top: 2px;
                        opacity: .5;
                        :hover {
                            opacity: 1;
                        }
                    };
                    .favor {
                        background-position: -297px -268px;
                        opacity: .5;
                        :hover {
                            opacity: 1;
                        }
                    }
                }
            }

            &:hover {
                .operate {
                    display: block;
                }
            }

        }
    }
`
