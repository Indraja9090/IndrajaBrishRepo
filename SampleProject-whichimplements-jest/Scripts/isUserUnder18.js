function filterAdults(users) {
    return users.filter(user => user.age >= 18);
  }
  module.exports = filterAdults;