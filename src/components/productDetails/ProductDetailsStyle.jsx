import styled from "styled-components";

export const ProductDetailsComponent = styled.section`

    & .produtoDetalhe{
        display: flex;
        margin-bottom: 80px;

        & .galeria{
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 700px;

            --swiper-navigation-size: 22px;
            --swiper-navigation-top-offset: 50%;
            --swiper-navigation-sides-offset: 16px;
            --swiper-navigation-color: ${({theme})=>theme.dark_gray_2};
    
            & .rodape{
                display: flex;
                gap: 28px;
                margin-top: -38px;
            }
    
            & img{
                border-radius: 4px;
            }
    
            & .imgMenor{
                width: 117px;
            }
        }
    }

`