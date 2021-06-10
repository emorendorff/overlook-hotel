class User {
  constructor(userID) {
    this.userID = userID;
    this.password = 'overlook2021';
    this.totalSpent = 0
    this.isUser = false;
    this.id = 0;
  }

  validateUser(userID) {
    if (userID.startsWith('customer')) {
      this.getIdNumber(userID) 
    }
  }
  getIdNumber(userID) {
    this.id = Number.parseInt(userID.slice(8)) 
    if (this.id > 0 && this.id <= 50) {
      this.isUser = true
    }
  }
}




// use startsWith method to verify customer is the first part of user name
// if so then change isUser to true and then validate number is between 1 and 51
//maybe put that in a seperate function? 
//might need to use....slice?
export default User