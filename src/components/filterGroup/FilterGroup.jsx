
import styled from "styled-components";


const FilterGroup = (props) => {


    const FilterGroupComponent = styled.section`
        display: flex;
        flex-direction: column;
        gap: 10px;

        & .tituloFiltro{
            font-size: 14px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.dark_gray_2};
        }

        & .inputs{
            display: flex;
            align-items: center;
            gap: 10px;

            & input[type="checkbox"]{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                appearance: none;
                width: 22px;
                height: 22px;
                border-radius: 2px;
                border: 1px solid ${({theme})=>theme.dark_gray_3};
                cursor: pointer;
                
                &:checked{
                    background-color: ${({theme})=>theme.primary};
                    border: 1px solid ${({theme})=>theme.primary};

                    &::after{
                        position: absolute;
                        top: 1px;
                        content: "";
                        width: 6px;
                        height: 12px;
                        border: solid white;
                        border-width: 0px 2px 2px 0px;
                        transform: rotate(42deg);
                    }
                }
            }


            & input[type="radio"]{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                appearance: none;
                width: 22px;
                height: 22px;
                border-radius: 50%;
                border: 1px solid ${({theme})=>theme.dark_gray_3};
                cursor: pointer;

                &:checked{
                    border: 1px solid ${({theme})=>theme.primary};

                    &::after{
                        content: "";
                        width: 14px;
                        height: 14px;
                        border-radius: 50%;
                        background-color: ${({theme})=>theme.primary};
                    }
                }
            }
    
            & label{
                font-size: 14px;
                font-weight: 500;
                line-height: 22px;
                letter-spacing: 0.25px;
                color: ${({theme})=>theme.dark_gray_2};
            }
        }

    `

    return (
        <FilterGroupComponent>
            <p className="tituloFiltro">{props.title}</p>
            {
                props.filtros.map((item)=>{
                    return (
                        <>
                            <div className="inputs">
                                <input type={item.type} name={item.name} id={""} value={item.value}/>
                                <label htmlFor={""}>{item.text}</label>
                            </div>
                        </>
                    )
                })
            }
        </FilterGroupComponent>
    );
}
 
export default FilterGroup;