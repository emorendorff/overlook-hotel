
import {
  fetchAllData
} from './scripts';

const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again,')
  } else {
    return response.json()
  }
}

const fetchGuestData = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => checkForError(response))
    .catch(error => console.error(`Customer API Error: ${error.message}`));
};

const fetchOneGuest = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => checkForError(response))
    .catch(error => console.error(`Customer API Error: ${error.message}`));
}

const fetchRoomsData = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => checkForError(response))
    .catch(error => console.error(`Customer API Error: ${error.message}`));
};

const fetchBookingsData = () => {
  return fetch('	http://localhost:3001/api/v1/bookings')
    .then(response => checkForError(response))
    .catch(error => console.error(`Customer API Error: ${error.message}`));
};

const postNewBooking = (userID, date, roomNumber) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userID": userID, 
      "date": date, 
      "roomNumber": roomNumber 
    }),
  })
    .then(response => checkForError(response))
    .then(() => fetchAllData())
    .catch(error => console.error(`POST Request Error: ${error.message}`));   
};


export default {
  fetchBookingsData,
  fetchRoomsData,
  fetchGuestData,
  fetchOneGuest,
  postNewBooking
};

