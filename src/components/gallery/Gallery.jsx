import { GalleryComponent } from "./GalleryStyle";

const Gallery = () => {

    const slide = [
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-7.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-1.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-2.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-3.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-4.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-5.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-6.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-8.jpeg"}
    ]


    return (
        <GalleryComponent>
            <swiper-container slides-per-view="1" loop="true" autoplay="false" pagination> 
                    {
                        slide.map((item,index)=>{
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