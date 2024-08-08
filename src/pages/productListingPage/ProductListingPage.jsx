import Section from "../../components/Section/Section";
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from "../../components/filterGroup/FilterGroup";


import styled from "styled-components";


const ProductListingPage = () => {

    const filtroMarca = [
        {type: "checkbox", text: "Adidas", value: "opt1"},
        {type: "checkbox", text: "Balenciaga", value: "opt2"},
        {type: "checkbox", text: "K-Swiss", value: "opt3"},
        {type: "checkbox", text: "Nike", value: "opt4"},
        {type: "checkbox", text: "Puma", value: "opt5"}
    ]

    const filtroCategoria = [
        {type: "checkbox", text: "Esporte e lazer", value: "opt1"},
        {type: "checkbox", text: "Casual", value: "opt2"},
        {type: "checkbox", text: "Utilitário", value: "opt3"},
        {type: "checkbox", text: "Corrida", value: "opt4"}
    ]
    
    const filtroGenero = [
        {type: "checkbox", text: "Masculino", value: "opt1"},
        {type: "checkbox", text: "Feminino", value: "opt2"},
        {type: "checkbox", text: "Unisex", value: "opt3"}
    ]

    const filtroRadio = [
        {type: "radio", name:"radio", text: "Novo", value: "opt5"},
        {type: "radio", name:"radio", text: "Usado", value: "opt6"}
    ]



    const ProductListingPageComponent = styled.section`
        

        & .topo{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 100px;
            margin-bottom: -20px;

            & h3{
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
                letter-spacing: 0.75px;
                color: ${({theme})=>theme.dark_gray_2};

                & span{
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 28px;
                    letter-spacing: 0.75px;
                }
            }

            & .ordenar{
                display: flex;
                flex-direction: row;
                gap: 10px;
                border: 1px solid ${({theme})=>theme.dark_gray_2};
                border-radius: 4px;
                padding: 16px 15px;

                & p{
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 28px;
                    letter-spacing: 0.75px;
                    color: ${({theme})=>theme.dark_gray_2};
                }

                & select{
                    border: none;
                    background-color: transparent;
                    outline: none;
                    cursor: pointer;

                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 28px;
                    letter-spacing: 0.75px;
                    color: ${({theme})=>theme.dark_gray_2};
                }
            }
        }

    `

    const CamposFiltro = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 308px;
        height: 660px;
        background-color: white;
        margin-right: 28px;
        padding: 30px;
        border-radius: 4px;
        box-shadow: 6px 16px 30px rgba(0, 0, 0, 0.05);

        & .titulo{
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.75px;
            color: ${({theme})=>theme.dark_gray_2};
        }
    `

    return (
        <ProductListingPageComponent>

            <div className="topo">
                <h3>Resultados para “Tênis” - <span>389 produtos</span></h3>
                <div className="ordenar">
                    <p>Ordenar por:</p>
                    <select>
                        <option value="mais relevantes">mais relevantes</option>
                        <option value="menor preço">menor preço</option>
                        <option value="maior preço">maior preço</option>
                    </select>
                </div>
            </div>

            <Section flexDirection = {"row"} titleAlign = {"left"} title={""} link={{text:"", href: ""}}>

                <CamposFiltro>
                    <p className="titulo">Filtrar por</p>
                    <hr />
                    <FilterGroup title = {"Marca"} filtros = {filtroMarca}/>
                    <FilterGroup title = {"Categoria"} filtros = {filtroCategoria}/>
                    <FilterGroup title = {"Gênero"} filtros = {filtroGenero}/>
                    <FilterGroup title = {"Estado"} filtros = {filtroRadio}/>
                </CamposFiltro>

                <ProductListing qtdColuna = {"3"} qtdCards = {"15"} gap = {"14px"}/>

            </Section>
            
        </ProductListingPageComponent>
    );
}
 
export default ProductListingPage;