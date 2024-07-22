import styled from "styled-components";

import { FaArrowRightLong } from "react-icons/fa6";

const Section = (props) => {

    const SectionComponent = styled.section`

        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 0px 100px 100px 100px;

        & .titulo{
            display: flex;
            justify-content: space-between;
            
            & h3{
                text-align: ${props.titleAlign};
                width: 100%;
                font-size: 24px;
                font-weight: 700;
                line-height: 38px;
                letter-spacing: 0.75px;
                color: ${({theme})=>theme.dark_gray_2};
            }

            & a{
                display: flex;
                align-items: center;
                gap: 10px;
                white-space: nowrap;

                font-size: 18px;
                font-weight: 400;
                line-height: 34px;
                letter-spacing: 0.75px;
                color: ${({theme})=>theme.primary};


                & .seta{
                    display: ${(props.link.text)? "inline" : "none"};
                }
            }
        }


        & .conteudo{
            display: flex;
            flex-direction: ${props.flexDirection};
        }
    `

    return (
        <SectionComponent>
            <div className="titulo">
                <h3>{props.title}</h3>
                <a href={props.link.href}>
                    {props.link.text } <FaArrowRightLong className="seta" />
                </a>
            </div>

            <div className="conteudo">
                {props.children}
            </div>
        </SectionComponent>
    );
}
 
export default Section;