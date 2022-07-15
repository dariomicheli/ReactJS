import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

function Footer() {
    return(
        <div className='footer-container'>
            <div className='footer-redes'>
                <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><FacebookIcon/></a>
                <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><InstagramIcon/></a>
                <a href="https://www.twitter.com" rel="noreferrer" target="_blank"><TwitterIcon/></a>
            </div>
            <p>Creado por Dario Micheli</p>
        </div>
    );
}

export default Footer;
