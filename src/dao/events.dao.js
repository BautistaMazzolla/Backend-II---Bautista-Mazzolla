const events = [];

export const getAllEvents = async () => {
  return events;
};

export const saveEvent = async (eventData) => {
  const newEvent = {
    id: events.length + 1,
    ...eventData
  };
  events.push(newEvent);
  return newEvent;
};