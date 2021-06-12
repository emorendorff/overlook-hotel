import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking.js';
import { bookingsTest, roomsTest } from './testDataSet';

describe('Bookings', () => {
  let booking1;

  beforeEach(() => {
    booking1 = new Booking(bookingInfo, roomInfo)
  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should create an instance of Booking', () => {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('should have hold all rooms and bookings', () => {
      expect(booking.bookings).to.deep.equal(bookingInfo);
      expect(booking.rooms).to.deep.equal(roomInfo);
  });

  it('should have a default empty array for available rooms', () => {
      expect(booking.roomsAvailable).to.deep.equal([]);
  });

  it('should be able to view available rooms for a given date', () => {

  })

  it('should tell a user if no rooms are available for that specific date', () => {

  });

  it('should be able to filter available rooms by their roomType property', () => {

  });

  it('should fiercely apologize to the user if a specific roomType is not available for that day', () => {

  });


})