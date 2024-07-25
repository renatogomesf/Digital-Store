import styled from "styled-components";

const BuyBox = () => {

    const BuyBoxComponent = styled.section`

    `

    return (
        <BuyBoxComponent>
            <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <p>Casual | Nike | REF:38416711</p>
            <div>
                <span>star</span><span>rating</span>
            </div>
            <div>
                <span>pricedescont</span><span>price</span>
            </div>
            <div>
                <p>Descrição do produto</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <button>COMPRAR</button>
        </BuyBoxComponent>
    );
}
 
export default BuyBox;