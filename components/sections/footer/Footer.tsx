// Style
import React from 'react';
import { motion } from 'framer-motion';

// Style
import * as S from './footer.style';

// Components
import SectionWrapper from '../../wrappers/sectionWrapper/SectionWrapper';

export interface FooterProps {
  showAsPopup: boolean;
  setShowAsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

function Footer({ showAsPopup, setShowAsPopup }: FooterProps) {
  return (
    <S.Footer id="footer" showAsPopup={showAsPopup}>
      <SectionWrapper>
        <h2>{showAsPopup ? 'Samenwerken' : 'Contact'}</h2>
        <h3>
          <a href="tel:0031623127128">+31 (0) 6 23 12 71 28</a>
        </h3>
        <h3>
          <a href="mailto:info@ourstateofnature.com">
            info@ourstateofnature.com
          </a>
        </h3>
        {showAsPopup && (
          <motion.button
            className="footer__close-button "
            onClick={() => setShowAsPopup(!showAsPopup)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        )}
      </SectionWrapper>
    </S.Footer>
  );
}

export default Footer;
