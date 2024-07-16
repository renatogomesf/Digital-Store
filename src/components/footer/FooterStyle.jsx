import styled from "styled-components";

export const FooterComponent = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    background-color: ${({theme})=>theme.dark_gray};
    color: white;

    padding: 72px 100px 30px 100px;

    position: static;
    bottom: 0px;


    & .footer{
        display: grid;
        grid-template-columns: auto auto auto auto;

        & .logo{
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 40px;
            width: 307px;
            margin-right: 30px;

            & .redesSociais{
                display: flex;
                gap: 35px;
            }
        }
    }

    & .informacao{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;

        & .links{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            width: 230px;

            & a{
                color: white;
                
                &:hover{
                    color: ${({theme})=>theme.primary};
                }
            }
        }

    }

    & hr{
        margin-top: 15px;
        width: 100%;
    }

    & .copyright{
        width: 100%;
        display: flex;
        justify-content: center;
    }

`   