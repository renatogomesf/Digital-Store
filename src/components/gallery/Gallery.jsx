import { GalleryComponent } from "./GalleryStyle";

const Gallery = (props) => {

    return (
        <GalleryComponent>
            <swiper-container slides-per-view="1" loop="true" autoplay="false" pagination> 
                    {
                        props.slide.map((item,index)=>{
                            return (
                                <swiper-slide key={index}>
                                    <img src={item.src} alt="slide" />
                                </swiper-slide>
                            )
                        })
                    }
            </swiper-container>

            <div className="texto-banner">
                <p className="texto-01">Melhores ofertas personalizadas</p>
                <h1 className="title">Queima de stoque Nike🔥</h1>
                <p className="texto-02">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button className="btnVerOferta">Ver Ofertas</button>
            </div>
        </GalleryComponent>
    );
}
 
export default Gallery;