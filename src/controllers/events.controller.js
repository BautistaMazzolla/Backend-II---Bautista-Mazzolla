import { getEventsService, createEventService } from '../services/events.service.js';

export const getEvents = async (req, res) => {
  try {
    const events = await getEventsService();
    res.json({ status: 'success', data: events });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const newEvent = await createEventService(req.body);
    res.status(201).json({ status: 'success', data: newEvent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};