import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Roadmap.css';
//Swiper
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

/**
 * Components
 */
const Timeline = (props) => {
    const params = {
        slidesPerView: 5,
        initialSlide: 4,
        grabCursor: true,
        updateOnWindowResize: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            992: {
                slidesPerView: 5,
                initialSlide: 4
            },
            768: {
                slidesPerView: 3,
                initialSlide: 5
            },
            320: {
                slidesPerView: 1,
                initialSlide:6
            }
        }
    };

    const slides = props.data.slides.map((slide, index) => 
        <div key={index} className={slide.classes}>
            <div className="roadmap-info">
                <div className="timestamp">
                    {slide.date}
                </div>
                <div className="description">
                    <span>{slide.title}</span>
                    <p>{slide.description}</p>
                </div>
            </div>
        </div>
    );

    return (
        <Swiper {...params}>
            {slides}
        </Swiper>
    );
};

class Roadmap extends React.Component {

    static contextType = LanguageContext;

    render() {
        let roadmapData = this.context.roadmap;

        return(
            <section id="roadmap">
                <div className="container">
                    <div className="content-title">
                        <h2>{roadmapData.title}</h2>
                        <div className="separator">
                            <div className="large"></div>
                            <div className="medium"></div>
                            <div className="small"></div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-data">
                            <Timeline data={roadmapData} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Roadmap;