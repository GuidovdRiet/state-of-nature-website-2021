import { FC } from 'react';

// Types
import { EventType } from '../../types/EventType';
import PageWrapper from '../wrappers/pageWrapper/PageWrapper';
import SectionWrapper from '../wrappers/sectionWrapper/SectionWrapper';

// Components
import InstagramIcon from '../media/icons/socials/InstagramIcon';
import FacebookIcon from '../media/icons/socials/FacebookIcon';

// Style
import * as S from './navigation.style';

interface NavigationType {
  sys: {
    locale: string;
  };
  fields: {
    logo: {
      sys: {
        locale: string;
      };
      fields: {
        description: 'State of Nature logo';
        file: {
          url: string;
          details: { size: number; image: { width: number; height: number } };
          fileName: string;
          contentType: string;
        };
      };
    };
  };
}

export interface NavigationProps {
  upcomingEvent: EventType | undefined;
  navigationData: NavigationType;
}

const Navigation: FC<NavigationProps> = ({ upcomingEvent, navigationData }) => (
  <SectionWrapper>
    <S.Navigation>
      <img
        src={navigationData.fields.logo.fields.file.url}
        alt="State of Nature logo"
      />
      <ul className="navigation__nav-items-list">
        <li>Events</li>
        <li>Visie</li>
        <li>Partners</li>
        <li>Contact</li>
      </ul>
      <div className="navigation__right-content-wrapper">
        <div className="navigation__social-wrapper">
          <FacebookIcon className="navigation__social-icon-facebook" />
          <InstagramIcon className="navigation__social-icon-instagram" />
        </div>
        {upcomingEvent ? (
          <button type="button">Tickets</button>
        ) : (
          <button type="button">Nieuwsbrief</button>
        )}
      </div>
    </S.Navigation>
  </SectionWrapper>
);

export default Navigation;
