import { FC } from 'react';
import Logo from '../media/Logo';

// Types
import { EventType } from '../../types/EventType';

export interface NavigationProps {
  upcomingEvent: EventType | undefined;
}

const Navigation: FC<NavigationProps> = ({ upcomingEvent }) => (
  <nav>
    <Logo />
    <ul>
      <li>Events</li>
      <li>Visie</li>
      <li>Partners</li>
      <li>Contact</li>
    </ul>
    {upcomingEvent ? (
      <button type="button">Tickets</button>
    ) : (
      <button type="button">Nieuwsbrief</button>
    )}
  </nav>
);

export default Navigation;
