import { UserForm } from './views/UserForm';

// ! - we now that root exists -> not null
const userForm = new UserForm(document.getElementById('root')!);

userForm.render();
