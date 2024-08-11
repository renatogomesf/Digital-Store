import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFound = () => {

    const NotFoundComponent = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        height: 100vh;

        & h1{
            font-size: 44px;
            font-weight: 800;
            line-height: 66px;
            letter-spacing: 1px;
            color: ${({theme})=>theme.dark_gray};

        }
    `


    return (
        <NotFoundComponent>
            <h1>404: PÁGINA NÃO ENCONTRADA</h1>
        </NotFoundComponent>
    );
}
 
export default NotFound;