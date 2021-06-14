import User from './User'

class Guest {
  constructor(guest) {
    this.id = guest.id;
    this.name = guest.name
    this.password = 'overlook2021';
    this.isUser = false;
    this.totalSpent = 0;
    // this.id = 0;
    this.pastStays = [];
    this.currentStays = [];
    this.futureStays = [];
  }

  // validateUser(userID) {
  //   if (userID.startsWith('customer')) {
  //     this.getIdNumber(userID) 
  //   }
  // }
  // getIdNumber(userID) {
  //   this.id = Number.parseInt(userID.slice(8)) 
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
    this.totalSpent = roomsTest.reduce((sum, room) => {
      this.pastStays.forEach(booking => {
        if (booking.roomNumber === room.number) {
          sum += room.costPerNight
        }
      })
      return sum
    }, 0);
    return this.totalSpent
  }
}


export default Guest