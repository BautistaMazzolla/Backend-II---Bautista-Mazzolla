import * as eventsDao from '../dao/events.dao.js';

export const getEventsService = async () => {
  return await eventsDao.getAllEvents();
};

export const createEventService = async (data) => {
  if (!data.title || !data.date) {
    throw new Error('El título y la fecha son obligatorios');
  }
  return await eventsDao.saveEvent(data);
};