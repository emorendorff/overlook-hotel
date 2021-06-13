import { expect } from 'chai'
import Guest from '../src/Guest.js'
import { bookingsTest, roomsTest, customersTest } from './testDataSet';

describe('Guest', () => {
  let guest;
  let guest2;
  let guest3;

  beforeEach(() => {
    guest = new Guest('customer1', customersTest)
    guest2 = new Guest('customer2', customersTest)
    guest3 = new Guest()
  })
})