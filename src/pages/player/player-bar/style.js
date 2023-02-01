import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
    position: fixed;
    height: 52px;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: 0 0;
    background-repeat: repeat;

    .content {
        height: 47px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`

export const Control = styled.div`
    display: flex;
    align-items: center;
    .prev {
        width: 28px;
        height: 28px;
        background-position: 0 -130px;
        :hover {
            filter: drop-shadow(0 0 0px rgb(0, 255, 255));
        }
    };

    .play {
        width: 36px;
        height: 36px;
        background-position: 0 ${props => props.isPlaying ? "-165px" : "-203px" };
        margin: 0 8px;
        :hover {
            filter: drop-shadow(0 0 1px rgb(0, 255, 255));
        }
    };

    .next {
        width: 28px;
        height: 28px;
        background-position: -80px -130px;
        :hover {
            filter: drop-shadow(0 0 0px rgb(0, 255, 255));
        }
    }
`

export const PlayInfo = styled.div`
    width: 624px;
    display: flex;
    align-items: center;

    .image {
        border: 1 solid black;
        border-radius: 5px;
        position: relative;

        .cover {
            width: 34px;
            height: 34px; 
            background-position: 0px -80px;
            position: absolute;
            top:0px;
            left: 0px;
        }
    }

    .info {
        color: #a1a1a1;
        margin-left: 10px;

        .song {
            position: relative;
            top: 8px;
            left: 8px;

            .song-name {
                color: #e8e8e8; 
                margin-right: 10px;
            }

            .artiest-name {
                color: #9b9b9b;
            }
        };

        .progress {
            display: flex;
            align-items: center;

            .ant-slider {
                width: 493px;
                margin-right: 10px;
            }

            .ant-slider-rail {
                background-image: url(${require('../../../assets/img/progress_bar.png')});
                height: 9px;
                background-position: 0 0;
            }
            
            .ant-slider-track {
                background-image: url(${require("../../../assets/img/progress_bar.png")});
                height: 9px;
                background-position: left -66px;
            }


            .time {
                .now-time {
                    color: #e1e1e1;
                }

                .divider {
                    margin: 0 3px;
                }
            }
        }
    }
`

export const Operator = styled.div`
    display: flex;
    margin-top: 10px;
    
    .btn {
        width: 25px;
        height: 25px;
    }

    .volume {
            cursor: pointer;
            background-position: -2px -248px;
            opacity: .7;
            :hover {
                opacity: 1;
                filter: drop-shadow(0 0px 3px rgb(0 255 255));
            };
        };
    .volume-bar {
        position: absolute;
        top: -115px;
        height: 115px;
        background-position: 0 -500px;
        .ant-slider {
                height:90px;
                position: relative;
                top: 15px;
        };

        .ant-slider-track {
                width: 9px;
                background: url(${require("../../../assets/img/playbar_sprite.png")}) no-repeat 0 9999px;
                background-position: -40px -520px;
        };
        
    }
       

    .right {
        width: 130px;
        margin-left: 10px;
        background-position: -147px -248px;
        
        

        .loop {
            cursor: pointer;
            margin-right: 10px;
            opacity: .7;
            background-position: ${props => {
                switch(props.sequence) {
                    case 1:
                        return "-66px -248px";
                    case 2:
                        return "-66px -344px";
                    default:
                        return "-3px -344px";
                }
           }};

            :hover {
                opacity: 1;
                filter: drop-shadow(0 0px 3px rgb(0 255 255));
            }
        }

        .play-list {
            cursor: pointer;
            width: 59px;
            background-position: -42px -68px; 
            opacity: .7;
            :hover {
                filter: drop-shadow(0 0px 3px rgb(0 255 255));
                opacity: 1;
            }
        }

        .count {
            width: 20px;
            color: #9b9b9b;
            position: absolute;
            top: 20px;
            right: 39px;
        }
    }
  
`