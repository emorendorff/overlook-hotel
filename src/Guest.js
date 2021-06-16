import User from './User'

class Guest {
  constructor(guest) {
    this.id = guest.id;
    this.name = guest.name
    this.password = 'overlook2021';
    this.totalSpent = 0;
    this.pastStays = [];
    this.currentStays = [];
    this.futureStays = [];
  }


  getPastStays(bookingsTest) {
    let past = bookingsTest.bookings.filter(booking => booking.userID === this.id)
    this.pastStays = past
    if (!this.pastStays.length) {
      return 'You have not stayed with us before'
    } else {
      return this.pastStays
    }
  }

  filterFutureStays(currentDate) {
    let future = this.pastStays.filter(booking => booking.date > currentDate)
    if (future) {
      return future;
    } else {
      return 'You don\'t have any upcoming reservations'
    }
  }

  filterCurrentStay(currentDate) {
    let currentStay = this.pastStays.filter(booking => booking.date === currentDate)
    if (currentStay) {
      return currentStay
    } else {
      return 'No reservations today'
    }
  }

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