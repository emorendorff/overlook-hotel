import User from './User'

class Guest extends User {
  constructor(userID, customersTest) {
    super(userID)
    this.pastStays = [];
    this.currentStays = [];
    this.futureStays = [];
  }
}


export default Guest