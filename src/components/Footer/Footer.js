import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Footer.css';
import facebookImage from '../../assets/images/social-media/facebook-icon.png';
import twitterImage from '../../assets/images/social-media/twitter-icon.png';
import instagramImage from '../../assets/images/social-media/instagram-icon.png';
import youtubeImage from '../../assets/images/social-media/youtube-icon.png';

class Footer extends React.Component {

    static contextType = LanguageContext;

    render() {
        let footerData = this.context.footer;

        return(
            <footer>
                <div className="container">
                    <h2>{footerData.title}</h2>

                    <form>
                        <input type="email" placeholder={footerData.placeholder} required />
                        <button type="submit">&#5171;</button>
                    </form>

                    <p>{footerData.text}</p>

                    <div className="social-media">
                        <a className="facebook" href="https://www.facebook.com/digitalmoney.dmx" target="_blank" rel="noopener noreferrer">
                            <img src={facebookImage} alt="Facebook" />
                        </a>
                        
                        <a className="twitter" href="https://twitter.com/DigitalMoneyDMX" target="_blank" rel="noopener noreferrer">
                            <img src={twitterImage} alt="Twitter" />
                        </a>

                        <a className="instagram" href="https://www.instagram.com/thedigitalmoney.io/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramImage} alt="Instagram" />
                        </a>
                        
                        <a className="youtube" href="https://www.youtube.com/channel/UCLbhybxJ8bsFU_BcaVMshOA" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeImage} alt="YouTube" />
                        </a>
                    </div>

                    <span>Copyright &copy; 2020, Digital Money.</span>
                </div>
            </footer>
        );
    }
}

export default Footer;