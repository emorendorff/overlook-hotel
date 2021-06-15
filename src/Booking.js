
class Booking {
  constructor(bookingsTest, roomsTest) {
    this.rooms = roomsTest;
    this.bookings = bookingsTest;
    // this.date = date
    this.roomsAvailable = [];
  }

  checkAvailableRooms(date) {
    const alreadyBooked = this.bookings.bookings.reduce((acc, booking) => {
      if (booking.date === date) {
        console.log(booking.date)
        acc.push('booking date', booking.roomNumber)
      }
      
      return acc
    }, []);
    console.log('ALREADY BOOKED ROOMS', alreadyBooked)

    const availableRoomNums = this.rooms.rooms.filter(room => !alreadyBooked.includes(room.number))
    this.roomsAvailable = availableRoomNums;
    console.log('AVAILABLE!!', this.roomsAvailable)
    if (this.roomsAvailable.length) {
      return this.roomsAvailable
    } else {
      return "We're so sorry, there are no rooms available for this date."
    }

  }

  filterByRoomType(roomType) {
    if (roomType === 'All Rooms') {
      return this.roomsAvailable
    }
    this.roomsAvailable.filter(room => room.roomType === roomType)

    if (!this.roomsAvailable.length) {
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