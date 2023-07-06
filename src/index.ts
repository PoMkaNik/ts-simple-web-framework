import { User } from './models/User';

const user = new User({ id: 1 });
user.fetch();
setTimeout(() => {
  console.log(user);
  user.set({ name: 'new-new-name-3' });
  console.log(user);
  user.save();
}, 1000);

// const userNew = new User({ name: 'user5', age: 30 });
// userNew.save();

// console.log(userNew);
