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
    const past = bookingsTest.filter(booking => booking.userID === this.id)
    console.log(past)
    this.pastStays = past;
    console.log(this.pastStays)
    return past;
  }

  //   calculateTotalSpent(bookingsTest, roomsTest) {

//   }
}


export default Guest