import React from 'react';
import UpcomingEventHero from './UpcomingEventHero';
import PreviousMeetupsList from './PreviousMeetupsList';
import { mockEventsList } from '../mocks/events';

const HomeScreen = () => {
  const events = mockEventsList;
  let upcomingEvent;
  let upcomingDateTime;
  let previousEvents;
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  if (events != null) {
    upcomingEvent = events.filter(event => event.status === 'upcoming')[0];
    previousEvents = events.filter(event => event.status === 'past');
    upcomingDateTime = new Date(upcomingEvent.time).toLocaleDateString(
      'en-GB',
      options
    );
  }
  return (
    <div>
      <UpcomingEventHero
        mainTitle={upcomingEvent.name}
        description={upcomingEvent.description}
        date={upcomingDateTime}
      />

      <PreviousMeetupsList events={previousEvents} />
    </div>
  );
};

export default HomeScreen;
