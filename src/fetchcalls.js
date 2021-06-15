
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

const postNewBooking = (body) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
    .then(response => response)
}






export default {
  fetchBookingsData,
  fetchRoomsData,
  fetchGuestData,
  fetchOneGuest,
  postNewBooking
};

