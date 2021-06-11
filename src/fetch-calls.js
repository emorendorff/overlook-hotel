import { makeFetchData, onLoad } from './scripts'

fetchGuestData = () => {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .catch(console.error('customer api error');
};

fetchRoomsData = () => {
    return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .catch(console.error('room api error'))
};

fetchBookingsData = () => {
    return fetch('	http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .catch(console.error('all bookings api error'))
}