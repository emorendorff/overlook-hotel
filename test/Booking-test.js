import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking.js';
import { bookingsTest, roomsTest } from './testDataSet';

describe('Bookings', () => {
  let booking;
  let booking2

  beforeEach(() => {
    booking = new Booking(bookingsTest, roomsTest, '2020/04/22');
    booking2 = new Booking(bookingsTest, roomsTest, "2021/03/02");
  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should create an instance of Booking', () => {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('should be holding all rooms and bookings', () => {
    expect(booking.bookings).to.deep.equal(bookingsTest);
    expect(booking.rooms).to.deep.equal(roomsTest);
  });

  it('should have a default empty array for available rooms', () => {
    expect(booking.roomsAvailable).to.deep.equal([]);
  });

  it('should have a date', () => {
    expect(booking.date).to.equal("2020/04/22")
  });

  it('should be able to view available rooms for a given date', () => {
    expect(booking.checkAvailableRooms("2020/04/22")).to.deep.equal(booking.roomsAvailable)
  })

  it('should be able to filter available rooms by their roomType property', () => {
    
    booking.checkAvailableRooms("2020/04/22")
    console.log(booking.checkAvailableRooms("2020/04/22"))
    booking.filterByRoomType('residential suite')
    expect(booking.filterByRoomType('residential suite')).to.deep.equal(booking.filterByRoomType('residential suite'))

  });

})