import styled from "styled-components";

export const BuyBoxComponent = styled.section`
    width: 440px;

    & .titulo{
        margin-bottom: 10px;
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1px;
        color: ${({theme})=>theme.dark_gray};
    }

    & .referencia{
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.5px;
        color: ${({theme})=>theme.dark_gray_3};
    }

    & .avaliacao{
        display: flex;
        align-items: center;
        gap: 14px;

        & .stars {
            display: flex;
            gap: 4px;

            & .star{
                & path{
                    fill: ${({theme})=>theme.warning};
                    stroke: ${({theme})=>theme.warning};
                }
            }
        }

        & .nota{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 4px;
            padding: 3px 16px;
            background-color: ${({theme})=>theme.warning};

            font-size: 14px;
            font-weight: 900;
            line-height: 24px;
            letter-spacing: 0.25px;
            color: ${({theme})=>theme.white};

            & .starNota{
                display: flex;
                justify-content: center;
                align-items: center;
                & path{
                    fill: ${({theme})=>theme.white};
                    stroke: ${({theme})=>theme.white};
                }
            }
        }

        & .qtdAvaliacao{
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            letter-spacing: 0.25px;
            color: ${({theme})=>theme.light_gray};
        }
    }

    & .preço{
        display: flex;
        align-items: baseline;
        gap: 10px;
        margin: 20px 0px;

        & .sifrao{
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.dark_gray_2};
        }

        & .valorDesconto{
            font-size: 32px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: 1px;
            color: ${({theme})=>theme.dark_gray_2}; 
        }

        & .centavos{
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.dark_gray_2}; 
        }

        & .valor{
            text-decoration: line-through;
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.light_gray_2}; 
        }
    }

    & .descricaoProduto{
        margin-bottom: 30px;

        & .titulo{
            font-size: 14px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.light_gray};
        }

        & .descricao{
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            letter-spacing: 0.25px;
            color: ${({theme})=>theme.dark_gray_2}; 
        }
    }

    & .btnComprar{
        width: 220px;
        height: 48px;
        background-color: ${({theme})=>theme.warning};
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 17px;

        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.75px;
        color: ${({theme})=>theme.white}; 
        transition: 0.4s;

        &:hover{
            background-color: #CF8900;
        }
    }

`