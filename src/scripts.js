
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/index.scss';
import fetchcalls from './fetchcalls';
import Guest from './Guest';
import Booking from './Booking';
import User from './User';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/axe.png'

let user, booking, guest, bookingsTest, roomsTest

window.onload = fetchAllData();


function fetchAllData() {
  const customers = fetchcalls.fetchGuestData();
  const bookings = fetchcalls.fetchBookingsData();
  const rooms = fetchcalls.fetchRoomsData();
  Promise.all([customers, bookings, rooms])
    .then(data => {
      createInstances(data[0], data[1], data[2]);
    })
    console.log('customer', customers)
    console.log('bookings', bookings)
    console.log('rooms', rooms)
}

function createInstances(customers, bookings, rooms) {
  customersTest = customers;
  bookingsTest = bookings;
  roomsTest = rooms;
  booking = new Booking(bookingsTest, roomsTest)
}

  