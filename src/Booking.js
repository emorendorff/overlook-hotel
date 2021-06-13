
class Booking {
  constructor(bookingsTest, roomsTest, date) {
    this.rooms = roomsTest;
    this.bookings = bookingsTest;
    this.date = date
    this.roomsAvailable = [];
  }

  checkAvailableRooms(date) {
    //gonna need a .value for the dom from user calendar
    console.log(date)
    const alreadyBooked = this.bookings.reduce((acc, booking) => {
      if (this.bookings.date === date) {
        acc.push(booking.roomNumber)
      }
      return acc
    }, []);

    const availableRoomNums = this.rooms.filter(room => !alreadyBooked.includes(room.number))
    this.roomsAvailable = availableRoomNums;
    if (this.roomsAvailable.length) {
      return this.roomsAvailable
    } else {
      return "We're so sorry, there are no rooms available for this date."
    }

  }

  filterByRoomType(roomType) {
    if (roomType === 'All') {
      return this.roomsAvailable
    }
    this.roomsAvailable.filter(room => room.roomType === roomType)

    if(!this.roomsAvailable.length) {
        return "We're so sorry, those types of rooms are haunted on this booking date!"
    } else {
        return this.roomsAvailable
    }
   
  }
}


// find available rooms...
// check which ARE booked with data as an argument
// get those into an array then filter against what's included

export default Booking;