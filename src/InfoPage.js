import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './InfoPage.css';

const InfoPage = () => {
  return (
    <div className="info-page-container p-8 bg-white flex flex-col justify-between">
     
      <div className="contact-info">
      <div className="text-center mb-8">
        <h1 className="jurassic-park">NATHAN GOGOL</h1>
  
      </div>
      <h3 className="subtitle">DRE # 02230219</h3>
        <div className="flex justify-center items-center space-x-4">
          <FontAwesomeIcon icon={faPhone} className="w-8 h-8" />
          <a href="tel:+15103060701" className="text-xl text-black">(510) 306-6071</a>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
          <a href="mailto:nathangogol@kw.com" className="text-xl text-black">nathangogol@kw.com</a>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <FontAwesomeIcon icon={faGlobe} className="w-8 h-8" />
          <a href="https://realestaten8.com" target="_blank" rel="noopener noreferrer" className="text-xl text-black">realestaten8.com</a>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          <a href="https://instagram.com/realestatenate.kw" target="_blank" rel="noopener noreferrer" className="text-xl text-black">@realestatenate.kw</a>
        </div>
        <div className="flex justify-center items-center">
        <img src="./anchor-logo.png" alt="Anchor Logo" className="anchor-logo" />
      </div>
      </div>
   
      <img src="/nate.png" alt="Nathan Gogol" className="nate-portrait" />
      <img src="/keller-williams.png" alt="Keller Williams Logo" className="keller-logo" />
    </div>
  );
};

export default InfoPage;
