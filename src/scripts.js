//----------Imports--------------//
import './css/index.scss';
import fetchcalls from './fetchcalls';
import Guest from './Guest';
import Booking from './Booking';
import User from './User';
let dayjs = require('dayjs');
import './images/axe.png'

//-----Globals(mr worldwide)---//
let rooms, bookings, customers, oneGuest1, oneGuest, bookingsInstances;
let currentDate = dayjs(new Date()).format('YYYY/MM/DD');

//-------Query Selectors-------//
const userNameDisplay = document.getElementById('userNameDisplay');
const logOutBtn = document.getElementById('logOutBtn');
const checkAvailabilityBtn = document.getElementById('checkAvailabilityBtn');
const oldBookings = document.getElementById('oldBookings');
const totalAmount = document.getElementById('totalAmount');
const calendarStart = document.getElementById('startDate');
const roomsAvailable = document.getElementById('roomsAvailable');
const roomTypeFilter = document.getElementById('roomTypeFilter');
const searchByTypeSubmitBtn = document.getElementById('searchByTypeSubmitBtn');
const bookRoomBtn = document.getElementsByClassName('book-room-btn');

let randomNumber = Math.floor(Math.random() * 50);

window.onload = fetchAllData();

checkAvailabilityBtn.addEventListener('click', () => 
  displayAvailableRooms());

searchByTypeSubmitBtn.addEventListener('click', () => searchRoomType())

roomsAvailable.addEventListener('click', (e) => {
  if (e.target.closest('button')) {
    bookRoom(e)
  }
})

window.addEventListener('click', function (event) {
  console.log("eventTest", event.target)
} )

// roomsAvailable.addEventListener('click', (e) => {
//   if (e.target.classList.contains('rooms')) {
//     e.target.classList.add('selected')
//   }
// })

function fetchAllData() {
  customers = fetchcalls.fetchGuestData();
  bookings = fetchcalls.fetchBookingsData();
  rooms = fetchcalls.fetchRoomsData();
  oneGuest = fetchcalls.fetchOneGuest(1)
  return Promise.all([customers, bookings, rooms, oneGuest])
    .then(data => {
      createInstances(data[0], data[1], data[2], data[3]);
      displayPastStays(oneGuest1);
      displayTotalAmount(oneGuest1)
    })
}


function createInstances(customers, bookings, rooms, oneGuest) {
  bookingsInstances = new Booking(bookings, rooms)
  oneGuest1 = new Guest(oneGuest)
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}


 
// function displayName(oneGuest1) {
//   const guestName = document.querySelector('.guest-nav-name')
//   guestName.innerText = `Welcome ${oneGuest1.name}!`;
// }

function displayPastStays(oneGuest1) {
  console.log('I AM A GUEST', oneGuest1)
  oneGuest1.getPastStays(bookingsInstances.bookings)
  oldBookings.innerHTML = '';
  if (!oneGuest1.pastStays.length) {
    oldBookings.insertAdjacentHTML ('beforeend', `<p class="history">You have not stayed with us before</p>`);
  } else {
    oneGuest1.pastStays.forEach(booking => {
      oldBookings.insertAdjacentHTML('beforeend', `
      <ul class='begin-previous-stays'>
        <li class="history">${booking.date} in room ${booking.roomNumber}</li>
      </ul>`)
      
    });
  }
};

function displayTotalAmount(oneGuest1) {
  oneGuest1.calculateTotalSpent(bookingsInstances.rooms)
  totalAmount.innerText = `$${oneGuest1.totalSpent}`
}

function displayAvailableRooms() {
  let date = calendarStart.value.split("-").join('/')
  roomsAvailable.innerHTML = ``
  let eachAvailableRoom = bookingsInstances.checkAvailableRooms(date)
  let iteratedRooms = eachAvailableRoom.forEach(room => {
    roomsAvailable.innerHTML += `
    <ul class='begin-available-rooms'>
      <li class='rooms'><b>Room Type:</b> ${room.roomType}<br>
      <b>Bed Size:</b> ${room.bedSize}</b><br>
      <b>Number of Beds:</b> ${room.numBeds}<br>
      <b>Cost:</b> $${room.costPerNight}
      <button type='button' name='book-this-room' class='book-room-btn' id="${room.number}">BOOK THIS ROOM</button>
      </li>
    </ul>`
  })
}

function searchRoomType() {
  let filterType = roomTypeFilter.value;
  let typeResults = bookingsInstances.filterByRoomType(filterType);
  roomsAvailable.innerHTML = ``
  let eachFilteredRoom = typeResults.forEach(room => {
    roomsAvailable.innerHTML += `
    <ul class='begin-available-rooms'>
      <li class='rooms'><b>Room Type:</b> ${room.roomType}<br>
      <b>Bed Size:</b> ${room.bedSize}</b><br>
      <b>Number of Beds:</b> ${room.numBeds}<br>
      <b>Cost:</b> $${room.costPerNight} 
      <button type='button' name='book-this-room' class='book-room-btn' id="${room.number}">BOOK THIS ROOM</button>
      </li>
    <ul class='begin-available-rooms'>`
  })
}



function bookRoom(e) {
  console.log(e.target)
  if (e.target.classList.contains('book-room-btn')) {
    let roomNumber = parseInt(e.target.closest('button').id)
    let date = dayjs(calendarStart.value).format('YYYY/MM/DD');
    fetchcalls.postNewBooking(oneGuest1.id, date, roomNumber)
  } else {
    e.preventDefault();
  }
  e.target.closest('button').setAttribute('disabled', 'true');
  e.target.closest('button').innerText = 'Booked!'
}




