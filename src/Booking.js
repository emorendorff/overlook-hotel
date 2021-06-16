
class Booking {
  constructor(bookingsTest, roomsTest) {
    this.rooms = roomsTest;
    this.bookings = bookingsTest;
    this.roomsAvailable = [];
  }

  checkAvailableRooms(date) {
    const alreadyBooked = this.bookings.bookings.reduce((acc, booking) => {
      if (booking.date === date) {
        acc.push('booking date', booking.roomNumber)
      }
      
      return acc
    }, []);

    const availableRoomNums = this.rooms.rooms.filter(room => !alreadyBooked.includes(room.number))
    this.roomsAvailable = availableRoomNums;
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
    let filteredRooms = this.roomsAvailable.filter(room => room.roomType === roomType)
    console.log('filtered rooms', filteredRooms)
    if (!filteredRooms.length) {
      return "We're so sorry, those types of rooms are haunted on this booking date!"
    } else {
      return filteredRooms
    }
   
  }
}

export default Booking;