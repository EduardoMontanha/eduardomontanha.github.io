import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './About.css';
import image from './images/about-ico.png';

/**
 * Behaviors
 */
function openVideoModal() {
    let button = document.querySelector("#about .video-btn"),
        videoSrc = button.getAttribute("data-src"),
        modal = document.getElementById("modal"),
        video = document.getElementById("video");

    video.setAttribute("src", videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    modal.classList.remove("hide");
    document.querySelector("body").classList.add("modal-open");
}

/**
 * Components
 */
class About extends React.Component {

    static contextType = LanguageContext;

    render() {
        let aboutData = this.context.about;

        return(
            <section id="about">
                <div className="container">
                    <div className="content-title">
                        <h2>{aboutData.title}</h2>

                        <div className="separator">
                            <div className="large"></div>
                            <div className="medium"></div>
                            <div className="small"></div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-data">
                            <p>{aboutData.text1}</p>

                            <p>{aboutData.text2}</p>

                            <ul>
                                <li>&#10003; {aboutData.infoList.item1}</li>
                                <li>&#10003; {aboutData.infoList.item2}</li>
                                <li>&#10003; {aboutData.infoList.item3}</li>
                                <li>&#10003; {aboutData.infoList.item4}</li>
                                <li>&#10003; {aboutData.infoList.item5}</li>
                            </ul>
                        </div>

                        <div className="content-image">
                            <a href="#!" className="video-btn" data-src="https://player.vimeo.com/video/310644541" data-target="#modal" onClick={openVideoModal}>
                                <img src={image} alt={aboutData.imageDescription}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;