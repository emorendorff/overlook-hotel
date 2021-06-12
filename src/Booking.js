import { bookingsTest, roomsTest } from "../test/testDataSet";

class Booking {
  constructor(bookingsTest, roomsTest, date) {
    this.rooms = roomsTest;
    this.bookings = bookingsTest;
    this.date = date
    this.roomsAvailable = [];
  }

  checkAvailableRooms(date) {
    const alreadyBooked = this.bookings.reduce((acc, booking) => {
      if(booking.date === date) {
        acc.push(booking.roomNumber)
      }
      return acc
    }, [])

    console.log(alreadyBooked)

    const availableRoomNums = this.rooms.filter(room => !alreadyBooked.includes(room.number))
    this.roomsAvailable = availableRoomNums;
    console.log(this.roomsAvailable)
  }

}


//find available rooms...
//check which ARE booked with data as an argument
//get those into an array then filter against what's included

export default Booking;