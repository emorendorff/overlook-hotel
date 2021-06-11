import { makeFetchData, onLoad } from './scripts'

const fetchGuestData = () => {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .catch(console.error('customer api error')
};

const fetchRoomsData = () => {
    return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .catch(console.error('room api error'));
};

const fetchBookingsData = () => {
    return fetch('	http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .catch(console.error('all bookings api error'));
};

const fetchAllData = () => {
    Promise.all([fetchGuestData(), fetchRoomsData(), fetchBookingsData()])
    .then(data => makeFetchData(data))
    .then(() => onLoad());
};

export default {
    fetchAllData,
    fetchBookingsData,
    fetchRoomsData,
    fetchGuestData
};

