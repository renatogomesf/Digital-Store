import styled from "styled-components";

import { FaArrowRightLong } from "react-icons/fa6";

const Section = (props) => {

    const seta = <FaArrowRightLong />

    const SectionComponent = styled.section`

        padding: 100px;

        & .titulo{
            display: flex;
            justify-content: space-between;
            text-align: ${props.titleAlign};


            & h3{
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

    `

    return (
        <SectionComponent>

            <div className="titulo">
                <h3>{props.title}</h3>
                <a href={props.link.href}>
                    {props.link.text } <FaArrowRightLong className="seta" />
                </a>
            </div>

            {props.children}

        </SectionComponent>
    );
}
 
export default Section;