import { expect } from 'chai'
import User from '../src/User.js'

describe('User', () => {
  let user;
  let user2;
  let user3;

  beforeEach(() => {
    user = new User('customer1')
    user2 = new User('customer2')
    user3 = new User('customer3')
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

  it('should have a default value of 0 for totalSpent', () => {
    expect(user2.totalSpent).to.equal(0)
  });

  it('should be able to confirm userID creditentials', () => {
    user2.validateUser('customer2')
    user3.validateUser('goodmoose')

    expect(user2.isUser).to.equal(true)
    expect(user3.isUser).to.equal(false)
  });

})