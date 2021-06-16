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

    it('should have a valid user id', () => {
      expect(guest2.id).to.equal(2);
    });

    it('should have a name', () => {
      expect(guest.name).to.equal('Leatha Ullrich');
      expect(guest2.name).to.equal('Rocio Schuster');
    })

    it('should have no bookings to start', () => {
      expect(guest2.pastStays).to.deep.equal([]);
      expect(guest2.currentStays).to.deep.equal([]);
      expect(guest2.futureStays).to.deep.equal([]);
    });

    it.only('should be able to find guests past stays', () => {
      guest.validateUser('customer1');
      guest.getPastStays(bookingsTest);
      expect(guest.pastStays).to.deep.equal([bookingsTest[4]]);
    });

    it('should return a statement if no prior bookings exist', () => {
      guest3.validateUser('customer3');
      guest3.getPastStays(bookingsTest);
      expect(guest3.getPastStays(bookingsTest)).to.equal('You have not stayed with us before');
    });

    it.only('should should calculate the total amount spent', () => {
      guest.validateUser('customer1')
      guest.getPastStays(bookingsTest);
      guest.calculateTotalSpent(roomsTest);
      expect(guest.totalSpent).to.equal(172.09)
    })

    

  })
})