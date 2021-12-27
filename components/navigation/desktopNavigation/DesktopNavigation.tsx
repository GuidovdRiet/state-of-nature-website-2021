import React, { FC } from 'react';
import Link from 'next/link';

// Types
import { EventType } from '../../../types/EventType';

// Components
import InstagramIcon from '../../media/icons/socials/InstagramIcon';
import FacebookIcon from '../../media/icons/socials/FacebookIcon';
import Button from '../../buttons/button/Button';

// Style
import * as S from './desktopNavigation.style';

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
  forwardRef: React.MutableRefObject<null>;
}

function Navigation({
  upcomingEvent,
  navigationData,
  forwardRef,
}: NavigationProps) {
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
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="#slider-section">
              <a>Visie</a>
            </Link>
          </li>
          <li>
            <Link href="#footer">
              <a>Contact</a>
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
            <Button type="button" text="Tickets" />
          ) : (
            <Button
              type="button"
              text="Newsletter"
              onClick={() => window.open('https://eepurl.com/gLtD-T', '_blank')}
            />
          )}
        </div>
      </div>
    </S.Navigation>
  );
}

export default Navigation;
