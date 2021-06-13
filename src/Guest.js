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
    if (this.pastStays === []) {
      return 'You have not stayed with us before'
    } else {
      return this.pastStays
    }
  }

  //   calculateTotalSpent(bookingsTest, roomsTest) {

//   }
}


export default Guest