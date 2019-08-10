// This file is responsible for getting data from Eventbrite
import axios from 'axios'

const API_KEY = '5ONPWYLI6RWSTP3U636F'
const my_id ='311550779588'

export const getEvents = () => {
  return axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${API_KEY}&user.id=${my_id}`)
}

export const getAllEvents = () => {
  const mod= ''
  return axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=${API_KEY}${mod}`)
}

export const getEventDetails = (event_id) => {
  return axios.get(`https://www.eventbriteapi.com/v3/events/${event_id}/?token=${API_KEY}`)
}

export const getAttendees = (event_id) => {
  return axios.get(`https://www.eventbriteapi.com/v3/events/${event_id}/attendees/?token=${API_KEY}`)
}

export const getDetails = (event_id, attendee_id) => {
  return axios.get(`https://www.eventbriteapi.com/v3/events/${event_id}/attendees/${attendee_id}/?token=${API_KEY}`)
}

export const getVenue = (venue_id) => {
  return axios.get(`https://www.eventbriteapi.com/v3/venues/${venue_id}/?token=${API_KEY}`)
}