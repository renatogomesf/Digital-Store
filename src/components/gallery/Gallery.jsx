import {Swiper, SwiperSlide} from "swiper/react";

import { GalleryComponent } from "./GalleryStyle";

const Gallery = (props) => {

    return (
        <GalleryComponent>
            <Swiper slides-per-view={1} loop={true} autoplay={props.autoplay} pagination={props.pagination} navigation={props.navigation}> 
                    {
                        props.slide.map((item,index)=>{
                            return (
                                <SwiperSlide key={index}>
                                    <img src={item.src} alt="slide" />
                                </SwiperSlide>
                            )
                        })
                    }
            </Swiper>

            <div className="texto-banner" style={{display:props.display}}>
                <p className="texto-01">Melhores ofertas personalizadas</p>
                <h1 className="title">Queima de stoque Nike🔥</h1>
                <p className="texto-02">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button className="btnVerOferta">Ver Ofertas</button>
            </div>
        </GalleryComponent>
    );
}
 
export default Gallery;