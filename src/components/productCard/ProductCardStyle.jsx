import styled from "styled-components";

export const ProductCardComponent = styled.div`
    margin-bottom: 20px;

    & .imagem{
        position: relative;
        cursor: pointer;
        margin-bottom: 18px;

        & .tagDesconto{
            position: absolute;
            left: 20px;
            top: 20px;

            background-color:#E7FF86;
            width: 70px;
            height: 22px;
            padding: 5px 15px;
            gap: 10px;
            border-radius: 29px;

            font-size: 14px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.dark_gray_2};
        }

        & img{
            width: 100%;
            /* max-width: 271px; */
            border-radius: 4px;
            box-shadow: 6px 16px 30px rgba(0, 0, 0, 0.05);
        }
    }

    & .tipoProduto{
        font-size: 12px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.75px;
        color: ${({theme})=>theme.light_gray}
    }

    & .nomeProduto, .preco{
        font-size: 24px;
        font-weight: 400;
        line-height: 38px;
        letter-spacing: 0.75px;
        color: ${({theme})=>theme.dark_gray_2};
    }

    & .precos{

        display: flex;
        gap: 8px;

        & .preco{
            text-decoration: line-through;
            color: ${({theme})=>theme.light_gray}
        }
    
        & .precoDesconto{
            font-size: 24px;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.dark_gray};
        }
    }

`