import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// Types
import { EventType } from '../../../types/EventType';

// Components
import Button from '../../buttons/button/Button';
import FacebookIcon from '../../media/icons/socials/FacebookIcon';
import InstagramIcon from '../../media/icons/socials/InstagramIcon';

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
    ticketButtonLink: string;
    ticketButtonText: string;
  };
}

export interface NavigationProps {
  upcomingEvent: EventType | undefined;
  navigationData: NavigationType;
  forwardRef: React.MutableRefObject<null>;
}

function Navigation({
  upcomingEvent,
  navigationData,
  forwardRef,
}: NavigationProps) {
  const router = useRouter();

  return (
    <S.Navigation ref={forwardRef}>
      <div className="navigation__wrapper">
        <img
          src={navigationData.fields.logo.fields.file.url}
          alt="State of Nature logo"
          className="navigation__nav-logo"
        />
        <ul className="navigation__nav-items-list">
          <li>
            <Link href="#event-highlight-section">
              <motion.a whileTap={{ scale: 0.92 }}>Events</motion.a>
            </Link>
          </li>
          <li>
            <Link href="#slider-section">
              <motion.a whileTap={{ scale: 0.92 }}>Visie</motion.a>
            </Link>
          </li>
          <li>
            <Link href="#footer">
              <motion.a whileTap={{ scale: 0.92 }}>Contact</motion.a>
            </Link>
          </li>
        </ul>
        <div className="navigation__right-content-wrapper">
          <div className="navigation__social-wrapper">
            <a
              href="https://www.facebook.com/ourstateofnature"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className="navigation__social-icon-facebook" />
            </a>
            <a
              href="https://www.instagram.com/ourstateofnature"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="navigation__social-icon-instagram" />
            </a>
          </div>
          {upcomingEvent ? (
            <Button
              type="button"
              text={navigationData.fields.ticketButtonText}
              onClick={() =>
                router.push(navigationData.fields.ticketButtonLink)
              }
            />
          ) : (
            <Button
              type="button"
              text="Nieuwsbrief"
              onClick={() => window.open('https://eepurl.com/gLtD-T', '_blank')}
            />
          )}
        </div>
      </div>
    </S.Navigation>
  );
}

export default Navigation;
