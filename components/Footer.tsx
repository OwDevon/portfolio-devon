import React from 'react'
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interessé par mon <span className="text-purple"> profil </span> ?
        </h1>
        <a href="mailto:d.legaleri@gmail.com">
          <MagicButton
            title="Contactez-moi "
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Devon Legaleri
        </p>

        <div className="flex-items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 lg:mt-0 mt-2"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer