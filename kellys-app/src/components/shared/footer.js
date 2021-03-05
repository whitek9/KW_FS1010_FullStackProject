import React from 'react';

import LILogo from '../../images/icons/linkedin.png'
import IGLogo from '../../images/icons/instagram.png'
 
const Footer = () => {
    return (
        <footer>
            <ul>
                <li> 
                    <a href="https://www.linkedin.com/in/kellyscottwhite">
                        <img src={LILogo} alt='LinkedIn Logo' height="30px" width="30px" />
                    </a> 
                </li>
                <li> 
                    <a href="https://www.instagram.com/kellyscottw/">
                        <img src={IGLogo} alt='Instagram Logo' height="30px" width="30px" />
                    </a> 
                </li>
            </ul>
            <p className="copyright">Copyright © Kelly White 2021</p>
        </footer>
    );
}
 
export default Footer;