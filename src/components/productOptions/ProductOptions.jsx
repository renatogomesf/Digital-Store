import styled from "styled-components";

const ProductOptions = (props) => {

    const ProductOptionsComponent = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 10px;

        & p{
            font-size: 14px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.light_gray};
        }

        & .inputs{
            display: flex;
            gap: 10px;

            & .input{
                position: relative;

                & input[type="radio"]{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    appearance: none;
                    width: ${props.estilos.size};
                    height: ${props.estilos.size};
                    border-radius: ${props.estilos.borderRadius};
                    border: 1px solid ${({theme})=>theme.light_gray_2};
                    cursor: pointer;
                    z-index: 1;
                    overflow: hidden;

                    &:checked{
                        border: 1px solid ${({theme})=>theme.primary};
                        
                        &::after{
                            content: "";
                            position: absolute;
                            width: ${props.estilos.sizeAfter};
                            height: ${props.estilos.sizeAfter};
                            background-color: ${({theme})=>theme.primary};
                        }

                        & + label{
                            z-index: 2;
                            color: ${({theme})=>theme.white};
                        }
                    }
                }

                & label{
                    position: absolute;
                    top: 13px;
                    left: 13px;
                    cursor: pointer;

                    font-size: 16px;
                    font-weight: 700;
                    line-height: 24px;
                    letter-spacing: 0.75px;
                    color: ${({theme})=>theme.dark_gray_2};
                }
            }


        }

    `

    return (
        <ProductOptionsComponent>
            <p>{props.titulo}</p>
            <div className="inputs">
                {
                    props.informacao.map((item)=>{
                        return (
                            <span className="input">
                                <input type="radio" name={props.titulo} id={props.titulo} style={{backgroundColor:item.cor}}/>
                                <label>{item.numero}</label>
                            </span>
                        )
                    })
                }
            </div>
        </ProductOptionsComponent>
    );
}
 
export default ProductOptions;