/* eslint-disable max-len */
import { expect } from 'chai'
import Guest from '../src/Guest.js'
import { bookingsTest, roomsTest, customersTest } from './testDataSet';

describe('Guest', () => {
  let guest;
  let guest2;
  let guest3;

  beforeEach(() => {
    guest = new Guest(customersTest[0])
    guest2 = new Guest(customersTest[1])
    guest3 = new Guest(customersTest[2])
  });

  describe('Guest', () => {
    it.only('should be a function', () => {
      expect(Guest).to.be.a('function');
    });

    it.only('should be an instance of Guest', () => {
      expect(guest).to.be.an.instanceOf(Guest);
    });

    it.only('should have a valid user id', () => {
      expect(guest2.id).to.equal(2);
      expect(guest3.id).to.equal(3);
    });

    it('should have a name', () => {
      expect(guest.name).to.equal('Leatha Ullrich');
      expect(guest2.name).to.equal('Rocio Schuster');
    });

    it('should have no bookings to start', () => {
      expect(guest2.pastStays).to.deep.equal([]);
    });

    it('should be able to find guests past stays', () => {
      guest.getPastStays(bookingsTest);
      expect(guest.pastStays).to.deep.equal([bookingsTest.bookings[4]]);
    });

    it('should return a statement if no prior bookings exist', () => {
      guest3.getPastStays(bookingsTest);
      expect(guest3.getPastStays(bookingsTest)).to.equal('You have not stayed with us before');
    });

    it('should should calculate the total amount spent', () => {
      guest.getPastStays(bookingsTest);
      guest.calculateTotalSpent(roomsTest);
      expect(guest.totalSpent).to.equal(172.09)
    });

    it('should return 0 dollars if guest has no prior bookings', () => {
      guest3.getPastStays(bookingsTest);
      guest3.calculateTotalSpent(roomsTest);
      expect(guest.totalSpent).to.equal(0)
    });

    it('should be able to filter bookings to see future stays', () => {
      guest.getPastStays(bookingsTest);
      guest.filterFutureStays('06/15/2021');
      expect(guest.filterFutureStays('06/20/2021').length).to.deep.equal(1)
    });

    it('should be able to filter by a reservation day of', () => {
      guest2.getPastStays(bookingsTest);
      guest2.filterCurrentStay('06/16/2021');
      expect(guest2.filterCurrentStay('06/16/2021').length).to.deep.equal(1)
    })
  })
})