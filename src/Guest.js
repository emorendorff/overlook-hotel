import User from './User'

class Guest {
  constructor(guest) {
    this.id = guest.id;
    this.name = guest.name
    this.password = 'overlook2021';
    this.isUser = false;
    this.totalSpent = 0;
    this.pastStays = [];
    this.currentStays = [];
    this.futureStays = [];
  }

  // validateUser(username) {
  //   if (username.startsWith('customer')) {
  //     this.getIdNumber(username) 
  //   }
  // }
  // getIdNumber(username) {
  //   this.id = Number.parseInt(username.slice(8)) 
  //   if (this.id > 0 && this.id <= 50) {
  //     this.isUser = true
  //   }
  // }

  getPastStays(bookingsTest) {
    let past = bookingsTest.bookings.filter(booking => booking.userID === this.id)
    this.pastStays = past
    if (!this.pastStays.length) {
      return 'You have not stayed with us before'
    } else {
      return this.pastStays
    }
  }

  filterFutureStays(bookingsTest, currentDate) {
    let future = bookingsTest.bookings.filter(booking => {
      if (booking.date > currentDate) {
        this.pastStays = future
        return this.pastStays 
      } else {
        return 'You don\'t have any stays coming up'
      }
    })
  }

  filterCurrentStay(bookingsTest, currentDate) {
    let currentStay = bookingsTest.bookings.filter(booking => {
      if (booking.date === currentDate) {
        this.pastStays = currentStay
        return this.pastStays
      } else {
        return 'No reservations today'
      }
    })
  }



  // filterByRoomType(roomType) {
  //   console.log('room type', roomType)

  //   if (roomType === 'All Rooms') {
  //     return this.roomsAvailable
  //   }
  //   console.log('rooms available', this.roomsAvailable)
  //   let filteredRooms = this.roomsAvailable.filter(room => room.roomType === roomType)
  //   console.log('filtered rooms', filteredRooms)
  //   if (!filteredRooms.length) {
  //     return "We're so sorry, those types of rooms are haunted on this booking date!"
  //   } else {
  //     return filteredRooms
  //   }
   
  // }



  calculateTotalSpent(roomsTest) {
    this.totalSpent = roomsTest.rooms.reduce((sum, room) => {
      this.pastStays.forEach(booking => {
        if (booking.roomNumber === room.number) {
          sum += room.costPerNight
        }
      })
      return sum
    }, 0);
    let fixedNum = Number((this.totalSpent).toFixed(2))
    this.totalSpent = fixedNum
    return this.totalSpent
  }
}


export default Guest