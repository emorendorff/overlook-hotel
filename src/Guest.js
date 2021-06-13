import User from './User'

class Guest extends User {
  constructor(userID) {
    super(userID)
    this.pastStays = [];
    this.currentStays = [];
    this.futureStays = [];
  }

  getPastStays(bookingsTest) {
    this.validateUser(this.userID)
    let past = bookingsTest.filter(booking => booking.userID === this.id)
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