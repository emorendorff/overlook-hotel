
//----------Imports--------------//
import './css/index.scss';
import fetchcalls from './fetchcalls';
import Guest from './Guest';
import Booking from './Booking';
import User from './User';
let dayjs = require('dayjs');
import './images/axe.png'

//-----Globals(mr worldwide)---//
let user, rooms, bookings, customers,  bookingsTest, roomsTest, oneGuest1, oneGuest, bookingsInstances;
let currentDate = dayjs(new Date()).format('YYYY/MM/DD');
console.log(currentDate)

//-------Query Selectors-------//
const calendar = document.getElementById('startDate');
const userNameDisplay = document.getElementById('userNameDisplay');
const logOutBtn = document.getElementById('logOutBtn');
const checkAvailabilityBtn = document.getElementById('checkAvailabilityBtn');
const oldBookings = document.getElementById('oldBookings');

let randomNumber = Math.floor(Math.random() * 50);

window.onload = onLoad();



function onLoad() {
  fetchAllData();
  // displayPastStays(oneGuest1)
  // console.log('customer', customers)
  // console.log('bookings', bookings)
  // console.log('rooms', rooms)
  // console.log('oneguest', oneGuest)
}

function fetchAllData() {
  customers = fetchcalls.fetchGuestData();
  bookings = fetchcalls.fetchBookingsData();
  rooms = fetchcalls.fetchRoomsData();
 oneGuest = fetchcalls.fetchOneGuest(randomNumber)
  return Promise.all([customers, bookings, rooms, oneGuest])
    .then(data => {
      createInstances(data[0], data[1], data[2], data[3]);
      console.log('this is my data', oneGuest1)
      console.log("these are the bookingInstances", bookingsInstances.bookings)
      displayPastStays(oneGuest1);
    })
  // console.log('customer', customers)
  // console.log('bookings', bookings)
  // console.log('rooms', rooms)
  // console.log('oneguest', oneGuest)
  
}


function createInstances(customers, bookings, rooms, oneGuest) {
//   customersTest = customers;
  // bookingsTest = bookings;
  // roomsTest = rooms;
  bookingsInstances = new Booking(bookings, rooms)
  oneGuest1 = new Guest(oneGuest)
}

//only if you have time fool 
// function displayName() {
//   const guestName = document.querySelector('.guest-nav-name')
//   console.log(oneGuest.name)
//   guestName.innerText = `Welcome ${oneGuest.name}!`;
// }

function displayPastStays(oneGuest1) {
  console.log('I AM A GUEST', oneGuest1)
  oneGuest1.getPastStays(bookingsInstances.bookings)
  oldBookings.innerHTML = '';
  if (!oneGuest1.pastStays.length) {
    oldBookings.insertAdjacentHTML ('beforeend', `<p class="history">You have not stayed with us before</p>`);
  } else {
    oneGuest1.pastStays.forEach(booking => {
      pastBookingsHolder.insertAdjacentHTML('beforeend', `<li class="history">${booking.date} in room number ${booking.roomNumber}</li>`);
    });
  }
}

// function displayTotalAmount()


