import styled from "styled-components";

export const CollectionDestaque01 = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;

    & .Destaque01{

        position: relative;

        & .imgDestaque{
            width: 376px;
            border-radius: 4px;
        }

        & .informacao{
            position: absolute;
            left: 30px;
            top: 34px;

            & .tagOferta{
                background-color:#E7FF86;
                width: 66px;
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

            & .tituloColecao{
                width: 172px;
                font-size: 32px;
                font-weight: 700;
                line-height: 36px;
                letter-spacing: 1px;
                text-align: left;
                color: ${({theme})=>theme.dark_gray};

                margin-top: 10px;
                margin-bottom: 20px;
            }

            & .titulo3{
                width: 184px;
            }

            & .btnComprar{
                width: 153px;
                height: 48px;
                background-color: ${({theme})=>theme.white};
                border: none;
                border-radius: 8px;
                cursor: pointer;

                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
                letter-spacing: 0.75px;
                color: ${({theme})=>theme.primary};

                transition: 0.3s;

                &:hover{
                    background-color: ${({theme})=>theme.secondary};
                    color: white;
                }
            }
        }
    }
`


export const CollectionDestaque02 = styled.div`

    display: flex;
    justify-content: center;
    gap: 48px;


    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.75px;
    color: ${({theme})=>theme.dark_gray_2};


    @media (max-width: 768px) {
        gap: 20px;
    }



    & .Destaque02{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .svgDestaque{
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            width: 104px;
            height: 104px;
            border-radius: 50%;
            background-color: white;

            transition: 0.4s;

            
            &:hover{
                box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);

                & path{
                    fill: ${({theme})=>theme.primary};
                    transition: 0.4s;
                }
            }
        }
    }
`

export const OfertaEspecial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 90px 100px;
    gap: 67px;
    background-color: white;

    & .campoTexto{


        & .texto01{
            font-size: 14px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.primary};
            margin-bottom: 17px;
        }
    
        & .titulo{
            font-size: 48px;
            font-weight: 700;
            line-height: 50px;
            letter-spacing: 1px;
            color: ${({theme})=>theme.dark_gray_2};
            margin-bottom: 20px;
        }
    
        & .texto02{
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.dark_gray_2};
            margin-bottom: 30px;
        }
    
        & .btnVerOferta{
            width: 200px;
            height: 40px;
            background-color: ${({theme})=>theme.primary};
            border: none;
            border-radius: 8px;
            cursor: pointer;
    
            font-size: 14px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.light_gray_3};
    
            transition: 0.3s;
    
            &:hover{
                background-color: ${({theme})=>theme.tertiary};
            }
        }
    }




    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`