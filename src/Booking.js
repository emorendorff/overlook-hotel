import { roomsTest } from "../test/testDataSet";

class Booking {
  constructor(bookingsTest, roomsTest, date) {
    this.rooms = roomsTest;
    this.bookings = bookingsTest;
    this.date = date
    this.roomsAvailable = [];
  }

}


export default Booking