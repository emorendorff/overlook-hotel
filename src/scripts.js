
//----------Imports--------------//
import './css/index.scss';
import fetchcalls from './fetchcalls';
import Guest from './Guest';
import Booking from './Booking';
import User from './User';
let dayjs = require('dayjs');
import './images/axe.png'

//-----Globals(mr worldwide)---//
let user, rooms, bookings, customers,  bookingsTest, roomsTest, oneGuest
let currentDate = dayjs(new Date()).format('YYYY/MM/DD');
console.log(currentDate)

//-------Query Selectors-------//
const calendar = document.getElementById('startDate');
const userNameDisplay = document.getElementById('userNameDisplay');
const logOutBtn = document.getElementById('logOutBtn');
const checkAvailabilityBtn = document.getElementById('checkAvailabilityBtn');

let randomNumber = Math.floor(Math.random() * 50);

window.onload = fetchAllData();



function fetchAllData() {
  customers = fetchcalls.fetchGuestData();
  bookings = fetchcalls.fetchBookingsData();
  rooms = fetchcalls.fetchRoomsData();
  oneGuest = fetchcalls.fetchOneGuest(randomNumber)
  Promise.all([customers, bookings, rooms, oneGuest])
    .then(data => {
      createInstances(data[0], data[1], data[2], data[3]);
    })
  console.log('customer', customers)
  console.log('bookings', bookings)
  console.log('rooms', rooms)
  console.log('oneguest', oneGuest)
  
}


function createInstances(customers, bookings, rooms, oneGuest) {
//   customersTest = customers;
  bookingsTest = bookings;
  roomsTest = rooms;
  bookings = new Booking(bookingsTest, roomsTest)
  oneGuest = new Guest(randomNumber)
}

//only if you have time fool 
// function displayName() {
//   const guestName = document.querySelector('.guest-nav-name')
//   console.log(oneGuest.name)
//   guestName.innerText = `Welcome ${oneGuest.name}!`;
// }


