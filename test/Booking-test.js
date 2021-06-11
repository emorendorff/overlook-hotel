import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking.js';
import { bookingsTest, roomsTest } from './testDataSet';

describe('Bookings', () => {
    let booking;

    beforeEach(() => {
        booking1 = new Booking(bookingInfo)
    })

    it('should be a function', () => {
        expect(Booking).to.be.a('function');
    });

    it('should create an instance of Booking', () => {
        expect(booking).to.be.an.instanceOf(Booking);
    })
})