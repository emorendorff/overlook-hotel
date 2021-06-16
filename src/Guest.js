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
    // this.validateUser(this.userID)
    let past = bookingsTest.bookings.filter(booking => booking.userID === this.id)
    
    this.pastStays = past
    if (!this.pastStays.length) {
      return 'You have not stayed with us before'
    } else {
      return this.pastStays
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