class User {
    constructor(userID) {
      this.userID = userID;
      this.password = 'overlook2021';
      this.isUser = false;
      this.totalSpent = 0;
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
  
  export default User
  