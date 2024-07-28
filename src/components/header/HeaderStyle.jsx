import styled from "styled-components";

export const HeaderComponent = styled.header`

    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: white;

    padding: 34px 100px 29px 100px;

    & .principal{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;


        & .menuMobile{
            display: none;
        }


        & .pesquisa{
            display: flex;
            align-items: center;
            justify-content: space-between;
        
            width: 100%;
            max-width: 559px;
            border-radius: 8px;
            padding: 18px 24px;
    
            background-color: rgba(71, 71, 71, 0.04);

            & input{
                width: 100%;
                outline: none;
                border: none;
                background-color: transparent;

                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                letter-spacing: 0.75px;

                &::placeholder{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 28px;
                    letter-spacing: 0.75px;
                    color: ${({theme})=>theme.dark_gray_3};
                    opacity: 60%;
                }
            }

            & .lupa{
                fill: rgba(0, 0, 0, 0.5);
                width: 24px;
                height: 24px;
                cursor: pointer;
            }
        }

        & .botoes{
            display: flex;
            gap: 30px;

            margin: 0px 20px;

            & .btnCadastrese{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-weight: 400;
                font-size: 16px;
                letter-spacing: 0.75px;
                color: ${({theme})=>theme.dark_gray_2};
                width: 102px;
                white-space: nowrap;
    
                background-color: transparent;
                border: none;
    
                cursor: pointer;
    
                & hr{
                    width: 100%;
                    height: 1.3px;
                    border: none;
                    background-color: ${({theme})=>theme.dark_gray_2};
                }
            }
    
            & .btnEntrar{
                width: 114px;
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


        & .btnMiniCart{
            display: flex;
            border: none;
            background-color: transparent;
            cursor: pointer;
            margin-left: 30px;

            position: relative;

            & sup{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: ${({theme})=>theme.error};
                color: white;

                position: absolute;
                left: 13px;
                top: -8px;

                font-size: 12px;
                font-weight: 700;
                line-height: 18px;
                letter-spacing: 0.5px;

            }
        }
    }


    & .navegacao {

        & ul{
            display: flex;
            gap: 30px;

            
            & li{
                list-style: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                font-size: 16px;
                font-weight: 400;
                line-height: 28px;
                letter-spacing: 0.75px;

                .notactive{
                    color: ${({theme})=>theme.dark_gray_2};
                }

                cursor: pointer;


                & hr{
                    opacity: 0;
                    width: 100%;
                    height: 2px;
                    border: none;
                    background-color: ${({theme})=>theme.primary};
                }

                & .active{
                    color: ${({theme})=>theme.primary};
                    font-weight: 700;

                    & hr{
                        opacity: 1;
                    }
                }
            }
        }
    }




    @media (max-width: 768px) {
        & .principal{

            & .menuMobileOpen{
                position: relative;
                display: block;

                &::before{
                    position: absolute;
                    top: -8px;
                    content: "";
                    width: 24px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;
                    transform-origin: left;

                    animation: AbrirMenuBefore 1s forwards;

                    @keyframes AbrirMenuBefore {
                        from{transform: rotate(0deg);}
                        to{transform: rotate(42deg);}
                    }
                }

                &::after{
                    position: absolute;
                    top: 8px;
                    content: "";
                    width: 24px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;
                    transform-origin: left;

                    animation: AbrirMenuAfter 1s forwards;

                    @keyframes AbrirMenuAfter {
                        from{transform: rotate(0deg);}
                        to{transform: rotate(-42deg);}
                    }
                }


                & .menuOpen{
                    display: block;
                    width: 24px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;

                    animation: AbrirMenu 1s forwards;

                    @keyframes AbrirMenu {
                        from{opacity: 1;}
                        to{opacity: 0;}
                    }
                }
            }



            & .menuMobileClose{
                position: relative;
                display: block;

                &::before{
                    position: absolute;
                    top: -8px;
                    content: "";
                    width: 24px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;
                    transform-origin: left;

                    animation: FecharMenuBefore 1s forwards;

                    @keyframes FecharMenuBefore {
                        from{transform: rotate(42deg);}
                        to{transform: rotate(0deg);}
                    }
                }

                &::after{
                    position: absolute;
                    top: 8px;
                    content: "";
                    width: 24px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;
                    transform-origin: left;

                    animation: FecharMenuAfter 1s forwards;

                    @keyframes FecharMenuAfter {
                        from{transform: rotate(-42deg);}
                        to{transform: rotate(0deg);}
                    }
                }


                & .menuClose{
                    display: block;
                    width: 24px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;

                    animation: FecharMenu 1s forwards;

                    @keyframes FecharMenu {
                        from{opacity: 0;}
                        to{opacity: 1;}
                    }
                }
            }


            & .pesquisa{
                display: none;
            }


            & .botoes{
                display: none;
            }
        }
    }   


    & .navegacao {
        display: none;
    }
`