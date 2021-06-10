import { expect } from 'chai'
import User from '../src/User.js'

describe('User', () => {
  let user;
  let user2;
  let user3;
  let roomSampleData;
  let bookingsSampleData;

  beforeEach(() => {
    user = new User('customer1')
    user2 = new User('customer2')
    user3 = new User('customer3')
    roomSampleData = [
      {
        "number": 1,
        "roomType": "residential suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 358.4
      },
      {
        "number": 2,
        "roomType": "suite",
        "bidet": false,
        "bedSize": "full",
        "numBeds": 2,
        "costPerNight": 477.38
      },
      {
        "number": 3,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "king",
        "numBeds": 1,
        "costPerNight": 491.14
      },
      {
        "number": 4,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 429.44
      }];

    bookingsSampleData = [
      {
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 9,
        "date": "2020/04/22",
        "roomNumber": 15,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t5",
        "userID": 43,
        "date": "2020/01/24",
        "roomNumber": 24,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t6",
        "userID": 13,
        "date": "2020/01/10",
        "roomNumber": 12,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t7",
        "userID": 20,
        "date": "2020/02/16",
        "roomNumber": 7,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t8",
        "userID": 1,
        "date": "2020/02/05",
        "roomNumber": 12,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t9",
        "userID": 38,
        "date": "2020/02/14",
        "roomNumber": 14,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6ta",
        "userID": 25,
        "date": "2020/01/11",
        "roomNumber": 9,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6tb",
        "userID": 49,
        "date": "2020/02/06",
        "roomNumber": 5,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6tc",
        "userID": 22,
        "date": "2020/01/30",
        "roomNumber": 13,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6td",
        "userID": 27,
        "date": "2020/01/31",
        "roomNumber": 20,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6te",
        "userID": 44,
        "date": "2020/01/19",
        "roomNumber": 8,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6tf",
        "userID": 36,
        "date": "2020/01/25",
        "roomNumber": 2,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6tg",
        "userID": 34,
        "date": "2020/02/03",
        "roomNumber": 17,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6th",
        "userID": 19,
        "date": "2020/02/26",
        "roomNumber": 15,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6ti",
        "userID": 6,
        "date": "2020/01/22",
        "roomNumber": 11,
        "roomServiceCharges": []
      }];
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of the class User', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have a username of customer2', () => {
    expect(user2.userID).to.equal('customer2');
  });

  it('should have a default password of overlook2021', () => {
    expect(user2.password).to.equal('overlook2021')
  });

  it.only('should have a default value of 0 for totalSpent', () => {
    expect(user2.totalSpent).to.equal(0)
  });

  it('should be able to confirm userID creditentials', () => {
    user2.validateUser('customer2')
    user3.validateUser('goodmoose')

    expect(user2.isUser).to.equal(true)
    expect(user3.isUser).to.equal(false)
  });

})