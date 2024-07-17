import styled from "styled-components";

export const GalleryComponent = styled.section`
    position: relative;

    & swiper-container::part(bullet-active) {
        background-color: ${({theme})=>theme.primary};
    }

    & .texto-banner{
        position: absolute;
        left: 100px;
        top: 124px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 520px;


        & .texto-01{
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.warning};
        }

        & .title{
            font-size: 64px;
            font-weight: 800;
            line-height: 66px;
            letter-spacing: 1px;
            color: ${({theme})=>theme.dark_gray};
        }

        & .texto-02{
            font-size: 18px;
            font-weight: 400;
            line-height: 34px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.dark_gray_2};
        }

        & .btnVerOferta{
            margin-top: 20px;
            width: 220px;
            height: 48px;
            background-color: ${({theme})=>theme.primary};
            border: none;
            border-radius: 8px;
            cursor: pointer;
            color: ${({theme})=>theme.light_gray_3};
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.75px;
        }
    }
`