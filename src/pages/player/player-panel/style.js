import styled from "styled-components";

export const PlayerPanelWrapper = styled.div`
    position: absolute;
    bottom: 46px;
    height: 300px;
    left: 50%;
    transform: translateX(-50%);
    color: #e2e2e2;
    /* border-radius: 10px 10px 0 0; */
    /* background-color: black; */

   .left {
    width: 553px;
    border-right: 1px solid black;
    border-width: 0 2px;
    
        .head {
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 25px;
            line-height: 14px;
            font-size: 14px;
            color: #e2e2e2;
            border-bottom: 5px solid black;
            border-width: 0 10px;
            /* background-color:red; */
        
        }
    }
   
   
`