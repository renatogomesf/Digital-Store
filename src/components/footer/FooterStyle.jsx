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
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;

        & .logo{
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 40px;
            width: 307px;

            & .redesSociais{
                display: flex;
                gap: 35px;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin-bottom: 50px;
            }
        }
    }


    & .linkFooter{

        display: flex;
        align-items: start;
        /* margin-left: 20px; */

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
                width: 100%;
                max-width: 260px;
    
                & a{
                    color: white;
                    
                    &:hover{
                        color: ${({theme})=>theme.primary};
                    }
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