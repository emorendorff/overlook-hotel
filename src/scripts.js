//----------Imports--------------//
import './css/index.scss';
import fetchcalls from './fetchcalls';
import Guest from './Guest';
import Booking from './Booking';
import User from './User';
let dayjs = require('dayjs');
import './images/axe.png'

//-----Globals(mr worldwide)---//
let loginNumber, rooms, bookings, customers, oneGuest1, oneGuest, bookingsInstances;
let currentDate = dayjs(new Date()).format('YYYY/MM/DD');


//-------Query Selectors-------//
const userNameDisplay = document.getElementById('userNameDisplay');
const logOutBtn = document.getElementById('logoutBtn');
const checkAvailabilityBtn = document.getElementById('checkAvailabilityBtn');
const oldBookings = document.getElementById('oldBookings');
const totalAmount = document.getElementById('totalAmount');
const calendarStart = document.getElementById('startDate');
const roomsAvailable = document.getElementById('roomsAvailable');
const roomTypeFilter = document.getElementById('roomTypeFilter');
const searchByTypeSubmitBtn = document.getElementById('searchByTypeSubmitBtn');
const bookRoomBtn = document.getElementsByClassName('book-room-btn');
const navigation = document.getElementById('navigation');
const mainPage = document.getElementById('mainPage');
const loginForm = document.getElementById('login-form');
const usernameField = document.getElementById('usernameField');
const passwordField = document.getElementById('passwordField');
const loginHeader = document.getElementById('login-header');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-error-msg');
const subHeaderLogin = document.getElementById('subHeaderLogin');
const reservationType = document.getElementById('reservationType');
const searchByStayBtn = document.getElementById('searchByStayBtn');
const loginContainer = document.getElementById('loginContainer');
calendarStart.setAttribute('min', currentDate)
//-------------event listenters-----------------//
window.onload = fetchAllData(), displayLogin();

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  validateUser(username)
  validatePassword(password)

  if (validateUser(username) === true && validatePassword(password) === true) {
    fetchSingleGuest()
    displayGuestPage()
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

checkAvailabilityBtn.addEventListener('click', () => 
  displayAvailableRooms());

searchByTypeSubmitBtn.addEventListener('click', () => searchRoomType());

searchByStayBtn.addEventListener('click', () => searchStays());

roomsAvailable.addEventListener('click', (e) => {
  if (e.target.closest('button')) {
    bookRoom(e)
  }
});

logOutBtn.addEventListener('click', () => location.reload())

window.addEventListener('click', function (event) {
  console.log("eventTest", event.target)
});

//--------------functions---------------//

function validateUser(username) {
  if (username.startsWith('customer')) {
    loginNumber = Number.parseInt(username.slice(8))
  }
  if (loginNumber > 0 && loginNumber <= 50) {
    return true
  }
}

function validatePassword(password) {
  if (password === 'overlook2021') {
    return true
  } else {
    return false
  }
}

function fetchSingleGuest() {
  oneGuest = fetchcalls.fetchOneGuest(loginNumber);
  return Promise.all([oneGuest])
    .then(data => {
      instantiateNewGuest(data[0]);
      displayName(oneGuest1);
      displayPastStays(oneGuest1);
      displayTotalAmount(oneGuest1);
    })
}

export function fetchAllData() {
  customers = fetchcalls.fetchGuestData();
  bookings = fetchcalls.fetchBookingsData();
  rooms = fetchcalls.fetchRoomsData();
  return Promise.all([customers, bookings, rooms])
    .then(data => {
      createInstances(data[0], data[1], data[2]);
      displayPastStays(oneGuest1)
      displayTotalAmount(oneGuest1)
    })
}


function createInstances(customers, bookings, rooms) {
  bookingsInstances = new Booking(bookings, rooms)
}

function instantiateNewGuest(oneGuest) {
  oneGuest1 = new Guest(oneGuest)
}

function hide(elements) {
  elements.forEach(element => element.classList.add('hidden'));
}

function show(elements) {
  elements.forEach(element => element.classList.remove('hidden'));
}

function displayGuestPage() {
  show([mainPage, navigation])
  hide([loginContainer])
}

function displayLogin() {
  hide([mainPage, navigation])
}


function displayName(oneGuest1) {
  const guestName = document.querySelector('.userNameDisplay')
  guestName.innerText = `Welcome ${oneGuest1.name}!`;
}

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

function searchStays() {
  let reservationType1 = reservationType.value;
  console.log('reservation', reservationType1)
  if (reservationType1 === 'all stays') {
    displayPastStays(oneGuest1);
  } else if (reservationType1 === 'current stay') {
    let staySearch = oneGuest1.filterCurrentStay(currentDate) 
    displayCurrent()
    console.log(staySearch)
  } else if (reservationType1 === 'future stays') {
    displayFuture();
  }
}

function displayFuture() {
  let futureSearch = oneGuest1.filterFutureStays(currentDate) 
  oldBookings.innerHTML = '';
  if (!futureSearch.length) {
    oldBookings.insertAdjacentHTML ('beforeend', `<p class="history">'You don\'t have any upcoming reservations'</p>`);
  } else {
    futureSearch.forEach(booking => {
      oldBookings.insertAdjacentHTML('beforeend', `
        <ul class='begin-previous-stays'>
          <li class="history">${booking.date} in room ${booking.roomNumber}</li>
        </ul>`)   
    });
  }
}

function displayCurrent() {
  let staySearch = oneGuest1.filterCurrentStay(currentDate) 
  oldBookings.innerHTML = '';
  if (!staySearch.length) {
    oldBookings.insertAdjacentHTML ('beforeend', `<p class="history">'No reservations today'</p>`);
  } else {
    staySearch.forEach(booking => {
      oldBookings.insertAdjacentHTML('beforeend', `
        <ul class='begin-previous-stays'>
          <li class="history">${booking.date} in room ${booking.roomNumber}</li>
        </ul>`)   
    });
  }
}

function bookRoom(e) {
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