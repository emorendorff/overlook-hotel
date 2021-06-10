class User {
  constructor(userID) {
    this.userID = userID;
    this.password = 'overlook2021';
    this.totalSpent = 0
    this.isUser = false;
  }

  validateUser(userID) {
    
  }
}


// use startsWith method to verify customer is the first part of user name
// if so then change isUser to true and then validate number is between 1 and 51
//maybe put that in a seperate function? 
//might need to use....slice?
export default User