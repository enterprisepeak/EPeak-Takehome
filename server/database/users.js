import userJson from './data';

let id = 0;
const userList = userJson.map(user => ({
  ...user,
  id: id++
}));

function delay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const users = {
  async create() {
    /* your code here */
  },
  async read() {
    /* your code here */
  },
  async update() {
    /* your code here */
  },
  async delete() {
    /* your code here */
  },
  search: {
    async field(field, search, limit = 10) {
      // simulate the delay in a database call
      await delay();      
      const values = userList.map(user => user[field]);
      const regexp = new RegExp(search, 'i');
      return values.filter(value => regexp.test(value)).slice(0, limit);
    }
  }
}

export default users;