import Gallery from "../components/gallery/Gallery";
import Section from "../components/Section/Section";




const HomePage = () => {

    return (
        <>
           
            <Gallery/>

            <Section titleAlign = {"left"} title={"Coleções em destaque"} link={{text:"Ver todos", href: "link"}}>
                <img src={""} alt="" />
            </Section>
            
        </>
    );
}
 
export default HomePage;