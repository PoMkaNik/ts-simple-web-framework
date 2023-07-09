import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'NAME', age: 20 });
const root = document.getElementById('root');
// if or ! @end - we now that root exists -> not null
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error('Root element not found');
}
