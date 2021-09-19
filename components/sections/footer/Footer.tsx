// Style
import React from 'react';

// Style
import * as S from './footer.style';

// Components
import SectionWrapper from '../../wrappers/sectionWrapper/SectionWrapper';

export interface FooterProps {}

function Footer() {
  return (
    <S.Footer id="footer">
      <SectionWrapper>
        <h2>Contact</h2>
        <h3>
          <a href="tel:0031623127128">+31 (0) 6 23 12 71 28</a>
        </h3>
        <h3>
          <a href="mailto:info@ourstateofnature.com">
            info@ourstateofnature.com
          </a>
        </h3>
      </SectionWrapper>
    </S.Footer>
  );
}

export default Footer;
